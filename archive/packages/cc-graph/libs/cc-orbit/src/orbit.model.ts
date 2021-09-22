import * as S from '@effect-ts/schema';
import { Model } from '@effect-ts/schema';

export class Person extends Model<Person>()(
  S.props({
    _tag: S.prop(S.literal('Person')),
    firstName: S.prop(S.string),
  }),
) {}

export class ActivityType extends Model<ActivityType>()(
  S.props({
    type: S.prop(S.literal('activity_type')),
    id: S.prop(S.string),
    attributes: S.prop(
      S.props({
        name: S.prop(S.string),
        short_name: S.prop(S.string),
        key: S.prop(S.string),
        channel: S.prop(S.string),
        weight: S.prop(S.string),
      }),
    ),
  }),
) {}

export const parseActivityType = ActivityType.Parser['|>'](S.condemnFail);
