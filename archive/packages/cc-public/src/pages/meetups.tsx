import * as React from "react"

import { graphql } from "gatsby";

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { SmartListItem } from "components/SmartListItem";

interface MeetupEdge {
  node: {
    id:string,
    properties: {
      title:string,
      text:string,
      url:string,
      city:string,
      country:string
    }
  }
}
const MeetupListPage:React.FC<{data:any}> = ({data}) => {
  const items = data.allMeetupsJson.edges.map( (meetup:MeetupEdge) => ({
    id: meetup.node.id,
    name: meetup.node.id,
    description: meetup.node.properties.title,
    url: meetup.node.properties.url,
    country: meetup.node.properties.country
  }))
  return (
    <Layout>
      <SmartList items={items} renderItem={SmartListItem} />
    </Layout>
  )
}

export default MeetupListPage


export const query = graphql`
query {
  allMeetupsJson(limit: 100) {
    edges {
      node {
        id
        properties {
          text
          title
          url
          country
        }
      }
    }
  }
}
`