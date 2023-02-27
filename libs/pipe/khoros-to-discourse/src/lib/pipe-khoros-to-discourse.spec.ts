import { pipe, Effect, Chunk, Option, ReadonlyArray, ParseResult as PR } from '@neo4j-cc/prelude';

import {
  KhorosAuthor,
  decodeAuthor,
  dedupeBySsoId,
  KhorosMessage,
  decodeMessage,
  decodeBoard,
} from '@neo4j-cc/access-khoros';

import {
  khorosBoardIdToDiscourseCategorySlug,
  khorosToSsoUserDetails,
  khorosToDiscourseTopic,
} from './pipe-khoros-to-discourse';

import { decodeCategory, isSsoUserDetails } from '@neo4j-cc/access-discourse';

import khorosAuthors from './khoros-authors.json';
import khorosAuthorsWithDuplicates from './khoros-authors-with-duplicates.json';
import khorosTopics from './khoros-topics.json';
import khorosMessages from './khoros-messages.json';

import khorosBoards from './khoros-boards.json';
import discourseCategories from './discourse-categories.json';

const expectChunksOfSuccess = Chunk.every(PR.isSuccess);

describe('Khoros Authors', () => {
  const debugAuthors = (
    parsedAuthors: Chunk.Chunk<PR.ParseResult<KhorosAuthor>>
  ) =>
    pipe(
      parsedAuthors,
      Chunk.filter(PR.isFailure),
      Chunk.map((failedAuthor) => Chunk.fromIterable(failedAuthor.left)),
      Chunk.flatten,
      Chunk.dedupe,
      Chunk.forEach((pe) => console.error(pe))
    );

  it('should decode the sample set', () => {
    const allCompliant = pipe(
      Chunk.fromIterable(khorosAuthors),
      Chunk.map(decodeAuthor),
      expectChunksOfSuccess
      // debugAuthors
    );
    expect(allCompliant).toBeTruthy();
  });

  it('should dedupe entries', () => {
    const deduped = pipe(
      Chunk.fromIterable(khorosAuthorsWithDuplicates),
      Chunk.map(decodeAuthor),
      Chunk.filter(PR.isSuccess),
      Chunk.map((pe) => pe.right),
      dedupeBySsoId
    );
    expect(deduped.length).toBeLessThan(khorosAuthorsWithDuplicates.length);
  });

  it('should transform so SsoUserDetails needed for sso_sync', () => {
    const allCompliant = pipe(
      Chunk.fromIterable(khorosAuthors),
      Chunk.map(decodeAuthor),
      Chunk.filter(PR.isSuccess),
      Chunk.map((pe) => pe.right),
      dedupeBySsoId,
      Chunk.map(khorosToSsoUserDetails),
      Chunk.every(isSsoUserDetails)
    );
    expect(allCompliant).toBeTruthy();
  });
});

describe('Khoros Messages', () => {
  const debugMessageFailures = (
    parsedMessages: Chunk.Chunk<PR.ParseResult<KhorosMessage>>
  ) =>
    pipe(
      parsedMessages,
      Chunk.filter(PR.isFailure),
      Chunk.map((failedMessage) => Chunk.fromIterable(failedMessage.left)),
      Chunk.flatten,
      Chunk.dedupe,
      Chunk.forEach((pe) => console.error(pe))
    );

  it('should decode the sample topics', async () => {
    const allCompliant = pipe(
      Chunk.fromIterable(khorosTopics),
      Chunk.map(decodeMessage),
      expectChunksOfSuccess
      // debugMessageFailures
    );
    expect(allCompliant).toBeTruthy();
  });

  it('should decode the sample messages', async () => {
    const allCompliant = pipe(
      Chunk.fromIterable(khorosMessages),
      Chunk.map(decodeMessage),
      expectChunksOfSuccess
      // debugMessageFailures
    );
    expect(allCompliant).toBeTruthy();
  });

  it('should transform sample messages into Discourse posts', async () => {
    const result = await pipe(
      Chunk.fromIterable(khorosTopics),
      Chunk.map(decodeMessage),
      Chunk.filter(PR.isSuccess),
      Chunk.map((x) => x.right),
      Effect.forEach((message) =>
        khorosToDiscourseTopic(message, Option.some(10), [
          'test',
          'delete-me',
          'from-khoros',
        ])
      ),
      Effect.runPromise
    );
    // console.log(JSON.stringify(Chunk.toReadonlyArray(result)));
    expect(result.length).toBe(khorosTopics.length);
  });
});

describe('Categories and Boards', () => {
  it('should board.id for each khoros board', async () => {
    const result = pipe(
      khorosBoards,
      Chunk.fromIterable,
      Chunk.map(decodeBoard),
      // Chunk.every(PR.isSuccess),
      Chunk.filter(PR.isSuccess),
      Chunk.map((pr) => pr.right.id)
    );
    // console.log("boards", Chunk.toReadonlyArray(result))
    expect(result).toBeTruthy();
  });
  it('should category.slug for each discourse category', async () => {
    const result = pipe(
      discourseCategories,
      Chunk.fromIterable,
      Chunk.map(decodeCategory),
      // Chunk.every(PR.isSuccess),
      Chunk.filter(PR.isSuccess),
      Chunk.map((pr) => [pr.right.slug, pr.right.id])
      // Chunk.map( board => categoryForBoard(board.right))
    );
    // console.log("categories", Chunk.toReadonlyArray(result))
    expect(result).toBeTruthy();
  });

  it('should map each message from a board to a category', async () => {
    const messages = pipe(
      Chunk.fromIterable(khorosMessages),
      Chunk.map(decodeMessage),
      Chunk.filter(PR.isSuccess),
      Chunk.map((pr) => pr.right)
    );
    const categories = pipe(
      Chunk.fromIterable(discourseCategories),
      Chunk.map(decodeCategory),
      Chunk.filter(PR.isSuccess),
      Chunk.map((pr) => pr.right)
    );
    const result = pipe(
      messages,
      Chunk.map(
        (message) =>
          [khorosBoardIdToDiscourseCategorySlug(message.board), message] as [
            string,
            KhorosMessage
          ]
      ),
      Chunk.every(([categorySlug]) =>
        pipe(
          categories,
          Chunk.findFirst(
            (possibleCategory) => possibleCategory.slug === categorySlug
          ),
          Option.isSome
        )
      )
      // Chunk.toReadonlyArray
    );

    // console.log("categories", JSON.stringify(result))
    expect(result).toBeTruthy();
  });
});
