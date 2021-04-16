/**
 * The Effect Data Types: Managed & Layer
 * 
 * Testified examples from https://dev.to/matechs/the-effect-data-types-managed-layer-4722
 */
import { pipe } from "@effect-ts/core";
import * as T from "@effect-ts/core/Effect";
import * as Cause from "@effect-ts/core/Effect/Cause";
import * as Rand from "@effect-ts/core/Effect/Random";
import * as A from "@effect-ts/core/Collections/Immutable/Array";
import { matchTag } from "@effect-ts/core/Utils";

interface Input {
  x: number,
  y: number
}

const program1 = pipe(
  T.environment<Input>(),
  T.chain(({ x, y }) => (y === 0 ? 
    T.fail("division by zero") // fail() to effect failure
    : T.succeed(x / y))        // succeed() to effect success
  ),
  T.chain((result) =>
    T.effectTotal(() => { // effectTotal() to succeed() which may have a side-effect
      console.log(`Final result: ${result}`)
      return result;
    })
  )
)

test("matechs division with side-effect", async () => {
  const result = await pipe(program1, T.provideAll({x:1, y:2}), T.runPromise);
  // assert.deepStrictEqual(result, Ex.done(6));
  expect(result).toStrictEqual(0.5);
})

interface InputA {
  x:number;
}
interface InputB {
  y:number;
}
interface ErrorA {
  _tag: "ErrorA";
  value: string;
}
interface ErrorB {
  _tag: "ErrorB";
  value: string;
}

const program2 = pipe(
  T.access((_: InputA) => _.x),
  T.chain((n) =>
    n === 0 ? T.fail<ErrorA>({_tag: "ErrorA", value: "n === 0"}) : T.succeed(n)
  ),
  T.chain((n) => T.access((_:InputB) => _.y + n)),
  T.chain((n) =>
    n === 10 ? T.fail<ErrorB>({_tag: "ErrorB", value: "n === 10" }) : T.succeed(n)
  ),
  T.chain( (n) =>
    T.effectTotal( () => {
      console.log(`Result ${n}`);
      return n;
    }),
  )
);

test("matechs variance", async () => {
  const result = await pipe(program2, T.provideAll({x:1, y:1 }), T.runPromise);
  expect(result).toBe(2);
})

const program2AfterErrorHandling = pipe(
  program2,
  T.catchAll((error) => {
    switch (error._tag) {
      case "ErrorA": {
        return T.effectTotal(() => {
          console.log(`handling ErrorA: ${error.value}`)
          return error;
        })
      }
      default:
        return T.fail(error)
    }
  })
)

test("matechs error handling", async () => {
  const error = await pipe(
    program2AfterErrorHandling,
    T.provideAll({x:0, y:1}), 
    T.runPromise
  );
  expect(error).toStrictEqual({_tag:"ErrorA", value: "n === 0"})
})

const program2AfterErrorHandlingWithMatchTag = pipe(
  program2,
  T.catchAll(
    matchTag(
      {
        ErrorA: (error) => 
          T.effectTotal( () => {
            console.log(`handling ErrorA: ${error.value}`)
            return error;
          })
      },
      (e) => T.fail(e)
    )
  )
)

test("matechs error handling using matchTag()", async () => {
  const error = await pipe(
    program2AfterErrorHandlingWithMatchTag,
    T.provideAll({x:0, y:1}), 
    T.runPromise
  );
  expect(error).toStrictEqual({_tag:"ErrorA", value: "n === 0"})
})

// Handling full Cause...
const program3 = pipe(
  T.access((_: InputA) => _.x),
  T.chain((n) =>
    n === 0 ? T.fail<ErrorA>({ _tag: "ErrorA", value: "n === 0" }) : T.succeed(n)
  ),
  T.chain((n) => T.access((_: InputB) => _.y + n)),
  T.chain((n) => (n === 10 ? T.die("something very wrong happened") : T.succeed(n))),
  T.chain((n) =>
    T.effectTotal(() => {
      console.log(n)
    })
  )
)

// T.Effect<InputA & InputB, never, void>
const program3AfterErrorHandling = pipe(
  program3,
  T.catchAll(
    matchTag(
      {
        ErrorA: ({ value }) =>
          T.effectTotal(() => {
            console.log(`handling ErrorA: ${value}`)
          })
      },
      (e) =>
        pipe(
          T.effectTotal(() => {
            console.log(`Default Handler`)
          }),
          T.andThen(T.fail(e))
        )
    )
  )
)

const handleFullCause = pipe(
  program3AfterErrorHandling,
  T.sandbox,
  T.catchAll((cause) => {
    const defects = Cause.defects(cause)

    if (A.isNonEmpty(defects)) {
      return T.effectTotal(() => {
        console.log("Handle:", ...defects)
        return defects;
      })
    }

    return T.halt(cause)
  })
)

test("matechs handling full cause", async () => {
  const defects = await pipe(
    handleFullCause,
    T.provideAll({ x: 1, y: 9 }),
    T.runPromise
  );
  expect(defects).toHaveLength(1);
})


class ProcessError {
  readonly _tag = "ProcessError"
  constructor(readonly message: string) {}
}

// this effect sleeps for a random period between 100ms and 1000ms and randomly suceed or fail
const randomFailure = (n: number) =>
  pipe(
    Rand.nextIntBetween(100, 1000),
    T.chain((delay) =>
      pipe(
        Rand.nextBoolean,
        T.chain((b) => (b ? T.unit : T.fail(new ProcessError(`failed at: ${n}`)))),
        T.delay(delay)
      )
    )
  )

// build up a n-tuple of computations
export const program4 = T.tuplePar(
  randomFailure(0),
  randomFailure(1),
  randomFailure(2),
  randomFailure(3),
  randomFailure(4),
  randomFailure(5)
)

test("matechs handling multiple failures", async () => {
  const error = await pipe(
    program4,
    T.catchAll((error) =>
      T.effectTotal(() => {
        console.log(`Process error: ${error.message}`)
        return error.message;
      })
    ),
    T.runPromise
  );
  expect(error).toMatch(/failed at: \d/);
})