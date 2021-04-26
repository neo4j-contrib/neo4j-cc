import * as T from "@effect-ts/core/Sync"

import * as Decoder from "@effect-ts/morphic/Decoder"

Decoder.decoderExtension("dateFromTime")(() => (cfg) => (env) =>
  new Decoder.DecoderType(
    Decoder.decoderApplyConfig(cfg?.conf)(
      Decoder.makeDecoder(
        (u, c) => {
          if (typeof u !== "number") {
            return Decoder.fail(u, c, `${typeof u} is not a number`)
          }
          if (Number.isInteger(u) && Number.isFinite(u)) {
            const d = new Date(u)
            return T.succeed(d)
          } else {
            return Decoder.fail(u, c, `${u} is not a valid finite integer`)
          }
        },
        "date",
        cfg?.name || "Milliseconds"
      ),
      env,
      {}
    )
  )
)