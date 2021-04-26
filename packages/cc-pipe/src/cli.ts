import yargs, {Options} from 'yargs'

import {fetchFromGithub} from './pipe/fetch-gh-repos';

interface FetchCommandOptions  {
  file: string;
}

export const fetchCommand = async (options: FetchCommandOptions) => {
  if (options.file !== undefined) {
    await fetchFromGithub()
  } 
};

const fetchYargsOptions: { [key in keyof FetchCommandOptions]: Options } = {
  file: { type: 'string', desc: 'filename to output (otherwise stdout)' },
};

export const run = (args: string[]) => {
  return yargs(args)
    .scriptName('cc')
    .usage('$0 <cmd> [args]')
    .command(
      'fetch',
      'fetch data from somewhere',
      yargs => {
        yargs.options(fetchYargsOptions);
      },
      function(argv) {
        fetchCommand(
          (argv as unknown) as FetchCommandOptions
        );
      }
    )
    .help().argv;
};