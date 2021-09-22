#!/usr/bin/env node

import { graphql } from "@octokit/graphql";
import axios from 'axios';
import rateLimit from 'axios-rate-limit';
import { DateTime } from "luxon";

const { promisify } = require('util')
const sleep = promisify(setTimeout)
let rateLimitingSleepInterval = 1000;

require("dotenv").config({
  path: `../../.env`,
});

const axiosLimited = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 })

const verbose = false;

const toStdout = (s:string) => console.log(s);
const info = console.error

function isDateTime(obj:any): obj is DateTime {
  return obj instanceof DateTime;
}

const ghSearchBetween = (from:DateTime|string, to:DateTime|string) => `topic:redis created:${isDateTime(from) ? from.toISODate() : from}..${isDateTime(to) ? to.toISODate() : to}`

const ingestFromGithub = async () => {
  let cursor = null;
  let hasNextPage = true;
  let from = DateTime.fromISO("2012-01-01");
  const interval = {months:1};
  let to = from.plus(interval);
  let today = DateTime.local();
  let yearlyResultCount = 0;
  let totalResultCounts = 0;
  let prependComma = false;

  try {
    do {
      do {
        let gh_search = `query:"${ghSearchBetween(from, to)}", type:REPOSITORY, first: 100, ${cursor ? "after: $cursor" : ""}`
        console.error("searching github using: ", gh_search);
        let { search }:any = await graphql<{search:any}>(
          `
            query neo4jRelatedRepositories${cursor ? "($cursor: String!)" : ""} {
              search(${gh_search}) {
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
                  }
                }
              }
            }
          `,
          {
            cursor,
            headers: {
              authorization: `token ${process.env.GATSBY_GITHUB_TOKEN}`,
            },
          }
        );

        cursor = search.pageInfo.endCursor;
        hasNextPage = search.pageInfo.hasNextPage;

        search.nodes.forEach(async (repository:any, i:number) => {
          toStdout(`${repository.nameWithOwner}, ${repository.createdAt}`);
        }); 

        yearlyResultCount += search.nodes.length;
        await sleep(1000);
      } while (hasNextPage)

      info(ghSearchBetween(from,to), yearlyResultCount);
      totalResultCounts += yearlyResultCount;
      cursor = null;
      yearlyResultCount = 0;
      from = to;
      to = to.plus(interval)
      prependComma = (from < today)
    } while (from < today)
    info("total", totalResultCounts);
  } catch (err) {
    info("ERROR", err);
  }

}

ingestFromGithub();

