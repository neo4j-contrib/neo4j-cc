# Data Access Libraries

Universal client and server side access to services.

## Services

- `cc-api` - GraphQL client for accessing `apps/api` with React hooks
- `discourse` - minimal client API for accesing (Discourse)[https://discourse.gg]
- `github` - minimal client API for accessing (GitHub)[https://github.com]
- `hooks` DELETE THIS
- `neo4j` - experimental effect-query based client for querying Neo4j
- `person` - DELETE THIS

## Scaffolding

### Create a new data-access library:


```
nx generate @nrwl/workspace:library --directory=data-access --publishable --importPath @neo4j-cc/data-access-{library-name} --name={library-name} --dryRun
```

For example:

```
nx generate @nrwl/workspace:library --directory=data-access --publishable --importPath @neo4j-cc/data-access/cc --name=cc-api --dryRun
```

