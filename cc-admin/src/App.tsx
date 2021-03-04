import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {CcSidebar } from './components/CcSidebar';
import {CcWorkspace } from './components/CcWorkspace';


import {DataCatalogsPage} from './pages/DataCatalogsPage';
import {DatasetsPage} from './pages/DatasetsPage';
import {PeoplePage} from './pages/PeoplePage';
import UserPage from './pages/UserPage';

function App() {
  return (

    <Router>
      <div className="App h-screen flex overflow-hidden bg-white">
        <CcSidebar />
        <CcWorkspace>
          
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/users">
              <UserPage />
            </Route>
            <Route path="/people">
              <PeoplePage />
            </Route>
            <Route path="/datacatalogs">
              <DataCatalogsPage />
            </Route>
            <Route path="/datasets">
              <DatasetsPage />
            </Route>
          </Switch>

        </CcWorkspace>
      </div>
    </Router>
  );
}

export default App;
