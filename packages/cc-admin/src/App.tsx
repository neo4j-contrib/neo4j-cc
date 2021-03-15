// import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Snozzle } from '@neo4j-cc/components';
import {CcSidebar } from './components/CcSidebar';
import {CcWorkspace } from './components/CcWorkspace';
import { ArticlesPage } from './pages/ArticlesPage';
import { BooksPage } from './pages/BooksPage';
import { CoursesPage } from './pages/CoursesPage';


import {DataCatalogsPage} from './pages/DataCatalogsPage';
import {DatasetsPage} from './pages/DatasetsPage';
import { EventsPage } from './pages/EventsPage';
import { NotebooksPage } from './pages/NotebooksPage';
import { OrganizationsPage } from './pages/OrganizationsPage';
import {PeoplePage} from './pages/PeoplePage';
import { SoftwareApplicationsPage } from './pages/SoftwareApplicationsPage';
import { SoftwareSourceCodesPage } from './pages/SoftwareSourceCodesPage';

function App() {
  return (

    <Router>
      <div className="App h-screen flex overflow-hidden bg-white">
        <CcSidebar />
        <CcWorkspace>
          <Switch>
            <Route path="/">
              <p>Hi</p>
              <Snozzle />
            </Route>
            <Route path="/people">
              <PeoplePage />
            </Route>
            <Route path="/organizations">
              <OrganizationsPage />
            </Route>
            <Route path="/datacatalogs">
              <DataCatalogsPage />
            </Route>
            <Route path="/datasets">
              <DatasetsPage />
            </Route>
            <Route path="/notebooks">
              <NotebooksPage />
            </Route>
            <Route path="/software">
              <SoftwareApplicationsPage />
            </Route>
            <Route path="/code">
              <SoftwareSourceCodesPage />
            </Route>
            <Route path="/events">
              <EventsPage />
            </Route>
            <Route path="/articles">
              <ArticlesPage />
            </Route>
            <Route path="/books">
              <BooksPage />
            </Route>
            <Route path="/courses">
              <CoursesPage />
            </Route>
          </Switch>

        </CcWorkspace>
      </div>
    </Router>
  );
}

export default App;
