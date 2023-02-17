
import { Effect, Layer, Context, Schedule, pipe, Option, Either, Duration, Chunk } from "@neo4j-cc/prelude"
import { FetchError, request, jsonBody } from "@neo4j-cc/data-access-http";
import { ApiResponse, ApiError, Fetcher } from 'openapi-typescript-fetch';
import { CancelablePromise, KhorosV2 } from "./generated";
import { QueryASingleCollection, Item } from "./generated/models/quicktypes";
import { GetAllMessagesArgs, GetUserByIdArgs, GetUsersByIdRangeArgs, GetMessagesOnDateArgs, KhorosApiConfig, KhorosService, GetMessagesWithCursor, GetMessageOnDateWithCursor, KhorosError } from "./khoros.service";
import { endOfDay, getMilliseconds, getTime, startOfDay } from "date-fns";
import { decodeAuthor, decodeBoard, decodeKudo, decodeMessage } from "./khoros-schemas";


import * as PR from "@fp-ts/schema/ParseResult";

export interface KhorosServiceAuthorization {
  url: string,
  token: string
}

export interface KhorosSessionTokenResponse {
  status: string,
  value: {
    type: string,
    "$": string
  }
}

export const itemsFromResult = (result:QueryASingleCollection) => pipe(result.data.items, Chunk.fromIterable)

