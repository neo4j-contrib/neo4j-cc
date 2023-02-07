import {pipe, Chunk, ReadonlyArray} from "@neo4j-cc/prelude"

/* eslint-disable @typescript-eslint/no-empty-interface */
import * as S from "@fp-ts/schema/Schema";
import * as P from "@fp-ts/schema/Parser";
import * as PE from "@fp-ts/schema/ParseError";
import * as Order from "@fp-ts/core/typeclass/Order";

import { Item } from './generated/models/quicktypes';
import * as Equivalence from '@fp-ts/data/Equivalence'

export const KhorosAvatar = S.struct({
  type: S.literal('avatar'),
  profile: S.string,
  message: S.string,
  inline: S.string,
  favicon: S.string,
  print: S.string
})

export const KhorosRank = S.struct({
  type: S.literal("rank"),
  id: S.string,
  name: S.string,
  position: S.number,
  bold: S.boolean,
  color: S.optional(S.string),
  rank_status: S.string,
  icon_left: S.optional(S.string)
})

export const LiqlQuery = S.struct({
  query: S.string
})

export const KhorosAuthor = S.struct({
  type:      S.literal('user'),
  id:        S.string,
  href:      S.string,
  view_href: S.string,
  login:     S.string,
  sso_id:    S.optional(S.string),
  email:     S.string,
  web_page_url: S.optional(S.string),
  first_name: S.optional(S.string),
  last_name: S.optional(S.string),
  biography: S.optional(S.string),
  location: S.optional(S.string),
  avatar:  KhorosAvatar,
  kudos_received: LiqlQuery,
  kudos_given: LiqlQuery,
  solutions_authored: LiqlQuery,
  topics: LiqlQuery,
  threads_participated: LiqlQuery,
  images: LiqlQuery,
  public_images: LiqlQuery,
  albums: LiqlQuery,
  videos: LiqlQuery,
  user_badges: S.unknown,
  following: LiqlQuery,
  followers: LiqlQuery,
  language: S.string,
  metrics: S.unknown,
  settings: LiqlQuery,
  registration_data: S.unknown,
  mailbox: S.unknown,
  banned: S.boolean,
  deleted: S.boolean,
  roles: LiqlQuery,
  messages: LiqlQuery,
  reviews: LiqlQuery,
  last_visit_time: S.string,
  date_pattern: S.string,
  friendly_date_enabled: S.boolean,
  friendly_date_max_age: S.number,
  remember_password: S.boolean,
  online_status: S.string,
  personal_info_privacy: S.string,
  email_address_privacy: S.string,
  online_status_privacy: S.string,
  rank: KhorosRank
})

export interface KhorosAuthor extends S.Infer<typeof KhorosAuthor> {}

export const decodeAuthor = P.decode<KhorosAuthor>(KhorosAuthor)

export const KhorosBoardReference = S.struct({
  type: S.literal("board"),
  id: S.string, // "graph_platform",
  href: S.string, // "/boards/graph_platform",
  view_href: S.string // "https://community.neo4j.com/t5/neo4j-graph-platform/bd-p/graph_platform"
})

