import * as React from 'react';
import { PiletApi } from 'cc-portal';
import { ExamplePage } from './ExamplePage';
import { ExamplePageMenu } from './ExamplePageMenu';

export function setup(app: PiletApi) {
  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );
  app.registerTile(() => <div>Welcome to Piral my friend, ABK!</div>, {
    initialColumns: 2,
    initialRows: 1,
  });
  app.registerMenu(ExamplePageMenu);
  app.registerPage('/example', ExamplePage);
}
