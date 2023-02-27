import * as Effect from '@effect-ts/core/Effect';
import * as Ex from '@effect-ts/system/Exit';
import { pipe } from '@effect-ts/core/Function';

import {
  connectToNeo4j,
  createNeo4jDriver,
  localhostWithPassword,
  queryGraph,
} from './cypher-layer';

import { auth as Neo4jAuth } from 'neo4j-driver';

describe('CypherLayer', () => {
  describe('neo4j driver effects (require local Neo4j DBMS)', () => {
    it('can create a normal Neo4j driver', async () => {
      const { driver } = await createNeo4jDriver({
        url: 'neo4j://localhost:7687',
        auth: Neo4jAuth.basic('neo4j', 'marwhompa'),
      });
      const session = driver.session();
      let leakedResult = null;
      await session.readTransaction((tx) => {
        const params = {};
        tx.run('RETURN true', params)
          .then((queryResult) => {
            leakedResult = queryResult;
            // console.log(leakedResult)
          })
          .catch((error) => {
            console.log(error);
          });
      });
      driver.close();
      expect(leakedResult).toBeDefined();
    });

    it('captures invalid cypher in error channel', async () => {
      const { driver } = await createNeo4jDriver({
        url: 'neo4j://localhost:7687',
        auth: Neo4jAuth.basic('neo4j', 'marwhompa'),
      });
      const localQuery = queryGraph(driver)('neo4j');

      expect(pipe(localQuery('INVALID CYPHER'), Effect.isFailure)).toBeTruthy();

      const badCypher = pipe(
        localQuery('THIS IS NOT VALID CYPHER'),
        // the error channel should have a Neo4jQueryFailure
        // which can be matched with a '_tag' property.
        // Catch the error and map to success using the Neo4jError code.
        Effect.catch('_tag', 'Neo4jQueryFailure', (e) => Effect.succeed(e.code))
      );
      expect(await Effect.runPromise(badCypher)).toEqual(
        'Neo.ClientError.Statement.SyntaxError'
      );

      driver.close(); // cleanup!
    });
    it('can connect effectfully', async () => {
      const fxDriver = pipe(
        connectToNeo4j({
          url: 'neo4j://localhost:7687',
          auth: Neo4jAuth.basic('neo4j', 'marwhompa'),
        }),
        Effect.isSuccess
      );
      expect(await Effect.runPromise(fxDriver)).toBeTruthy();
    });
    it('should fail on bad connection string', async () => {
      const fxDriver = pipe(
        connectToNeo4j({
          url: 'this is not a valid connection string',
          auth: Neo4jAuth.basic('neo4j', 'marwhompa'),
        }),
        Effect.catch('_tag', 'Neo4jDriverFailure', (e) =>
          Effect.succeed(e.message)
        )
      );
      expect(await Effect.runPromise(fxDriver)).toEqual(
        'Error: Unknown scheme: null'
      );
    });

    it('should fail on bad port', async () => {
      const fxDriver = pipe(
        connectToNeo4j({
          url: 'neo4j://localhost:1234',
          auth: Neo4jAuth.basic('neo4j', 'marwhompa'),
        }),
        Effect.catch('_tag', 'Neo4jDriverFailure', (e) =>
          Effect.succeed(e.message)
        )
      );
      expect(await Effect.runPromise(fxDriver)).toEqual(
        'Error: Unknown scheme: null'
      );
    });
  });
});
