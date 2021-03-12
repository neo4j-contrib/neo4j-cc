import * as React from "react"

import { graphql } from "gatsby";

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { SmartListItem } from "components/SmartListItem";
import { reportUnhandledExceptionOnInvocation } from "xstate/lib/utils";


const GithubRepoListPage:React.FC<{data:any}> = ({data}) => {
  const items =  data.allProjectsJson.edges.map ( (repo:any) => ({
    id: repo.node.id,
    url: repo.node.url,
    title: repo.node.nameWithOwner,
    description: repo.node.description
  }))
  return (
    <Layout title="projects">
      <SmartList items={items} renderItem={SmartListItem} />
    </Layout>
  )
}

export default GithubRepoListPage


export const query = graphql`
query {
  allProjectsJson(filter: {}, limit: 100) {
    edges {
      node {
        id
        url
        nameWithOwner
        description
      }
    }
  }
}
`