export const KhorosMessage = S.struct({
  type: S.literal("message"),
  id: S.string, // "62751",
  href: S.string, // "/messages/62751",
  view_href: S.string, // "https://community.neo4j.com/t5/neo4j-graph-platform/adjacency-matrix/td-p/62751",
  canonical_url: S.optional(S.string), 
  author: S.partial(KhorosAuthor),
  subject: S.string, // "Adjacency matrix",
  seo_title: S.optional(S.string), 
  seo_description: S.optional(S.string),
  search_snippet: S.optional(S.string), // "Hi everyone \n I would like to find the adjacency matrix of the following bipartite graph \n      \n if the link exists, the matrix takes the value revenue. otherwise, it takes 0. \n   MATCH  (c:customer...",
  body: S.string, // "<P>Hi everyone</P>\n<P>I would like to find the adjacency matrix of the following bipartite graph</P>\n<P><span class=\"lia-inline-image-display-wrapper lia-image-align-inline\" image-alt=\"redha_benhisse1_0-1669936093203.jpeg\" style=\"width: 400px;\"><img src=\"https://community.neo4j.com/t5/image/serverpage/image-id/7678iE097F6BBC2643319/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400\" role=\"button\" title=\"redha_benhisse1_0-1669936093203.jpeg\" alt=\"redha_benhisse1_0-1669936093203.jpeg\" /></span></P>\n<P>if the link exists, the matrix takes the value revenue. otherwise, it takes 0.</P>\n<PRE dir=\"ltr\"><CODE class=\"hljs language-cypher\"><SPAN class=\"hljs-keyword\">MATCH</SPAN> (c:customer)\n<SPAN class=\"hljs-keyword\">WITH</SPAN><SPAN class=\"hljs-functionCall\"> <SPAN class=\"hljs-built_in\">collect</SPAN>(c)</SPAN> <SPAN class=\"hljs-keyword\">AS</SPAN> cust\n<SPAN class=\"hljs-keyword\">UNWIND</SPAN> cust <SPAN class=\"hljs-keyword\">AS</SPAN> a\n<SPAN class=\"hljs-keyword\">MATCH</SPAN> (p:part)\n<SPAN class=\"hljs-keyword\">WITH</SPAN><SPAN class=\"hljs-functionCall\"> <SPAN class=\"hljs-built_in\">collect</SPAN>(p)</SPAN> <SPAN class=\"hljs-keyword\">AS</SPAN> par\n<SPAN class=\"hljs-keyword\">UNWIND</SPAN> par <SPAN class=\"hljs-keyword\">AS</SPAN> b\n<SPAN class=\"hljs-keyword\">RETURN</SPAN> a.id <SPAN class=\"hljs-keyword\">AS</SPAN> cutomer, b.id <SPAN class=\"hljs-keyword\">AS</SPAN> part, \n<SPAN class=\"hljs-keyword\">CASE</SPAN> \n<SPAN class=\"hljs-keyword\">WHEN</SPAN><SPAN class=\"hljs-functionCall\"> <SPAN class=\"hljs-built_in\">EXISTS</SPAN>((a)</SPAN>-[r:customer_to_part]-&gt;(b)) <SPAN class=\"hljs-keyword\">THEN</SPAN> <SPAN class=\"hljs-number\">r.revenue</SPAN> \n<SPAN class=\"hljs-keyword\">ELSE</SPAN> <SPAN class=\"hljs-number\">0</SPAN> \n<SPAN class=\"hljs-keyword\">END</SPAN> <SPAN class=\"hljs-keyword\">AS</SPAN> value</CODE></PRE>\n<P>But this does not work.</P>\n<P>Can you please help me to find the right matrix</P>\n<P> </P>",
  teaser: S.string, // "",
  board: KhorosBoardReference,
  conversation: S.any,
  topic: S.struct({
    type: S.literal("message"),
    id: S.string, // "62751",
    href: S.string, // "/messages/62751",
    view_href: S.string, // "https://community.neo4j.com/t5/neo4j-graph-platform/adjacency-matrix/m-p/62751#M37078"
  }),
  post_time: S.string, // "2022-12-01T15:14:50.517-08:00",
  post_time_friendly: S.string, // "12-01-2022",
  depth: S.number, // 0,
  read_only: S.boolean, // false,
  edit_frozen: S.boolean, // false,
  language: S.string, // "EN",
  can_accept_solution: S.boolean, // false,
  placeholder: S.boolean, // false,
  is_solution: S.boolean, // false,
  helpfulness_allowed: S.optional(S.boolean),
  solution_data: S.any,
  metrics: S.any,
  current_revision: S.any,
  contributors: S.optional(LiqlQuery),
  kudos: LiqlQuery,
  tags: LiqlQuery,
  labels: LiqlQuery,
  images: LiqlQuery,
  videos: LiqlQuery,
  attachments: LiqlQuery,
  replies: LiqlQuery,
  ratings: LiqlQuery,
  custom_tags: LiqlQuery,
  moderation_status: S.string, // "approved",
  visibility_scope: S.string, // "public",
  content_workflow: S.optional(S.any), 
  user_context: S.any, 
  device_id: S.optional(S.string), // "firefox_106_0",
  popularity: S.number, // -1439.4128711111111,
  excluded_from_kudos_leaderboards: S.boolean, // false,
  is_promoted: S.boolean, // false
  latest_version: S.optional(S.any), 
  parent: S.optional(S.struct({
    type: S.literal("message"),
    id: S.string, // "61787",
    href: S.string, // "/messages/61787",
    view_href: S.string // "https://community.neo4j.com/t5/neo4j-graph-platform/storing-amp-querying-collection-of-graphs/m-p/61787#M36535"
  })),
})


