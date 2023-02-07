import { Context, Effect, Layer, Schedule, Chunk, pipe, Option } from "@neo4j-cc/prelude";

describe("Chunk", () => {
  it("unfold", async () => {
    const result = Chunk.unfold(0, (s) => (s<4) ? Option.some([`#${s}`, s+1]) : Option.none)
    expect(Chunk.toReadonlyArray(result)).toStrictEqual(['#0','#1','#2','#3'])
  })
})

describe("Effect chunks", () => {
  it("unfold", async () => {
    const result = pipe(
      Effect.unfold(0, (s) => (s<4) ? Effect.succeed(Option.some([`#${s}`, s+1])) : Effect.succeed(Option.none)),
      Effect.unsafeRunSync
    )
    expect(Chunk.toReadonlyArray(result)).toStrictEqual(['#0', '#1', '#2', '#3'])
  })

  const effectfulIncrement = (n:number) => Effect.succeed(n+1)

  it("can be sequential", async () => {
    const iterable = Chunk.fromIterable([1,2,3])
    // sequential
    const result = await pipe(iterable, Effect.forEach(effectfulIncrement), Effect.unsafeRunPromise)
    expect(result).toStrictEqual(Chunk.fromIterable([2,3,4]))
  })
  
  it("can be unbounded parallel", async () => {
    const iterable = Chunk.fromIterable([1,2,3])
    // unbounded parallel
    const result = await pipe(iterable, Effect.forEachPar(effectfulIncrement), Effect.unsafeRunPromise)
    expect(result).toStrictEqual(Chunk.fromIterable([2,3,4]))
  })

  it("can be up to 5 fibers in parallel", async () => {
    const iterable = Chunk.fromIterable([1,2,3])
    // up to 5 fibers in parallel
    const result = await pipe(iterable, Effect.forEachPar(effectfulIncrement), Effect.withParallelism(5), Effect.unsafeRunPromise)
    expect(result).toStrictEqual(Chunk.fromIterable([2,3,4]))
  })
})