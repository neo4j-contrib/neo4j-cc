#!/usr/bin/env node

import { graphql } from "@octokit/graphql";

import { DateTime } from "luxon";

require("dotenv").config({
  path: `.env.development`,
});

const fetchFromGraphGistPortal = async () => {

  try {
    console.log("[");
    let { GraphGist }:any = await graphql<{GraphGist:any}>({
      query: `query {
        GraphGist(filter:{url_starts_with:"http"}) {
          title
          url
          slug
          summary
          author {
            name
            email
          }
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
      `,
      baseUrl: "https://graphgist-v3-api.herokuapp.com/graphql",
    });

    GraphGist.map(
        ((gist:any) => { gist.id = gist.slug; return gist;}))
      .forEach(
        (gist:any, i:number) => {
          console.log(`${JSON.stringify(gist)}${(i < GraphGist.length-1) ? ',':''}`);
        }); 
    console.log("]")
  } catch (err) {
    console.error("ERROR", err);
  }

}

fetchFromGraphGistPortal();