export interface KhorosMessage extends S.Infer<typeof KhorosMessage> {}

export const decodeMessage = P.decode<KhorosMessage>(KhorosMessage)

export const equivalentBySsoId = Equivalence.make<KhorosAuthor>((that) => (self) => (that.sso_id === self.sso_id))

export const equivalentByItemId = Equivalence.make<Pick<Item, "id">>((that) => (self) => (that.id === self.id))

export const dedupeBySsoId = (chunks:Chunk.Chunk<KhorosAuthor>) => pipe(
  chunks,
  Chunk.toReadonlyArray,
  ReadonlyArray.uniqBy(equivalentBySsoId),
  Chunk.fromIterable
)

export const KhorosBoard = S.struct({
  type: S.literal("board"),
  id: S.string, // "graph_platform",
  href: S.string, // "/boards/graph_platform",
  view_href: S.string, // "https://community.neo4j.com/t5/neo4j-graph-platform/bd-p/graph_platform",
  conversation_style: S.string, // "forum",
  title: S.string, // "Neo4j Graph Platform",
  short_title: S.string, // "Neo4j Graph Platform",
  description: S.string, // "",
  parent_category: S.any,
  root_category: S.any, 
  ancestor_categories: LiqlQuery,
  language: S.string, // "en",
  hidden: S.boolean, // false,
  messages: LiqlQuery, 
  topics: LiqlQuery,
  views: S.number, // 36696859,
  available_statuses: S.any,
  allowed_labels: S.string, // "predefined-only",
  require_thread_root_label: S.boolean, // true,
  date_pattern: S.string, // "MM-dd-yyyy",
  friendly_date_enabled: S.boolean, // false,
  friendly_date_max_age: S.number, // 31,
  announcements: S.string, // "<b>Head's Up!</b> Site maintenance this Wednesday, February 1. Disruptions expected as we <a href=\"https://community.neo4j.com/t5/general-discussions/migration-back-to-discourse/td-p/64509\">migrate the forums</a>.",
  rating: S.string, // "kudos",
  skin: S.string, // "neo4j",
  depth: S.number, // 2,
  position: S.number, // 0,
  user_context: S.any,
  image_privacy: S.string, // "private",
  nested: S.boolean, // false,
  creation_date: S.string, // "2022-05-10T11:57:04.974-07:00",
  c_exclude_tiled_nav: S.optional(S.boolean), // false
  comments_enabled: S.optional(S.boolean)
})


export interface KhorosBoard extends S.Infer<typeof KhorosBoard> {}

export const decodeBoard = P.decode<KhorosBoard>(KhorosBoard)

export const compareNumbers = (that:number) => (self:number) => (that < self) ? 1 : (that > self) ? -1 : 0

export const orderItemsByMessageDepth = Order.fromCompare<Item>((that) => (self) => compareNumbers(that.depth || 0)(self.depth || 0))

export const sortItemsByMessageDepth = Chunk.sort(orderItemsByMessageDepth)

export const dedupeById = (chunks:Chunk.Chunk<Pick<Item, "id">>) => pipe(
  chunks,
  Chunk.toReadonlyArray,
  ReadonlyArray.uniqBy(equivalentByItemId),
  Chunk.fromIterable
)