import { pipe, Chunk, Option, Either, Effect, Order, ParseResult as PR, HashMap } from '@neo4j-cc/prelude';

import * as jetpack from 'fs-jetpack';

import {
  dedupeBySsoId,
  decodeAuthor,
  compareNumbers,
  sortItemsByMessageDepth,
  decodeKudo,
} from './khoros-schemas';

import authorsWithDuplicates from './khoros-authors-with-duplicates.json';

import khorosMessages from './khoros-messages.json';

import khorosKudos from './khoros-kudos.json';

import { Item } from './generated';

describe('KhorosAuthor', () => {
  it('dedupes by sso_id', () => {
    const dedupedAuthors = pipe(
      authorsWithDuplicates,
      Chunk.fromIterable,
      Chunk.map(decodeAuthor),
      Chunk.filter(PR.isSuccess),
      Chunk.map((pe) => pe.right),
      dedupeBySsoId
    );
    expect(dedupedAuthors.length).toBeLessThan(authorsWithDuplicates.length);
  });
});

describe('ordering', () => {
  it('order numbers', () => {
    const jumbledNumbers = [4, 3, 5, 2, 1, 6];
    const expectedOrder = [1, 2, 3, 4, 5, 6];
    const sortedNumbers = pipe(
      Chunk.fromIterable(jumbledNumbers),
      Chunk.sort(Order.number),
      Chunk.toReadonlyArray
    );
    expect(sortedNumbers).toStrictEqual(expectedOrder);
  });
});

describe('Khoros messages', () => {
  it('Set or update MutableHashMap', () => {
    const testMap = HashMap.empty();

    const result = pipe(
      testMap,
      HashMap.set('c', 'See'),
      HashMap.modifyAt('c', (v: Option.Option<string>) =>
        Option.some(
          pipe(
            v,
            Option.match(
              () => 'NoSee',
              (previous) => `${previous}!`
            )
          )
        )
      ),
      HashMap.get('c')
    );
    expect(Option.isSome(result));
    expect(Option.getOrNull(result)).toBe('See!');
  });
  it('can be rethreaded', () => {
    const dirContext = jetpack.dir('exports/tmp');

    const threadedMessages = pipe(
      Chunk.fromIterable(khorosMessages),
      Chunk.map((x) => x as unknown as Item),
      sortItemsByMessageDepth,
      Chunk.reduce(HashMap.empty<string, Chunk.Chunk<Item>>(), (m, item) =>
        pipe(
          m,
          HashMap.modifyAt(
            item.topic?.id || '-1',
            (v: Option.Option<Chunk.Chunk<string>>) =>
              Option.some(
                pipe(
                  v,
                  Option.match(
                    () => Chunk.of(item),
                    (c) => Chunk.append(item)(c)
                  )
                )
              )
          )
        )
      )
    );
    const threadedRecord = pipe(
      threadedMessages,
      HashMap.reduceWithIndex(
        {} as Record<string, Item[]>,
        (a, v, k) =>
          ({ ...a, [k]: Chunk.toReadonlyArray(v) } as Record<string, Item[]>)
      )
    );
    // console.log(Chunk.toReadonlyArray(threadCounts));
    const filePath = 'threaded-messages.json';
    dirContext.write(filePath, threadedRecord);

    expect(threadedMessages).toBeDefined();
  });
});

describe('KhorosKudos', () => {
  it('decodes', async () => {
    const result = await pipe(
      Chunk.fromIterable(khorosKudos.data.items),
      Chunk.map(decodeKudo),
      Effect.forEach((pr) =>
        PR.isSuccess(pr) ? Effect.succeed(pr.right) : Effect.fail(pr.left[0])
      ),
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    }
    expect(Either.isRight(result));
  });
});
