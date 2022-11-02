import yargs from 'yargs';

// import { build } from 'gluegun';

// import { HelloCommand } from './commands/hello/hello.command';
// import { GithubCommand } from './commands/gh/gh.command';
// import { EchoCommand } from './commands/echo/echo.command';
// import { KhorosCommand } from './commands/khoros/khoros.command';
// import { DiscourseCommand } from './commands/discourse/discourse.command';
// import { HttpCommand } from './commands/http/http.command';

// const ccCLI = build('neo4j-cc')
//   .src(`${__dirname}/`)
//   .plugins('node_modules', { matching: '@neo4j-cc/*' })
//   .help()
//   .version()
//   .command(EchoCommand)
//   .command(GithubCommand)
//   .command(HelloCommand)
//   .command(KhorosCommand)
//   .command(DiscourseCommand)
//   .command(HttpCommand)
//   .defaultCommand()
//   .create();

// ccCLI.run();

import { GithubYargsCommand } from './commands/gh/gh.command'

yargs.scriptName("cc-go")
  .usage('$0 <cmd> [args]')
  .command(
    'http',
    'http actions', 
    (yargs) => {
      return;
    },
    (argv) => {
      console.log("http to the starz")
      return;
    }
  )
  .command(GithubYargsCommand)
  .help()
  .argv
