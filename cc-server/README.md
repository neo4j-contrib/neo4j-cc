# Neo4j Community Center server


## How-to

Initialize and start a local dev environment:
```
relate env:init neo4j-cc --use
relate dbms:install 4.0.2 -n cc-dev -e neo4j-cc
relate dbms:start cc-dev
```


## Required by drivine...

- npm i neo4j-driver
- npm i -D @types/cli-color
- npm i @liberation-data/agensgraph
- npm install class-transformer class-validator

