import { pipe, Effect, Chunk, Layer, Logger, ReadonlyArray, HashMap } from '@neo4j-cc/prelude';

import { Argv, CommandModule } from 'yargs';

import { 
  makeDiscourseService,
  DiscourseService,
  DiscourseApiConfiguration,
  DiscourseApiError
 } from '@neo4j-cc/data-access-discourse'
import { FetchError, jsonBody, JsonBodyError } from '@neo4j-cc/data-access-http';
import { ApiResponse } from 'openapi-typescript-fetch';

export type DiscourseErrors = FetchError | JsonBodyError | DiscourseApiError

export interface CommandOptions {
  discourseKey: string,
  discourseUsername: string,
  discourseUrl: string,
  discourseSecret: string
}

interface DiscourseCommandArgs {
  discourse: DiscourseService
}

/**
 * Map CLI options to configuration needed by service. 
 */
const toServiceConfig = (argv:CommandOptions): DiscourseApiConfiguration => ({
  apiKey: argv.discourseKey,
  apiUsername: argv.discourseUsername,
  baseUrl: argv.discourseUrl,
  discourseConnectSecret: argv.discourseSecret
})

const getCategories = ({discourse}:DiscourseCommandArgs) => pipe(
  discourse.listCategories(),
  // Effect.map(response => response.category_list.categories),
  Effect.map(Chunk.map( (category) => ([category.id, category.name] as [number, string]))),
  Effect.map(HashMap.from)
)

const listCategories = pipe(
  Effect.Do(),
  Effect.bind("discourse", () => Effect.service(DiscourseService)),
  Effect.bind("categoryIdToNameMap", ({discourse}) => getCategories({discourse})),
  Effect.tap(({categoryIdToNameMap}) => {console.log(JSON.stringify(HashMap.values(categoryIdToNameMap))); return Effect.succeed(undefined);}),
  Effect.asUnit
)

const doCommand: Effect.Effect<DiscourseService, DiscourseErrors, void> = pipe(
  Effect.Do(),
  Effect.bind("discourse", () => Effect.service(DiscourseService)),
  Effect.bind("response", ({discourse}) => discourse.getSite()),
  Effect.map(({response}) => console.log(JSON.stringify(response))),
  Effect.asUnit
)


const builder = (argv:Argv):Argv<CommandOptions> => argv.options({
  discourseKey: {
    type: 'string',
    demandOption: true,
    describe: 'Discourse API key'
  },
  discourseUsername: {
    type: 'string',
    demandOption: true,
    describe: 'Discourse API username'
  },
  discourseUrl: {
    type: 'string',
    demandOption: true,
    describe: 'Discourse API URL'
  },
  discourseSecret: {
    type: 'string',
    demandOption: true,
    describe: 'Discourse Connect secret used for signing '
  },
})

const handler = (argv:CommandOptions) =>  pipe(
  listCategories,
  Effect.provideLayer(pipe(
    makeDiscourseService(toServiceConfig(argv))
  )),
  Effect.unsafeRunPromise
)

export const DiscourseCommandModule:CommandModule<unknown, CommandOptions> = {
  command: 'discourse',
  describe: 'get/put with the discourse api',
  builder,
  handler
}

