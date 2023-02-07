import { paths as DiscoursePaths, operations } from './discourse-openapi';
import { Fetcher } from 'openapi-typescript-fetch';

export interface DiscourseApiConfiguration {
  baseUrl: string
  apiKey: string
  apiUsername: string
  discourseConnectSecret: string
}
export const discourseAPI = ({baseUrl, apiKey, apiUsername}:DiscourseApiConfiguration) => {

  const discourse = Fetcher.for<DiscoursePaths>()

  discourse.configure({
    baseUrl: baseUrl,
    init: {
      headers: {
        "Api-Key": apiKey,
        "Api-Username": apiUsername,
        "Accept": "application/json"
      },
      redirect: 'error'
    }
  })

  return {
    getSite: discourse.path("/site.json").method('get').create(),
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
    getUser: discourse.path("/u/{username}.json").method('get').create(),
    getUserByExternalId: discourse.path("/u/by-external/{external_id}.json").method('get').create()
  };  
}

export type GetTopicContent = operations["getTopic"]["responses"]["200"]["content"]["application/json"]