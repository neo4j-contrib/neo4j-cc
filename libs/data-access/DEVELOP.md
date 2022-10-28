# Data Access Libraries

Universal client and server side access to services.

## Services

- `cc-api` - GraphQL client for accessing `apps/api` with React hooks
- `discourse` - minimal client API for accesing (Discourse)[https://discourse.gg]
- `github` - minimal client API for accessing (GitHub)[https://github.com]
- `neo4j` - experimental effect-query based client for querying Neo4j
- `http` - an effectful http fetch

## Scaffolding

### Create a new data-access library:


```
nx generate @nrwl/js:library --directory=data-access --publishable --importPath @neo4j-cc/data-access-{library-name} --name={library-name} --dryRun
```

For example:

```
nx generate @nrwl/js:library --directory=data-access --publishable --importPath @neo4j-cc/data-access-csv --name=csv --dryRun
```

