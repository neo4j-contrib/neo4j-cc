/**
 * The Effect Data Types: Effect
 * 
 * Testified examples from https://dev.to/matechs/the-effect-data-types-effect-1e3f
 */
import { pipe } from "@effect-ts/core";
import * as T from "@effect-ts/core/Effect";
import * as M from "@effect-ts/core/Effect/Managed"
import * as Ref from "@effect-ts/core/Effect/Ref"
// import * as Cause from "@effect-ts/core/Effect/Cause";
// import * as Rand from "@effect-ts/core/Effect/Random";
// import { matchTag } from "@effect-ts/core/Utils";
import * as Array from "@effect-ts/core/Collections/Immutable/Array";
import * as Map from "@effect-ts/core/Collections/Immutable/Map"
import type { NoSuchElementException } from "@effect-ts/system/GlobalExceptions"

export interface DbConnection {
  readonly put: (k:string, v:string) => T.UIO<void>
  readonly get: (k:string) => T.IO<NoSuchElementException, string>
  readonly clear: T.UIO<void>
}

// connect to the database
export const connectDb = pipe(
  Ref.makeRef<Map.Map<string, string>>(Map.empty),
  T.chain((ref) =>
    T.effectTotal(
      (): DbConnection => ({
        get: (k) => pipe(ref.get, T.map(Map.lookup(k)), T.chain(T.getOrFail)),
        put: (k, v) => pipe(ref, Ref.update(Map.insert(k,v))),
        clear: ref.set(Map.empty)
      })
    )
  )
)



test("matechs bracket", async () => {
  const program = pipe(
    // acquire the database connection
    connectDb,
    T.bracket(
      // use the database connection
      (_) =>
        pipe(
          T.do,
          T.tap(() => _.put("ka", "a")),
          T.tap(() => _.put("kb", "b")),
          T.tap(() => _.put("kc", "c")),
          T.bind("a", () => _.get("ka")),
          T.bind("b", () => _.get("kb")),
          T.bind("c", () => _.get("kc")),
          T.map(({ a, b, c }) => `${a}-${b}-${c}`)
        ),
      // release the database connection
      (_) => _.clear
    )
  )
  
  // run the program and print the output
  const result = await pipe(
    program,
    T.chain((s) =>
      T.effectTotal(() => {
        console.log(s)
        return s;
      })
    ),
    T.runPromise
  )

  expect(result).toBe('a-b-c');
})

export const managedDb = pipe(
  Ref.makeRef<Map.Map<string, string>>(Map.empty),
  T.chain((ref) =>
    T.effectTotal(
      (): DbConnection => ({
        get: (k) => pipe(ref.get, T.map(Map.lookup(k)), T.chain(T.getOrFail)),
        put: (k, v) => pipe(ref, Ref.update(Map.insert(k, v))),
        clear: ref.set(Map.empty)
      })
    )
  ),
  // release the connection via managed
  M.make((_) => _.clear)
)


test("matechs managed", async () => {
  const program = pipe(
    // use the managed DbConnection
    managedDb,
    M.use((_) =>
      pipe(
        T.do,
        T.tap(() => _.put("ka", "a")),
        T.tap(() => _.put("kb", "b")),
        T.tap(() => _.put("kc", "c")),
        T.bind("a", () => _.get("ka")),
        T.bind("b", () => _.get("kb")),
        T.bind("c", () => _.get("kc")),
        T.map(({ a, b, c }) => `${a}-${b}-${c}`)
      )
    )
  )
  
  // run the program and print the output
  const result = await pipe(
    program,
    T.chain((s) =>
      T.effectTotal(() => {
        console.log(s)
        return s;
      })
    ),
    T.runPromise
  )
  expect(result).toBe('a-b-c');
})

// simulate a connection to a message broker
export interface BrokerConnection {
  readonly send: (message: string) => T.UIO<void>
  readonly clear: T.UIO<void>
}

export const managedBroker = pipe(
  Ref.makeRef<Array.Array<string>>(Array.empty),
  T.chain((ref) =>
    T.effectTotal(
      (): BrokerConnection => ({
        send: (message) =>
          pipe(ref, Ref.update<Array.Array<string>>(Array.snoc(message))),
        clear: pipe(
          ref.get,
          T.chain((messages) =>
            T.effectTotal(() => {
              console.log(`Flush:`)
              messages.forEach((message) => {
                console.log("- " + message)
              })
            })
          )
        )
      })
    )
  ),
  // release the connection via managed
  M.make((_) => _.clear)
)


test("matechs compose managed resources", async () => {
  const program = pipe(
    // use the managed DbConnection
    managedDb,
    M.zip(managedBroker),
    M.use(([{ get, put }, { send }]) =>
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
      T.effectTotal(() => {
        console.log(`Done: ${s}`)
        return s;
      })
    ),
    T.runPromise
  )
  expect(result).toBe('a-b-c');
})
