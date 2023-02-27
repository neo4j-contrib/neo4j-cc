import styles from './cc-profile-item.module.scss';

import React from 'react';
import { User } from "@auth0/auth0-react";

import { pipe, Option as O } from '@neo4j-cc/prelude';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const SomeUser:React.FC<User> = ({name, picture, nickname}) => (
  <div className="flex items-center">
  <div>
    <img className="inline-block h-9 w-9 rounded-full" src={picture} alt={name}/>
  </div>
  <div className="ml-3">
    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
      {name}
    </p>
    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
      @{nickname}
    </p>
  </div>
</div>
)

const NoUser:React.FC<Record<string,never>> = () => (
  <div className="flex items-center">
  <div>
    <UserCircleIcon className="inline-block text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"/>
  </div>
  <div className="ml-3">
    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
      Login
    </p>
  </div>
</div>
)


export interface CcProfileItemProps {
  user?:User,
  userLink?: string
}

export const CcProfileItem:React.FC<CcProfileItemProps> = ({user}) => {

  const profile = pipe (
    O.fromNullable(user),
    O.match(
      () => (<NoUser/>), // if user is null
      (user) => (<SomeUser {...user}/>) // if there is a user
    )
  )

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">

    <div className="h-4 flex-shrink-0 flex border-t border-gray-200 p-4">
      <div className="flex-shrink-0 h-4 w-full group block">
        {profile}
      </div>
    </div>
    </div>
  )
}