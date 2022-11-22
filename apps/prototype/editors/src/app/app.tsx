// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Route, Routes, Link } from 'react-router-dom';

import { ButtonGroup, Theme } from 'react-daisyui';

import { CcNavbar, CcButton } from '@neo4j-cc/ui';

import { BytemdEditor } from '../components/bytemd-editor/bytemd-editor';
import { ReactNode } from 'react';

const NavButton = ({title, path}:{title:string, path:string}) => (
  <CcButton size="xs" className="text-sm normal-case" color="ghost">
    <Link to={path}>
      {title}
    </Link>
  </CcButton>
)

const FullPage = ({children}:{children:ReactNode}) => (
  <div className="p-4">
    {children}
  </div>
)
export function App() {
  return (
    <Theme dataTheme="light">
      <ButtonGroup className="bg-base-300 shadow min-h-0 py-0 text-xs">
        <CcButton size="xs">Prototype Editors:</CcButton>
        <NavButton title="Home" path="/" />
        <NavButton title="ByteMD Editor" path="/bytemd" />
      </ButtonGroup>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/bytemd"
          element={ <FullPage><BytemdEditor /></FullPage>
          }
        />
      </Routes>
      {/* END: routes */}
    </Theme>
  );
}

export default App;
