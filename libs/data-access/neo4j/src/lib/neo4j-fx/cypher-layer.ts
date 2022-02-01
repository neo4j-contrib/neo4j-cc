import * as Effect from '@effect-ts/core/Effect';
import * as M from '@effect-ts/core/Effect/Managed';
import * as L from '@effect-ts/core/Effect/Layer';
import * as Ref from '@effect-ts/core/Effect/Ref';
import * as Map from '@effect-ts/core/Collections/Immutable/Map';

import { tag } from '@effect-ts/system/Has';
import { pipe } from '@effect-ts/core/Function';

import neo4j, {
  AuthToken as Neo4jAuthToken,
  Config as Neo4jDriverConfig,
  Driver,
  QueryResult,
  ServerInfo,
} from 'neo4j-driver';
import {
  GENERIC_ERROR_CODE,
  isError,
  isNeo4jError,
  Neo4jDriverFailure,
  Neo4jQueryFailure,
  THROWABLE_CODE,
  UNSPECIFIED_NEO4J_ERROR_CODE,
} from './neo4j-errors';

export interface QueryableGraph {
  readonly query: (
    cypher: string
  ) => Effect.IO<Neo4jQueryFailure | unknown, QueryResult>;
}

export const CypherLayerID = Symbol();
export const CypherLayerTag = tag<QueryableGraph>(CypherLayerID);

export const MockGraphLayer = pipe(
  Ref.makeRef(<Map.Map<string, QueryResult>>Map.empty),
  Effect.chain(
    (ref) =>
      // randomly fail/succeed (Math.round(Math.random()) === 0)
      Effect.succeedWith(
        (): QueryableGraph => ({
          query: (cypher) =>
            pipe(
              ref.get,
              Effect.map(Map.lookup(cypher)),
              Effect.chain(Effect.getOrFail)
            ),
        })
      )
    // : Effect.failWith(() => Error("failed"))
  ),
  M.make((_) => Effect.succeedWith(() => true)),
  L.fromManaged(CypherLayerTag)
);

export interface Neo4jDriverParameters {
  /** Connection url indicating host port and scheme, like `neo4j://localhost:7687` */
  url: string;
  auth: Neo4jAuthToken;
  config?: Neo4jDriverConfig;
}

export interface Neo4jDBMS {
  driver: Driver;
  server: ServerInfo;
}

/**
 *
 * @param params connection details, authentication and configuration
 * @returns
 */
export const createNeo4jDriver = (
  params: Neo4jDriverParameters
): Promise<Neo4jDBMS> => {
  const driver = neo4j.driver(params.url, params.auth, params.config);
  return driver.verifyConnectivity().then((server) => {
    return {
      driver,
      server,
    };
  });
};

/**
 * Convenience function for the common usecase of connecting to
 * localhost, on the standard port, as user 'neo4j' and with the
 * provided password.
 *
 * @param password
 * @returns
 */
export const localhostWithPassword = (password: string) =>
  createNeo4jDriver({
    url: 'neo4j://localhost:7687',
    auth: neo4j.auth.basic('neo4j', password),
  });

export const queryGraph =
  (driver: Driver) => (graph: string) => (cypher: string) => {
    return Effect.tryCatchPromise(
      () =>
        driver.session({ database: graph }).writeTransaction((tx) => {
          return tx.run(cypher);
        }),
      (e) =>
        isNeo4jError(e)
          ? new Neo4jQueryFailure(
              e.message,
              e.code || UNSPECIFIED_NEO4J_ERROR_CODE
            )
          : new Neo4jQueryFailure(`${String(e)}`, UNSPECIFIED_NEO4J_ERROR_CODE)
    );
  };

export const connectToNeo4j = (params: Neo4jDriverParameters) =>
  pipe(
    Effect.tryCatchPromise(
      () => createNeo4jDriver(params),
      (e) =>
        isNeo4jError(e)
          ? new Neo4jDriverFailure(
              e.message,
              e.code || UNSPECIFIED_NEO4J_ERROR_CODE
            )
          : isError(e)
          ? new Neo4jDriverFailure(
              `${e.name}: ${e.message}`,
              GENERIC_ERROR_CODE
            )
          : new Neo4jDriverFailure(`${String(e)}`, THROWABLE_CODE)
    )
  );

export const Neo4jGraphLayer = (params: Neo4jDriverParameters) =>
  pipe(
    connectToNeo4j(params),
    Effect.map((dbms) => ({
      ...dbms,
      query: (cypher: string) => pipe(cypher, queryGraph(dbms.driver)('neo4j')),
    })),
    M.make((_) => Effect.promise(() => _.driver.close())),
    L.fromManaged(CypherLayerTag)
  );
