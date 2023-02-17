import { pipe, Effect, Layer, Exit, Cause, Context } from '@neo4j-cc/prelude';

import { KhorosV2 } from './generated'

import { QueryASingleCollection } from './generated/models/quicktypes'


describe("Khoros V2 API", () => {
  const api = new KhorosV2({
    BASE: "https://khoros.neo4j.com/api/2.0"
  })

  it("getMessage", async () => {

      const result = await api.default.getMessages({messageId: '653'})
      
      // console.log(result);
      expect(result).toBeDefined()
  })

  it('can search with LiQL', async () => {
    const result = await api.default.getSearch({q:`SELECT * FROM messages ORDER BY last_publish_time DESC LIMIT 10`})
    // console.log(result);
    expect(result).toBeDefined()
  })

})