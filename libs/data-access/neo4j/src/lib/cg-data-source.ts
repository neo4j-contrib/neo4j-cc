import * as A from '@effect-ts/core/Collections/Immutable/Array';
import * as C from '@effect-ts/core/Collections/Immutable/Chunk';
import * as MAP from '@effect-ts/core/Collections/Immutable/Map';
import * as T from '@effect-ts/core/Effect';
import * as REF from '@effect-ts/core/Effect/Ref';
import * as E from '@effect-ts/core/Either';
import type { Has } from '@effect-ts/core/Has';
import { tag } from '@effect-ts/core/Has';
import * as O from '@effect-ts/core/Option';

import * as CR from '@effect-ts/query/CompletedRequestMap';
import * as DS from '@effect-ts/query/DataSource';
import * as Q from '@effect-ts/query/Query';
import * as R from '@effect-ts/query/Request';

interface TestConsole {
  lines: REF.Ref<A.Array<string>>;
}

const TestConsole = tag<TestConsole>();

export const emptyTestConsole = T.map_(
  REF.makeRef<A.Array<string>>([]),
  (lines) => ({
    lines,
  })
);

function putStrLn(line: string): T.RIO<Has<TestConsole>, void> {
  return T.accessServiceM(TestConsole)((c) =>
    REF.update_(c.lines, (lines) => A.concat_(lines, [line]))
  );
}

export const getLogSize = T.accessServiceM(TestConsole)((c) =>
  T.map_(REF.get(c.lines), (lines) => lines.length)
);

const userIds: A.Array<number> = A.range(1, 26);

const userNames: MAP.Map<number, string> = MAP.make(
  A.zip_(
    userIds,
    A.map_(A.range(1, 26), (_) => _.toString(36))
  )
);

// eslint-disable-next-line @typescript-eslint/ban-types
export class GetAllIds extends R.Static<{}, never, A.Array<number>> {
  readonly _tag = 'GetAllIds';
}

export class GetNameById extends R.Static<
  { readonly id: number },
  never,
  string
> {
  readonly _tag = 'GetNameById';
}

export class GetAgeByName extends R.Static<
  { readonly name: string },
  never,
  number
> {
  readonly _tag = 'GetAgeByName';
}

export type UserRequest = GetAllIds | GetNameById | GetAgeByName;

export const UserRequestDataSource = DS.makeBatched('UserRequestDataSource')(
  (requests: C.Chunk<UserRequest>) =>
    putStrLn('Running request...')['|>'](
      T.zipRight(
        T.succeed(
          requests['|>'](
            C.reduce(CR.empty, (crm, _) => {
              switch (_._tag) {
                case 'GetAllIds':
                  return CR.insert_(crm, _, E.right(userIds));
                case 'GetNameById':
                  return O.fold_(
                    MAP.lookup_(userNames, _.id),
                    () => crm,
                    (userName) => CR.insert_(crm, _, E.right(userName))
                  );
                case 'GetAgeByName':
                  return CR.insert_(crm, _, E.right(18 + _.name.length));
              }
            })
          )
        )
      )
    )
)['|>'](DS.batchN(100));

export const getAllUserIds = Q.fromRequest(
  new GetAllIds(),
  UserRequestDataSource
);

export const getUserNameById = (id: number) =>
  Q.fromRequest(new GetNameById({ id }), UserRequestDataSource);

export const getAllUserNames = getAllUserIds['|>'](
  Q.chain(Q.forEachPar(getUserNameById))
);

export const getAgeByName = (name: string) =>
  Q.fromRequest(new GetAgeByName({ name }), UserRequestDataSource);

export const getAgeById = (id: number) =>
  getUserNameById(id)['|>'](Q.chain((name) => getAgeByName(name)));
