import { Neo4jError } from 'neo4j-driver';

/**
 * Occurs when error code is unspecified in handled Neo4jError.
 */
export const UNSPECIFIED_NEO4J_ERROR_CODE = 'unspecified';

/**
 * Occurs when a generic (non-Neo4j specific) Error has been thrown.
 */
export const GENERIC_ERROR_CODE = 'generic';

/**
 * Occurs when a non-Error but throwable object has been thrown.
 */
export const THROWABLE_CODE = 'throwable';

export const isNeo4jError = (o: unknown): o is Neo4jError =>
  (o as Neo4jError).message !== undefined &&
  (o as Neo4jError).code !== undefined;

/**
 * @param o
 * @returns
 */
export const isError = (o: unknown): o is Error =>
  (o as Error).message !== undefined && (o as Error).name !== undefined;

export class Neo4jQueryFailure {
  readonly _tag = 'Neo4jQueryFailure';
  constructor(readonly message: string, readonly code: string) {}
}

export class Neo4jDriverFailure {
  readonly _tag = 'Neo4jDriverFailure';
  constructor(readonly message: string, readonly code: string) {}
}
