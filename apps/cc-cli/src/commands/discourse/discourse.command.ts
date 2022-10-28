import { pipe, E } from '@neo4j-cc/prelude';

import { GluegunCommand } from 'gluegun';
import { Toolbox } from 'gluegun/build/types/domain/toolbox';


const run = async (toolbox: Toolbox) => {
  toolbox.
  console.log('discourse');
};

export const DiscourseCommand: GluegunCommand<Toolbox> = {
  name: 'discourse',
  run,
};
