import { LiveApp, LoggerService } from './example-effect-service';

import { E, pipe } from '@neo4j-cc/prelude';

describe('exampleEffectService', () => {
  it('should work', async () => {

    /** Construct a "program" which will use the example services. */
    const program = pipe(
      E.service(LoggerService), // like declaring that `LoggerService` is required in the environment
      E.tap(({info}) => info('hello')) // use the `LoggerService.info()` function, ignoring void result
    )

    /** "Run" the program by providing some services and wrapping execution in a promise. */
    await pipe(
      program, // program requires a `LoggerService`
      E.provideLayer(LiveApp), // `LiveApp` provides a wired-up `LoggerService`
      E.unsafeRunPromise // Run the effect inside a promise
    )
  });
});
