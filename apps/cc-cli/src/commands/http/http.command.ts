import { pipe, Effect, Layer, Exit, Cause, Context, Logger } from '@neo4j-cc/prelude';

import { GluegunCommand } from 'gluegun';
import { Toolbox } from 'gluegun/build/types/domain/toolbox';

import * as Http from '@neo4j-cc/data-access-http';


export interface CliService {
  readonly toolbox: Toolbox
}

export const CliService = Context.Tag<CliService>()

export interface AnotherService {
  readonly dosomething: () => true;
}

export const AnotherService = Context.Tag<AnotherService>()

const command = (id: number) => pipe(
  Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
  Effect.flatMap(Http.jsonBody)
)


const todo = pipe(
  Effect.service(CliService),
  Effect.tap( ({toolbox}) => command(1)),
  Effect.tap( (todo) => Effect.succeed(console.log(`Todo: ${JSON.stringify(todo)}`)) ),
  Effect.catchTag("FetchError", (error) => Effect.logError(`FetchError: ${JSON.stringify(error)}`)),
  Effect.catchTag("JsonBodyError", (error) => Effect.logError(`JsonBodyError: ${JSON.stringify(error)}`))
)

const commandDo = (url: string) => pipe(
  Effect.Do(),
  Effect.bind("CliService", () => Effect.service(CliService)),
  Effect.bind("another", () => Effect.service(AnotherService)),
  Effect.tap( ({CliService}) => Effect.fail("awful") ),
  Effect.tap( ({another}) => Effect.succeed(2)),
  Effect.flatMap( () => Effect.succeed("done"))
)

const todoDo = pipe(
  Effect.Do(),
  Effect.bind("toolbox", () => Effect.service(CliService)),
  Effect.flatMap(({toolbox}) => Effect.succeed(1))
)

const reportFailure = (exit:Exit.Exit<unknown, unknown>) => {
  if (Exit.isFailure(exit)) {
    console.error(`Unexpected failure: ${JSON.stringify(exit.cause)}`)
  }
}

const makeCliServiceFromToolbox = (toolbox: Toolbox) => Layer.effect(CliService,
  Effect.sync(() => ({
    toolbox
  }))
)

const run = async (toolbox: Toolbox) => {
  const preparedCommand = pipe(
    todo,
    Effect.provideLayer(makeCliServiceFromToolbox(toolbox)),
    Effect.unsafeRunPromise
  )
  return preparedCommand
}

export const HttpCommand: GluegunCommand<Toolbox> = {
  name: 'http',
  run,
};
