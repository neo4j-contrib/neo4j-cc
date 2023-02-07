# data-access-khoros

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test data-access-khoros` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint data-access-khoros` to execute the lint via [ESLint](https://eslint.org/).

## Generating API 


Generate OpenAPI specification from postman collection:

```
nx run data-access-khoros:postman
```

Generate OpenAPI implementation from OpenAPI specification:
```
nx run data-access-khoros:openapi
```
*Careful*: The generated `request.ts` is missing `fetch()` so provide one with `import fetch from 'cross-fetch';`


Generate Typescript types from postman collection:
```
nx run data-access-khoros:openapi
```
