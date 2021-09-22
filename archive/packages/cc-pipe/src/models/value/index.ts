
import * as S from "@effect-ts/schema";

export interface UrlStringBrand {
  readonly UrlStringBrand: unique symbol
}
export type UrlString = S.NonEmptyString & UrlStringBrand
export const UrlString = S.nonEmptyString["|>"](S.brand<UrlString>())

export interface EmailAddressBrand {
  readonly EmailAddressBrand: unique symbol
}
export type EmailAddress = S.NonEmptyString & EmailAddressBrand
export const EmailAddress = S.nonEmptyString["|>"](S.brand<EmailAddress>())

export interface IdentifierBrand {
  readonly IdentifierBrand: unique symbol
}
export type Identifier = S.NonEmptyString & IdentifierBrand
export const Identifier = S.nonEmptyString["|>"](S.brand<Identifier>())

export interface UsernameBrand {
  readonly UsernameBrand: unique symbol
}
export type Username = S.NonEmptyString & UsernameBrand
export const Username = S.nonEmptyString["|>"](S.brand<Username>())

export interface NameBrand {
  readonly NameBrand: unique symbol
}
export type Name = S.NonEmptyString & NameBrand
export const Name = S.nonEmptyString["|>"](S.brand<Name>())

export interface SemanticVersionStringBrand {
  readonly SemanticVersionStringBrand: unique symbol
}
export type SemanticVersionString = S.NonEmptyString & SemanticVersionStringBrand
export const SemanticVersionString = S.nonEmptyString["|>"](S.brand<SemanticVersionString>())