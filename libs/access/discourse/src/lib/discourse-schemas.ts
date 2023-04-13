import { pipe, Effect, Chunk, Option, Schema as S,  Parser as P, ParseResult as PR, Equivalence, Either} from '@neo4j-cc/prelude';

/* eslint-disable @typescript-eslint/no-empty-interface */

import { ListCategoriesResponseContent } from './discourse.types';

export const SsoRecord = S.struct({
  user_id: S.number, // 1553,
  external_id: S.string, // "google-oauth2|100582547852797346634",
  created_at: S.string, // "2018-11-23T17:24:30.231Z",
  updated_at: S.string, // "2023-01-24T11:23:46.688Z",
  external_username: S.string, // "mengjiakang2017",
  external_name: S.string, // "Marjorie Kang",
  external_avatar_url: S.nullable(S.string), // null,
  external_profile_background_url: S.nullable(S.string), // null,
  external_card_background_url: S.nullable(S.string), // null
});

export const DiscourseGroup = S.struct({
  id: S.number, // 11,
  automatic: S.boolean, // true,
  name: S.string, // "trust_level_1",
  display_name: S.optional(S.string), // "trust_level_1",
  user_count: S.number, // 5009,
  mentionable_level: S.number, // 0,
  messageable_level: S.number, // 0,
  visibility_level: S.number, // 4,
  primary_group: S.boolean, // false,
  title: S.nullable(S.string), // null,
  grant_trust_level: S.nullable(S.number), // null,
  incoming_email: S.nullable(S.string), // null,
  has_messages: S.boolean, // false,
  flair_url: S.nullable(S.string), // null,
  flair_bg_color: S.nullable(S.string), // null,
  flair_color: S.nullable(S.string), // null,
  bio_raw: S.nullable(S.string), /// null,
  bio_cooked: S.nullable(S.string), // null,
  bio_excerpt: S.nullable(S.string), // null,
  public_admission: S.boolean, // false,
  public_exit: S.boolean, // false,
  allow_membership_requests: S.boolean, // false,
  full_name: S.nullable(S.string), // null,
  default_notification_level: S.number, // 3,
  membership_request_template: S.nullable(S.string), // null,
  members_visibility_level: S.number, // 0,
  can_see_members: S.boolean, // true,
  can_admin_group: S.boolean, // true,
  can_edit_group: S.optional(S.boolean), // true,
  publish_read_state: S.boolean, // false
});

export const DiscoursePublicUserItem = S.struct({
  id: S.number, // 84,
  likes_received: S.number, // number, 105,
  likes_given: S.number, // number, 208,
  topic_count: S.number, // number, 77,
  post_count: S.number, // 336,
  topics_entered: S.number, // number, 1024,
  posts_read: S.number, // 2428,
  days_visited: S.number, // number, 417,
  time_read: S.number, // number, 187950,
  user: S.struct({
    id: S.number, // 84,
    username: S.string, // "abk",
    name: S.string, // "Andreas Kollegger",
    avatar_template: S.string, // "/user_avatar/discourse.neo4j.com/abk/{size}/14828_2.png",
    title: S.nullable(S.string), // "Neo4j Staff",
  }),
});
export interface DiscoursePublicUserItem
  extends S.To<typeof DiscoursePublicUserItem> {}

export const parsePublicUserItem = (user: unknown) =>
  S.parseEither<DiscoursePublicUserItem, DiscoursePublicUserItem>(DiscoursePublicUserItem)(user);

export const DiscoursePublicUser = S.struct({
  id: S.number,
  username: S.string, // "mengjiakang2017",
  name: S.string, // "Marjorie Kang",
  email: S.optional(S.string),
  secondary_emails: S.optional(S.array(S.string)),
  unconfirmed_emails: S.optional(S.array(S.string)),
  avatar_template: S.string, // "/user_avatar/discourse.neo4j.com/mengjiakang2017/{size}/2197_2.png",
  created_at: S.string, // "2018-11-23T17:24:30.004Z",
  trust_level: S.number, // 2,
  title: S.nullable(S.string), // "Neo4j Certified Developer",
  time_read: S.number, // 31175,
  post_count: S.number, // 25,
  primary_group_id: S.nullable(S.number), // null,
  badge_count: S.number, // 7,
  user_fields: S.any,
  last_posted_at: S.nullable(S.string),
  last_seen_at: S.nullable(S.string), // "2022-04-13T19:59:15.563Z",
  ignored: S.boolean,
  muted: S.boolean,
  can_ignore_user: S.boolean,
  can_mute_user: S.boolean,
  can_send_private_messages: S.boolean,
  can_send_private_message_to_user: S.boolean,
  moderator: S.boolean,
  admin: S.boolean, // true,
  custom_fields: S.any, // {},
});

export interface DiscoursePublicUser
  extends S.To<typeof DiscoursePublicUser> {}

