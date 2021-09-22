import {pipe} from "@effect-ts/core/Function"


import * as S from "@effect-ts/schema";
import { Model } from "@effect-ts/schema";
import { Identifier, Name, UrlString } from "../value";
// import * as Parser from "@effect-ts/schema/Parser";

export class Thing extends Model<Thing>()(
  pipe(
    S.struct({
      required:{
        /** The identifier property represents any kind of identifier for any kind of {@link https://schema.org/Thing Thing}, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See {@link /docs/datamodel.html#identifierBg background notes} for more details. */
        identifier: Identifier, // SchemaValue<PropertyValue | Text | URL | IdReference>;
      },
      optional: {
        /** The name of the item. */
        name: Name, // SchemaValue<Text>;
        /** A description of the item. */
        description: S.string, // SchemaValue<Text>;
        /** An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally. */
        // "additionalType"?: SchemaValue<URL>;
        /** An alias for the item. */
        // "alternateName"?: SchemaValue<Text>;
        /** A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation. */
        // "disambiguatingDescription"?: SchemaValue<Text>;
        /** An image of the item. This can be a {@link https://schema.org/URL URL} or a fully described {@link https://schema.org/ImageObject ImageObject}. */
        image: UrlString, // SchemaValue<ImageObject | URL | IdReference>;
        /** Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See {@link /docs/datamodel.html#mainEntityBackground background notes} for details. */
        mainEntityOfPage: UrlString, // SchemaValue<CreativeWork | URL | IdReference>;
        /** Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role. */
        // "potentialAction"?: SchemaValue<Action | IdReference>;
        /** URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website. */
        // "sameAs"?: SchemaValue<URL>;
        /** A CreativeWork or Event about this Thing. */
        // "subjectOf"?: SchemaValue<CreativeWork | Event | IdReference>;
        /** URL of the item. */
        url: UrlString, // SchemaValue<URL>;
      }
    })
  )
) {}
