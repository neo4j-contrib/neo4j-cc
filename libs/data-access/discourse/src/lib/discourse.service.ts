import { E, L, Tag, pipe } from "@neo4j-cc/prelude"
import { FetchError } from "@neo4j-cc/data-access-http";

import { DiscourseApiConfiguration } from './data-access-discourse'

import { paths as DiscoursePaths, operations } from './discourse-openapi';
import { Fetcher } from 'openapi-typescript-fetch';

export interface DiscourseService {
  readonly log: (message: string) => E.Effect<never, never, void>
}

export const DiscourseService = Tag<DiscourseService>()

const effectfulRequest = <ArgRecord, RequestResult>(fetch:(input: ArgRecord, init: RequestInit | undefined) => Promise<RequestResult>) => {
  const go = (input:ArgRecord, init: RequestInit | undefined) => {
    return E.tryCatchPromise(
      () => fetch(input, init),
      (error) => new FetchError(error)
    )
  }
  return go
}

const configureDiscourseService = ({baseUrl, apiKey, apiUsername}: DiscourseApiConfiguration) => {
  
  const discourse = Fetcher.for<DiscoursePaths>()

  discourse.configure({
    baseUrl,
    init: {
      headers: {
        "Api-Key": apiKey,
        "Api-Username": apiUsername,
        "Accept": "application/json"
      },
      redirect: 'error'
    }
  })

  return (
    E.sync(() => ({
      log: (message: string) =>
        E.sync(() => {
          console.log(message)
        }),
      getSite: effectfulRequest(discourse.path("/site.json").method('get').create()),
      listCategories: discourse.path("/categories.json").method('get').create(),
      listCategoryTopics: discourse.path("/c/{slug}/{id}/none.json").method('get').create(),
      listSubcategoryTopics: discourse.path("/c/{category}/{subcategory}/{id}.json").method('get').create(),
      listGroups: discourse.path("/groups.json").method('get').create(),
      listTags: discourse.path("/tags.json").method('get').create(),
      listUsers: discourse.path("/admin/users/list/{flag}.json").method('get').create(),
      listUsersPublic: discourse.path("/directory_items.json").method('get').create(),
      listBadges: discourse.path("/admin/badges.json").method('get').create(),
      getTopic: discourse.path("/t/{id}.json").method('get').create(),
      getPost: discourse.path("/posts/{id}.json").method('get').create(),
      getUser: discourse.path("/u/{username}.json").method('get').create()
    })))
}

export const makeDiscourseService = (config: DiscourseApiConfiguration) =>
  L.fromEffect(DiscourseService)( configureDiscourseService(config) )


export const make = (config: DiscourseApiConfiguration) => {
  return pipe(
    config,
    configureDiscourseService,
    L.fromEffect(DiscourseService)
  )
}
