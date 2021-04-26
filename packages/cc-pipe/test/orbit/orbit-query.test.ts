
// borrowed directly from https://github.com/Effect-TS/query/blob/master/packages/query/test/ported.test.ts
// import * as A from "@effect-ts/core/Collections/Immutable/Array";
// import * as T from "@effect-ts/core/Effect";
// import * as Async from "@effect-ts/core/Async";
// import * as Sync from "@effect-ts/core/Sync";
// import * as Exit from "@effect-ts/core/Effect/Exit"
// import * as REF from "@effect-ts/core/Effect/Ref"
// import * as E from "@effect-ts/core/Either"
// import { pipe } from "@effect-ts/core/Function"
// import type { Has } from "@effect-ts/core/Has"
// import { tag } from "@effect-ts/core/Has"
// import * as MAP from "@effect-ts/core/Map"
// import * as O from "@effect-ts/core/Option"
// import { NoSuchElementException } from "@effect-ts/system/GlobalExceptions"

// import * as CH from "@effect-ts/query/Cache"
// import * as CR from "@effect-ts/query/CompletedRequestMap"
// import * as DS from "@effect-ts/query/DataSource"
// import * as Q from "@effect-ts/query/Query"
// import { QueryFailure } from "@effect-ts/query/QueryFailure"
// import { StandardRequest } from "@effect-ts/query/Request"

// import { decoder } from "@effect-ts/morphic/Decoder";

import {Orbit} from "../../src";

describe("Orbit API requests", () => {

  // it("get /activity_types", async () => {
  //   const result = await pipe(
  //     fetchActivityTypes,
  //     T.map(r => r.data),
  //     T.provideAll({base:defaultOrbitBaseUrl, bearer:"ob_BtAnZLT6jxfbyAZumudP", path:"/"}),
  //     T.runPromiseExit
  //   )
  //   expect(Exit.succeeded(result)).toBeTruthy();
  // })

  it("get /user",  () => {
    // const result = await pipe(
    //   T.fromAsync(Async.promise(fetchCurrentUser, () => null)),
    //   T.map(r => r.data),
    //   T.runPromiseExit
    // )
    // expect(Exit.succeeded(result)).toBeTruthy();
    expect.assertions(1);
    return Orbit.fetchMe().then(({data}) => {
      console.log(data);
      expect(data).toBeDefined();
    })
  })

})
