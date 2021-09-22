#!/usr/bin/env node

import fetch from 'isomorphic-unfetch'
import { gql, createClient } from '@urql/core';

import { DateTime } from "luxon";
import dotenv from 'dotenv'

dotenv.config({
  path: `.env.development`,
});

const graphqlClient = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
  },
});

function isDateTime(obj) {
  return obj instanceof DateTime;
}

const ghSearchBetween = (from, to) => `topic:neo4j created:${isDateTime(from) ? from.toISODate() : from}..${isDateTime(to) ? to.toISODate() : to}`

const CursorLocation = (cursor) => cursor ? `, after: $cursor` : ""

const GithubPageQuery = (from, to, cursor) => gql`
  query neo4jRelatedRepositories${cursor ? "($cursor: String!)" : ""} {
    search(query:"${ghSearchBetween(from, to)}", type:REPOSITORY, first: 100 ${CursorLocation(cursor)}) {
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
      repositoryCount
      nodes {
        ... on Repository {
          id
          url
          owner { login,  __typename}
          name
          nameWithOwner
          description
          updatedAt
          createdAt
          isTemplate
          repositoryTopics(first:10) {nodes {topic {name}}}
          languages(first:10) {nodes {name}}
          forks(first:10) {
            totalCount
          }
        }
      }
    }
  }
`

const fetchFromGithub = async () => {
  let cursor = null;
  let hasNextPage = true;
  let from = DateTime.fromISO("2021-01-01");
  let to = from.plus({years:1});
  let today = DateTime.local();
  let yearlyResultCount = 0;
  let totalResultCounts = 0;
  let prependComma = false;

  try {
    console.log("[");
    do {
      do {
        let result = await graphqlClient.query(
          GithubPageQuery(from, to, cursor),
          {
            cursor
          }
        ).toPromise();

        console.error('result', result);

        let {search} = result.data;

        cursor = search.pageInfo.endCursor;
        hasNextPage = search.pageInfo.hasNextPage;

        if (prependComma && (search.nodes.length > 0)) {
          console.log(',');
          prependComma = false;
        }

        search.nodes.forEach((repository, i) => {
          console.log(`${JSON.stringify(repository)}${(i < (search.nodes.length-1) || hasNextPage) ? ',':''}`);
        }); 

        yearlyResultCount += search.nodes.length;

      } while (hasNextPage)

      console.error(ghSearchBetween(from,to), yearlyResultCount);
      totalResultCounts += yearlyResultCount;
      cursor = null;
      yearlyResultCount = 0;
      from = to;
      to = to.plus({years:1})
      prependComma = (from < today)
    } while (from < today)
    console.log("]")
    console.error("total", totalResultCounts);
  } catch (err) {
    console.error("ERROR", err);
  }

}

fetchFromGithub();

