import { Effect, Layer, Context, Option, Chunk, pipe, Schedule, Duration } from "@neo4j-cc/prelude"
import { FetchError, HttpError, jsonBody, JsonBodyError, request } from "@neo4j-cc/data-access-http";
import { ApiResponse, Fetcher } from 'openapi-typescript-fetch';

import * as PR from "@fp-ts/schema/ParseResult";

import { DiscourseApiConfiguration } from './data-access-discourse'

import { paths as DiscoursePaths, operations } from './discourse-openapi';
import { GetSiteResponseContent, CreateTopicPostPMResponseContent, ListCategoriesResponseContent, SearchResponseContent, GetTopicResponseContent, GetUserResponseContent, AdminListUsersResponseContent } from './discourse.types'
import { createOrUpdateSsoUserAt, SsoUserDetails } from "./actions/sync-sso";
import { createPostAt, createTopicAsUserAt, createPostAsUserAt, createTopicAt, getOrCreateTopicAsUserAt, getOrCreateTopicAt, getTopicByExternalIdAt, NewDiscoursePost, NewDiscourseTopic } from "./actions/create-post";
import { decodePublicUser, decodePrivateUser, DiscoursePublicUser, decodeCategory, DiscourseCategory, extractCategoriesFrom, DiscoursePrivateUser, DiscoursePublicUserItem, decodePublicUserItem } from "./discourse-schemas";
import { ParseError } from "@fp-ts/schema/ParseResult";
import { acceptPostAt, DiscoursePost, OperationSuccessResponse } from "./actions/accept-post";


export class DiscourseServiceError {
  readonly _tag = "DiscourseServiceError";
  constructor(readonly error: unknown, readonly detail?:unknown) {}
}

export type DiscourseApiError = FetchError | HttpError | JsonBodyError | ParseError | DiscourseServiceError

export interface DiscourseService {
  readonly getSite: () => Effect.Effect<never, DiscourseApiError, GetSiteResponseContent>
  readonly listCategories: () => Effect.Effect<never, DiscourseApiError, Chunk.Chunk<DiscourseCategory>>
  readonly listPublicUsers: () => Effect.Effect<never, DiscourseApiError, Chunk.Chunk<DiscoursePublicUserItem>>
  readonly getTopicByExternalId: ({ external_id }: {external_id: string;}) => Effect.Effect<never, DiscourseApiError, Option.Option<GetTopicResponseContent>>
  readonly createTopic: (post: NewDiscourseTopic) => Effect.Effect<never, DiscourseApiError, CreateTopicPostPMResponseContent>
  readonly createTopicAs: (effectiveUsername: string, post: NewDiscourseTopic) => Effect.Effect<never, DiscourseApiError, CreateTopicPostPMResponseContent>
  readonly getOrCreateTopic: (post: NewDiscourseTopic) => Effect.Effect<never, DiscourseApiError, GetTopicResponseContent>
  readonly getOrCreateTopicAs: (effectiveUsername: string, post: NewDiscourseTopic) => Effect.Effect<never, DiscourseApiError, GetTopicResponseContent>
  readonly createPost: (post: NewDiscoursePost) => Effect.Effect<never, DiscourseApiError, CreateTopicPostPMResponseContent>
  readonly createPostAs: (effectiveUsername: string, post: NewDiscoursePost) => Effect.Effect<never, DiscourseApiError, CreateTopicPostPMResponseContent>
  readonly acceptPost: (post: DiscoursePost) => Effect.Effect<never, ParseError | FetchError | HttpError | JsonBodyError, OperationSuccessResponse>
  readonly getTopic: (id: string) => Effect.Effect<never, DiscourseApiError, GetTopicResponseContent>
  readonly syncSso: (userDetails: SsoUserDetails) => Effect.Effect<never, DiscourseApiError, DiscoursePrivateUser>
  readonly getUser: (username: string) => Effect.Effect<never, DiscourseApiError, DiscoursePublicUser>
  readonly getUserAdminDetails: (userid: number) => Effect.Effect<never, FetchError | ParseError, DiscoursePrivateUser>
  readonly getUserByExternalId: (external_id: string) => Effect.Effect<never, DiscourseApiError, DiscoursePublicUser>
}

export const DiscourseService: Context.Tag<DiscourseService> = Context.Tag<DiscourseService>()

// const effectfulRequest = <ArgRecord, RequestResult>(fetch:(input: ArgRecord, init: RequestInit | undefined) => Promise<RequestResult>) => {
//   const go = (input:ArgRecord) => {
//     return Effect.tryCatchPromise(
//       () => fetch(input, undefined),
//       (error) => new FetchError({request: input, error})
//     )
//   }
//   return go
// }

export const defaultHttpSchedule = pipe(  
  Schedule.exponential(Duration.seconds(1), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(10))),
  Schedule.compose(Schedule.elapsed()),
  Schedule.whileOutput(Duration.lessThanOrEqualTo(Duration.seconds(30))),
);

// arg: Record<string, never>, init?: RequestInit | undefined) => Promise<ApiResponse<
const requestFx = <Args,ResponseData>(fetch:(arg: Args, init?: RequestInit | undefined) => Promise<ApiResponse<ResponseData>>, arg:Args):Effect.Effect<never, FetchError, ResponseData> => {
  return pipe(
    Effect.tryCatchPromise(
      () => fetch(arg, undefined),
      (error) => new FetchError({request: arg, error})
    ),
    // Effect.tap( response => { console.log(response); return Effect.unit() }),
    // Effect.map( response => response as unknown as Response),
    // Effect.flatMap(jsonBody),
    Effect.map(response => response.data as ResponseData),
    Effect.retry<never, FetchError, Duration.Duration>(defaultHttpSchedule)
  )
}

