import { pipe, Effect, Layer, Exit, Cause, Context, Logger } from '@neo4j-cc/prelude';


export interface JsonService {
  readonly pretty: (a:unknown) => void
}

export const JsonService = Context.Tag<JsonService>()

export const LiveJsonService = Layer.effect(
  JsonService,
  Effect.sync(() => ({
    pretty: (a:unknown) => {
      console.log(JSON.stringify(a))
    }
  }))
)

