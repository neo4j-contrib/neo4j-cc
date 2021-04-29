// import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { ProtectedRoute } from "./auth/protected-route";
import { CcSidebar } from './components/CcSidebar';
import { CcWorkspace } from './components/CcWorkspace';
import { ArticlesPage } from './pages/ArticlesPage';
import { BooksPage } from './pages/BooksPage';
import { CoursesPage } from './pages/CoursesPage';

import {DataCatalogsPage} from './pages/DataCatalogsPage';
import {DatasetsPage} from './pages/DatasetsPage';
import { EventsPage } from './pages/EventsPage';
import { HomePage } from "./pages/HomePage";
import { NotebooksPage } from './pages/NotebooksPage';
import { OrganizationsPage } from './pages/OrganizationsPage';
import {PeoplePage} from './pages/PeoplePage';
import { SoftwareApplicationsPage } from './pages/SoftwareApplicationsPage';
import { SoftwareSourceCodesPage } from './pages/SoftwareSourceCodesPage';

function App() {

  return (
      <div className="App h-screen flex overflow-hidden bg-white">
        <CcSidebar />
        <CcWorkspace>
          <Switch>
            <ProtectedRoute path="/people" component={PeoplePage} />
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
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>

        </CcWorkspace>
      </div>
  );
}

export default App;
