/* eslint-disable @typescript-eslint/no-empty-interface */
import * as S from '@fp-ts/schema/Schema';
import * as P from '@fp-ts/schema/Parser';
import * as PR from '@fp-ts/schema/ParseResult';

import { jsonBody, request } from '@neo4j-cc/access-http';

import DiscourseSSO from 'discourse-sso';
import { DiscourseApiConfiguration } from '../data-access-discourse';
import { Effect, pipe } from '@neo4j-cc/prelude';
import { decodePrivateUser } from '../discourse-schemas';

export const SsoUserDetails = S.struct({
  name: S.string,
  email: S.string,
  username: S.string,
  external_id: S.string,
  require_activation: S.optional(S.boolean),
});

export interface SsoUserDetails extends S.Infer<typeof SsoUserDetails> {}

export const decodeSsoUserDetails = P.decode(SsoUserDetails);

export const isSsoUserDetails = P.is(SsoUserDetails);

export const createOrUpdateSsoUserAt = (api: DiscourseApiConfiguration) => {
  const discourseConnectSecret = api.discourseConnectSecret;
  const sso = new DiscourseSSO(discourseConnectSecret);

  const apiUsername = api.apiUsername;
  const apiKey = api.apiKey;

  const headers = new Headers();
  headers.append('Api-Username', apiUsername);
  headers.append('Api-Key', apiKey);
  headers.append('Content-Type', 'multipart/form-data');

  const syncSso = (userDetails: SsoUserDetails) => {
    const buildREquestOptionsFor = (userDetails: SsoUserDetails) => ({
      method: 'POST',
      headers,
      body:
        sso.buildLoginString({
          nonce: '',
          require_activation: false,
          ...userDetails,
        }) + `&api_username=${apiUsername}&api_key=${apiKey}`,
      redirect: 'follow' as const,
    });
    const payload = {
      nonce: '',
      require_activation: false,
      ...userDetails,
    };
    const body =
      sso.buildLoginString(payload) +
      `&api_username=${apiUsername}&api_key=${apiKey}`;

    const requestOptions = {
      method: 'POST',
      headers,
      body,
      redirect: 'follow' as const,
    };

    return pipe(
      request(
        `${api.baseUrl}/admin/users/sync_sso`,
        buildREquestOptionsFor(userDetails)
      ),
      // Effect.catchTag("HttpError", (error) => ((error.response.status === 401)) || (error.response.status === 403) || (error.response.status === 422) )
      //   ? pipe()
      Effect.flatMap(jsonBody),
      Effect.map(decodePrivateUser),
      Effect.flatMap((parsedUser) =>
        PR.isSuccess(parsedUser)
          ? Effect.succeed(parsedUser.right)
          : Effect.fail(parsedUser.left[0])
      )
    );
  };
  return syncSso;
};

export const createOrUpdateSsoUser = (
  userDetails: SsoUserDetails,
  api: DiscourseApiConfiguration
) => createOrUpdateSsoUserAt(api)(userDetails);

// export const createOrUpdateSsoUser = (userDetails:SsoUserDetails, api:DiscourseApiConfiguration) => {

//   const discourseConnectSecret = api.discourseConnectSecret
//   const sso = new DiscourseSSO(discourseConnectSecret);

//   const payload = {
//       nonce: '',
//       ...userDetails
//   };
//   // console.log(payload);

//   const apiUsername = api.apiUsername;
//   const apiKey = api.apiKey
//   const body = sso.buildLoginString(payload) + `&api_username=${apiUsername}&api_key=${apiKey}`

//   const headers = new Headers();
//   headers.append("Api-Username", apiUsername);
//   headers.append("Api-Key", apiKey);
//   headers.append("Content-Type", "multipart/form-data");

//   const requestOptions = {
//     method: 'POST',
//     headers,
//     body,
//     redirect: 'follow' as const
//   };

//   return request(`${api.baseUrl}/admin/users/sync_sso`, requestOptions)

// }
