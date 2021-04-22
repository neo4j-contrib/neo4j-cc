/**
 * The Effect Data Types: Effect
 * 
 * Testified examples from https://dev.to/matechs/the-effect-data-types-effect-1e3f
 */
import { pipe } from "@effect-ts/core";
import * as T from "@effect-ts/core/Effect";
import * as L from "@effect-ts/core/Effect/Layer"
import * as M from "@effect-ts/core/Effect/Managed"
import * as Ref from "@effect-ts/core/Effect/Ref"
// import * as Cause from "@effect-ts/core/Effect/Cause";
// import * as Rand from "@effect-ts/core/Effect/Random";
// import { matchTag } from "@effect-ts/core/Utils";
import * as Array from "@effect-ts/core/Collections/Immutable/Array";
import * as Map from "@effect-ts/core/Collections/Immutable/Map"
import type { NoSuchElementException } from "@effect-ts/system/GlobalExceptions"
import { tag } from "@effect-ts/system/Has"

export interface DbConnection {
  readonly put: (k:string, v:string) => T.UIO<void>
  readonly get: (k:string) => T.IO<NoSuchElementException, string>
  readonly clear: T.UIO<void>
}

export const DbConnection = tag<DbConnection>()

// simulate a connection to a message broker
export interface BrokerConnection {
  readonly send: (message: string) => T.UIO<void>
  readonly clear: T.UIO<void>
}

export const BrokerConnection = tag<BrokerConnection>()

export const DbLive = pipe(
  Ref.makeRef<Map.Map<string, string>>(Map.empty),
  T.chain((ref) =>
    T.succeedWith(
      (): DbConnection => ({
        get: (k) => pipe(ref.get, T.map(Map.lookup(k)), T.chain(T.getOrFail)),
        put: (k, v) => pipe(ref, Ref.update(Map.insert(k, v))),
        clear: ref.set(Map.empty)
      })
    )
  ),
  // release the connection via managed
  M.make((_) => _.clear),
  L.fromManaged(DbConnection)
)

export const BrokerLive = pipe(
  Ref.makeRef<Array.Array<string>>(Array.empty),
  T.chain((ref) =>
    T.succeedWith(
      (): BrokerConnection => ({
        send: (message) =>
          pipe(ref, Ref.update<Array.Array<string>>(Array.snoc(message))),
        clear: pipe(
          ref.get,
          T.chain((messages) =>
            T.succeedWith(() => {
              // console.log(`Flush:`)
              messages.forEach((_message) => {
                // console.log("- " + message)
              })
            })
          )
        )
      })
    )
  ),
  // release the connection via managed
  M.make((_) => _.clear),
  L.fromManaged(BrokerConnection)
)

export const ProgramLive = L.all(DbLive, BrokerLive)

test("matechs compose managed resources", async () => {
  const program = pipe(
    // access Db from environment
    T.accessService(DbConnection)(({ get, put }: DbConnection) => ({ get, put })),
    // access Broker from environment
    T.zip(T.accessService(BrokerConnection)(({ send }: BrokerConnection) => ({ send }))),
    // use both
    T.map(x => x.tuple),
    T.chain(([{ get, put }, { send }]) =>
      pipe(
        T.do,
        T.tap(() => put("ka", "a")),
        T.tap(() => put("kb", "b")),
        T.tap(() => put("kc", "c")),
        T.bind("a", () => get("ka")),
        T.bind("b", () => get("kb")),
        T.bind("c", () => get("kc")),
        T.map(({ a, b, c }) => `${a}-${b}-${c}`),
        T.tap(send)
      )
    )
  )
  
  // run the program and print the output
  const result = await pipe(
    program,
    T.chain((s) =>
      T.succeedWith(() => {
        // console.log(`Done: ${s}`)
        return s;
      })
    ),
    T.provideSomeLayer(ProgramLive),
    T.runPromise
  )
  expect(result).toBe('a-b-c');
})


test("matechs compose managed resources with derived service functions", async () => {
  const { get, put } = T.deriveLifted(DbConnection)(["get", "put"], [], [])

   const { send } = T.deriveLifted(BrokerConnection)(["send"], [], [])

  const program = pipe(
    T.do,
    T.tap(() => put("ka", "a")),
    T.tap(() => put("kb", "b")),
    T.tap(() => put("kc", "c")),
    T.bind("a", () => get("ka")),
    T.bind("b", () => get("kb")),
    T.bind("c", () => get("kc")),
    T.map(({ a, b, c }) => `${a}-${b}-${c}`),
    T.tap(send)
  )
  
  // run the program and print the output
  const result = await pipe(
    program,
    T.chain((s) =>
      T.succeedWith(() => {
        // console.log(`Done: ${s}`)
        return s;
      })
    ),
    T.provideSomeLayer(ProgramLive),
    T.runPromise
  )
  expect(result).toBe('a-b-c');
})
