import { pipe, Effect, Layer, Logger, Chunk, Option, Duration } from '@neo4j-cc/prelude';

import * as PE from "@fp-ts/schema/ParseError";

import { Argv, CommandModule } from 'yargs';

import { 
  KhorosService,
  KhorosApiConfig,
  makeLiveKhorosServiceLayer,
  Item,
  KhorosError,
  KhorosAuthor,
  QueryASingleCollection,
  decodeAuthor
 } from '@neo4j-cc/data-access-khoros'
import {
  FileSystemError,
  FileSystemService,
  makeLocalFileSystemService
} from '@neo4j-cc/data-access-fs'

import { FetchError, HttpService, jsonBody, bufferBody, JsonBodyError, htmlToMd, HtmlParseError } from '@neo4j-cc/data-access-http';
import { ApiResponse } from 'openapi-typescript-fetch';
import { parseISO } from 'date-fns';

export type SubcommandErrors = FetchError | JsonBodyError | KhorosError | HtmlParseError | FileSystemError | PE.ParseError

interface ItemWithMarkdown extends Item {
  body_md: string
}

export interface CommandOptions {
  collection: string,
  khorosURL: string,
  khorosUser: string,
  khorosPassword: string,
  date: string,
  page: number
}

interface SubcommandArgs {
  khoros: KhorosService
}
/**
 * Map CLI options to configuration needed by service. 
 */
const toServiceConfig = (argv:CommandOptions): KhorosApiConfig => ({
  baseUrl: argv.khorosURL,
  login: argv.khorosUser,
  password: argv.khorosPassword
})

const dateOfDay = (date?:string) => (date !== undefined) ? parseISO(date) : new Date()

type CollectionName = 'users' | 'messages' | 'boards'

const pageAllUsers = ({khoros}:SubcommandArgs) => {
    const pageSize = 1000;
    return pipe(
        Effect.unfold(0, (page) => pipe(
          khoros.getUsersWithinRange({from: (page*pageSize), to: ((page+1)*pageSize) - 1}),
          Effect.delay(Duration.seconds(1)),
          Effect.map( (users) => (users.length > 0 && page < 1) ? Option.some( [users, page+1]) : Option.none ),
        )),
      // Effect.tap((pageOfMessages) => Effect.log(JSON.stringify(Chunk.toReadonlyArray(pageOfMessages)))),
      Effect.map((pageOfMessages) => pipe(pageOfMessages, Chunk.flatMap( (a) => Chunk.fromIterable(a)))),
      Effect.map(Chunk.toReadonlyArray)
    )
}

const messagePager = (page:Item[]) => pipe(
  page,
  Effect.forEach( (a) => { console.log(JSON.stringify(a)); return Effect.succeed(a) } ),
  // Effect.map( () => undefined)
)

const getAllMessages = ({khoros}:SubcommandArgs) => pipe(
  khoros.getAllMessages(messagePager),
  Effect.map(Chunk.flatten),
  Effect.map(Chunk.toReadonlyArray)
)


const getAllMessagesOnDate = ({day}:{day:Date}) => ({khoros}:SubcommandArgs) => pipe(
  khoros.getMessagesOnDate({day}),
  Effect.flatMap(Effect.forEach(appendMarkdownBody)),
  Effect.tap( (a) => { console.log(JSON.stringify(Chunk.toReadonlyArray(a))); return Effect.succeed(undefined)}),
  Effect.asUnit
)


const appendMarkdownBody = (a:Item):Effect.Effect<never, HtmlParseError, ItemWithMarkdown> => pipe(
  htmlToMd(a.body),
  Effect.map( (md) => ({...a, body_md: md}))
)

const getFirstMessageOnDate = ({day}:{day:Date}) => ({khoros}:SubcommandArgs) => pipe(
  khoros.getMessagesOnDate({day}),
  Effect.map(Chunk.head),
  Effect.flatMap(Option.match(
    () => Effect.fail(new KhorosError(`no messages found on: ${day}`)),
    (a) => Effect.succeed(a)
  )),

  Effect.flatMap(appendMarkdownBody),
  Effect.map((a) => console.log(JSON.stringify({body:a.body, body_md: a.body_md}))),
  Effect.asUnit
)

