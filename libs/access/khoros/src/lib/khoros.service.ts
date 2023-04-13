import {
  Effect,
  Layer,
  Context,
  pipe,
  Option,
  Duration,
  Chunk,
  ParseResult as PR
} from '@neo4j-cc/prelude';
import { FetchError } from '@neo4j-cc/access-http';
import { ApiResponse, ApiError, Fetcher } from 'openapi-typescript-fetch';
import { KhorosV2 } from './generated';
import { QueryASingleCollection, Item } from './generated/models/quicktypes';
import {
  KhorosAuthor,
  KhorosBoard,
  KhorosKudo,
  KhorosMessage,
} from './khoros-schemas';

export class KhorosError {
  readonly _tag = 'KhorosError';
  constructor(readonly error: unknown) {}
}

export interface KhorosApiConfig {
  baseUrl: string;
  login: string;
  password: string;
}

export interface GetAllMessagesArgs {
  pageSize: number;
  pageLimit: number;
}
export interface GetMessagesOnDateArgs {
  day: Date;
}
export interface GetUserByIdArgs {
  id: string;
}
export interface GetUsersByIdRangeArgs {
  from: number;
  to: number;
}
export interface GetMessagesWithCursor {
  cursor?: string;
  limit?: number;
}

export interface GetMessageOnDateWithCursor extends GetMessagesOnDateArgs {
  cursor?: string;
  limit?: number;
}

export interface KhorosService {
  readonly query: <RequestResult>(args: {
    q?: string;
  }) => Effect.Effect<never, FetchError, RequestResult>;
  readonly getMessageById: (
    messageId: string
  ) => Effect.Effect<never, FetchError | KhorosError, KhorosMessage>;
  readonly getLatestMessages: () => Effect.Effect<
    never,
    FetchError | KhorosError,
    Chunk.Chunk<Item>
  >;
  readonly getMessagesOnDate: (
    args: GetMessagesOnDateArgs
  ) => Effect.Effect<never, FetchError, Chunk.Chunk<Item>>;
  readonly getAllMessagesOnDate: ({
    day,
  }: {
    day: Date;
  }) => Effect.Effect<never, FetchError, Chunk.Chunk<Item>>;
  readonly getMessagesWithCursor: (
    args: GetMessagesWithCursor
  ) => Effect.Effect<
    never,
    FetchError,
    { items: Item[]; cursor: string | undefined }
  >;
  readonly getAllMessages: <A>(
    pager: (page: Item[]) => Effect.Effect<never, never, A>
  ) => Effect.Effect<never, FetchError, Chunk.Chunk<A>>;
  readonly getBoards: () => Effect.Effect<
    never,
    FetchError | KhorosError,
    Chunk.Chunk<KhorosBoard>
  >;
  readonly getAllUserIDs: () => Effect.Effect<
    never,
    FetchError,
    Chunk.Chunk<Item>
  >;
  // readonly getUserById: (args:GetUserByIdArgs) => Effect.Effect<never, FetchError, readonly Item[]>
  readonly getUserById: (
    args: GetUserByIdArgs
  ) => Effect.Effect<
    never,
    FetchError | KhorosError | PR.ParseError,
    Option.Option<KhorosAuthor>
  >;
  readonly getUsersWithinRange: (
    args: GetUsersByIdRangeArgs
  ) => Effect.Effect<never, FetchError, Chunk.Chunk<Item>>;
  readonly getTagsForMessage: (
    messageId: string
  ) => Effect.Effect<never, FetchError | KhorosError, readonly string[]>;
  readonly getLabelsForMessage: (
    messageId: string
  ) => Effect.Effect<never, FetchError | KhorosError, readonly string[]>;
  readonly getKudosForMessage: (
    messageId: string
  ) => Effect.Effect<
    never,
    FetchError | PR.ParseError,
    Chunk.Chunk<KhorosKudo>
  >;
  readonly getCustomTagsForMessage: (
    messageId: string
  ) => Effect.Effect<never, FetchError | KhorosError, readonly string[]>;
}

export const KhorosService =
  Context.Tag<KhorosService>();

// export const requestEffect = <RequestArgs, RequestResult>(f:(args:RequestArgs) => Promise<RequestResult>, args:RequestArgs) => {
//    return Effect.tryCatchPromise(
//     () => f(args),
//     (error) => new FetchError(error)
//    )
// }
