import { Effect, Layer, Context, Scope, pipe } from "@neo4j-cc/prelude"

import { acquireDriver, LiveCypherService, Neo4jDbmsError, Neo4jConnectionArgs, neo4jDriverResource, releaseDriver } from './cypher.live';
import neo4j from 'neo4j-driver'

const localDriverArgs:Neo4jConnectionArgs = {
  url:'neo4j://localhost:7687', 
  authToken:neo4j.auth.basic('neo4j', 'marwhompa'),
  options: {}
}

describe("cypher", () => {

  let cypher: LiveCypherService;

  beforeAll(() => {
    cypher = new LiveCypherService();
  })

  afterAll(() => {
    cypher.shutdown();
  })

  it("can read", async () => {
    const result = await cypher.read({statement:'RETURN "hello" as msg'});
    // console.log(result)
    expect(result.length).toBe(1);
    expect(result[0].get("msg")).toBe("hello")
  })
})

describe("cypher fx", () => {
  it("acquire driver works", async () => {
    const driver = await Effect.unsafeRunPromise(
      acquireDriver(localDriverArgs)
    )
    expect(driver).toBeDefined()
  })
  it("acquire driver can fail", async () => {
    const result = await pipe(
      acquireDriver(localDriverArgs),
      Effect.map( (_) => "unexpected driver success"),
      Effect.catchTag("Neo4jDbmsError", () => Effect.succeed("expected driver failure")),
      Effect.unsafeRunPromise
    )
    expect(result).toBe("expected driver failure")
  })
  it("releases an acquired driver", async () => {
    const result = await pipe(
      acquireDriver(localDriverArgs),
      Effect.flatMap( (driver) => releaseDriver(driver) ),
      Effect.unsafeRunPromise
    )
  })
  it("acts as a scoped resource", async () => {
    const useNeo4jDriverResource = pipe(
      neo4jDriverResource(localDriverArgs),
      Effect.flatMap( driver => Effect.succeed(driver)),
      Effect.scoped
    );
    
  })
})
