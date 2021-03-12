import React from 'react';

import { useMachine } from '@xstate/react';
import { toggleMachine } from './toggle-machine';

import {Link} from 'gatsby';

import {useAuth} from '../services/auth-provider';
import {useUser} from '../services/user-provider';

const links = [
  {
    to: '/',
    title: 'Home'
  }
]

export interface SiteHeaderProps {
}

const ProfileWidget: React.FC<SiteHeaderProps> = (props) => {

  const [activeProfile, toggleProfile] = useMachine(toggleMachine);

  const {user, setUser, clearUser} = useUser();
  const {isAuthenticated} = useAuth();
  
  return (
    <div className="ml-3 relative">
      <div>
        <button onClick={() => toggleProfile('TOGGLE')} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
          <span className="sr-only">Open user menu</span>
          { (isAuthenticated() && user) ? 
            (<img className="h-8 w-8 rounded-full border-2 border-blue-300 border-solid" src={user.image} alt=""/>)
            :
            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-8 w-8 p-1 text-yellow-200 rounded-full border-2 border-yellow-300 border-solid" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>)
          }
        </button>
      </div>
      {activeProfile.matches('active') ? <ProfileMenu {...props} /> : null}
    </div>
  )
}

const ProfileMenu: React.FC<SiteHeaderProps> = ({}) =>  {
  
  const {register, logout, isAuthenticated} = useAuth();

  return (
  /* <!--
      Profile dropdown panel, show/hide based on dropdown state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    --> */
    <div className="origin-top-right absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

      {isAuthenticated() ? (
        <>
          <Link to={`/profile`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</Link>
          <Link to={`/profile/settings`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</Link>
          <span onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</span>
        </>
      ) : (
        <>
          <Link to={`/account`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign In</Link>
          {/* <span onClick={onLogin} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign in</span> */}
          <span onClick={register} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign up</span>
        </>
      )}
    </div>

)}

const Notifications: React.FC<{}> = ({}) => {

  const {user} = useUser();

  if (user !== undefined) {
    (
      <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
      <span className="sr-only">View notifications</span>
      {/* <!-- Heroicon name: outline/bell --> */}
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </button>
      )
  }  
  return null;
}

export const SiteHeader: React.FC<SiteHeaderProps> = (props) => {

  return (
    <nav className="bg-gray-800 flex-none">
      <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="block md:hidden h-8 w-auto" src="/images/neo4j-cc-mark-dark.svg" alt="Neo4j CC"/>
              <img className="hidden md:block lg:hidden h-8 w-auto" src="/images/neo4j-cc-smallword-dark.svg" alt="Neo4j CC"/>
              <img className="hidden lg:block h-8 w-auto" src="/images/neo4j-cc-wordmark-dark.svg" alt="Neo4j CC"/>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                {links.map(link => (
                  <Link 
                    key={link.to}
                    to={link.to} 
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center">
              <Notifications />
              <ProfileWidget {... props} />
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            {/* <!-- Mobile menu button --> */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* <!-- Icon when menu is closed. --> */}
              {/* <!--
                Heroicon name: outline/menu
    
                Menu open: "hidden", Menu closed: "block"
              --> */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <!-- Icon when menu is open. --> */}
              {/* <!--
                Heroicon name: outline/x
    
                Menu open: "block", Menu closed: "hidden"
              --> */}
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    
      {/* <!--
        Mobile menu, toggle classes based on menu state.
    
        Menu open: "block", Menu closed: "hidden"
      --> */}
      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=4AywNw53Tq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">Tom Cook</div>
              <div className="text-sm font-medium text-gray-400">tom@example.com</div>
            </div>
            <button className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  );
  };

