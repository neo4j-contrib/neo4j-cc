# Neo4j CC CLI Tool

## Scaffolding

The CLI is built using [Nest Commander](https://nest-commander.jaymcdoniel.dev).

### Create a new command:

Create a module for the command...
```
nx g @nrwl/nest:module --project=cli --directory commands --name=hello --dryRun
```

Create a command...
(TODO: make a generator for this for delightful DX!)
```
touch apps/cli/src/commands/hello/hello.command.ts
```

Read [how to create a command](https://nest-commander.jaymcdoniel.dev/docs/features/commander/).

Add the command to the command module...
```
@Module({
  providers: [HelloRunner]
})
```

Add the new command module to `app.module.ts`.

### Run it!

Arguments are passed as a plain string using the `--args` flag to nx.
```
nx run cli:exec --args="hello"
```