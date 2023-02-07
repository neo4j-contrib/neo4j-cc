import yargs from 'yargs';

import { GithubYargsCommand } from './commands/gh/gh.command'
import { DiscourseCommandModule } from './commands/discourse/discourse.command'
import { KhorosCommandModule } from './commands/khoros/khoros.command'
import { KhorosToDiscourseCommandModule } from './commands/k2d/k2d.command'

yargs.scriptName("cc-go").usage('$0 <cmd> [args]')
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
  .command(DiscourseCommandModule)
  .command(KhorosCommandModule)
  .command(KhorosToDiscourseCommandModule)
  .help()
  .argv
