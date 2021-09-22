# neo4j-cc client


## Running unit tests

Run `nx test client` to execute the unit tests via [Jest](https://jestjs.io).

## Develop

### Add a component

```
nx g @nrwl/react:component --project=client --directory={kind} --export=true {component-name}
```

Where the kind of component is one of: `pages`, `components/elements`, `components/sections`
