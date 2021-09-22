#!/usr/bin/env node

// import axios from 'axios';
// import rateLimit from 'axios-rate-limit';
import { DateTime } from 'luxon';

// const { promisify } = require('util')
// const sleep = promisify(setTimeout)
// let rateLimitingSleepInterval = 1000;

import {generate} from 'rxjs';
import { pipe } from 'fp-ts/lib/function'
import { map } from 'fp-ts-rxjs/lib/Observable'
import { bufferTime } from 'rxjs/operators';

require("dotenv").config({
  path: `../../.env`,
});


const today = DateTime.now();

const dates = generate(
  DateTime.fromISO("2020-01-01"),
  day => day <= today,
  day => day.plus({days:1})
)


const ingestFromMedium = async () => {
  pipe(
    dates,
    map(a => a.day),
  )
  .pipe( 
    bufferTime(10)
  )
  .toPromise()
  .then( result => {
    console.log(result);
  })
}

ingestFromMedium();

