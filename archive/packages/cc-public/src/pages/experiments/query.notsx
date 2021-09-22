import * as React from "react"

import { graphql } from "gatsby"

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { TextCell } from "components/smart-cells";

const SandboxIndexPage:React.FC<{data:any}> = ({data}) => {
  return (
    <Layout>
      <title>GitHub Repos Tagged as 'neo4j'</title>
      <h1>
        GitHub Repositories Tagged with <code>neo4j</code>
      </h1>
      <p>email: {data.github.search.repositoryCount}</p>
      <SmartList items={data.github.search.nodes.map( (repo:any) => `${repo.nameWithOwner}`)} renderItem={TextCell} />
    </Layout>
  )
}

export default SandboxIndexPage

export const query = graphql`
# Type queries into this side of the screen, and you will 
# see intelligent typeaheads aware of the current GraphQL type schema, 
# live syntax, and validation errors highlighted within the text.

# We'll get you started with a simple query showing your username!
query { 
  github {
    search(query:"topic:neo4j", type:REPOSITORY, first: 10) {
      repositoryCount
      nodes {
        ... on GitHub_Repository {
          owner { login }
          repositoryTopics(first:10) {nodes {topic {name}}}
          nameWithOwner
          description
          updatedAt
          createdAt
          forks(first:10) {
            nodes {
              owner { login }
            }
          }
        }
      }
    }
  }
}`