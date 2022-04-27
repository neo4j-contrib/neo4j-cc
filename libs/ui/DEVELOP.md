# Neo4j CC UI library

This library was generated with [Nx](https://nx.dev).

## Running

- `nx test ui` to execute the unit tests via [Jest](https://jestjs.io).
- `nx run ui:storybook` to run a storybook of the entire library

## Scaffolding

### Add a component

```sh
nx g @nrwl/react:component --project=ui --directory=lib/components/{kind} --export=true --name={component-name} --dryRun
```

Where the kind of component is one of: `elements`, `sections`, `layout`:

- `elements` are small, single-purpose and generic
  - fixed height + width
- `activities` combine elements with a common purpose
  - flowing size to fill any container
- `layouts` place activities onto a screen or screen section 
   - flexible size: full, half, narrow
   - flexible orientation: tall or wide

