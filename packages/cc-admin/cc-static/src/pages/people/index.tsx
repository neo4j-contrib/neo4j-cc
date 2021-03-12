import * as React from "react"

import { graphql } from "gatsby"

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { SmartListItem } from "components/SmartListItem";

const slugify = require('@sindresorhus/slugify');

const DiscourseUserListPage:React.FC<{data:any}> = ({data}) => {
  const items =  data.allPeopleJson.edges.map ( (person:any) => ({
    id: person.node.id,
    url: "/people/" + slugify(person.node.username),
    title: person.node.name
  }))

  return (
    <Layout>
      <SmartList items={items} renderItem={SmartListItem} />
    </Layout>
  )
}

export default DiscourseUserListPage

export const query = graphql`
query {
  allPeopleJson(filter: {}, limit: 100) {
    edges {
      node {
        id
        name
        username
        email
      }
    }
  }
}
`
