import * as Effect from '@effect-ts/core/Effect';
import * as M from '@effect-ts/core/Effect/Managed';

import { pipe } from '@effect-ts/core/Function';
import { DatabaseLayer, DatabaseTag } from './example-layer';

describe('Neo4j Query', () => {
  it('https://dev.to/matechs/the-effect-data-types-managed-layer-4722', async () => {
    const program = pipe(
      Effect.accessService(DatabaseTag)(({ get, put }) => ({ get, put })),
      Effect.chain(({ get, put }) =>
        pipe(
          Effect.do,
          Effect.tap(() => put('ka', 'a')),
          Effect.tap(() => put('kb', 'b')),
          Effect.tap(() => put('kc', 'c')),
          Effect.bind('a', () => get('ka')),
          Effect.bind('b', () => get('kb')),
          Effect.bind('c', () => get('kc')),
          Effect.map(({ a, b, c }) => `${a}-${b}-${c}`)
        )
      )
    );
    const result = await pipe(
      program,
      Effect.chain((s) =>
        Effect.succeedWith(() => {
          console.log(`Done: ${s}`);
          return s;
        })
      ),
      Effect.provideSomeLayer(DatabaseLayer),
      Effect.runPromise
    );
    expect(result).toBe('a-b-c');
  });
});
