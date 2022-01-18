import { ExecutorContext } from '@nrwl/devkit';
import { generateSchema } from '@neo4j-cc/model/to-graphql';

export interface EmitExecutorOptions {
  textToEcho: string;
}

export default async function emitExecutor(
  options: EmitExecutorOptions,
  context: ExecutorContext
) {
  console.info(`Executing "emit"...`);
  console.info(`Options: ${JSON.stringify(options, null, 2)}`);
  // console.info(`context: ${JSON.stringify(context, null, 2)}`);

  await generateSchema();

  console.log(options.textToEcho);

  const success = true;
  return { success };
}