import * as Effect from "@effect/core/io/Effect";
import * as Layer from "@effect/core/io/Layer";
import * as Schedule from "@effect/core/io/Schedule";
import * as Chunk from "@tsplus/stdlib/collections/Chunk";
import { pipe } from "@tsplus/stdlib/data/Function";
import { Tag } from "@tsplus/stdlib/service/Tag";
import * as Either from "@tsplus/stdlib/data/Either";

import { format as formatDate } from 'date-fns'
import { eachDayOfInterval, startOfDay, endOfDay, add as addTime, sub as subTime } from 'date-fns'
import { encode as encodeAsBase64 } from "universal-base64";

import { httpService, JsonBodyError } from "./http";

export class BulkApiResponse {
  readonly _tag = "BulkApiResponse";
  constructor(readonly records: unknown[]) {}
}

const bulkApiGuard = (o:unknown): o is BulkApiResponse => {
  return (o as BulkApiResponse).records !== undefined
}

export const parseBulkApiResponse = (o:unknown) => Effect.cond(
  () => bulkApiGuard(o), 
  () => new BulkApiResponse((o as BulkApiResponse).records),
  () => new JsonBodyError(o)
)

export interface BulkApiConfig {
  baseURL: string
  communityID: string
  clientID: string
  apiToken: string
}

export const BulkApiConfig = Tag<BulkApiConfig>()
export const configureBulkApiLayer = (x:BulkApiConfig) => Layer.fromValue(BulkApiConfig, () => x)

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BulkApiRepo
  extends Effect.Effect.Success<typeof makeBulkApiLive> {}

export const bulkApiRepo = Tag<BulkApiRepo>();


/**
 * TODO: take a look at Effect.Do() notation instead of Effect.gen
 */
export const makeBulkApiLive = Effect.gen(function* ($) {
  const Http = yield* $(httpService);
  const bulkApiConfig = yield* $(BulkApiConfig)
  
  const datesBetween = (fromDate:Date, toDate:Date) => 
    eachDayOfInterval({start:fromDate, end: toDate})

  const requestDateAsString = (d:Date) => formatDate(d, 'yyyyMMddHHmm')

  // "https://api.lithium.com/lsi-data/v2/data/export/community/neo4j.prod?fromDate=202206280000&toDate=202206290000", 
  const bulkAPIRequestOnDates = (request:BulkApiConfig, fromDate:Date, toDate:Date) => 
    `${request.baseURL}/${request.communityID}?fromDate=${requestDateAsString(fromDate)}&toDate=${requestDateAsString(toDate)}`
    
  const encodeUsernamePassword = (username:string, password:string) =>
    encodeAsBase64(`${username}:${password}`)

  const fetchEventsOfDay = (day: Date) =>
    pipe(
      Http.request(
        bulkAPIRequestOnDates(bulkApiConfig, startOfDay(day), endOfDay(day)),
        {
          "method": "GET",
          "headers": {
                "client-id": bulkApiConfig.clientID,
                "Authorization": `Basic ${encodeUsernamePassword(bulkApiConfig.apiToken,"")}`,
                "Accept": "application/json"
          }
        }
      ),
      Effect.flatMap(Http.jsonBody),
      Effect.map(x => {console.log(x); return x}),
      Effect.flatMap(parseBulkApiResponse),
      Effect.map((value) => new BulkApiResponse(value.records)),
      // Effect.retry(() =>
      //   pipe(
      //     Http.defaultRetrySchedule,
      //     Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      //   )
      // ),
      // Effect.orDie
    );

  const fetchEventsBetween = (fromDate: Date, toDate: Date) =>
    Effect.forEach(
      datesBetween(fromDate, toDate), // Chunk.range(from, to),
      (day) => fetchEventsOfDay(day)
    );

  return {
    fetchEventsOfDay,
    fetchEventsBetween,
  };
});

export const bulkApiContext = Effect.toLayer(bulkApiRepo)(makeBulkApiLive);

  
 