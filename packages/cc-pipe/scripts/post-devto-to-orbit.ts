#!/usr/bin/env node

import axios from 'axios';
import rateLimit from 'axios-rate-limit';

// const { promisify } = require('util')
// const sleep = promisify(setTimeout)
// let rateLimitingSleepInterval = 1000;

require("dotenv").config({
  path: `../../.env`,
});

const axiosLimited = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 })

const verbose = true;
const batchSize = 100;
const withinLastNDays = 30;

const debug = (s:string) => { if (verbose) console.error(s); }
const info = console.error

// function isDateTime(obj:any): obj is DateTime {
//   return obj instanceof DateTime;
// }


const ingestFromDevto = async () => {

  try {
    let response = await axios({
      "method": "GET",
      "url": "https://dev.to/api/articles",
      "params": {
        "tag": "neo4j",
        "per_page": `${batchSize}`,
        "top": `${withinLastNDays}`
      },
      "headers": {
        "Api-Key": `${process.env.DEVTO_API_TOKEN}`
      }
    })

    let {data:articles} = response;

    articles.forEach(async (article:any) => {
      debug(`"${article.title}" by ${article.user.name}`);
      await axiosLimited({
        "method": "GET",
        "url": "https://dev.to/api/users/by_username",
        "params": {
          "url":article.user.username
        }
      }).then( async ({data:user}) => {
        await axiosLimited({
          "method": "POST",
          "url": "https://app.orbit.love/api/v1/neo4j-community/activities",
          "headers": {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.ORBIT_API_TOKEN}`,
          },
          "data": {
            "activity": {
              "activity_type": "blog:created",
              "occurred_at": article.created_at,
              "weight": 2,
              "title": `Created ${article.title}`,
              "link": article.canonical_url,
              "link_text": article.title,
              "key": `devto|${article.id}`,
              "description": article.description,
              "tags": article.tag_list,
            },
            "member": {
              "twitter": article.user.twitter_username,
              "github": article.user.github_username,
              "url": article.user.website_url,
              "devto": article.user.name, 
            },
            "identity": {
              "name": article.user.name,
              "username": article.username,
              "uid": user.id,
              "source": "devto"
            }
          }
        }).catch( (err:any) => {
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
        });
      }).catch( (err:any) => {
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
      });

    }); 

  info("total", articles.length);
  } catch (err) {
    info("ERROR", err);
  }

}

ingestFromDevto();

