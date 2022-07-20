import * as fc from "fast-check"

import * as lexicon from "../assets/lexicon.json"

export function utilArbitrary(): string {
  return 'util-arbitrary';
}

export const oneOf = <T>(elements:T[]) => () => elements[Math.floor(Math.random() * elements.length)]

export const sample = <T>(arb:fc.Arbitrary<T>, count = 3) => fc.sample(arb, count)

export const uuids = (count?:number) => sample(fc.uuid(), count)
export const uuid = oneOf(uuids())

export const emailAddresses = (count?:number) => sample(fc.emailAddress(), count)
export const emailAddress = oneOf(emailAddresses())

export const words = (count?:number) => sample(fc.lorem({maxCount:1}), count)
export const word = oneOf(words())

export const sentences = (count?:number) => sample(fc.lorem({mode:"sentences", maxCount:1}), count)
export const sentence = oneOf(sentences())

export const nouns = (count?:number) => sample(fc.constantFrom(lexicon.nouns), count)
export const noun = oneOf(nouns())


export const adjectives = (count?:number) => sample(fc.constantFrom(lexicon.adjectives), count)
export const adjective = oneOf(adjectives())

export const httpUrls = (count?:number) => sample(fc.webUrl(), count)
export const httpUrl = oneOf(httpUrls())

