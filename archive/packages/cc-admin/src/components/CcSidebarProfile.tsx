import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/function';
import { CcNavIcon, CcNavLink } from './CcSidebar';
import { LoginIcon } from '@heroicons/react/outline';

const SomeUser:React.FC<{name:string, picture:string, email:string}> = ({name, picture, email}) => (
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
)

const NoUser:React.FC<{}> = () => (
  <div className="flex items-center">
  <div>
    <CcNavIcon><LoginIcon /></CcNavIcon>
  </div>
  <div className="ml-3">
    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
      Login
    </p>
  </div>
</div>
)

export const CcSidebarProfile:React.FC = () => {
  const { user } = useAuth0();

  const profile = pipe (
    O.fromNullable(user),
    O.fold(() => (<NoUser/>), (props) => (<SomeUser {...props}/>))
  )

  return (
    <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
      <CcNavLink to="/profile" className="flex-shrink-0 w-full group block">
        {profile}
      </CcNavLink>
    </div>
  )
}