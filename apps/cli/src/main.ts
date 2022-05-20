
// import { CommandFactory } from 'nest-commander';

// import { AppModule } from './app/app.module';

// const bootstrap = async () => {
//   await CommandFactory.run(AppModule);
// };

// bootstrap();

import { build } from 'gluegun'

const movieCLI = build('c--c')
  .src(`${__dirname}/`)
  .plugins('node_modules', { matching: '@c--c/*' })
  .help()
  .version()
  .defaultCommand()
  .create()

movieCLI.run()
