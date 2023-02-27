import { pipe, Effect } from '@neo4j-cc/prelude';
import TurndownService from 'turndown';

export class HtmlParseError {
  readonly _tag = 'HtmlParseError';
  constructor(readonly error: unknown) {}
}
export class DynamicLoadError {
  readonly _tag = 'DynamicLoadError';
  constructor(readonly error: unknown) {}
}

export const htmlToMd = (html: string) => {
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
  });

  return Effect.tryCatch(
    () => turndownService.turndown(html),
    (error) => new HtmlParseError(error)
  );
};