const requestJson = <R>(input: any, init: RequestInit | undefined) => pipe(
  request(input, init),
  Effect.map(jsonBody),
  Effect.map(x => x as R)
)

const configureDiscourseService = (api: DiscourseApiConfiguration): Effect.Effect<never, never, DiscourseService> => {
  
  const discourse = Fetcher.for<DiscoursePaths>()

  discourse.configure({
    baseUrl: api.baseUrl,
    init: {
      headers: {
        "Api-Key": api.apiKey,
        "Api-Username": api.apiUsername,
        "Accept": "application/json"
      },
      redirect: 'error'
    }
  })

  // const site = discourse.path("/site.json").method('get').create();

  return Effect.sync(() => ({
      getSite: ():Effect.Effect<never, DiscourseApiError, GetSiteResponseContent> => requestFx(discourse.path("/site.json").method('get').create(), {}),
      listCategories: ():Effect.Effect<never, DiscourseApiError, Chunk.Chunk<DiscourseCategory>> => pipe(
        requestFx(discourse.path("/categories.json").method('get').create(), {include_subcategories: true}),
        // Effect.tap( (response) => pipe(response, JSON.stringify, console.log, Effect.unit)),
        Effect.flatMap(extractCategoriesFrom),
        // Effect.catchAll((error) => { console.log("failed to extract because", error); return Effect.fail(error)}),
        // Effect.map( response => response.category_list.categories ),
        // Effect.map(Chunk.fromIterable),
        // Effect.flatMap(Effect.forEach(category => pipe(category, decodeCategory, (pr => PR.isSuccess(pr) ? Effect.succeed(pr.right) : Effect.fail(pr.left[0]))))),
      ),
      listCategoryTopics: discourse.path("/c/{slug}/{id}/none.json").method('get').create(),
      listSubcategoryTopics: discourse.path("/c/{category}/{subcategory}/{id}.json").method('get').create(),
      listGroups: discourse.path("/groups.json").method('get').create(),
      listTags: discourse.path("/tags.json").method('get').create(),
      listPublicUsers: ():Effect.Effect<never, DiscourseApiError, Chunk.Chunk<DiscoursePublicUserItem>> => pipe(
        requestFx(discourse.path("/directory_items.json").method('get').create(), {period:"all", order:"post_count"}),
        Effect.map( response => response.directory_items),
        Effect.map(Chunk.fromIterable),
        Effect.map(Chunk.map(decodePublicUserItem)),
        Effect.flatMap(Effect.forEach( pr => PR.isSuccess(pr) ? Effect.succeed(pr.right) : Effect.fail(pr.left[0])))
      ),
      // listUsersPublic: discourse.path("/directory_items.json").method('get').create(),
      listBadges: discourse.path("/admin/badges.json").method('get').create(),
      getTopic: (id:string):Effect.Effect<never, DiscourseApiError, GetTopicResponseContent> => requestFx(discourse.path("/t/{id}.json").method('get').create(), {id}),
      // getTopicByExternalId: (external_id:string):Effect.Effect<never, DiscourseApiError, GetTopicResponseContent> => request(``, {}), //requestFx(discourse.path("/t/ex.json").method('get').create(), {id}),
      getTopicByExternalId: getTopicByExternalIdAt(api),
      getPost: discourse.path("/posts/{id}.json").method('get').create(),
      getUser: (username:string):Effect.Effect<never, DiscourseApiError, DiscoursePublicUser> => pipe(
        requestFx(discourse.path("/u/{username}.json").method('get').create(), {username}),
        // Effect.tap( (response) => {console.log(response.user); return Effect.unit() }),
        // Effect.map((response) => decodeMinimalUser(response.user)),
        Effect.map(response => decodePublicUser(response.user)),
        Effect.flatMap( parsedUser => PR.isSuccess(parsedUser) ? Effect.succeed(parsedUser.right) : Effect.fail(parsedUser.left[0]))
        // Effect.flatMap( (response) => decodeUser(response.user)),
      ),
      getUserAdminDetails: (userid: number) => pipe(
        requestFx(discourse.path("/admin/users/{id}.json").method('get').create(), {id:userid}),
        Effect.map(decodePrivateUser),
        Effect.flatMap( parsedUser => PR.isSuccess(parsedUser) ? Effect.succeed(parsedUser.right) : Effect.fail(parsedUser.left[0]))
      ),
      getUserByExternalId: (external_id:string):Effect.Effect<never, DiscourseApiError, DiscoursePublicUser> => pipe(
        requestFx(discourse.path("/u/by-external/{external_id}.json").method('get').create(), {external_id}),
        // Effect.tap( (response) => {console.log(response.user); return Effect.unit() }),
        Effect.map((response) => decodePublicUser(response.user)),
        Effect.flatMap( parsedUser => PR.isSuccess(parsedUser) ? Effect.succeed(parsedUser.right) : Effect.fail(parsedUser.left[0]))
        // Effect.flatMap( (response) => decodeUser(response.user)),
      ),
      createTopic: createTopicAt(api),
      createTopicAs: createTopicAsUserAt(api),
      getOrCreateTopic: getOrCreateTopicAt(api),
      getOrCreateTopicAs: getOrCreateTopicAsUserAt(api),
      createPost: createPostAt(api),
      createPostAs: createPostAsUserAt(api),
      acceptPost: acceptPostAt(api),
      syncSso: createOrUpdateSsoUserAt(api),
      search: () => requestJson<SearchResponseContent>(discourse.path("/search.json").method('get').create(), {}),
    }))
}

export const makeDiscourseService = (config: DiscourseApiConfiguration) =>
  Layer.effect(DiscourseService, configureDiscourseService(config) )

