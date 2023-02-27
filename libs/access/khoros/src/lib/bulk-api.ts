// import { pipe, Effect, Layer, Schedule, Context } from "@neo4j-cc/prelude"

import { KhorosApiConfig } from './khoros.service';

// import { format as formatDate } from 'date-fns'
// import { eachDayOfInterval, startOfDay, endOfDay, add as addTime, sub as subTime } from 'date-fns'
// import { encode as encodeAsBase64 } from "universal-base64";

// import { HttpService, JsonBodyError } from "@neo4j-cc/data-access-http";

// export class BulkApiResponse {
//   readonly _tag = "BulkApiResponse";
//   constructor(readonly records: unknown[]) {}
// }

// const bulkApiGuard = (o:unknown): o is BulkApiResponse => {
//   return (o as BulkApiResponse).records !== undefined
// }

// export const parseBulkApiResponse = (o:unknown) => Effect.cond(
//   () => bulkApiGuard(o),
//   () => new BulkApiResponse((o as BulkApiResponse).records),
//   () => new JsonBodyError(o)
// )

export interface BulkApiConfig extends KhorosApiConfig {
  communityID: string;
  clientID: string;
  apiToken: string;
}

// // eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface BulkApiRepo {}

// export const BulkApiRepo = Context.Tag<BulkApiRepo>();

// /**
//  * TODO: take a look at Effect.Do() notation instead of Effect.gen
//  */
// export const makeBulkApiLive = Effect.gen(function* ($) {
//   const Http = yield* $(Effect.service(HttpService));
//   const bulkApiConfig = yield* $(BulkApiConfig)

//   const datesBetween = (fromDate:Date, toDate:Date) =>
//     eachDayOfInterval({start:fromDate, end: toDate})

//   const requestDateAsString = (d:Date) => formatDate(d, 'yyyyMMddHHmm')

//   // "https://api.lithium.com/lsi-data/v2/data/export/community/neo4j.prod?fromDate=202206280000&toDate=202206290000",
//   const bulkAPIRequestOnDates = (request:BulkApiConfig, fromDate:Date, toDate:Date) =>
//     `${request.baseURL}/${request.communityID}?fromDate=${requestDateAsString(fromDate)}&toDate=${requestDateAsString(toDate)}`

//   const encodeUsernamePassword = (username:string, password:string) =>
//     encodeAsBase64(`${username}:${password}`)

//   const fetchEventsOfDay = (day: Date) =>
//     pipe(
//       Http.request(
//         bulkAPIRequestOnDates(bulkApiConfig, startOfDay(day), endOfDay(day)),
//         {
//           "method": "GET",
//           "headers": {
//                 "client-id": bulkApiConfig.clientID,
//                 "Authorization": `Basic ${encodeUsernamePassword(bulkApiConfig.apiToken,"")}`,
//                 "Accept": "application/json"
//           }
//         }
//       ),
//       Effect.flatMap(Http.jsonBody),
//       Effect.map(x => {console.log(x); return x}),
//       Effect.flatMap(parseBulkApiResponse),
//       Effect.map((value) => new BulkApiResponse(value.records)),
//       // Effect.retry(() =>
//       //   pipe(
//       //     Http.defaultRetrySchedule,
//       //     Schedule.whileInput((error) => error._tag !== "JsonBodyError")
//       //   )
//       // ),
//       // Effect.orDie
//     );

//   const fetchEventsBetween = (fromDate: Date, toDate: Date) =>
//     Effect.forEach(
//       datesBetween(fromDate, toDate), // Chunk.range(from, to),
//       (day) => fetchEventsOfDay(day)
//     );

//   return {
//     fetchEventsOfDay,
//     fetchEventsBetween,
//   };
// });

// export const bulkApiContext = Effect.toLayer(bulkApiRepo)(makeBulkApiLive);
