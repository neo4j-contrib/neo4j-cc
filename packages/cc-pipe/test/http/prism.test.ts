const { getHttpOperationsFromSpec } = require('@stoplight/prism-cli/dist/operations');
const { createClientFromOperations } = require('@stoplight/prism-http/dist/client');

describe("Prism Client for mocking OpenAPI calls", () => {

  it("get /user", async () => {
    const operations = await getHttpOperationsFromSpec('test/http/responses/orbit-swagger.json');
    const client = createClientFromOperations(operations, {
      mock: true,
      validateRequest: true,
      validateResponse: true,
      checkSecurity: false,
      errors: true,
    });
    const response = await client.request('/user', { method: 'get'})
    expect(response).toBeDefined();
  })

})
