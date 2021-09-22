import * as React from "react"

import { graphql } from "gatsby";

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { SmartListItem } from "components/SmartListItem";

const TrainingListPage:React.FC<{data:any}> = ({data}) => {
  return (
    <Layout>
      <SmartList items={data.allTrainingJson.edges.map( (training:any) => ({
        ...training.node,
        ...training.node.properties
      }))} renderItem={SmartListItem} />
    </Layout>
  )
}

export default TrainingListPage


export const query = graphql`
query {
  allTrainingJson {
    edges {
      node {
        id
        labels
        properties {
          name
          fullname
          course_url
        }
      }
    }
  }
}
`