import { pipe, Effect } from "@neo4j-cc/prelude";
import * as jetpack from "fs-jetpack";
import { ExistsResult } from "fs-jetpack/types";

import { FileSystemError, FileSystemService, makeTmpFileSystemService } from "./fs.service";


describe("jetpack", () => {
  it("tmpDir", () => {
    const dirContext = jetpack.tmpDir()
    console.log("dir", dirContext.cwd())
    expect(true).toBeTruthy()
  })
  it("write", () => {
    const dirContext = jetpack.tmpDir();
    const fileContents = "tap, tap, tap... hello? can you hear me?"
    const filePath = "hello.txt";
    dirContext.write(filePath, fileContents);
    expect(jetpack.exists(filePath)).toBe("file")
  })
})

describe('FileSystemService', () => {

  const runWithFileSystem = (program:Effect.Effect<FileSystemService, FileSystemError, ExistsResult>) => pipe(
    program, // program requires a `LoggerService`
    Effect.provideLayer(makeTmpFileSystemService()), // `LiveApp` provides a wired-up `LoggerService`
    Effect.runPromise // Run the effect inside a promise
  )

  it('write', async () => {
    const path = 'hello.effect.txt';
    const content = "tap, tap, tap... that's a peek into an effect, three times"
    /** Construct a "program" which will use the example services. */
    const program = pipe(
      Effect.service(FileSystemService), // like declaring that `FileSystemService` is required in the environment
      Effect.tap(({write}) => write({path, content})), // use the `FileSystemService.write()` function, ignoring void result
      Effect.flatMap(({exists}) => exists({path}))
    )

    /** "Run" the program by providing some services and wrapping execution in a promise. */
    const result = await runWithFileSystem(program);

    expect(result).toBe("file")
  });
});
