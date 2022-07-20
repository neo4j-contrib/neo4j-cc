
import { build } from 'gluegun'

import { HelloCommand } from './commands/hello/hello.command';
import { GithubCommand } from './commands/gh/gh.command';
import { EchoCommand } from './commands/echo/echo.command';
import { KhorosCommand } from './commands/khoros/khoros.command';

const movieCLI = build('(c)--(c)')
  .src(`${__dirname}/`)
  .plugins('node_modules', { matching: '@c--c/*' })
  .help()
  .version()
  .command(EchoCommand)
  .command(GithubCommand)
  .command(HelloCommand)
  .command(KhorosCommand)
  .defaultCommand()
  .create()

movieCLI.run()