import { pipe } from '@effect-ts/core/Function';
import * as T from '@effect-ts/core/Effect';

import { runMain, whoami } from '@neo4j-cc/data-access-github';
import { GluegunCommand } from 'gluegun';
import { Toolbox } from 'gluegun/build/types/domain/toolbox';

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

export const askForKey = pipe(
  T.environment<Toolbox>(),
  T.chain(({ prompt }) => {
    return T.tryPromise(() => {
      return prompt.ask({
        type: 'input',
        name: 'key',
        message: 'API Key>',
      });
    });
  })
);

export const GithubCommand: GluegunCommand<Toolbox> = {
  name: 'gh',
  run,
};
