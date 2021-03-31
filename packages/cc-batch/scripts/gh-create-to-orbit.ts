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

const debug = (s:string) => { if (verbose) console.log(s); }
const info = console.error

function isDateTime(obj:any): obj is DateTime {
  return obj instanceof DateTime;
}

const ghSearchBetween = (from:DateTime|string, to:DateTime|string) => `topic:neo4j created:${isDateTime(from) ? from.toISODate() : from}..${isDateTime(to) ? to.toISODate() : to}`

const ingestFromGithub = async () => {
  let cursor = null;
  let hasNextPage = true;
  let from = DateTime.fromISO("2021-03-01");
  let to = from.plus({months:1});
  let today = DateTime.local();
  let yearlyResultCount = 0;
  let totalResultCounts = 0;
  let prependComma = false;

  try {
    debug("[");
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

        if (prependComma && (search.nodes.length > 0)) {
          debug(',');
          prependComma = false;
        }

        search.nodes.forEach(async (repository:any, i:number) => {
          debug(`${JSON.stringify(repository)}${(i < (search.nodes.length-1) || hasNextPage) ? ',':''}`);
          axiosLimited({
            "method": "POST",
            "url": "https://app.orbit.love/api/v1/neo4j-community/activities",
            "headers": {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${process.env.ORBIT_API_TOKEN}`,
            },
            "data": {
              "title": `Created ${repository.nameWithOwner}`,
              "activity_type": "repository:created",
              "link": repository.url,
              "key": repository.id,
              "description": repository.description,
              "occurred_at": repository.createdAt,
              "identity": {
                "username": repository.owner.login,
                "source": "github"
              },
              "link_text": repository.nameWithOwner
            }
          }).catch( (err) => {
            if (err.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.error(err.response.status);
              console.error(err.response.headers);
              console.error(err.response.data);
            } else if (err.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.error(err.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error', err.message);
            }
            rateLimitingSleepInterval = rateLimitingSleepInterval * 1.1; 
          });
        }); 

        yearlyResultCount += search.nodes.length;

      } while (hasNextPage)

      info(ghSearchBetween(from,to), yearlyResultCount);
      totalResultCounts += yearlyResultCount;
      cursor = null;
      yearlyResultCount = 0;
      from = to;
      to = to.plus({years:1})
      prependComma = (from < today)
    } while (from < today)
    debug("]")
    info("total", totalResultCounts);
  } catch (err) {
    info("ERROR", err);
  }

}

ingestFromGithub();

