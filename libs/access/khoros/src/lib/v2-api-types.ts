import { Brand } from '@neo4j-cc/prelude';

export const liqlCollectionNames = ['messages', 'attachments', 'users'];

export type LiCollectionName = typeof liqlCollectionNames[number];

export type LiQuery = {
  query: string;
};

export type AbsoluteURL = string & Brand.Brand<"AbsoluteURL">;

export type RelativeURL = string & Brand.Brand<"RelativeURL">;

export type EmailAddress = string & Brand.Brand<"EmailAddress">;

export type LiDateTime = string & Brand.Brand<"LiDateTime">;

export type LiDate = string & Brand.Brand<"LiDate">;

export type RawHTML = string & Brand.Brand<"RawHTML">;

export type LiModerationStatus = string & Brand.Brand<"LiModerationStatus">;

/**
 * Used to lazily allow anything until a correct
 * type has been defined.
 */
export type LiRecord = Record<string, unknown>;

export type LiList<T> = {
  list_item_type: string;
  size: number;
  items: T[];
};

export type LiUserBadge = {
  type: 'user_badge';
  badge: {
    type: 'badge';
    id: string;
    description: string;
    title: string;
    icon_url: AbsoluteURL;
    awarded: number;
    activation_date: LiDateTime;
  };
  earned_date: LiDateTime;
};

export type LiAttachment = {
  content_type: string;
  filename: string;
  filesize: number;
  href: string;
  id: string;
  /** Note: this is derived from the `message` field of the LiAttachment  */
  message: LiMessage;
};

export type LiAlbum = {
  id: string;
};

export type LiUserAvatar = {
  type: 'avatar';
  profile: AbsoluteURL;
  message: AbsoluteURL;
  inline: AbsoluteURL;
  favicon: AbsoluteURL;
  print: AbsoluteURL;
};

export type LiRank = {
  type: 'rank';
  id: string;
  name: string;
  position: number;
  bold: boolean;
  color: string; // css-color?
  roles_granted: LiQuery;
  roles_removed: LiQuery;
  formula_enabled: true;
  formula: string;
  simple_criteria: {
    type: 'simple_rank_criteria';
    role: Record<string, unknown>;
    user: Record<string, unknown>;
    number_of_posts: number;
    number_of_page_views: number;
    number_of_signins: number;
    minutes_online: number;
    minutes_since_registering: number;
    simple_formula: string;
  };
  rank_status: string;
};

export type LiPersonalDatum = Record<string, unknown>;

export type LiUser = {
  albums: LiAlbum;
  avatar: LiUserAvatar;
  banned: boolean;
  biography: string;
  bonus_points: number;
  cover_image: string;
  deleted: boolean;
  email: EmailAddress;
  first_name: string;
  followers: LiQuery;
  following: LiQuery;
  href: RelativeURL;
  id: string;
  images: LiQuery;
  is_owner: boolean;
  join_date: LiDateTime;
  kudos_given: LiQuery;
  kudos_received: LiQuery;
  kudos_weight: number;
  language: string;
  last_name: string;
  last_visit_time: LiDateTime;
  location: string;
  login: string;
  messages: LiQuery;
  nodes: LiQuery;
  online_status: 'online' | 'offline';
  personal_data?: LiPersonalDatum;
  public_images: LiQuery;
  rank: LiRank;
  registration_data: LiRecord;
  reviews: LiQuery;
  roles: LiQuery;
  settings: LiQuery;
  solutions_authored: LiQuery;
  sso_id?: string;
  threads_participated: LiQuery;
  topics: LiQuery;
  user_badges: LiList<LiUserBadge>;
  videos: LiQuery;
  view_href: RelativeURL;
  web_page_url: AbsoluteURL;
};

export type LiUserContext = {
  type: 'user_context';
  kudo: boolean;
  read: boolean;
  can_reply: boolean;
  can_kudo: boolean;
  can_delete: boolean;
};

export type LiBoard = LiRecord;

export type LiConversation = LiRecord;

export type LiMetrics = LiRecord;

export type LiRevision = LiRecord;

export type LiMessage = {
  type: 'message';
  id: string;
  href: RelativeURL;
  view_href: RelativeURL;
  author: LiUser;
  subject: string;
  search_snippet: string;
  body: RawHTML;
  teaser: string;
  board: LiBoard;
  conversation: LiConversation;
  topic: LiMessage;
  parent: LiMessage;
  post_time: LiDateTime;
  post_time_friendly: LiDate;
  depth: number;
  read_only: boolean;
  edit_frozen: boolean;
  language: string;
  can_accept_solution: boolean;
  placeholder: boolean;
  is_solution: boolean;
  solution_data: LiRecord;
  metrics: LiMetrics;
  current_revision: LiRevision;
  kudos: LiQuery;
  tags: LiQuery;
  labels: LiQuery;
  images: LiQuery;
  videos: LiQuery;
  attachments: LiQuery;
  replies: LiQuery;
  ratings: LiQuery;
  custom_tags: LiQuery;
  moderation_status: LiModerationStatus;
  user_context: LiUserContext;
  device_id: string;
  popularity: number;
  excluded_from_kudos_leaderboards: boolean;
  is_promoted: boolean;
};
