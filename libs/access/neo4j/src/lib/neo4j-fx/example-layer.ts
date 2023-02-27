import * as Effect from '@effect-ts/core/Effect';
import * as L from '@effect-ts/core/Effect/Layer';
import * as M from '@effect-ts/core/Effect/Managed';
import * as Ref from '@effect-ts/core/Effect/Ref';
import * as Map from '@effect-ts/core/Collections/Immutable/Map';
import { tag } from '@effect-ts/system/Has';

import { pipe } from '@effect-ts/core/Function';
import { NoSuchElementException } from '@effect-ts/system/GlobalExceptions';

export interface DbConnection {
  readonly put: (k: string, v: string) => Effect.UIO<void>;
  readonly get: (k: string) => Effect.IO<NoSuchElementException, string>;
  readonly clear: Effect.UIO<void>;
}

export const DatabaseID = Symbol();
export const DatabaseTag = tag<DbConnection>(DatabaseID);

export const DatabaseLayer = pipe(
  Ref.makeRef(<Map.Map<string, string>>Map.empty),
  Effect.chain((ref) =>
    Effect.succeedWith(
      (): DbConnection => ({
        get: (k) =>
          pipe(
            ref.get,
            Effect.map(Map.lookup(k)),
            Effect.chain(Effect.getOrFail)
          ),
        put: (k, v) => pipe(ref, Ref.update(Map.insert(k, v))),
        clear: ref.set(Map.empty),
      })
    )
  ),
  M.make((_) => _.clear),
  L.fromManaged(DatabaseTag)
);
