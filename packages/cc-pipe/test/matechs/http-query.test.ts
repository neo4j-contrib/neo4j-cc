/**
 * @jest-environment node
 */
// borrowed directly from https://github.com/Effect-TS/query/blob/master/packages/query/test/ported.test.ts
import * as A from "@effect-ts/core/Collections/Immutable/Array"
import * as T from "@effect-ts/core/Effect"
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
import axios, { AxiosResponse } from "axios"
import { DateTime } from "luxon"

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


const requestDays: A.Array<DateTime> = A.from(daysBetween(DateTime.fromISO("2012-01-01"), DateTime.now()))

class GetAllDays extends StandardRequest<GetAllDays, never, A.Array<DateTime>> {
  readonly _tag = "GetAllDays"
}

type AllDaysRequest = GetAllDays

const AllDaysRequestDataSource = DS.makeBatched("AllDaysRequestDataSource")(
  (requests: A.Array<AllDaysRequest>) =>
    putStrLn("Running request...")["|>"](
      T.andThen(
        T.succeed(
          requests["|>"](
            A.reduce(CR.empty, (crm, _) => {
              switch (_._tag) {
                case "GetAllDays":
                  return CR.insert_(crm, _, E.right(requestDays))
              }
            })
          )
        )
      )
    )
)["|>"](DS.batchN(100))

const getAllDays = Q.fromRequest(new GetAllDays(), AllDaysRequestDataSource)

describe("All Days Query", () => {
  it("all the days", async () => {
    const f = pipe(
      Q.run(getAllDays),
      T.provideServiceM(TestConsole)(emptyTestConsole)
    )
    expect(await T.runPromise(f)).toEqual(requestDays)
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

const httpGet = T.fromPromise<AxiosResponse<string>>(axiosGet)

const parseMedium = (s:string) => pipe(
  T.fromNullable(s),
  T.map(s => s.slice(16,)),
  T.chain(s => 
    T.effectPartial(
      () => JSON.parse(s),
      () => T.fail("oops")
    )
  )
)

describe("HTTP GET query", () => {
  it("a plain http get", async () => {
    const result = pipe(
      httpGet,
      T.map(r => r.data),
      T.chain(parseMedium),
      T.chain((result) => 
        T.effectTotal( () => {
          return result
        })
      )
    )
    expect(await T.runPromise(result)).toEqual({})
  })
})