export const parsePublicUser = (user: unknown) =>
  S.parseEither<DiscoursePublicUser,DiscoursePublicUser>(DiscoursePublicUser)(user);

export const DiscoursePrivateUser = S.struct({
  id: S.number, // 19149,
  username: S.string, // "jp1",
  name: S.string, // "Jake Peterson",
  created_at: S.string, // "2023-01-24T11:23:48.389Z",
  single_sign_on_record: S.struct({
    user_id: S.number, // 19149,
    external_id: S.string, // "google-oauth2|116795048971930616852",
    created_at: S.string, // "2023-01-24T11:23:48.509Z",
    updated_at: S.string, // "2023-01-24T11:23:48.509Z",
    external_username: S.nullable(S.string), // "jp",
    external_name: S.nullable(S.string), // "Jake Peterson",
  }),
});

export interface DiscoursePrivateUser
  extends S.To<typeof DiscoursePrivateUser> {}

export const parsePrivateUser = (i: unknown) =>
  S.parseEither<DiscoursePrivateUser,DiscoursePrivateUser>(DiscoursePrivateUser)(i);

export const equivalentByExternalId = Equivalence.make<DiscoursePrivateUser>(
  (self, that) =>
    that.single_sign_on_record.external_id ===
    self.single_sign_on_record.external_id
);

export const DiscourseCategory = S.struct({
  id: S.number, // 101,
  name: S.string, // "Neo4j Internal",
  color: S.string, // "0088CC",
  text_color: S.string, // "FFFFFF",
  slug: S.string, // "neo4j-internal",
  topic_count: S.number, // 0,
  post_count: S.number, // 0,
  position: S.number, // 0,
  description: S.nullable(S.string), // "Exchange of Q&amp;A about Neo4j internals for engineering, field, support and dev-rel.",
  description_text: S.nullable(S.string), // "Exchange of Q&amp;A about Neo4j internals for engineering, field, support and dev-rel.",
  description_excerpt: S.nullable(S.string), // "Exchange of Q&amp;A about Neo4j internals for engineering, field, support and dev-rel.",
  topic_url: S.optional(S.string), // "/t/about-the-neo4j-internal-category/1989",
  read_restricted: S.boolean, // true,
  permission: S.number, // 1,
  notification_level: S.number, // 1,
  can_edit: S.boolean, // true,
  can_vote: S.optional(S.boolean),
  topic_template: S.nullable(S.string), // "",
  has_children: S.boolean, // true,
  sort_order: S.nullable(S.string), // "activity",
  sort_ascending: S.nullable(S.boolean), // false,
  show_subcategory_list: S.boolean, // true,
  num_featured_topics: S.number, // 10,
  default_view: S.nullable(S.string), // "latest",
  subcategory_list_style: S.string, // "boxes_with_featured_topics",
  default_top_period: S.string, // "quarterly",
  default_list_filter: S.string, // "all",
  minimum_required_tags: S.number, // 0,
  navigate_to_first_post_after_read: S.boolean, // false,
  topics_day: S.number, // 0,
  topics_week: S.number, // 0,
  topics_month: S.number, // 0,
  topics_year: S.number, // 0,
  topics_all_time: S.number, // 1,
  subcategory_ids: S.array(S.number), //[102,103,104,105,106,107,108,109,110,111],
  uploaded_logo: S.nullable(S.string), // null,
  uploaded_logo_dark: S.nullable(S.string),
  uploaded_background: S.nullable(S.string),
  subcategory_list: S.optional(S.array(S.any)),
});

export interface DiscourseCategory extends S.To<typeof DiscourseCategory> {}

export const parseCategory = S.parseEither<DiscourseCategory,DiscourseCategory>(DiscourseCategory);

export const extractCategoriesFrom = (
  response: ListCategoriesResponseContent
) =>
  pipe(
    Chunk.fromIterable(response.category_list.categories),
    Effect.forEach((category) =>
      pipe(
        category,
        parseCategory,
        (pr) => {
          if (Either.isLeft(pr)) {
            console.log('failed to parse category', JSON.stringify(category));
          }
          return pr;
        },
        (pr) =>
          Either.isRight(pr) ? Effect.succeed(pr.right) : Effect.fail(pr.left),
        (x) => x as Effect.Effect<never, PR.ParseError, DiscourseCategory>,
        Effect.map((parsedCategory) =>
          pipe(
            Option.fromNullable(parsedCategory.subcategory_list),
            Option.map((list) => list as DiscourseCategory[]),
            Option.map(Chunk.fromIterable),
            Option.getOrElse(() => Chunk.empty<DiscourseCategory>()),
            Chunk.concat(Chunk.of(parsedCategory))
          )
        )
      )
    ),
    Effect.map<
      Chunk.Chunk<Chunk.Chunk<DiscourseCategory>>,
      Chunk.Chunk<DiscourseCategory>
    >(Chunk.flatten)
  );
