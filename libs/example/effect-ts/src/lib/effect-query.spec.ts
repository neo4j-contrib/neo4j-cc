import { pipe, Effect, ReadonlyArray } from '@neo4j-cc/prelude';

import * as Query from '@effect/query/Query';

import { getAllUserNames } from './effect-query';

describe('Effect Query', () => {
  it('works', async () => {
    const program = Effect.gen(function* ($) {
      const query = pipe(getAllUserNames, Query.maxBatchSize(3));
      return yield* $(Query.run(query));
    });

    const result = await Effect.runPromise(program);
    expect(result).toStrictEqual(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])
  });
});
