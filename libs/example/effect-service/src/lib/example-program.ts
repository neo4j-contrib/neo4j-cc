import { pipe, Effect } from '@neo4j-cc/prelude';
import { NameService } from './example-effect-service';

/**
 * Create a "program" which requires a NameService, never fails
 * using the function generator syntax.
 */
export const genProgram: Effect.Effect<NameService, never, string> = Effect.gen(function* ($) {
  // Acquire the NameService implementation from the Effect environment
  const nameService = yield* $(Effect.service(NameService)) 
  
  // Call the service within the execution context, capturing the result in a local variable
  const result = yield* $(nameService.getName())
  
  // Return the local variable
  return result
})

/**
 * Create a "program" which requires a NameService, never fails
 * using Do notation.
 * 
 */
 export const doProgram: Effect.Effect<NameService, never, string> = pipe(
  Effect.Do(),
  Effect.bind("nameService", () => Effect.service(NameService)),
  Effect.bind("result", ({nameService}) => nameService.getName()),
  Effect.map(({result}) => result)
)

/**
 * Create a "program" which requires a NameService, never fails
 * using the piped functions.
 */
export const pipedProgram: Effect.Effect<NameService, never, string> = pipe(
  Effect.service(NameService), // acquire the service from the environment
  Effect.flatMap(nameService => nameService.getName()), // use the service
)