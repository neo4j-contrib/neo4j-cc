import {pipe, Effect, Chunk, Option, ReadonlyArray} from '@neo4j-cc/prelude';

import * as PE from "@fp-ts/schema/ParseError";
import { nanoid } from 'nanoid';
import { parseISO, formatISO, isSameSecond } from 'date-fns'

import { KhorosAuthor, KhorosBoard, KhorosMessage } from '@neo4j-cc/data-access-khoros';
import { DiscourseCategory, DiscoursePrivateUser, DiscoursePublicUser, GetTopicResponseContent, NewDiscoursePost, NewDiscourseTopic, SsoUserDetails } from '@neo4j-cc/data-access-discourse';

import { HtmlParseError, htmlToMd } from '@neo4j-cc/data-access-http';

export const nameFor = (author:KhorosAuthor):string => [author.first_name || "", author.last_name || ""].join(" ")

export const khorosToSsoUserDetails = (author:KhorosAuthor):Option.Option<SsoUserDetails> => pipe(
  (author.sso_id !== undefined) 
  ? Option.some({
      // email: `khoros.${author.id}@community.neo4j.com`, // author.email ABKTODO: re-run user migration with real emails
      email: author.email, // ABKTODO: re-run user migration with real emails
      external_id: author.sso_id, 
      name: nameFor(author),
      username: author.login,
      author: false
    })
  : Option.none
)

export const externalIdFor = (message:KhorosMessage) => `khoros_${message.id}`

export const externalUrlFor = (message:KhorosMessage) => message.view_href

export const khorosToDiscourseTopic = (topic:KhorosMessage, category:Option.Option<number>, tags:string[]):Effect.Effect<never, HtmlParseError, NewDiscourseTopic> => pipe(
  Effect.Do(),
  Effect.bind("markdown", () => pipe(
    htmlToMd(topic.body),
    Effect.map((s) => (s.length < 2) ? `${s}\n(original post was too short)` : s)
  )),
  Effect.flatMap(({markdown}) => Effect.succeed<NewDiscourseTopic>(
    {
      title: (topic.subject.length > 10) ? topic.subject : `${topic.subject} (${nanoid()})`,
      external_id: externalIdFor(topic),
      created_at: topic.post_time,
      embed_url: externalUrlFor(topic),
      raw: (markdown.length > 10) ? markdown : `${markdown}\n\n(migrated from ${externalUrlFor(topic)})`,
      ...pipe(category, Option.match( () => ({}), (categoryNumber) => ({category:categoryNumber}))),
      tags
    }
  ))
)

export const khorosToDiscoursePost = (topic_id: number, post:KhorosMessage):Effect.Effect<never, HtmlParseError, NewDiscoursePost> => pipe(
  Effect.Do(),
  Effect.bind("markdown", () => pipe(
    htmlToMd(post.body),
    Effect.map((s) => (s.length < 20) ? `${s}\n(migrated from khoros post ${post.view_href})` : s)
  )),
  Effect.flatMap(({markdown}) => Effect.succeed<NewDiscoursePost>(
    {
      topic_id,
      created_at: post.post_time,
      raw: (markdown.length > 10) ? markdown : `${markdown}\n\n(migrated from ${externalUrlFor(post)})`
    }
  ))
)

export const findDiscourseTopicForKhorosMessage = (khorosMessageId:string, topicPairs:Chunk.Chunk<[KhorosMessage, GetTopicResponseContent]>) => pipe(
  topicPairs,
  Chunk.findFirst( topicPair => topicPair[0].id === khorosMessageId),
  Option.flatMap( foundPair => (foundPair[1].id !== undefined) ? Option.some(foundPair[1]) : Option.none)
)

export const topicHasPost = (topic:GetTopicResponseContent, post:NewDiscoursePost, postedAsUsername:string) => pipe(
  (topic.post_stream !== undefined) ? Option.some(topic.post_stream) : Option.none,
  Option.flatMap(post_stream => (post_stream.posts !== undefined) ? Option.some(post_stream.posts) : Option.none),
  Option.flatMap(posts => pipe(
    Chunk.fromIterable(posts),
    Chunk.findFirst(existingPost => (existingPost.created_at === post.created_at) && (existingPost.username === postedAsUsername))
  )),
  Option.match(
    () => false,
    (_) => true
  )
)

