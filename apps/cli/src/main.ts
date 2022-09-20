
import { build } from 'gluegun'

import { HelloCommand } from './commands/hello/hello.command';
import { GithubCommand } from './commands/gh/gh.command';
import { EchoCommand } from './commands/echo/echo.command';
import { KhorosCommand } from './commands/khoros/khoros.command';
// import { HttpCommand } from './commands/http/http.command';

const ccCLI = build('neo4j-cc')
  .src(`${__dirname}/`)
  .plugins('node_modules', { matching: '@neo4j-cc/*' })
  .help()
  .version()
  .command(EchoCommand)
  .command(GithubCommand)
  .command(HelloCommand)
  .command(KhorosCommand)
  // .command(HttpCommand)
  .defaultCommand()
  .create()

ccCLI.run()
