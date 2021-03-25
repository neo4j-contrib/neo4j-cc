import * as React from "react"

import { graphql } from "gatsby";

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { SmartListItem } from "components/SmartListItem";

const fromNameProperty = (xs:{name:string}[]) => xs.map( (n) => n.name)

const fromTopicNameProperty = (xs:{topic:{name:string}}[]) => xs.map( (n) => n.topic.name)

const GithubRepoListPage:React.FC<{data:any}> = ({data}) => {
  const items =  data.allProjectsJson.edges.map ( (edge:any) => ({
    category: 'Repository',
    id: edge.node.id,
    url: edge.node.url,
    title: edge.node.nameWithOwner,
    description: edge.node.description,
    labels: [ ...fromTopicNameProperty(edge.node.repositoryTopics.nodes), ...fromNameProperty(edge.node.languages.nodes)]
  }))
  .concat(data.allGistsJson.edges.map ((edge:any) => ({
    category: 'Notebook',
    id: edge.node.id,
    url: edge.node.url,
    title: edge.node.title,
    description: edge.node.summary,
    labels: [ "cypher", ...fromNameProperty(edge.node.industries), ...fromNameProperty(edge.node.categories), ...fromNameProperty(edge.node.use_cases) ]
  })))
  
  return (
    <Layout title="code">
      <SmartList items={items} renderItem={SmartListItem} />
    </Layout>
  )
}

export default GithubRepoListPage


export const query = graphql`
query {
  allProjectsJson(filter: {}, limit: 100,  sort: {fields: updatedAt, order: DESC}) {
    edges {
      node {
        id
        url
        nameWithOwner
        description
        repositoryTopics {
					nodes {
						topic {
            	name
            }
          }
        }
        languages {
					nodes {
						name
          }
        }
      }
    }
  }
  allGistsJson {
    edges {
      node {
        id
        title
        url
        summary
        industries {
          name
        }
        categories {
          name
        }
        use_cases {
          name
        }
      }
    }
  }
}
`