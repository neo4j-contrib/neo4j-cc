# Utility Libraries

Universal client and server side libraries.

## Scaffolding

### Create a new library:


```
nx generate @nrwl/workspace:library --directory=util --publishable --importPath @neo4j-cc/data-access-{library-name} --name={library-name} --dryRun
```

For example:

```
nx generate @nrwl/workspace:library --directory=util --publishable --importPath @neo4j-cc/data-access-discourse --name=arbitrary --dryRun
```


