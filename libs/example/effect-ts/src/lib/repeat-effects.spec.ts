import { Context, Effect, Layer, Schedule, pipe } from 'effect';

describe('repeat effects', () => {
  it('can repeat a specific number of times', async () => {
    const result = pipe(Effect.succeed(1), Effect.repeatN(10));
  });
});
