import {pipe, Chunk, Option} from '@neo4j-cc/prelude';

import * as Order from "@fp-ts/core/typeclass/Order";

import * as PE from "@fp-ts/schema/ParseError";

import * as HashMap from "@fp-ts/data/HashMap"

import * as jetpack from "fs-jetpack";

import {dedupeBySsoId,decodeAuthor, compareNumbers, sortItemsByMessageDepth} from './khoros-schemas'

import authorsWithDuplicates from './khoros-authors-with-duplictes.json'

import khorosMessages from './khoros-messages.json'

import { Item } from './generated';

describe("KhorosAuthor", () => {
  it("dedupes by sso_id", () => {
    const dedupedAuthors = pipe(
      authorsWithDuplicates,
      Chunk.fromIterable,
      Chunk.map(decodeAuthor),
      Chunk.filter(PE.isSuccess),
      Chunk.map( pe => pe.right),
      dedupeBySsoId
    )
    expect(dedupedAuthors.length).toBeLessThan(authorsWithDuplicates.length)
  })
})

describe("ordering", () => {
  it("order numbers", () => {
    const jumbledNumbers = [4,3,5,2,1,6]
    const expectedOrder = [1,2,3,4,5,6]
    const sortedNumbers = pipe(
      Chunk.fromIterable(jumbledNumbers),
      Chunk.sort(Order.fromCompare(compareNumbers)),
      Chunk.toReadonlyArray
    )
    expect(sortedNumbers).toStrictEqual(expectedOrder)
  })
})

describe("Khoros messages", () => {

  it("Set or update MutableHashMap", () => {
    const testMap = HashMap.empty();

    const result = pipe(
      testMap,
      HashMap.set('c', "See"),
      HashMap.modifyAt('c', (v) => Option.some(pipe(v, Option.match(() => "NoSee", (previous) => `${previous}!`)))),
      HashMap.get('c')
    )
    expect(Option.isSome(result))
    expect(Option.getOrNull(result)).toBe('See!')
  })
  it("can be rethreaded", () => {

    const dirContext = jetpack.dir('exports/tmp');

    const threadedMessages = pipe(
      Chunk.fromIterable(khorosMessages),
      Chunk.map(x => x as unknown as Item),
      sortItemsByMessageDepth,
      Chunk.reduce(HashMap.empty<string, Chunk.Chunk<Item>>(), (m, item) => pipe(
        m, 
        HashMap.modifyAt(item.topic?.id || '-1', 
          (v) => Option.some(pipe(v, Option.match(() => Chunk.of(item), (c) => Chunk.append(item)(c)))))
      ))
    )
    const threadedRecord = pipe(
      threadedMessages,
      HashMap.reduceWithIndex(
        {} as Record<string, Item[]>, 
        (a, v, k) => ({ ...a, [k]: Chunk.toReadonlyArray(v)} as Record<string, Item[]>) 
      )
    )
    // console.log(Chunk.toReadonlyArray(threadCounts));
    const filePath = "threaded-messages.json";
    dirContext.write(filePath, threadedRecord);
    
    expect(threadedMessages).toBeDefined()
  })
})