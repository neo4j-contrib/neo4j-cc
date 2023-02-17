
import { pipe, Effect, Layer, Exit, Cause, Context, Option, Either, Duration, Chunk, ReadonlyArray } from '@neo4j-cc/prelude';

import { FetchError, request, jsonBody } from "@neo4j-cc/data-access-http";

import { makeLiveKhorosService } from './khoros.live';
import { Item, QueryASingleCollection } from './generated';
import { KhorosService } from './khoros.service';

const TEST_TIMEOUT = 20 * 1000;

const KHOROS_API_URL = process.env.NX_KHOROS_API_URL || 'https://khoros.neo4j.com'
const KHOROS_LOGIN = process.env.NX_KHOROS_LOGIN || '<missing login for Khoros>'
const KHOROS_PASSWORD = process.env.NX_KHOROS_PASSWORD || '<missing password for Khoros>'

// "response": {
//   "status": "success",
//   "value": {
//       "type": "string",
//       "$": "PyvZTYXuQ1TR7At6EA6uy82oq7fzjlAAwyH38Zuizng."
//   }
// }

describe("LiveKhorosService", () => {
  const live = makeLiveKhorosService({baseUrl: KHOROS_API_URL, login: KHOROS_LOGIN, password: KHOROS_PASSWORD})

  // beforeAll(async () => {
  //   jest.useRealTimers();
  //   jest.setTimeout(TEST_TIMEOUT);
  // })

  it('can search effectfully', async () => {  
    const result = await pipe(
      live,
      Effect.flatMap( (khoros) => khoros.query<QueryASingleCollection>({q:`SELECT * FROM messages ORDER BY last_publish_time DESC LIMIT 10`})),
      Effect.runPromise
    )
    // console.log(result);
    expect(result).toBeDefined()
  })

  it('can search in a Do', async () => {
    const result = await pipe(
      Effect.Do(),
      Effect.bind("khoros", () => live),
      Effect.bind("result", ({khoros}) => khoros.query<QueryASingleCollection>({q:`SELECT * FROM messages ORDER BY last_publish_time DESC LIMIT 10`})),
      Effect.map(({result}) => result),
      Effect.runPromise

    )
    // console.log(result);
    expect(result).toBeDefined()

  })

  // it("unfolds pages of getMessages for loop-like retrieval", async () => {
  //   const pageLimit = 2;
  //   const pageSize = 100;
  //   const unfoldMessages = pipe(
  //       Effect.unfold(0, (page) => pipe(
  //         ((page<pageLimit) ? live.getMessages({page, pageSize}) : Effect.succeed(Option.none)),
  //         Effect.delay(Duration.seconds(1)),
  //         // Effect.tap((c) => Effect.log(`${Option.isSome(c) ? "got some" : "got none"}`)),
  //         Effect.map( Option.map((messages) => [messages, page+1]))
  //       )),
  //     // Effect.tap(({pageOfMessages}) => Effect.succeed(console.log(pageOfMessages))),
  //     Effect.map((pageOfMessages) => pipe(pageOfMessages, Chunk.flatMap( (a) => Chunk.fromIterable(a))))
  //   )
  //   const result = await pipe(
  //     unfoldMessages,
  //     Effect.runPromise
  //   )
  //   // console.log(Chunk.unsafeHead(result))
  //   expect(result.length).toBe(pageLimit * pageSize)

  // }, TEST_TIMEOUT)

  it.skip("getMessagesAtCursor", async () => {
    const resultLimit = 10;
    const result = await pipe(
      Effect.Do(),
      Effect.bind("khoros", () => live),
      Effect.bind("page1", ({khoros}) => khoros.getMessagesWithCursor({limit:resultLimit})),
      Effect.bind("page2", ({khoros, page1}) => khoros.getMessagesWithCursor({cursor: page1.cursor})),
      Effect.runPromise
    )
    // console.log(JSON.stringify(result.page1.items))
    expect(result.page1).toBeDefined();
    expect(result.page1.items.length).toBe(resultLimit);
    expect(result.page2).toBeDefined();
    expect(result.page2.items.length).not.toBe(resultLimit); // should instead be the whatever the default is set to
  }, TEST_TIMEOUT)

  it.skip("getAllMessages", async () => {
    const consolePager = (items:Item[]) => pipe(Effect.succeed(items), Effect.tap( items => { console.log(items); return Effect.unit() }))
    const noopPager = (items:Item[]) => Effect.unit()
    const pager = noopPager;

    const result = await pipe(
      live,
      Effect.flatMap( (khoros) => khoros.getAllMessages(pager)),
      Effect.map( (a)  => a.length),
      Effect.runPromise
    )
    expect(result).toBeGreaterThan(1)
  })
  it("getBoards", async () => {
    const result = await pipe(
      live,
      Effect.flatMap( (khoros) => khoros.getBoards()),
      Effect.runPromise
    )
    // console.log(result)
    expect(result.length).toBeGreaterThan(4)
  })

  it("getUserById", async () => {
    const testableUserId = '1';
    const result = await pipe(
      live,
      Effect.flatMap( (khoros) => khoros.getUserById({id:testableUserId})),
      Effect.runPromise
    )
    // console.log(result)
    expect(Option.isSome(result)).toBeTruthy();
    expect(Option.getOrNull(result)?.id).toBe(testableUserId)
  })

  it("get latest messages", async () => {
    const result = await pipe(
      live,
      Effect.flatMap( (khoros) => khoros.getLatestMessages()),
      Effect.map(Chunk.unsafeHead),
      Effect.runPromise
    )
    // console.log(result)
    expect(result).toBeDefined()
  })
  it("can get tags for a message", async () => {
    const result = await pipe(
      Effect.Do(),
      Effect.bind("khoros", () => live),
      Effect.bind("messageWithTags", ({khoros}) => pipe(khoros.getMessageById('64247'))),
      Effect.flatMap(({khoros, messageWithTags}) => khoros.getTagsForMessage(messageWithTags.id)),
      Effect.runPromise
    )
    // console.log('tags:', result)
    expect(result).toBeDefined()
    expect(result.length).toBeGreaterThan(0);
  })

  it("can get labels for a message", async () => {
    const result = await pipe(
      Effect.Do(),
      Effect.bind("khoros", () => live),
      Effect.bind("messageWithTags", ({khoros}) => pipe(khoros.getMessageById('64017'))),
      Effect.flatMap(({khoros, messageWithTags}) => khoros.getLabelsForMessage(messageWithTags.id)),
      Effect.runPromise
    )
    // console.log('labels:', result)
    expect(result).toBeDefined()
    expect(result.length).toBeGreaterThan(0);
  })
})
