import { Effect, Layer, Context, pipe } from '@neo4j-cc/prelude';

import * as jetpack from 'fs-jetpack';
import { DirCriteria, ExistsResult, WritableData } from 'fs-jetpack/types';

export interface FileLocation {
  path: string;
}

export interface FileWithContent extends FileLocation {
  content: WritableData;
}

export class FileSystemError {
  readonly _tag = 'FileSystemError';
  constructor(readonly error: unknown) {}
}

export interface FileSystemService {
  readonly write: (
    args: FileWithContent
  ) => Effect.Effect<never, FileSystemError, void>;
  readonly exists: (
    args: FileLocation
  ) => Effect.Effect<never, FileSystemError, ExistsResult>;
}

export const FileSystemService = Context.Tag<FileSystemService>();

const catchReasonInFileSystemError = (reason: unknown) =>
  new FileSystemError(reason);

export interface FileSystemConfiguration {
  path: string;
  criteria?: DirCriteria;
}

export const makeLocalFileSystemService = ({
  path,
  criteria,
}: FileSystemConfiguration) => {
  const rootedFileSystem = jetpack.dir(path, criteria);

  return Layer.effect(
    FileSystemService,
    Effect.sync(() => ({
      _rootedFileSystem: rootedFileSystem.dir(path),
      write: (args: FileWithContent) =>
        Effect.tryCatchPromise(
          () => rootedFileSystem.writeAsync(args.path, args.content),
          catchReasonInFileSystemError
        ),
      exists: (args: FileLocation) =>
        Effect.tryCatchPromise(
          () => rootedFileSystem.existsAsync(args.path),
          catchReasonInFileSystemError
        ),
    }))
  );
};

export const makeTmpFileSystemService = () => {
  const tmpContext = jetpack.tmpDir();
  return makeLocalFileSystemService({ path: tmpContext.cwd() });
};
