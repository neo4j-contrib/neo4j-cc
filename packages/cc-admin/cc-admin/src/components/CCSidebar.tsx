import React from 'react';
import { Link } from 'react-router-dom';
import { CCRandomPhrase } from './CCRandomPhrase';

const randomPhrases = [
  "Carbon Copy", "Central Casting", "Comedy Channel", "Caring Colleagues", "Community Center", "Creative Commons (CC BY-SA 4.0)", "Continually Curated", "Community Content", "Copy Center"
]

export const CCSidebar:React.FC = () => (
  <div className="hidden md:flex md:flex-shrink-0">
    <div className="flex flex-col w-64">
      {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
      <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            CC-Admin
          </div>
          <div className="flex items-center flex-shrink-0 px-4 text-gray-400 text-xs">
            <CCRandomPhrase oneOf={randomPhrases}/>
          </div>
          <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
            {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" --> */}
            <Link to="/users" className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              {/* <!-- Heroicon name: outline/users --> */}
              <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Users
            </Link>

            <Link to="/datacatalog" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              {/* <!-- Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" -->
              <!-- Heroicon name: outline/home --> */}
              <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              Data Catalogs
            </Link>
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <Link to="/" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                <img className="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=4AywNw53Tq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Tom Cook
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  View profile
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>

)
