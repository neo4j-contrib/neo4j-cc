import './app.scss';

import { Route, Routes, Link } from 'react-router-dom';

import { Theme } from 'react-daisyui'

import { CcButton } from '@neo4j-cc/ui'
import {ProfilePage} from '../pages/profile-page/profile-page';
import {HomePage} from '../pages/home-page/home-page';

export function App() {
  return (
    <Theme dataTheme="light">
      <div className="flex flex-row gap-4 p-2">
        <Link to="/"><CcButton>Home</CcButton></Link>
        <Link to="/profile"><CcButton>Profile</CcButton></Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
      </Routes>
    </Theme>
  );
}

export default App;
