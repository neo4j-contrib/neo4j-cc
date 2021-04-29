import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const CcSidebarProfile:React.FC = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user || {};

  if (!user) {
    return (<div>Nobody here</div>)
  }

  return (
    <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
      <Link to="/" className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <div>
            <img className="inline-block h-9 w-9 rounded-full" src={picture} alt={name}/>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {name}
            </p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
              {email}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}