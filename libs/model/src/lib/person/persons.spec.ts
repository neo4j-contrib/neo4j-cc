import {isPerson, Person} from './person'

import {some} from "@effect-ts/core/Option"

import * as Arbitrary from "@effect-ts/schema/Arbitrary"

import * as fc from "fast-check"

describe("Person", () => {
  it("constructs", () => {
    const o = new Person({
      id: '0x1337CAFE',
      name:"Andreas Kollegger", 
      labels:['Person'],
      url: '/p/abk',
      callSign:some('abk'), 
      email:some('abk@nosuch.com'),
    })
    expect(o.id).toEqual('0x1337CAFE')
    expect(o.name).toEqual('Andreas Kollegger')
    expect(o.labels).toContain('Person')
    expect(o.url).toEqual('/p/abk')
    expect(o.callSign).toEqual(some("abk"))
    expect(o.email).toEqual(some('abk@nosuch.com'))
  })
  it("arbitrary", () => {
    const arb = Arbitrary.for(Person)(fc)
    fc.assert(fc.property(arb, isPerson))
  })
})