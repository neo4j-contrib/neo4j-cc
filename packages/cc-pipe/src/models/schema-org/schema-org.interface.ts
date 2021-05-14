
declare type SchemaValue<T> = T | readonly T[];

export {SchemaValue}

type URL = string
type Text = string

interface PropertyValueBase extends ThingBase {
  /** The upper value of some characteristic or property. */
  "maxValue"?: SchemaValue<Number>;
  /**
   * A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
   *
   * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link https://schema.org/measurementTechnique measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
   *
   * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link https://schema.org/measurementTechnique measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
   *
   * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link https://schema.org/measurementTechnique measurementTechnique}.
   */
  "measurementTechnique"?: SchemaValue<Text | URL>;
  /** The lower value of some characteristic or property. */
  "minValue"?: SchemaValue<Number>;
  /** A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be (1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3) a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry). Standards bodies should promote a standard prefix for the identifiers of properties from their standards. */
  "propertyID"?: SchemaValue<Text | URL>;
  /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
  "unitCode"?: SchemaValue<Text | URL>;
  /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode unitCode}. */
  "unitText"?: SchemaValue<Text>;
  /**
   * The value of the quantitative value or property value node.
   * - For {@link https://schema.org/QuantitativeValue QuantitativeValue} and {@link https://schema.org/MonetaryAmount MonetaryAmount}, the recommended type for values is 'Number'.
   * - For {@link https://schema.org/PropertyValue PropertyValue}, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
   * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
   * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
   */
  "value"?: SchemaValue<Boolean | Number | StructuredValue | Text | IdReference>;
  /** A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature. */
  "valueReference"?: SchemaValue<Enumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue | IdReference>;
}
export interface PropertyValueLeaf extends PropertyValueBase {
  "@type": "PropertyValue";
}

export interface ThingBase {
  /** An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally. */
  "additionalType"?: SchemaValue<URL>;
  /** An alias for the item. */
  "alternateName"?: SchemaValue<Text>;
  /** A description of the item. */
  "description"?: SchemaValue<Text>;
  /** A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation. */
  "disambiguatingDescription"?: SchemaValue<Text>;
  /** The identifier property represents any kind of identifier for any kind of {@link https://schema.org/Thing Thing}, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See {@link /docs/datamodel.html#identifierBg background notes} for more details. */
  "identifier"?: SchemaValue<PropertyValue | Text | URL | IdReference>;
  /** An image of the item. This can be a {@link https://schema.org/URL URL} or a fully described {@link https://schema.org/ImageObject ImageObject}. */
  "image"?: SchemaValue<ImageObject | URL | IdReference>;
  /** Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See {@link /docs/datamodel.html#mainEntityBackground background notes} for details. */
  "mainEntityOfPage"?: SchemaValue<CreativeWork | URL | IdReference>;
  /** The name of the item. */
  "name"?: SchemaValue<Text>;
  /** Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role. */
  "potentialAction"?: SchemaValue<Action | IdReference>;
  /** URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website. */
  "sameAs"?: SchemaValue<URL>;
  /** A CreativeWork or Event about this Thing. */
  "subjectOf"?: SchemaValue<CreativeWork | Event | IdReference>;
  /** URL of the item. */
  "url"?: SchemaValue<URL>;
}

