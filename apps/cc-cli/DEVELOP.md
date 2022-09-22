# Neo4j CC CLI Tool

## Scaffolding

The CLI is built using [Gluegun](https://infinitered.github.io/gluegun/).

### Create a new command:

(TODO: a nx.dev generator for this would be delightful!)

Create a module for the command...

```
mkdir apps/cli/src/commands/hello/
```

Create a command...

```
touch apps/cli/src/commands/hello/hello.command.ts
```

Read [how to create a command](https://infinitered.github.io/gluegun/#/./plugins?id=commands).

Add the command to `main.ts`...

```
import { HelloCommand } from './commands/hello/hello.command';

//...

build()
//...
  .command(HelloCommand)

```

### Run it!

Run using the live code, using `nx`. Arguments are passed as a plain string using the `--args` flag to nx.

```
nx run cli:exec --args="--help"
nx run cli:exec --args="hello"
```

Or, run the compiled version in `./dist/`:

```
node dist/apps/cli/main.js --help
```
