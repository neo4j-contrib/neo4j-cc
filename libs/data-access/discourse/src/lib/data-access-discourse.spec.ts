import 'cross-fetch/polyfill';

import { pipe } from "@effect-ts/core"
import * as Effect from "@effect-ts/core/Effect"
import * as A from "@effect-ts/core/Collections/Immutable/Array"
import * as O from "@effect-ts/core/Option"
import * as L from "@effect-ts/monocle/Lens"
import * as LO from "@effect-ts/monocle/Optional"

import { discourseAPI, GetTopicContent } from './data-access-discourse';

import * as dotenv from "dotenv"

dotenv.config()


describe('dataAccessDiscourse', () => {

  describe('dotenv prerequisites', () => {
    it('dotenv', () => {
      expect(process.env).toHaveProperty('DISCOURSE_API_TOKEN')
      expect(process.env).toHaveProperty('DISCOURSE_API_USER')
      expect(process.env).toHaveProperty('DISCOURSE_API_URL')
    });
  })

  describe('discourseAPI', () => {

    const discourse = discourseAPI({
      baseUrl: process.env.DISCOURSE_API_URL || 'Missing DISCOURSE_API_URL',
      apiKey: process.env.DISCOURSE_API_TOKEN || 'Missing DISCOURSE_API_TOKEN',
      apiUsername: process.env.DISCOURSE_API_USER || 'Missing DISCOURSE_API_USER'
    })

    it.skip('listCategories', async () => {
      const {data} = await discourse.listCategories({include_subcategories:true})
      const xs = pipe(
        data.category_list.categories,
        A.map( (category) => [
          category.slug, 
          category.id, 
          // take a peek at sub-categories...
          // pipe(category.subcategory_list,
          //   O.fromNullable,
          //   O.map( subs => pipe(subs, A.map(sub => `${sub.slug}/${sub.id}`))),
          //   O.getOrElse(() => [])
          // )
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
        data.tags,
        O.fromNullable,
        O.map( tags => pipe(tags, A.map( tag => tag.text))),
        O.getOrElse(() => [])
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


    it.skip('getTopic', async () => {
      const posts = pipe(
        L.id<GetTopicContent>(),
        L.prop("post_stream"),
        L.asOptional,
        LO.fromNullable,
        LO.prop('posts'),
        LO.fromNullable
      )
      
      const {data} = await discourse.getTopic({id:"41054"})
      const xs = pipe(
        data,
        posts.getOption,
        O.map( posts => pipe(
          posts,
          A.map( post => post.id)
        )),
        O.getOrElse(() => [])
      )
      // console.log(xs)
      expect(xs).toContain(77777);
    })


    it.skip('getPost', async () => {
      const {data} = await discourse.getPost({id:"77777"})
      // console.log(data)
      expect(data.id).toEqual(77777);
    })
  })
});