export interface CreativeWorkBase extends ThingBase {
  /** The subject matter of the content. */
  "about"?: SchemaValue<Thing | IdReference>;
  /** An abstract is a short description that summarizes a {@link https://schema.org/CreativeWork CreativeWork}. */
  "abstract"?: SchemaValue<Text>;
  /** Indicates that the resource is compatible with the referenced accessibility API ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
  "accessibilityAPI"?: SchemaValue<Text>;
  /** Identifies input methods that are sufficient to fully control the described resource ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
  "accessibilityControl"?: SchemaValue<Text>;
  /** Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
  "accessibilityFeature"?: SchemaValue<Text>;
  /** A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
  "accessibilityHazard"?: SchemaValue<Text>;
  /** A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed." */
  "accessibilitySummary"?: SchemaValue<Text>;
  /** The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual. */
  "accessMode"?: SchemaValue<Text>;
  /** A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include: auditory, tactile, textual, visual. */
  "accessModeSufficient"?: SchemaValue<ItemList | IdReference>;
  /** Specifies the Person that is legally accountable for the CreativeWork. */
  "accountablePerson"?: SchemaValue<Person | IdReference>;
  /** Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item. */
  "acquireLicensePage"?: SchemaValue<CreativeWork | URL | IdReference>;
  /** The overall rating, based on a collection of reviews or ratings, of the item. */
  "aggregateRating"?: SchemaValue<AggregateRating | IdReference>;
  /** A secondary title of the CreativeWork. */
  "alternativeHeadline"?: SchemaValue<Text>;
  /** The item being described is intended to assess the competency or learning outcome defined by the referenced term. */
  "assesses"?: SchemaValue<DefinedTerm | Text | IdReference>;
  /** A media object that encodes this CreativeWork. This property is a synonym for encoding. */
  "associatedMedia"?: SchemaValue<MediaObject | IdReference>;
  /** An intended audience, i.e. a group for whom something was created. */
  "audience"?: SchemaValue<Audience | IdReference>;
  /** An embedded audio object. */
  "audio"?: SchemaValue<AudioObject | Clip | MusicRecording | IdReference>;
  /** The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. */
  "author"?: SchemaValue<Organization | Person | IdReference>;
  /** An award won by or for this item. */
  "award"?: SchemaValue<Text>;
  /**
   * Awards won by or for this item.
   *
   * @deprecated Consider using https://schema.org/award instead.
   */
  "awards"?: SchemaValue<Text>;
  /** Fictional person connected with a creative work. */
  "character"?: SchemaValue<Person | IdReference>;
  /** A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. */
  "citation"?: SchemaValue<CreativeWork | Text | IdReference>;
  /** Comments, typically from users. */
  "comment"?: SchemaValue<Comment | IdReference>;
  /** The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere. */
  "commentCount"?: SchemaValue<Integer>;
  /**
   * Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an {@link https://schema.org/ArchiveComponent ArchiveComponent} held by an {@link https://schema.org/ArchiveOrganization ArchiveOrganization}. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.
   *
   * For example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ".
   */
  "conditionsOfAccess"?: SchemaValue<Text>;
  /** The location depicted or described in the content. For example, the location in a photograph or painting. */
  "contentLocation"?: SchemaValue<Place | IdReference>;
  /** Official rating of a piece of content—for example,'MPAA PG-13'. */
  "contentRating"?: SchemaValue<Rating | Text | IdReference>;
  /** The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event. */
  "contentReferenceTime"?: SchemaValue<DateTime>;
  /** A secondary contributor to the CreativeWork or Event. */
  "contributor"?: SchemaValue<Organization | Person | IdReference>;
  /** The party holding the legal copyright to the CreativeWork. */
  "copyrightHolder"?: SchemaValue<Organization | Person | IdReference>;
  /** Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work. */
  "copyrightNotice"?: SchemaValue<Text>;
  /** The year during which the claimed copyright for the CreativeWork was first asserted. */
  "copyrightYear"?: SchemaValue<Number>;
  /** Indicates a correction to a {@link https://schema.org/CreativeWork CreativeWork}, either via a {@link https://schema.org/CorrectionComment CorrectionComment}, textually or in another document. */
  "correction"?: SchemaValue<CorrectionComment | Text | URL | IdReference>;
  /** The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle. */
  "creativeWorkStatus"?: SchemaValue<DefinedTerm | Text | IdReference>;
  /** The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork. */
  "creator"?: SchemaValue<Organization | Person | IdReference>;
  /** Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work. */
  "creditText"?: SchemaValue<Text>;
  /** The date on which the CreativeWork was created or the item was added to a DataFeed. */
  "dateCreated"?: SchemaValue<Date | DateTime>;
  /** The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. */
  "dateModified"?: SchemaValue<Date | DateTime>;
  /** Date of first broadcast/publication. */
  "datePublished"?: SchemaValue<Date | DateTime>;
  /** A link to the page containing the comments of the CreativeWork. */
  "discussionUrl"?: SchemaValue<URL>;
  /**
   * An {@link https://eidr.org/ EIDR} (Entertainment Identifier Registry) {@link https://schema.org/identifier identifier} representing a specific edit / edition for a work of film or television.
   *
   * For example, the motion picture known as "Ghostbusters" whose {@link https://schema.org/titleEIDR titleEIDR} is "10.5240/7EC7-228A-510A-053E-CBB8-J", has several edits e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".
   *
   * Since schema.org types like {@link https://schema.org/Movie Movie} and {@link https://schema.org/TVEpisode TVEpisode} can be used for both works and their multiple expressions, it is possible to use {@link https://schema.org/titleEIDR titleEIDR} alone (for a general description), or alongside {@link https://schema.org/editEIDR editEIDR} for a more edit-specific description.
   */
  "editEIDR"?: SchemaValue<Text | URL>;
  /** Specifies the Person who edited the CreativeWork. */
  "editor"?: SchemaValue<Person | IdReference>;
  /**
   * An alignment to an established educational framework.
   *
   * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource {@link https://schema.org/teaches teaches} or {@link https://schema.org/assesses assesses} a competency.
   */
  "educationalAlignment"?: SchemaValue<AlignmentObject | IdReference>;
  /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
  "educationalLevel"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
  /** The purpose of a work in the context of education; for example, 'assignment', 'group work'. */
  "educationalUse"?: SchemaValue<DefinedTerm | Text | IdReference>;
  /** A media object that encodes this CreativeWork. This property is a synonym for associatedMedia. */
  "encoding"?: SchemaValue<MediaObject | IdReference>;
  /**
   * Media type typically expressed using a MIME format (see {@link http://www.iana.org/assignments/media-types/media-types.xhtml IANA site} and {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types MDN reference}) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).
   *
   * In cases where a {@link https://schema.org/CreativeWork CreativeWork} has several media type representations, {@link https://schema.org/encoding encoding} can be used to indicate each {@link https://schema.org/MediaObject MediaObject} alongside particular {@link https://schema.org/encodingFormat encodingFormat} information.
   *
   * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
   */
  "encodingFormat"?: SchemaValue<Text | URL>;
  /**
   * A media object that encodes this CreativeWork.
   *
   * @deprecated Consider using https://schema.org/encoding instead.
   */
  "encodings"?: SchemaValue<MediaObject | IdReference>;
  /** A creative work that this work is an example/instance/realization/derivation of. */
  "exampleOfWork"?: SchemaValue<CreativeWork | IdReference>;
  /** Date the content expires and is no longer useful or available. For example a {@link https://schema.org/VideoObject VideoObject} or {@link https://schema.org/NewsArticle NewsArticle} whose availability or relevance is time-limited, or a {@link https://schema.org/ClaimReview ClaimReview} fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date. */
  "expires"?: SchemaValue<Date>;
  /**
   * Media type, typically MIME format (see {@link http://www.iana.org/assignments/media-types/media-types.xhtml IANA site}) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
   *
   * @deprecated Consider using https://schema.org/encodingFormat instead.
   */
  "fileFormat"?: SchemaValue<Text | URL>;
  /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
  "funder"?: SchemaValue<Organization | Person | IdReference>;
  /** Genre of the creative work, broadcast channel or group. */
  "genre"?: SchemaValue<Text | URL>;
  /** Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense). */
  "hasPart"?: SchemaValue<CreativeWork | IdReference>;
  /** Headline of the article. */
  "headline"?: SchemaValue<Text>;
  /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
  "inLanguage"?: SchemaValue<Language | Text | IdReference>;
  /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. */
  "interactionStatistic"?: SchemaValue<InteractionCounter | IdReference>;
  /** The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'. */
  "interactivityType"?: SchemaValue<Text>;
  /** A flag to signal that the item, event, or place is accessible for free. */
  "isAccessibleForFree"?: SchemaValue<Boolean>;
  /** A resource from which this work is derived or from which it is a modification or adaption. */
  "isBasedOn"?: SchemaValue<CreativeWork | Product | URL | IdReference>;
  /**
   * A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
   *
   * @deprecated Consider using https://schema.org/isBasedOn instead.
   */
  "isBasedOnUrl"?: SchemaValue<CreativeWork | Product | URL | IdReference>;
  /** Indicates whether this content is family friendly. */
  "isFamilyFriendly"?: SchemaValue<Boolean>;
  /** Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of. */
  "isPartOf"?: SchemaValue<CreativeWork | URL | IdReference>;
  /** Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas. */
  "keywords"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
  /** The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'. */
  "learningResourceType"?: SchemaValue<DefinedTerm | Text | IdReference>;
  /** A license document that applies to this content, typically indicated by URL. */
  "license"?: SchemaValue<CreativeWork | URL | IdReference>;
  /** The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork. */
  "locationCreated"?: SchemaValue<Place | IdReference>;
  /** Indicates the primary entity described in some page or other CreativeWork. */
  "mainEntity"?: SchemaValue<Thing | IdReference>;
  /** A maintainer of a {@link https://schema.org/Dataset Dataset}, software package ({@link https://schema.org/SoftwareApplication SoftwareApplication}), or other {@link https://schema.org/Project Project}. A maintainer is a {@link https://schema.org/Person Person} or {@link https://schema.org/Organization Organization} that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When {@link https://schema.org/maintainer maintainer} is applied to a specific version of something e.g. a particular version or packaging of a {@link https://schema.org/Dataset Dataset}, it is always possible that the upstream source has a different maintainer. The {@link https://schema.org/isBasedOn isBasedOn} property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work. */
  "maintainer"?: SchemaValue<Organization | Person | IdReference>;
  /** A material that something is made from, e.g. leather, wool, cotton, paper. */
  "material"?: SchemaValue<Product | Text | URL | IdReference>;
  /** The quantity of the materials being described or an expression of the physical space they occupy. */
  "materialExtent"?: SchemaValue<QuantitativeValue | Text | IdReference>;
  /** Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept. */
  "mentions"?: SchemaValue<Thing | IdReference>;
  /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
  "offers"?: SchemaValue<Demand | Offer | IdReference>;
  /** A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported. */
  "pattern"?: SchemaValue<DefinedTerm | Text | IdReference>;
  /** The position of an item in a series or sequence of items. */
  "position"?: SchemaValue<Integer | Text>;
  /** The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.). */
  "producer"?: SchemaValue<Organization | Person | IdReference>;
  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
  "provider"?: SchemaValue<Organization | Person | IdReference>;
  /** A publication event associated with the item. */
  "publication"?: SchemaValue<PublicationEvent | IdReference>;
  /** The publisher of the creative work. */
  "publisher"?: SchemaValue<Organization | Person | IdReference>;
  /** The publishing division which published the comic. */
  "publisherImprint"?: SchemaValue<Organization | IdReference>;
  /**
   * The publishingPrinciples property indicates (typically via {@link https://schema.org/URL URL}) a document describing the editorial principles of an {@link https://schema.org/Organization Organization} (or individual e.g. a {@link https://schema.org/Person Person} writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a {@link https://schema.org/CreativeWork CreativeWork} (e.g. {@link https://schema.org/NewsArticle NewsArticle}) the principles are those of the party primarily responsible for the creation of the {@link https://schema.org/CreativeWork CreativeWork}.
   *
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a {@link https://schema.org/funder funder}) can be expressed using schema.org terminology.
   */
  "publishingPrinciples"?: SchemaValue<CreativeWork | URL | IdReference>;
  /** The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event. */
  "recordedAt"?: SchemaValue<Event | IdReference>;
  /** The place and time the release was issued, expressed as a PublicationEvent. */
  "releasedEvent"?: SchemaValue<PublicationEvent | IdReference>;
  /** A review of the item. */
  "review"?: SchemaValue<Review | IdReference>;
  /**
   * Review of the item.
   *
   * @deprecated Consider using https://schema.org/review instead.
   */
  "reviews"?: SchemaValue<Review | IdReference>;
  /** Indicates (by URL or string) a particular version of a schema used in some CreativeWork. For example, a document could declare a schemaVersion using an URL such as https://schema.org/version/2.0/ if precise indication of schema version was required by some application. */
  "schemaVersion"?: SchemaValue<Text | URL>;
  /** Indicates the date on which the current structured data was generated / published. Typically used alongside {@link https://schema.org/sdPublisher sdPublisher} */
  "sdDatePublished"?: SchemaValue<Date>;
  /** A license document that applies to this structured data, typically indicated by URL. */
  "sdLicense"?: SchemaValue<CreativeWork | URL | IdReference>;
  /** Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The {@link https://schema.org/sdPublisher sdPublisher} property helps make such practices more explicit. */
  "sdPublisher"?: SchemaValue<Organization | Person | IdReference>;
  /** A standardized size of a product or creative work, often simplifying richer information into a simple textual string, either through referring to named sizes or (in the case of product markup), by adopting conventional simplifications. Use of QuantitativeValue with a unitCode or unitText can add more structure; in other cases, the /width, /height, /depth and /weight properties may be more applicable. */
  "size"?: SchemaValue<DefinedTerm | QuantitativeValue | Text | IdReference>;
  /** The Organization on whose behalf the creator was working. */
  "sourceOrganization"?: SchemaValue<Organization | IdReference>;
  /** The "spatial" property can be used in cases when more specific properties (e.g. {@link https://schema.org/locationCreated locationCreated}, {@link https://schema.org/spatialCoverage spatialCoverage}, {@link https://schema.org/contentLocation contentLocation}) are not known to be appropriate. */
  "spatial"?: SchemaValue<Place | IdReference>;
  /** The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York. */
  "spatialCoverage"?: SchemaValue<Place | IdReference>;
  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
  "sponsor"?: SchemaValue<Organization | Person | IdReference>;
  /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
  "teaches"?: SchemaValue<DefinedTerm | Text | IdReference>;
  /** The "temporal" property can be used in cases where more specific properties (e.g. {@link https://schema.org/temporalCoverage temporalCoverage}, {@link https://schema.org/dateCreated dateCreated}, {@link https://schema.org/dateModified dateModified}, {@link https://schema.org/datePublished datePublished}) are not known to be appropriate. */
  "temporal"?: SchemaValue<DateTime | Text>;
  /**
   * The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in {@link https://en.wikipedia.org/wiki/ISO_8601#Time_intervals ISO 8601 time interval format}. In the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL. Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".
   *
   * Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
   */
  "temporalCoverage"?: SchemaValue<DateTime | Text | URL>;
  /** The textual content of this CreativeWork. */
  "text"?: SchemaValue<Text>;
  /** A thumbnail image relevant to the Thing. */
  "thumbnailUrl"?: SchemaValue<URL>;
  /** Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'. */
  "timeRequired"?: SchemaValue<Duration | IdReference>;
  /** The work that this work has been translated from. e.g. \u7269\u79CD\u8D77\u6E90 is a translationOf \u201COn the Origin of Species\u201D */
  "translationOfWork"?: SchemaValue<CreativeWork | IdReference>;
  /** Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event. */
  "translator"?: SchemaValue<Organization | Person | IdReference>;
  /** The typical expected age range, e.g. '7-9', '11-'. */
  "typicalAgeRange"?: SchemaValue<Text>;
  /**
   * The schema.org {@link https://schema.org/usageInfo usageInfo} property indicates further information about a {@link https://schema.org/CreativeWork CreativeWork}. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.
   *
   * This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
   */
  "usageInfo"?: SchemaValue<CreativeWork | URL | IdReference>;
  /** The version of the CreativeWork embodied by a specified resource. */
  "version"?: SchemaValue<Number | Text>;
  /** An embedded video object. */
  "video"?: SchemaValue<Clip | VideoObject | IdReference>;
  /** Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook. */
  "workExample"?: SchemaValue<CreativeWork | IdReference>;
  /** A work that is a translation of the content of this work. e.g. \u897F\u904A\u8A18 has an English workTranslation \u201CJourney to the West\u201D,a German workTranslation \u201CMonkeys Pilgerfahrt\u201D and a Vietnamese translation T\u00E2y du k\u00FD b\u00ECnh kh\u1EA3o. */
  "workTranslation"?: SchemaValue<CreativeWork | IdReference>;
}

