
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export class BufferBodyError {
  readonly _tag = "BufferBodyError";
  constructor(readonly error: unknown) {}
}


export class HttpError {
  readonly _tag = "HttpError";
  readonly response;
  constructor(response:Response) {
    this.response = {
      url: response.url,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    }
  }
}

