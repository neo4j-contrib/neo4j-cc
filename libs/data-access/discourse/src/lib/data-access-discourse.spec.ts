import 'cross-fetch/polyfill';

import { pipe } from "@neo4j-cc/prelude"
import * as A from "@fp-ts/core/ReadonlyArray"

import { discourseAPI, GetTopicContent } from './data-access-discourse';

describe('dataAccessDiscourse', () => {

  describe('dotenv prerequisites', () => {
    it('dotenv', () => {
      expect(process.env).toHaveProperty('NX_DISCOURSE_API_KEY')
      expect(process.env).toHaveProperty('NX_DISCOURSE_API_USER')
      expect(process.env).toHaveProperty('NX_DISCOURSE_API_URL')
      expect(process.env).toHaveProperty('NX_DISCOURSE_CONNECT_SECRET')
    });
  })

  describe('discourseAPI', () => {

    const discourse = discourseAPI({
      baseUrl: process.env.NX_DISCOURSE_API_URL || 'Missing DISCOURSE_API_URL',
      apiKey: process.env.NX_DISCOURSE_API_KEY || 'Missing NX_DISCOURSE_API_KEY',
      apiUsername: process.env.NX_DISCOURSE_API_USER || 'Missing DISCOURSE_API_USER',
      discourseConnectSecret: process.env.NX_DISCOURSE_CONNECT_SECRET || 'Missing NX_DISCOURSE_CONNECT_SECRET'
    })

    it.skip('listCategories', async () => {
      const {data} = await discourse.listCategories({include_subcategories:true})
      const xs = pipe(
        data.category_list.categories,
        A.map( (category) => [
          category.slug, 
          category.id, 
        ])
      )
      // console.log(xs)
      expect(xs).toContainEqual(['neo4j-graph-platform', 10])
    })

    it.skip('listGroups', async () => {
      const {data} = await discourse.listGroups({})
      const xs = pipe(
        data.groups,
        A.map( (group) => group.name)
      )
      // console.log(xs)
      expect(xs).toContain('ninja');
    })

    it.skip('listTags', async () => {
      const {data} = await discourse.listTags({})
      const xs = pipe(
        data.tags
      )
      // console.log(xs)
      expect(xs).toContain('cypher');
    })

    it.skip('listUsers', async () => {
      const {data} = await discourse.listUsers({flag:'active', order: 'created', asc: 'true', page: 1})
      const xs = pipe(
        data,
        A.map( user => user.name)
      )
      // console.log(xs)
      expect(xs).toContain('Michael Hunger');
    })
    
    it.skip('listUsersPublic', async () => {
      const {data} = await discourse.listUsersPublic({period:'all', order: 'post_count', page: 0})
      const xs = pipe(
        data.directory_items,
        A.map( user => user.user.username)
      )
      // console.log(xs)
      expect(xs).toContain('abk');
    })

    it.skip('getUser', async () => {
      const {data} = await discourse.getUser({username:'abk'})
      console.log(JSON.stringify(data))
      expect(data.user.username).toEqual('abk');
    })

    it.skip('getSite', async () => {
      const {data} = await discourse.getSite({})
      // console.log(data.post_types)  // `post_types` is reverse map for name-->post_type_id
      const xs = Object.keys(data.post_types)
      expect(xs).toContain('regular')
    })

    it.skip('listBadges', async () => {
      const {data} = await discourse.listBadges({})
      const xs = pipe(
        data.badges,
        A.map( user => user.name)
      )
      console.log(xs)
      expect(xs).toContain('Neo4j Ninja');
    })
    it.skip('listCategoryTopics', async () => {
      const {data} = await discourse.listCategoryTopics({slug:'neo4j-graph-platform', id: 10, page: 0, order: 'activity', ascending:"true"})
      const xs = pipe(
        data.topic_list.topics,
        A.map( topic => topic.slug)
      )
      console.log(xs)
      expect(xs).toContain('about-the-neo4j-graph-platform')
    })

    it.skip('listSubcategoryTopics', async () => {
      const {data} = await discourse.listSubcategoryTopics({
        category:'neo4j-graph-platform', 
        subcategory:'cypher',
        id: 12, page: 0, order: 'activity', ascending:"true"})
      const xs = pipe(
        data.topic_list.topics,
        A.map( topic => topic.slug)
      )
      // console.log(xs)
      expect(xs).toContain('about-the-cypher-category')
    })

  })
});
