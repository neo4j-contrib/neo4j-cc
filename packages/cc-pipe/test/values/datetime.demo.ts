
import "../../src/values/DateFromTime";
import "../../src/values/DateFromTime/Decoder";

import * as MO from "@effect-ts/morphic"

const Demo_ = MO.make((F) =>
  F.interface({ date: F.dateFromTime() }, { name: "Demo" })
)
export interface Demo extends MO.AType<typeof Demo_> {}
export interface DemoE extends MO.EType<typeof Demo_> {}

export const Demo = MO.opaque<DemoE, Demo>()(Demo_)