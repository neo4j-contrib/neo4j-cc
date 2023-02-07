import { pipe, Effect } from '@neo4j-cc/prelude'

import { htmlToMd } from './html-to-md';

describe('htmlToMd', () => {
  it('should convert full html', async () => {
    const html = `<html><body><h1>Heading Size One</h1></body></html>`
    const result = await pipe(
      htmlToMd(html),
      Effect.unsafeRunPromise
    )
    expect(result).toBe('# Heading Size One');
  });
  it('should convert html snippet', async () => {
    const html = `<h1>Heading Size One</h1>`
    const result = await pipe(
      htmlToMd(html),
      Effect.unsafeRunPromise
    )
    expect(result).toBe('# Heading Size One');
  });

  it('should convert code blocks to fenced', async () => {
    const html = "<pre class=\"lia-code-sample language-cypher\"><code>WITH $APIurl + '?' + $ParameterName + '=' + $ParameterValue AS url,\n$AuthKey AS apiKey\n\ncall apoc.load.jsonParams(url, { apiKey : apiKey }, null ) yield value\n\nUNWIND value.products AS cpes_values\nMERGE (cpe:CPE { cpeNameId:cpes_values.cpe.cpeNameId })\n  ON CREATE SET cpe.uri = cpes_values.cpe.cpeName,\ncpe.created = cpes_values.cpe.created,\ncpe.lastModified = cpes_values.cpe.lastModified\n</code></pre>"
    const result = await pipe(
      htmlToMd(html),
      Effect.unsafeRunPromise
    )
    expect(result).toBe("```\nWITH $APIurl + '?' + $ParameterName + '=' + $ParameterValue AS url,\n$AuthKey AS apiKey\n\ncall apoc.load.jsonParams(url, { apiKey : apiKey }, null ) yield value\n\nUNWIND value.products AS cpes_values\nMERGE (cpe:CPE { cpeNameId:cpes_values.cpe.cpeNameId })\n  ON CREATE SET cpe.uri = cpes_values.cpe.cpeName,\ncpe.created = cpes_values.cpe.created,\ncpe.lastModified = cpes_values.cpe.lastModified\n```");
  });
  // it('should convert html from Khoros message', async () => {
  //   const html = "<P>Hi <a href=\"https://community.neo4j.com/t5/user/viewprofilepage/user-id/15991\">@Akshay_Sharma</a> ,</P>\n<P>I think there is a post about using ODBC to connect from powerBI to neo4j. hope this helps - <A href=\"https://neo4j.com/developer-blog/connecting-to-neo4j-from-microsoft-power-bi-using-odbc/#:~:text=Connecting%20and%20Querying%20from%20PowerBI,in%20PowerBI%2C%20and%20click%20OK.&amp;text=Once%20loaded%2C%20you%20can%20build,data%20from%20your%20Neo4j%20instance.\" target=\"_self\" rel=\"nofollow noopener noreferrer\">link</A></P>"
  //   const result = await pipe(
  //     htmlToMd(html),
  //     Effect.unsafeRunPromise
  //   )
  //   expect(result).toBe('# Heading Size One\n');
  // });

});
