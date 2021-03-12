import neo4j, { Driver } from "neo4j-driver";

import {map} from 'rxjs/operators';

require("dotenv").config({
  path: `.env.development`,
});

const driver: Driver = neo4j.driver(
  process.env.NEO4J_URL_CG!, 
  neo4j.auth.basic('neo4j', process.env.NEO4J_PASSWORD_CG!)
);

const session = driver.rxSession({ defaultAccessMode: neo4j.session.READ });

let firstTime = true;
const toConsole = (o:any) => { console.log(`${firstTime ? "":",\n"}${JSON.stringify(o)}`); firstTime = false; }

console.log('[');

session.run(`MATCH (n:TrainingClass)-->(q:Quiz) WHERE exists(n.fullname) RETURN {id:n.name, labels:labels(n), properties:properties(n), quizzes:collect(q)} as o`)
  .records()
  .pipe(
    map(record => record.toObject()),
  )
  .subscribe({
    next: d => toConsole(d.o),
    complete: () => {
      console.log(']');
      session.close();
      driver.close();
    },
    error: err => console.log(err)
  })
 
