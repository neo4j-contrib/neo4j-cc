import React, { useEffect, useState } from 'react';
import {CcSiteLayout} from '@neo4j-cc/ui';
import {
  Switch,
  Route
} from "react-router-dom";
import Twin4jPage from '../pages/twin4j-page/twin4j-page';
import TodosPage from '../pages/todos-page/todos-page';

const App = () => {

  return (
    <CcSiteLayout>
      <Switch>
        <Route path="/twin4j">
          <Twin4jPage />
        </Route>
        <Route path="/todos">
          <TodosPage />
        </Route>
        <Route path="/">
          <div className='home-page'>
            <p>Home</p>
          </div>
        </Route>
      </Switch>
    </CcSiteLayout>
  );
};

export default App;