const getUsersOnPage = ({page}:{page:number}) => ({khoros}:SubcommandArgs) => pipe(
  khoros.getUsersWithinRange({from:(page*1000), to:(((page+1)*1000)-1)})
)

const showAllUserIDs = ({khoros}:SubcommandArgs) => pipe(
  khoros.getAllUserIDs(),
  Effect.map(Chunk.toReadonlyArray),
  Effect.tap((ids) => { console.log(JSON.stringify(ids)); return Effect.succeed(undefined)} ),
  Effect.asUnit
)

const pathForUser = (user:KhorosAuthor) => `./exports/khoros/users/${user.login}.json`

const writeUser = (user:KhorosAuthor) => pipe(
  Effect.service(FileSystemService), // like declaring that `FileSystemService` is required in the environment
  Effect.flatMap(({write}) => write({path: pathForUser(user), content: JSON.stringify(user) })), // use the `FileSystemService.write()` function, ignoring void result
)

const writeAllUsers = ({khoros}:SubcommandArgs) => pipe(
  khoros.getAllUserIDs(),
  Effect.flatMap(Effect.forEach( (userIdItem) => pipe(
    khoros.getUserById({id:userIdItem.id}),
    Effect.map(decodeAuthor),
    Effect.flatMap(pr => PE.isSuccess(pr) ? Effect.succeed(pr.right) : Effect.fail(pr.left[0])),
    // Effect.flatMap(Option.match(
    //   () => Effect.fail(new KhorosError(`userid not found: ${userIdItem.id}`)),
    //   (a) => Effect.succeed(a)
    // )),
    Effect.map(writeUser),
    Effect.delay(Duration.millis(250))
  ))),
  Effect.asUnit
)

const pathForUserMessages = (user:KhorosAuthor) => `./exports/khoros/messages/messages.${user.login}.json`

const writeUserMessages = (user:KhorosAuthor) => (messages:Item[]) => pipe(
  Effect.service(FileSystemService),
  Effect.flatMap(({write}) => write({path: pathForUserMessages(user), content: JSON.stringify(messages)}))
)

const getMessageAttachments = (message:Item) => pipe(
  Effect.service(KhorosService),
  Effect.flatMap((khoros) => khoros.query<QueryASingleCollection>({q:message.attachments.query})),
  Effect.map( (result) => (result.data.size > 0) ? result.data.items : [] as Item[])
)

const readAttachment = (attachment:Item) => pipe(
  Effect.service(HttpService), // like declaring that `FileSystemService` is required in the environment
  Effect.flatMap((http) => http.request(attachment.url)),
  Effect.flatMap(bufferBody)
)

const pathForAttachment = (attachment:Item) => `./exports/khoros/attachments/${attachment.href}/${attachment.filename}`

const writeAttachment = (attachment:Item, buffer:ArrayBuffer) => pipe(
  Effect.service(FileSystemService),
  Effect.flatMap( ({write}) => write({path: pathForAttachment(attachment), content: buffer}))
)
const writeAttachments = (message:Item) => pipe(
  getMessageAttachments(message),
  Effect.map(Effect.forEach ((attachment) => pipe(
    readAttachment(attachment),
    Effect.map(x => x)
  )))
)
  
  // Effect.bind("khoros", () => Effect.service(KhorosService)),
  // Effect.bind("fs", () => Effect.service(FileSystemService)),
  // Effect.bind("attachments", ({khoros}) => khoros.query<QueryASingleCollection>({q:message.attachments.query})),
  // Effect.bind("attachments", () => Effect.succeed(true))
  // Effect.flatMap(({write}) => Effect.tuple(
  //     write({path:"./here.json", content: JSON.stringify(message)}),
  //     write({path:"./here.json", content: JSON.stringify(message)}),
  // ))
