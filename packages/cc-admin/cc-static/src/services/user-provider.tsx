
import React, { useState } from 'react';

import {Person, WithContext} from 'schema-dts';

interface User {
  username: string;
  summary: string;
}

/**
 * PersonRecord is an intersection type, used to coerce Person 
 * into object form rather than plain string.
 */
export type PersonRecord = Exclude<Person, string> & User

const anonymousUser:PersonRecord = {
  '@type': "Person",
  identifier: "ø",
  name: "Public Good",
  summary: "the body politic",
  email: "public@neo4j.com",
  image: "https://i.pravatar.cc/300",
  username: "gg"
}

interface UserContextValues {
  user:PersonRecord; 
  setUser:React.Dispatch<PersonRecord>;
  clearUser:() => void;
}

const defaultUserContextValues:UserContextValues = {
  user: anonymousUser,
  setUser: () => {},
  clearUser: () => {}
}

const UserContext = React.createContext<UserContextValues>(defaultUserContextValues);

const UserProvider:React.FC = ({children}) => {
  const [user, setUser] = useState<PersonRecord>(anonymousUser);

  const clearUser = () => setUser(anonymousUser);

  return (
    <UserContext.Provider value={{user, setUser, clearUser}}>
      {children}
    </UserContext.Provider>
  )
};

const useUser = () => React.useContext(UserContext)

export {UserProvider, useUser}