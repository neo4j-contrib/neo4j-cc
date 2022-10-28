import { pipe, E, L, Exit, Cause, Tag } from '@neo4j-cc/prelude';

import { consoleLoggerLayer } from '@effect/core/io/Logger';

import { sub as subTime } from 'date-fns';

import {
  bulkApiRepo,
  bulkApiContext,
  BulkApiConfig,
  configureBulkApiLayer,
  KhorosBulkResponse,
} from '@neo4j-cc/data-access-khoros';
import { httpServiceContext } from '@neo4j-cc/data-access-khoros';

export const defaultConfig: BulkApiConfig = {
  baseURL: 'https://api.lithium.com/lsi-data/v2/data/export/community',
  communityID: 'neo4j.prod',
  clientID: '<MISSING CLIENT ID>',
  apiToken: '<MISSING API TOKEN>',
};

const program = E.gen(function* ($) {
  const { fetchEventsOfDay } = yield* $(bulkApiRepo);
  // const { log } = yield* $(loggerService);
  const events = yield* $(fetchEventsOfDay(subTime(new Date(), { days: 1 })));
  // console.log(events)
  // for (const event of (events as KhorosBulkResponse).records) {
  //   yield* $(log(`Event: ${JSON.stringify(event)}`))
  // }
  return events;
});

const context = pipe(
  configureBulkApiLayer(defaultConfig),
  L.provideToAndMerge(httpServiceContext),
  L.provideToAndMerge(bulkApiContext),
  L.provideToAndMerge(consoleLoggerLayer)
);

const run = async (toolbox) => {
  const { print, meta } = toolbox;
  print.info('Khoros...');
  // print.info(meta)
  // const eventRecords = await pipe(
  //   fetchBulkAPI(defaultConfig),
  //   Effect.map(x => x.records),
  //   Effect.unsafeRunPromise
  // )
  // print.info(eventRecords[0])
  await pipe(program, E.provideLayer(context), E.unsafeRunPromise);
};

export const KhorosCommand = {
  name: 'khoros',
  alias: 'k',
  description: 'Interacts with Khoros APIs',
  run,
};