// )
  
const writeSpecialUserMessages = (user:KhorosAuthor) => ({khoros}:SubcommandArgs) => pipe(
  khoros.query<QueryASingleCollection>({q:`SELECT * FROM messages WHERE author.id = '${user.id}' LIMIT 1000`}),
  Effect.map( (a) => (a.data.size > 0) ? a.data.items : [] as Item[]),
  Effect.flatMap((messages) => Effect.tuple(
    writeUserMessages(user)(messages),
    // writeMessageAttachments(messages))
  ))
)

const writeSpecialUser = ({khoros}:SubcommandArgs) => pipe(
  khoros.getUserById({id:'2'}),
  Effect.map(decodeAuthor),
  Effect.flatMap(pr => PE.isSuccess(pr) ? Effect.succeed(pr.right) : Effect.fail(pr.left[0])),
  Effect.tap( (a) => { console.log(JSON.stringify(a)); return Effect.unit() }),
  Effect.map(writeUser),
  Effect.asUnit
)

const writeBoards = ({khoros}:SubcommandArgs) => pipe(
  khoros.getBoards(),
  Effect.tap( (a) => { console.log(JSON.stringify(a)); return Effect.succeed(undefined)}),
  Effect.asUnit
)

const subcommands = (argv:CommandOptions):Record<string, (args:SubcommandArgs) => Effect.Effect<KhorosService | FileSystemService, SubcommandErrors, void>> => ({
  // 'messages': ({khoros}:{khoros:KhorosService}) => khoros.getMessagesOnDate({day:dateOfDay(argv.date)}),
  'messages': getAllMessagesOnDate({day:dateOfDay(argv.date)}),
  // 'messages': getFirstMessageOnDate({day:dateOfDay(argv.date)}),
  // 'messages': writeSpecialUserMessages({id:'2', href:'/somewhere', type: AuthorType.User, view_href: '/view_somewhere'}),
  'boards': writeBoards,
  // 'users': getUsersOnPage({page:argv.page}) //({khoros}:{khoros:KhorosService}) => khoros.getUserById({id:1})
  'users': writeAllUsers
})

const doCommand = (argv:CommandOptions):Effect.Effect<KhorosService | FileSystemService, unknown, void> => {
  return pipe(
    Effect.Do(),
    Effect.bind("khoros", () => Effect.service(KhorosService)),
    Effect.bind("fs", () => Effect.service(FileSystemService)),
    Effect.bind("response", subcommands(argv)[argv.collection as CollectionName]),
    // Effect.map(({response}) => console.log(JSON.stringify(response)))
    
  )
}

const builder = (argv:Argv):Argv<CommandOptions> => argv.positional('collection', {
  type: 'string',
  choices: ['users', 'messages', 'boards'],
  describe: 'the LiQL object collection to access'
})
.options({
  khorosURL: {
    type: 'string',
    demandOption: true,
    describe: 'Khoros API base URL'
  },
  khorosUser: {
    type: 'string',
    demandOption: true,
    describe: 'Khoros authentication user'
  },
  khorosPassword: {
    type: 'string',
    demandOption: true,
    describe: 'Khoros authenication password'
  },
  date: {
    type: 'string',
    demandOption: false,
    describe: 'day (ISO-8601 calendar date)'
  },
  page: {
    type: 'number',
    demandOption: false,
    describe: 'page of results'
  }
})

const handler = (argv:CommandOptions) => pipe(
  doCommand(argv),
  Effect.provideLayer(pipe(
    makeLiveKhorosServiceLayer(toServiceConfig(argv)),
    Layer.provideMerge(makeLocalFileSystemService({path:'.'}))
  )),
  Effect.unsafeRunPromise
)

export const KhorosCommandModule:CommandModule<unknown, CommandOptions> = {
  command: 'khoros <collection>',
  describe: 'get a collection from the khoros api',
  builder,
  handler
}



