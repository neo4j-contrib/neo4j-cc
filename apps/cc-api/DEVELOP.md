# graphql-api developer notes

## Neo4j DBMS management

Managed locally with @relate/cli

Create a DBMS:

```
relate dbms:install 4.4.10 --name=neo4j-cc
```

Add the APOC plugin:

```
relate dbms-plugin:install neo4j-cc --plugin apoc
```

Create an access token for the DBMS (required for query access):

```
relate dbms:access-token neo4j-cc
```

Create a database (requires query access with access token):

```
relate db:create graphql-api -D neo4j-cc
```

DBMS ops:

- start: `relate dbms:start neo4j-cc`
- stop: `relate dbms:stop neo4j-cc`

DB ops:

- drop: `relate db:drop graphql-api`

## Scaffolding

Manged with nx.
