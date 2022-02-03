import { Model } from "@effect-ts/schema"
import * as MO from "@effect-ts/schema"

import {
  DataCatalog as CreativeWorkDTS,
  Course as LearningResourceDTS,
} from 'schema-dts';

export type ISODateTime = string;
export type ISODuration = string;
export type Guid = string;


export const fieldDescription = MO.makeAnnotation<string>()

/**
 * Base props for semantic `Thing`s.
 */
export const ThingShaped =
  MO.props({
    id: MO.prop(MO.string)
      .annotate(fieldDescription, "UUID within the domain"),
  
    labels: MO.prop(MO.array(MO.string))
      .annotate(fieldDescription, "Labels associate groups of Things"), 
  
    name: MO.prop(MO.string)
      .annotate(fieldDescription, "The common name of this Thing."),
  
    url: MO.prop(MO.string)
      .annotate(fieldDescription, "The location of this Thing within the domain")
  })


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const creativeWorkExample: CreativeWorkDTS = {
  '@type': 'DataCatalog', // note that this is a sub-type
  about: ['http://this', 'http://that', 'http://other'],
  creator: 'ABK',
};

// export abstract class CreativeWork
//   extends ThingEntity
//   implements Partial<CreativeWorkDTS> {

//   @Field(() => String, {
//     nullable: true,
//     description: 'A brief description of this Thing.',
//   })
//   description?: string;

//   @Field(() => [String], {
//     nullable: true,
//     defaultValue: [],
//     description:
//       'The subject matter of the content. Inverse property: subjectOf.',
//   })
//   about?: [string];

//   @Field(() => ID, {
//     nullable: true,
//     description: 'Reference to Person who created the work.',
//   })
//   creator?: Guid;

//   @Field(() => ID, {
//     nullable: true,
//     description: 'Reference to Person who published the work.',
//   })
//   publisher?: Guid;

//   @Field(() => String, { nullable: true })
//   dateCreated?: ISODateTime;

//   @Field(() => String, { nullable: true })
//   dateModified?: ISODateTime;

//   @Field(() => String, { nullable: true })
//   license?: string;
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const learningResourceExample: LearningResourceDTS = {
//   '@type': 'Course',
//   about: ['http://this', 'http://that', 'http://other'],
//   creator: 'ABK',
// };

// @ObjectType()
// export abstract class LearningResource
//   extends CreativeWork
//   implements Partial<LearningResourceDTS> {
//   /** Part of CreativeWork, but only used here. */
//   @Field(() => String, {
//     nullable: true,
//     description: 'An award won by or for this LearningResource.',
//   })
//   award?: string;
//   @Field(() => String, {
//     nullable: true,
//     description:
//       'The LearningResource being described is intended to help a person learn the competency or learning outcome defined by the referenced term.',
//   })
//   teaches?: string;

//   @Field(() => [String], {
//     nullable: true,
//     defaultValue: [],
//     description:
//       'Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.',
//   })
//   competencyRequired?: string[];
// }

// @ObjectType()
// export abstract class Relationship<
//   From extends ThingEntity,
//   To extends ThingEntity
// > extends ThingEntity {
//   @Field(() => ID, { description: 'from entity UUID' })
//   from!: From;

//   @Field(() => ID, { description: 'to entity UUID' })
//   to!: To;
// }
