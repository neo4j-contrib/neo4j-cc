

/**
 * @jest-environment node
 */
// borrowed directly from https://github.com/Effect-TS/query/blob/master/packages/query/test/ported.test.ts
import * as A from "@effect-ts/core/Collections/Immutable/Array";
import * as T from "@effect-ts/core/Effect";
import * as Async from "@effect-ts/core/Async";
// import * as Sync from "@effect-ts/core/Sync";
// import * as Ex from "@effect-ts/core/Effect/Exit"
import * as REF from "@effect-ts/core/Effect/Ref"
import * as E from "@effect-ts/core/Either"
import { pipe } from "@effect-ts/core/Function"
import type { Has } from "@effect-ts/core/Has"
import { tag } from "@effect-ts/core/Has"
// import * as MAP from "@effect-ts/core/Map"
// import * as O from "@effect-ts/core/Option"
// import { NoSuchElementException } from "@effect-ts/system/GlobalExceptions"

// import * as CH from "@effect-ts/query/Cache"
import * as CR from "@effect-ts/query/CompletedRequestMap"
import * as DS from "@effect-ts/query/DataSource"
import * as Q from "@effect-ts/query/Query"
// import { QueryFailure } from "@effect-ts/query/QueryFailure"
import { StandardRequest } from "@effect-ts/query/Request"

import { decoder } from "@effect-ts/morphic/Decoder";

import axios from "axios"
import { DateTime } from "luxon"

import { MediumResponse, pairPostsWithAuthors } from "../../src/models/medium.model";
import * as C from "@effect-ts/core/Collections/Immutable/Chunk"

interface TestConsole {
  lines: REF.Ref<A.Array<string>>
}

const TestConsole = tag<TestConsole>()

const emptyTestConsole = T.map_(REF.makeRef<A.Array<string>>([]), (lines) => ({
  lines
}))

function putStrLn(line: string): T.RIO<Has<TestConsole>, void> {
  return T.accessServiceM(TestConsole)((c) =>
    REF.update_(c.lines, (lines) => A.concat_(lines, [line]))
  )
}

function* daysBetween(from:DateTime, to:DateTime) {
  let day = from;
  while (day < to) {
    yield day;
    day = day.plus({days:1})
  }
}


const requestAllDays: A.Array<DateTime> = A.from(daysBetween(DateTime.fromISO("2012-01-01"), DateTime.now()))

const requestRangeOfDays = (from:DateTime, to:DateTime) => A.from(daysBetween(from,to))

class GetAllDays extends StandardRequest<GetAllDays, never, A.Array<DateTime>> {
  readonly _tag = "GetAllDays"
}

class GetDaysBetween extends StandardRequest<GetDaysBetween, never, A.Array<DateTime>> {
  readonly _tag = "GetDaysBetween"
  readonly from!:DateTime
  readonly to!:DateTime
}

type AllDaysRequest = GetAllDays | GetDaysBetween

const AllDaysRequestDataSource = DS.makeBatched("AllDaysRequestDataSource")(
  (requests: C.Chunk<AllDaysRequest>) =>
    putStrLn("Running request...")["|>"](
      T.zipRight(
        T.succeed(
          requests["|>"](
            C.reduce(CR.empty, (crm, _) => {
              switch (_._tag) {
                case "GetAllDays":
                  return CR.insert_(crm, _, E.right(requestAllDays))
                case "GetDaysBetween":
                  return CR.insert_(crm, _, E.right(requestRangeOfDays(_.from, _.to)))
              }
            })
          )
        )
      )
    )
)["|>"](DS.batchN(100))

const getAllDays = Q.fromRequest(new GetAllDays(), AllDaysRequestDataSource)

describe("Query Days", () => {
  it("all the days", async () => {
    const f = pipe(
      Q.run(getAllDays),
      T.provideServiceM(TestConsole)(emptyTestConsole)
    )
    expect(await T.runPromise(f)).toEqual(requestAllDays)
  })
  it("some days", async () => {
    const result = await pipe(
      Q.run(Q.fromRequest(
        new GetDaysBetween({from:DateTime.fromISO("2021-01-01"), to:DateTime.fromISO("2021-01-04")}),
        AllDaysRequestDataSource
        )
      ),
      T.provideServiceM(TestConsole)(emptyTestConsole),
      T.runPromise
    )
    expect(result).toHaveLength(3)
  })

})


const axiosGet = () => axios.get<string>(
	"https://medium.com/tag/neo4j/archive/2020/01/01",
  {
    "params": {
    },
    "headers": {
    }
})

const httpGet = T.fromAsync(Async.promise(axiosGet, () => null))

describe("HTTP GET query", () => {
  it("a plain http get", async () => {
    const result = await pipe(
      httpGet,
      T.map(r => r.data),
      T.map(s => E.parseJSON_(s.slice(16,), E.toError)),
      T.chain((e) => T.fromEither(() => e)),
      T.chain((a:any) => decoder(MediumResponse).decode(a)),
      // T.chain(mr => pipe(
      //   Sync.do,
      //   Sync.bind("users", () => Sync.succeed(userLens(mr))),
      //   Sync.bind("posts", () => Sync.succeed(postLens(mr)))
      // )),
      T.map(pairPostsWithAuthors),
      T.runPromise
    )
    expect(result).toHaveLength(3)
  })
})