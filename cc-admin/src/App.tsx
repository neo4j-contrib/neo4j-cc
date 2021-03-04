import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CCSidebar } from './components/CCSidebar';
import { CCWorkspace } from './components/CCWorkspace';

import UserPage from './UserPage';
import DataCatalogPage from './DataCatalogPage';

function App() {
  return (

    <Router>
      <div className="App h-screen flex overflow-hidden bg-white">
        <CCSidebar />
        <CCWorkspace>
          
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/users">
              <UserPage />
            </Route>
            <Route path="/datacatalog">
              <DataCatalogPage />
            </Route>
          </Switch>

        </CCWorkspace>
      </div>
    </Router>
  );
}

export default App;
