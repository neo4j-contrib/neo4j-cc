import { Effect, Layer, Context, Scope, pipe } from "@neo4j-cc/prelude"

import neo4j, { AuthToken, Config as Neo4jDriverConfig, Driver as Neo4jDriver, hasReachableServer, Node, Relationship } from 'neo4j-driver'


export class CypherError {
  readonly _tag = "CypherError";
  constructor(readonly error: unknown) {}
}

export class Neo4jDbmsError {
  readonly _tag = "Neo4jDbmsError";
  constructor(readonly error: unknown) {}
}

export interface Neo4jConnectionArgs {
  url: string,
  authToken: AuthToken
  options: Neo4jDriverConfig
}

export interface CypherConnector {
  read: () => Effect.Effect<never, never, void>
}

export class LiveCypherService {

  driver: Neo4jDriver;
  
  constructor() {
    this.driver = neo4j.driver(
      'neo4j://localhost:7687',
      neo4j.auth.basic('neo4j', 'marwhompa')
    )
  }

  shutdown = () => this.driver.close()

  requestFx = <ArgRecord, RequestResult>(fetch:(input: ArgRecord, init: RequestInit | undefined) => Promise<RequestResult>, input:ArgRecord) => {
    return Effect.tryCatchPromise(
      () => fetch(input, undefined),
      (error) => new CypherError(error)
    )
  }
  
  read = async (query:{statement:string}) => {
    const session = this.driver.session()
  
    let result = undefined;

    try {
      // Execute a Cypher statement in a Read Transaction
      const res = await session.executeRead(tx => tx.run(query.statement)
      , { })
  
      result = res.records
  
    }
    finally {
      // Close the Session
      await session.close()
    }
    return result;
  }
  
}

export const acquireDriver = ({url,authToken, options}:Neo4jConnectionArgs) => pipe(
  Effect.tryCatchPromise(() => hasReachableServer(url), (error) => new Neo4jDbmsError(error)),
  Effect.map( () => neo4j.driver(
    url, authToken, options
  ))
)

export const releaseDriver = (neo4jDriver: Neo4jDriver) => Effect.promise(
  () => neo4jDriver.close()
)

export const neo4jDriverResource = (args:Neo4jConnectionArgs):Effect.Effect<Scope.Scope, Neo4jDbmsError, Neo4jDriver> =>
  Effect.acquireRelease(
    acquireDriver(args),
    releaseDriver
  );

