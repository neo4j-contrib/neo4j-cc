import { pipe, E, L, Exit, Cause, Tag } from '@neo4j-cc/prelude';

import { GluegunCommand } from 'gluegun';
import { Toolbox } from 'gluegun/build/types/domain/toolbox';

import * as Http from '@neo4j-cc/data-access-http';
import { consoleLoggerLayer } from '@effect/core/io/Logger';


export interface CliService {
  readonly toolbox: Toolbox
}

export const CliService = Tag<CliService>()

export interface AnotherService {
  readonly dosomething: () => true;
}

export const AnotherService = Tag<AnotherService>()

const command = (id: number) => pipe(
  Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
  E.flatMap(Http.jsonBody)
)


const todo = pipe(
  E.service(CliService),
  E.tap( ({toolbox}) => command(1)),
  E.tap( (todo) => E.succeed(console.log(`Todo: ${JSON.stringify(todo)}`)) ),
  E.catchTag("FetchError", (error) => E.logError(`FetchError: ${JSON.stringify(error)}`)),
  E.catchTag("JsonBodyError", (error) => E.logError(`JsonBodyError: ${JSON.stringify(error)}`))
  , E.provideLayer(consoleLoggerLayer)
)

const commandDo = (url: string) => pipe(
  E.Do(),
  E.bind("CliService", () => E.service(CliService)),
  E.bind("another", () => E.service(AnotherService)),
  E.tap( ({CliService}) => E.fail("awful") ),
  E.tap( ({another}) => E.succeed(2)),
  E.flatMap( () => E.succeed("done"))
)

const todoDo = pipe(
  E.Do(),
  E.bind("toolbox", () => E.service(CliService)),
  E.flatMap(({toolbox}) => E.succeed(1))
)

const reportFailure = (exit:Exit.Exit<unknown, unknown>) => {
  if (Exit.isFailure(exit)) {
    console.error(`Unexpected failure: ${JSON.stringify(exit.cause)}`)
  }
}

const makeCliServiceFromToolbox = (toolbox: Toolbox) => L.fromEffect(CliService)(
  E.sync(() => ({
    toolbox
  }))
)

const run = async (toolbox: Toolbox) => {
  const preparedCommand = pipe(
    todo,
    E.provideLayer(makeCliServiceFromToolbox(toolbox))
  )
  E.unsafeRunAsyncWith(preparedCommand, reportFailure)
}

export const HttpCommand: GluegunCommand<Toolbox> = {
  name: 'http',
  run,
};