export const areSameTimestamp = (a: string|undefined, b: string|undefined) => ((a !== undefined) && (b !== undefined))
    ? isSameSecond(parseISO(a), parseISO(b))
    : false

export const showTime = (a:string|undefined) => (a !== undefined) 
    ? formatISO(parseISO(a))
    : 'unknown'

export const findPostInTopic = (topic:GetTopicResponseContent, newPost:NewDiscoursePost, postedAsUsername:string) => pipe(
  (topic.post_stream !== undefined) ? Option.some(topic.post_stream) : Option.none,
  Option.flatMap(post_stream => (post_stream.posts !== undefined) ? Option.some(post_stream.posts) : Option.none),
  Option.flatMap(posts => pipe(
    Chunk.fromIterable(posts),
    // Chunk.map(existingPost => {console.log(`\texisting post: ${showTime(existingPost.created_at)} by ${existingPost.username}`); return existingPost}),
    Chunk.findFirst(existingPost => (areSameTimestamp(existingPost.created_at, newPost.created_at) && (existingPost.username === postedAsUsername))),
    // Option.map( (a) => {console.log("\ttmatched!"); return a})
  )),
)

const khorosBoardIds = [
  'graph_platform',
  'drivers_stacks',
  'integrations',
  'projects_collaboration',
  'courses_certification',
  'graphacademy_discussions',
  'news',
  'about',
  'hello',
  'community_suggestions',
  'general_discussions',
  'Sporerside_674',
  'North_Stevie_621',
  'The_Woodlands_920',
  'groupHub_testforum-board',
  'groupHub_testblog-board',
  'groupHub_testtkb-board',
  'groupHub_testidea-board',
  'Claudeville_756',
  'events',
  'nodes',
  'release_notes',
  'Weekly_Challenge'
]

const discourseCategories = [
  'general',
  'neo4j-graph-platform',
  'drivers-stacks',
  'integrations',
  'community-content-blogs',
  'projects-collaboration',
  'i18n',
  'certified-professionals', // private
  'local-groups',
  'conferences-meetups-events',
  'jobs-consulting-opportunities',
  'staff', // private
  'lounge', // private
  'feedback-requests',
  'templates', // private
  'neo4j-educators-private', // private
  'neo4j-internal' // private
]

export const discourseCategoryNumberFor = (board:Partial<KhorosBoard>, categories: readonly DiscourseCategory[]) => pipe(
  khorosBoardIdToDiscourseCategorySlug(board),
  (slug) => pipe(categories, ReadonlyArray.findFirst( (category) => (category.slug === slug))),
  Option.map( foundCategory => foundCategory.id)
)

export const khorosBoardIdToDiscourseCategorySlug = (board:Partial<KhorosBoard>) => {

  switch (board.id) {
    case 'graph_platform': return 'neo4j-graph-platform'
    case 'drivers_stacks': return 'drivers-stacks'
    case 'integrations': return 'integrations'
    case 'projects_collaboration': return 'projects-collaboration'
    case 'courses_certification': return 'general'
    case 'graphacademy_discussions': return 'general'
    case 'news': return 'community-content-blogs'
    case 'about': return 'general'
    case 'hello': return 'general'
    case 'community_suggestions': return 'feedback-requests'
    case 'general_discussions': return 'general'
    case 'events': return 'conferences-meetups-events'
    case 'nodes': return 'conferences-meetups-events'
    case 'release_notes': return 'general'
    // case 'Sporerside_674': return 'archive'
    // 'North_Stevie_621',
    // 'The_Woodlands_920',
    // 'groupHub_testforum-board',
    // 'groupHub_testblog-board',
    // 'groupHub_testtkb-board',
    // 'groupHub_testidea-board',
    // 'Claudeville_756',
    // 'Weekly_Challenge'
    default: return 'archive'
  }
}

export const discourseUserFromAuthor = (author:Partial<KhorosAuthor>, khorosSsoDiscourse: Chunk.Chunk<[KhorosAuthor, SsoUserDetails, DiscoursePrivateUser]>) => pipe(
  khorosSsoDiscourse,
  Chunk.findFirst( ksd => (ksd[0].login === author.login)),
  Option.map(a => a[2])
)