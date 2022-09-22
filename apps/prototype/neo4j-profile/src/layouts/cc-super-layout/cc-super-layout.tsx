import { useEffect } from 'react';
import { themeChange } from 'theme-change';

import { Route, Routes, Link } from 'react-router-dom';

import { CcNavbar, CcButton, CcSelect } from '@neo4j-cc/ui';

import './cc-super-layout.css';

/**
 * A React element placed at a path
 */
export interface CcRoutableDestination {
  path: string;
  title: string;
  Element: (props: any) => JSX.Element;
}

export interface CcSuperLayoutProps {
  title: string;
  items: CcRoutableDestination[];
  themes?: string[];
}

export function CcSuperLayout({ title, items, themes }: CcSuperLayoutProps) {
  const themeNames = themes || ['light', 'dark'];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <CcNavbar className="bg-base-300 shadow min-h-0 py-0">
        <CcNavbar.Start className="grid grid-flow-col gap-2">
          <span className="text-primary text-xs">{title}</span>
          {items.map((routable) => (
            <Link to={routable.path}>
              <CcButton size="xs" className="text-sm normal-case" color="ghost">
                {routable.title}
              </CcButton>
            </Link>
          ))}
        </CcNavbar.Start>
        <CcNavbar.End>
          <CcSelect
            data-choose-theme
            size="xs"
            className="w-32 pr-0 m-0 border-none"
            color="ghost"
          >
            {themeNames.map((themeName) => (
              <CcSelect.Option value={themeName}>{themeName}</CcSelect.Option>
            ))}
          </CcSelect>
        </CcNavbar.End>
      </CcNavbar>

      <Routes>
        {items.map((routable) => (
          <Route path={routable.path} element={<routable.Element />} />
        ))}
      </Routes>
      {/* END: routes */}
    </>
  );
}
