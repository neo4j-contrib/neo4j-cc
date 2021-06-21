import * as React from "react"

import { graphql } from "gatsby";

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { SmartListItem } from "components/SmartListItem";


const PublishedDatasets:React.FC<{data:any}> = ({data}) => {
  const items =  data.allDatasetsYaml.edges.map ( (edge:any) => ({
    id: edge.node.id,
    url: edge.node.homepage,
    title: edge.node.title,
    description: edge.node.description,
    keywords: edge.node.keywords,
    category: edge.node.category
  }))
  return (
    <Layout title="datasets">
      <SmartList items={items} renderItem={SmartListItem} />
    </Layout>
  )
}

export default PublishedDatasets


export const query = graphql`
query {
  allDatasetsYaml(limit:100) {
    edges {
      node {
        id
        homepage
        description
        keywords
        category
        license
        title
      }
    }
  }
}
`