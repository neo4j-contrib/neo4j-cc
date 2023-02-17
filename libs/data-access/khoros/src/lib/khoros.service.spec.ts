import { pipe, Effect, Layer, Exit, Cause, Context, Option, Duration, Chunk } from '@neo4j-cc/prelude';
import { KhorosV2 } from './generated';
import { makeLiveKhorosServiceLayer } from './khoros.live';
import { KhorosService } from './khoros.service';


const TEST_TIMEOUT = 20 * 1000;


describe("KhorosService", () => {
  const api = new KhorosV2({
    BASE: `${process.env.NX_KHOROS_API_URL || 'https://khoros.neo4j.com'}/api/2.0` // "https://community.neo4j.com/api/2.0"
  })

  const makeLiveKhorosServiceFromEnvironment = () => {
    const KHOROS_API_URL = process.env.NX_KHOROS_API_URL || 'https://khoros.neo4j.com'
    const KHOROS_LOGIN = process.env.NX_KHOROS_LOGIN || '<missing login for Khoros>'
    const KHOROS_PASSWORD = process.env.NX_KHOROS_PASSWORD || '<missing password for Khoros>'

    return makeLiveKhorosServiceLayer({baseUrl: KHOROS_API_URL, login: KHOROS_LOGIN, password: KHOROS_PASSWORD })
  }

  // beforeAll(() => {
  //   jest.useRealTimers();
  //   jest.setTimeout(TEST_TIMEOUT);
  // })
  it('can search effectfully', async () => {  
    const result = await pipe(
      Effect.tryCatchPromise(
        () => api.default.getSearch({q:`SELECT * FROM messages ORDER BY last_publish_time DESC LIMIT 10`}),
        (reason) => Effect.fail(reason)
      ),
      Effect.runPromise
    )
    // console.log(result);
    expect(result).toBeDefined()
  })

  it('can search in a Do', async () => {
    const result = await pipe(
      Effect.Do(),
      Effect.bind("result", () => Effect.tryCatchPromise(
        () => api.default.getSearch({q:`SELECT * FROM messages ORDER BY last_publish_time DESC LIMIT 10`}),
        (reason) => reason
      )),
      Effect.runPromise

    )
    // console.log(result);
    expect(result).toBeDefined()

  })
 

  // it("unfolds pages of getMessages for loop-like retrieval", async () => {
  //   const pageLimit = 2;
  //   const pageSize = 100;
  //   const getFromKhoros = pipe(
  //     Effect.Do(),
  //     Effect.bind("khorosService", () => Effect.service(KhorosService)),
  //     Effect.bind("pageOfMessages", ({khorosService}) => pipe(
  //       Effect.unfold(0, (page) => pipe(
  //         ((page<pageLimit) ? khorosService.getMessages({page, pageSize}) : Effect.succeed(Option.none)),
  //         Effect.delay(Duration.seconds(1)),
  //         // Effect.tap((c) => Effect.log(`${Option.isSome(c) ? "got some" : "got none"}`)),
  //         Effect.map( Option.map((messages) => [messages, page+1]))
  //       )),
  //     )),
  //     // Effect.tap(({pageOfMessages}) => Effect.succeed(console.log(pageOfMessages))),
  //     Effect.map(({pageOfMessages}) => pipe(pageOfMessages, Chunk.flatMap( (a) => Chunk.fromIterable(a))))
  //   )
  //   const result = await pipe(
  //     getFromKhoros,
  //     Effect.provideLayer(makeLiveKhorosServiceFromEnvironment()),
  //     Effect.runPromise
  //   )
  //   // console.log(Chunk.unsafeHead(result))
  //   expect(result.length).toBe(pageLimit * pageSize)

  // }, TEST_TIMEOUT)

  it("getBoards", async () => {
    const khorosService = pipe(
      Effect.service(KhorosService),
      Effect.provideLayer(makeLiveKhorosServiceFromEnvironment()),
      
    )
    
  })
})
