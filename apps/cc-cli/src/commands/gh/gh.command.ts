import { whoami } from '@neo4j-cc/access-github';
import { GluegunCommand } from 'gluegun';
import { Toolbox } from 'gluegun/build/types/domain/toolbox';
import { CommandModule } from 'yargs';

const run = async (toolbox: Toolbox) => {
  const { prompt } = toolbox;

  async function getLogin(): Promise<string | null> {
    const result = await prompt.ask({
      type: 'input',
      name: 'key',
      message: 'API Key>',
    });

    if (result.key) {
      return whoami({ auth: result.key });
    }
  }

  const login = await getLogin();
  console.log(`octokitty is go, go, go! ${login}`);
};

export const GithubCommand: GluegunCommand<Toolbox> = {
  name: 'gh',
  run,
};

export const GithubYargsCommand: CommandModule = {
  command: 'github',
  describe: 'calls to GitHub GraphQL API',
  builder: (yargs) => {
    return yargs;
  },
  handler: (args) => {
    console.log('git the hub');
  },
};