export const makeAuthorizedService = (auth:KhorosServiceAuthorization):KhorosService => {

  const khorosV2: KhorosV2 = new KhorosV2({
    BASE: `${auth.url}/api/2.0`,
    HEADERS: {
      "li-api-session-key": auth.token
    }
  })


  const query = <RequestResult>(args:{q?:string}) => {

    const schedule:Schedule.Schedule<never, FetchError, number> = pipe(Schedule.exponential(Duration.seconds(1)), Schedule.compose(Schedule.recurs(2)))

    return pipe(
      Effect.tryCatchPromise(
        () => khorosV2.default.getSearch(args) as CancelablePromise<RequestResult>,
        (error) => new FetchError({request: args, error})
        ),
      Effect.retry(schedule)
    )
 }

  const getLatestMessages = () => pipe(
    query<QueryASingleCollection>( 
      {q:`SELECT * FROM messages ORDER BY last_publish_time DESC LIMIT 10`}
    ),
    Effect.flatMap( (a) => (a.data.size > 0) ? Effect.succeed(Chunk.fromIterable(a.data.items)) : Effect.fail(new KhorosError("No latest messages")))
  )  

  const getMessagesOnDate = ({day}:GetMessagesOnDateArgs) => pipe(
    query<QueryASingleCollection>(
      {q: `SELECT * FROM messages WHERE post_time >= ${getTime(startOfDay(day))} AND post_time <= ${getTime(endOfDay(day))} LIMIT 1000`}
    ),
    Effect.map( (a) => Chunk.fromIterable(a.data.items))
  )

  const getMessageById = (messageId:string)  => pipe(
    query<QueryASingleCollection>(
      {q: `SELECT * FROM messages WHERE id = '${messageId}'`}
    ),
    Effect.flatMap( (result) => (result.data.size > 0) 
      ? pipe(result.data.items[0], decodeMessage, pr => PR.isSuccess(pr) ? Effect.succeed(pr.right) : Effect.fail(new KhorosError(`could not parse KhorosMessage ${result.data.items[0].id}, because: ${JSON.stringify(pr.left[0])}`)))
      : Effect.fail(new KhorosError(`Message ${messageId} not found`)))
  )

  const getTagsForMessage = (messageId:string) => pipe(
    query<QueryASingleCollection>(
      {q: `SELECT * FROM tags WHERE messages.id = '${messageId}'`}
    ),
    Effect.flatMap( (result) => (result.data.size > 0) ? Effect.succeed(Chunk.fromIterable(result.data.items)) : Effect.succeed(Chunk.empty<Item>())),
    Effect.map(Chunk.map(item => (item.text !== undefined) ? Option.some(item.text) : Option.none<string>())),
    Effect.map(Chunk.compact),
    Effect.map(Chunk.toReadonlyArray)
  )

  const getCustomTagsForMessage = (messageId:string) => pipe(
    query<QueryASingleCollection>(
      {q: `SELECT * FROM custom_tags WHERE messages.id = '${messageId}'`}
    ),
    Effect.flatMap( (result) => (result.data.size > 0) ? Effect.succeed(Chunk.fromIterable(result.data.items)) : Effect.succeed(Chunk.empty<Item>())),
    Effect.map(Chunk.map(item => (item.text !== undefined) ? Option.some(item.text) : Option.none<string>())),
    Effect.map(Chunk.compact),
    Effect.map(Chunk.toReadonlyArray)
  )
  
  const getLabelsForMessage = (messageId:string) => pipe(
    query<QueryASingleCollection>(
      {q: `SELECT * FROM labels WHERE messages.id = '${messageId}'`}
    ),
    Effect.flatMap( (result) => (result.data.size > 0) ? Effect.succeed(Chunk.fromIterable(result.data.items)) : Effect.succeed(Chunk.empty<Item>())),
    Effect.map(Chunk.map(item => (item.text !== undefined) ? Option.some(item.text) : Option.none<string>())),
    Effect.map(Chunk.compact),
    Effect.map(Chunk.toReadonlyArray)
  )

  const getKudosForMessage = (messageId:string) => pipe(
    query<QueryASingleCollection>(
      {q: `SELECT * FROM kudos WHERE message.id = '${messageId}'`}
    ),
    Effect.flatMap( (result) => (result.data.size > 0) ? Effect.succeed(Chunk.fromIterable(result.data.items)) : Effect.succeed(Chunk.empty<Item>())),
    Effect.map(Chunk.map(decodeKudo)),
    Effect.map(Chunk.map(pr => PR.isSuccess(pr) ? Effect.succeed(pr.right) : Effect.fail(pr.left[0]))),
    Effect.flatMap(Effect.collectAll)
  )

  const getTopicsOnDate = ({day}:GetMessagesOnDateArgs) => pipe(
    query<QueryASingleCollection>(
      {q: `SELECT * FROM messages WHERE depth = 0 AND post_time >= ${getTime(startOfDay(day))} AND post_time <= ${getTime(endOfDay(day))} LIMIT 1000`}
    ),
    Effect.map( (a) => Chunk.fromIterable(a.data.items))
  )

  const getMessagesOnDateWithCursor = ({day, cursor, limit}:GetMessageOnDateWithCursor) => pipe(
    query<QueryASingleCollection>(
      {q: `SELECT * FROM messages WHERE post_time >= ${getTime(startOfDay(day))} AND post_time <= ${getTime(endOfDay(day))} ${optionalLimitLiQL(limit)} ${optionalCursorLiQL(cursor)}`}
    ),
    Effect.map( (a) => ({items: a.data.items, cursor: a.data.next_cursor}))
  )

  const getAllMessagesOnDate = ({day}: {day:Date}) => pipe(
    Effect.unfold('' as string | undefined, (cursor) => pipe(
      Effect.succeed(cursor !== undefined),
      Effect.ifEffect(
        getMessagesOnDateWithCursor({day, cursor, limit: 1000}),
        Effect.succeed({items:[], cursor:''})
      ),
      Effect.delay(Duration.seconds(1)),
      Effect.map(({items, cursor}) => ({items:Chunk.fromIterable(items), cursor})),
      Effect.map( (page) =>  (Chunk.size(page.items) > 0) ? Option.some([page.items, page.cursor]) : Option.none()))
    ),
    Effect.map(Chunk.flatten)
  )

  const optionalCursorLiQL = (cursor?:string) => (cursor !== undefined) && (cursor.length > 1)
    ? `CURSOR '${cursor}'` : ''

  const optionalLimitLiQL = (limit = 1000) => (limit !== undefined)
    ? `LIMIT ${limit}` : ''

  const getMessagesWithCursor = ({cursor, limit}:GetMessagesWithCursor) => pipe(
    query<QueryASingleCollection>(
      {q: `SELECT * FROM messages ORDER BY post_time ASC ${optionalLimitLiQL(limit)} ${optionalCursorLiQL(cursor)} `}
    ),
    Effect.map( (a) => ({items:a.data.items, cursor: a.data.next_cursor}))
  )

  const getAllMessages = <A>(pager: (page:Item[]) => Effect.Effect<never, never, A>) => pipe(
    Effect.unfold('', (cursor) => pipe(
      getMessagesWithCursor({cursor}),
      Effect.delay(Duration.seconds(1)),
      Effect.flatMap(({items, cursor}) => Effect.struct({as:pager(items), cursor:Effect.succeed(cursor)})),
      
      Effect.map( (page) => (page.cursor !== undefined) ? Option.some([page.as, page.cursor]) : Option.none()))
    )
  )
  

  const getBoards = () => pipe(
    query<QueryASingleCollection>(
      {q:`SELECT * FROM boards`}
    ),
    // Effect.tap((a) => Effect.log(JSON.stringify(a))),
    Effect.map( itemsFromResult ),
    Effect.map(Chunk.map(decodeBoard)),
    Effect.flatMap(Effect.forEach(pr => PR.isSuccess(pr) 
      ? Effect.succeed(pr.right) 
      : Effect.fail(new KhorosError(`could not parse KhorosBoard, because: ${JSON.stringify(pr.left[0])}`)))
    )
    // Effect.map( (result) => (result.data.size > 0) ? result.data.items : [] as Item[])
  )

  const getUserById = ({id}:GetUserByIdArgs) => pipe(
    query<QueryASingleCollection>(
      {q:`SELECT * FROM users WHERE id='${id}'`}
    ),
    // Effect.tap((a) => Effect.log(JSON.stringify(a))),
    // Effect.flatMap( (result) => (result.data.size > 0) ? Effect.succeed(result.data.items[0]) : Effect.fail(new KhorosError(`User not found for ID ${id}`)))
    Effect.map( (result) => (result.data.size > 0) ? Option.some(result.data.items[0]) : Option.none()),
    Effect.map(Option.map(decodeAuthor)),
    Effect.flatMap(Option.match(() => Effect.succeed(Option.none()), (pr) => PR.isSuccess(pr) ? Effect.succeed(Option.some(pr.right)) : Effect.fail(pr.left[0])))
  )
  
  const getUsersWithinRange = ({from, to}:GetUsersByIdRangeArgs) => pipe(
    query<QueryASingleCollection>(
      {q:`SELECT * FROM users WHERE id>='${from}' and id <= '${to}' LIMIT 1000`}
    ),
    // Effect.tap((a) => Effect.log(JSON.stringify(a))),
    Effect.map( (result) => (result.data.size > 0) ? Chunk.fromIterable(result.data.items) : Chunk.empty<Item>())
  )

  const getAllUserIDs = () => pipe(
    Effect.unfold('', (cursor) => pipe(
      query<QueryASingleCollection>(
        {q:`SELECT id FROM users ORDER BY id ASC ${optionalLimitLiQL(1000)} ${optionalCursorLiQL(cursor)}`}
      ),
      Effect.map( (result) => ((result.data.size > 0) && (result.data.next_cursor !== undefined)) ? Option.some([Chunk.fromIterable(result.data.items), result.data.next_cursor]) : Option.none())
    )),
    Effect.map(Chunk.flatten),
    // Effect.flatMap((items) => Effect.tuple(Effect.succeed(0), (items.length > 10) ? Effect.succeed(1) : Effect.fail("why")))
  )

  return {
    query,
    getLatestMessages,
    getMessagesOnDate,
    getAllMessagesOnDate,
    getMessagesWithCursor,
    getAllMessages,
    getMessageById,
    getBoards,
    getUserById,
    getAllUserIDs,
    getUsersWithinRange,
    getTagsForMessage,
    getLabelsForMessage,
    getKudosForMessage,
    getCustomTagsForMessage
  }
}


export const makeLiveKhorosServiceLayer = (config: KhorosApiConfig) => {
  
  return Layer.effect(KhorosService, makeLiveKhorosService(config))

}
export const makeLiveKhorosService = (config: KhorosApiConfig) => {

  const retrieveSessionKey = () => {

    const requestOptions = {
      method: 'POST'
    };
  
    return request(
      `${config.baseUrl}/restapi/vc/authentication/sessions/login?restapi.response_format=json&user.login=${config.login}&user.password=${config.password}`, 
      requestOptions
    )
  }

  return pipe(
    retrieveSessionKey(),
    Effect.flatMap( jsonBody ),
    // Effect.tap( (a) => Effect.succeed(console.log(a))),
    Effect.map( (a) => (a as any).response.value['$'] ),
    Effect.map( (token) => makeAuthorizedService({url: config.baseUrl, token}))
  )
}
