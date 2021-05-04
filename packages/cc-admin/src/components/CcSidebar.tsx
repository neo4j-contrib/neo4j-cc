import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { CcRandomPhrase } from './CcRandomPhrase';
import { CcSidebarProfile } from './CcSidebarProfile';
import { AcademicCapIcon, BookOpenIcon, BriefcaseIcon, CalendarIcon, CodeIcon, DatabaseIcon, DocumentTextIcon, NewspaperIcon, PencilAltIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/outline'
const randomWords = {
  adjectives: [
    "Calm", "Carbon", "Careful", "Caring", "Central", "Centralized", "Collaborative", "Combinatorial", "Community", "Concentric", "Connected", "Connecting", "Contiguous", "Continuous", "Cool", "Constant", "Cooperative", "Copy", "Core", "Cosmic", "Creative", "Crowdsourced", "Curated", "Current", "Cyclic"
  ],
  nouns: [
    "Center", "Channel", "Collaboration", "Colleagues", "Comments", "Commons", "Community", "Connections", "Content", "Copy", "Creations"
  ]
}

/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" --> */
export const CcNavLink:React.FC<NavLinkProps> = (props) => (
  <NavLink {...props} activeClassName="bg-gray-100 text-gray-900" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
    {props.children}
  </NavLink>
)

export const CcNavIcon:React.FC<{}> = ({children}) => (
  <div className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6">
    {children}
  </div>)

export const CcSidebar:React.FC = () => {
  return (
  <div className="hidden md:flex md:flex-shrink-0">
    <div className="flex flex-col w-64">
      {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
      <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
           CC-Admin
          </div>
          <div className="flex items-center flex-shrink-0 px-4 text-gray-400 text-xs">
            <CcRandomPhrase {...randomWords}/>
          </div>
          <nav className="mt-5 flex-1 px-2 bg-white space-y-1">

            <CcNavLink to="/people">
              <CcNavIcon><UsersIcon/></CcNavIcon>
              People
            </CcNavLink>

            <CcNavLink to="/organizations" >
              <CcNavIcon><UserGroupIcon/></CcNavIcon>
              Organizations
            </CcNavLink>

            <CcNavLink to="/software" >
              <CcNavIcon><BriefcaseIcon/></CcNavIcon>
              Software
            </CcNavLink>

            <CcNavLink to="/code">
              <CcNavIcon><CodeIcon/></CcNavIcon>
              Code
            </CcNavLink>

            <CcNavLink to="/datacatalogs" >
              <CcNavIcon><DatabaseIcon/></CcNavIcon>
              Data Catalogs
            </CcNavLink>

            <CcNavLink to="/datasets" >
              <CcNavIcon><DocumentTextIcon/></CcNavIcon>
              Datasets
            </CcNavLink>

            <CcNavLink to="/notebooks" >
              <CcNavIcon><PencilAltIcon/></CcNavIcon>
              Notebooks
            </CcNavLink>

            <CcNavLink to="/events" >
              <CcNavIcon><CalendarIcon/></CcNavIcon>
              Events
            </CcNavLink>

            <CcNavLink to="/articles" >
              <CcNavIcon><NewspaperIcon/></CcNavIcon>
              Blog Posts
            </CcNavLink>
            <CcNavLink to="/books" >
              <CcNavIcon><BookOpenIcon/></CcNavIcon>
              Books
            </CcNavLink>
            <CcNavLink to="/courses" >
              <CcNavIcon><AcademicCapIcon/></CcNavIcon>
              Courses
            </CcNavLink>
          </nav>
        </div>
        <CcSidebarProfile />
      </div>
    </div>
  </div>
  )
}