import { KhorosV2 } from './generated'

import { QueryASingleCollection } from './generated/models/quicktypes'

describe("Khoros V2 API", () => {
  it("getMessage", async () => {

      const api = new KhorosV2({
        BASE: "https://vbeyi74497.stage.lithium.com/api/2.0"
      })

      const result = await api.default.getMessages({messageId: '653'})
      
      console.log(result);
      expect(result).toBeDefined()
  })

})