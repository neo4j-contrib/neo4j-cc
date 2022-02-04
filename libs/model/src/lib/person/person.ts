import { Model } from "@effect-ts/schema"
import * as MO from "@effect-ts/schema"
import * as Parser from "@effect-ts/schema/Parser"
import * as Guard from "@effect-ts/schema/Guard"
import * as Encoder from "@effect-ts/schema/Encoder"

import { ThingShaped, fieldDescription } from '../base-entity/entities';

/**
 * Common properties for Person models
 */
export const PersonShaped = MO.props({
  callSign: MO.prop(MO.nullable(MO.string))
    .annotate(fieldDescription, "A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available."),
  email: MO.prop(MO.nullable(MO.string))
    .annotate(fieldDescription, "Primary email address")
})

/**
 * A person (alive, dead, undead, or fictional).
 * 
 * @see https://schema.org/Person
 */
export class Person extends Model<Person>()(
  MO.props({
    '@type': MO.prop(MO.literal("Person")),
    ...ThingShaped.props,
    ...PersonShaped.props
  })
) {}

/**
 * Parses a JSON formatted string into a Person.
 */
export const parseJSON = MO.jsonString[">>>"](Person)["|>"](Parser.for)["|>"](MO.condemnFail)

/**
 * Encodes a Person as regular JSON.
 */
export const toJSON = MO.jsonString[">>>"](Person)["|>"](Encoder.for)

/**
 * Refines type as a Person.
 */
export const isPerson = Guard.for(Person)

/**
 * A patient is any person recipient of health care services.
 * 
 * @see https://schema.org/Patient
 */
export class Patient extends Model<Patient>()(
  MO.props({
    '@type': MO.prop(MO.literal("Person")),
    ...ThingShaped.props,
    ...PersonShaped.props
  })
) {}

export const PersonOrPatient = MO.union({Person, Patient})

export const refinePersonOrPatient = Parser.for(PersonOrPatient)["|>"](MO.condemnFail)