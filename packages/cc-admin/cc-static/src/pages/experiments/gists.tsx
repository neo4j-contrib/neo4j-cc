import * as React from "react"

import { graphql } from "gatsby";

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { SmartListItem } from "components/SmartListItem";

const GraphGistListPage:React.FC<{data:any}> = ({data}) => {
  return (
    <Layout title="gists">
      <SmartList items={data.allGistsJson.edges.map( (gist:any) => (gist.node)) } renderItem={SmartListItem} />
    </Layout>
  )
}

export default GraphGistListPage

export const query = graphql`
query {
  allGistsJson(limit: 100) {
    edges {
      node {
        id
        title
        url
      }
    }
  }
}
`