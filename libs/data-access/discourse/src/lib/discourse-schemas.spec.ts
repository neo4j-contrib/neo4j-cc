import {pipe, Effect, Chunk, Option, Either, ReadonlyArray } from '@neo4j-cc/prelude';

import * as PR from "@fp-ts/schema/ParseResult";

import {decodePrivateUser, decodePublicUser, extractCategoriesFrom} from './discourse-schemas'

import samplePublicUsers from '../resources/discourse-public-users.json'
import samplePrivateUsers from '../resources/discourse-private-users.json'
import sampleDiscourseCategoryList from '../resources/discourse-category_list.json'
import { ListCategoriesResponseContent } from './discourse.types';

describe("Discourse User", () => {
  it("decodes public users", () => {
    const decodedUsers = pipe(
      samplePublicUsers,
      Chunk.fromIterable,
      Chunk.map(decodePublicUser),
      Chunk.filter(PR.isSuccess),
      Chunk.map( pe => pe.right),
      // Chunk.filter(PE.isFailure),
      // Chunk.map( pe => pe.left),
      Chunk.toReadonlyArray,
      // ReadonlyArray.flatten
    )
    // console.log("decoded public users:", JSON.stringify(decodedUsers))
    expect(decodedUsers.length).toBe(samplePublicUsers.length)
  })

  it("decodes private users", () => {
    const decodedUsers = pipe(
      samplePrivateUsers,
      Chunk.fromIterable,
      Chunk.map(decodePrivateUser),
      Chunk.filter(PR.isSuccess),
      Chunk.map( pe => pe.right),
      // Chunk.filter(PE.isFailure),
      // Chunk.map( pe => pe.left),
      Chunk.toReadonlyArray,
      // ReadonlyArray.flatten
    )
    // console.log("decoded private users:", JSON.stringify(decodedUsers))
    // console.log("parse errors for private users", JSON.stringify(decodedUsers))
    expect(decodedUsers.length).toBe(samplePrivateUsers.length)
  })
})

describe("DiscourseCategory", () => {
  it("decodes from raw category_list api respone", () => {
    const decodedCategories = pipe(
      sampleDiscourseCategoryList as unknown as ListCategoriesResponseContent,
      extractCategoriesFrom,
      Effect.map(Chunk.map(category => category.slug)),
      Effect.runSync
    )
    // console.log(decodedCategories)
    expect(Chunk.size(decodedCategories)).toBeGreaterThan(sampleDiscourseCategoryList.category_list.categories.length)
  })
})