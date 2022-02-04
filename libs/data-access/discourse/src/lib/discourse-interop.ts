import {pipe} from "@effect-ts/core"
import * as O from "@effect-ts/core/Option";

import {Person} from "@neo4j-cc/model"

import {operations} from "./discourse-openapi"

export type GetUserResult = operations["getUser"]["responses"]["200"]["content"]["application/json"]

export const toPerson = (data:GetUserResult, baseUrl?:string) => {
  return new Person.Person({
    id: `discourse|${data.user.id}`,
    labels: [],
    name: data.user.name,
    callSign: O.some(data.user.username),
    email: pipe(data.user.email, O.fromNullable),
    url: (baseUrl !== undefined) ? O.some(`${baseUrl}/u/${data.user.username}`) : O.none
  })
}