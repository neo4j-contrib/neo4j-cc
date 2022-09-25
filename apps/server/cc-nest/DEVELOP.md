# cc-nest - nest.js API server

Generated with:
```
nx g @nrwl/nest:application --directory=server --frontendProject prototype-cc-show --name=cc-nest
```

## Scaffolding

Generate a resource (http/rest resource, an api for an entity):
```
nx g @nrwl/nest:resource --project=server-cc-nest --directory=resources --type=rest --crud=true --name=cats --dryRun
```