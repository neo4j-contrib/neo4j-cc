#!/usr/bin/env node

import { graphql } from "@octokit/graphql";

import { DateTime } from "luxon";

require("dotenv").config({
  path: `.env.development`,
});

function isDateTime(obj:any): obj is DateTime {
  return obj instanceof DateTime;
}

const ghSearchFor = {
  neo4j: `topic:neo4j`,
  mongodb: `topic:mongodb`,
  redis: `topics:redis`,
  jupytyer: `jupyter in:topics OR jupyter-notebook in:topics OR ipython in:topics OR ipthon-notebook in:topics`,
}
const ghSearchBetween = (from:DateTime|string, to:DateTime|string) => `${ghSearchFor.jupytyer} created:${isDateTime(from) ? from.toISODate() : from}..${isDateTime(to) ? to.toISODate() : to}`

const nextInterval = {days:14}

function sleep(ms:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


const fetchFromGithub = async () => {
  let cursor = null;
  let hasNextPage = true;
  let from = DateTime.fromISO("2010-01-01");
  let to = from.plus(nextInterval).minus({days:1});
  let today = DateTime.local();
  let yearlyResultCount = 0;
  let totalResultCounts = 0;
  let prependComma = false;

  try {
    console.log("[");
    do {
      do {


        let { search }:any = await graphql<{search:any}>(
          `
            query neo4jRelatedRepositories${cursor ? "($cursor: String!)" : ""} {
              search(query:"${ghSearchBetween(from, to)}", type:REPOSITORY, first: 100, ${cursor ? "after: $cursor" : ""}) {
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
          `,
          {
            cursor,
            headers: {
              authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
            request: {
              
            }
          }
        );

        cursor = search.pageInfo.endCursor;
        hasNextPage = search.pageInfo.hasNextPage;

        if (prependComma && (search.nodes.length > 0)) {
          console.log(',');
          prependComma = false;
        }

        search.nodes.forEach((repository:any, i:number) => {
          console.log(`${JSON.stringify(repository)}${(i < (search.nodes.length-1) || hasNextPage) ? ',':''}`);
        }); 

        yearlyResultCount += search.nodes.length;

        await sleep(1000)

      } while (hasNextPage)

      console.error(ghSearchBetween(from,to), yearlyResultCount);
      totalResultCounts += yearlyResultCount;
      cursor = null;
      yearlyResultCount = 0;
      from = to.plus({days:1});
      to = to.plus(nextInterval).minus({days:1})
      prependComma = (from < today)
    } while (from < today)
    console.log("]")
    console.error("total", totalResultCounts);
  } catch (err) {
    console.error("ERROR", err);
  }

}

fetchFromGithub();

