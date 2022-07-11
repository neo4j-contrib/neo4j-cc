import * as Effect from '@effect/core/io/Effect'
import * as Layer from '@effect/core/io/Layer'
import { pipe } from '@tsplus/stdlib/data/Function'

import { sub as subTime } from 'date-fns'

import  {bulkApiRepo, bulkApiContext, BulkApiConfig, configureBulkApiLayer, KhorosBulkResponse } from '@neo4j-cc/data-access-khoros'
import { httpServiceContext } from '@neo4j-cc/data-access-khoros'
import { loggerService, loggerServiceContext } from '@neo4j-cc/data-access-khoros'

export const defaultConfig:BulkApiConfig = {
  baseURL: 'https://api.lithium.com/lsi-data/v2/data/export/community',
  communityID: 'neo4j.prod',
  clientID: 'wffG+1nXkmnehWtAmtLdfskWqbYYhLLaVJuJyE/Ot60=',
  apiToken: '7db39b92ec9c354d34554e3e86356f689b04eb70'
}

const program = Effect.gen(function* ($) {
  const { fetchEventsOfDay } = yield* $(bulkApiRepo);
  const { log } = yield* $(loggerService);
  const events = yield* $(fetchEventsOfDay(subTime(new Date(), { days:1})))
  console.log(events) 
  // for (const event of (events as KhorosBulkResponse).records) {
  //   yield* $(log(`Event: ${JSON.stringify(event)}`))
  // }
  }
)

const pipedProgram = pipe(
  Effect.service(bulkApiRepo),
)

const context = pipe(
  configureBulkApiLayer(defaultConfig),
  Layer.andTo(httpServiceContext),
  Layer.andTo(bulkApiContext),
  Layer.and(() => loggerServiceContext)
);

const run = async (toolbox) => {
  const {print, meta} = toolbox;
  print.info(meta)
  // const eventRecords = await pipe(
  //   fetchBulkAPI(defaultConfig),
  //   Effect.map(x => x.records),
  //   Effect.unsafeRunPromise
  // )
  // print.info(eventRecords[0])
  pipe(program, Effect.provideSomeLayer(context), Effect.unsafeRunPromise)
}

export const KhorosCommand = {
  name: 'khoros',
  alias: 'k',
  description: 'Interacts with Khoros APIs',
  run
}