import * as React from 'react'
import {AuthProvider} from './auth-provider'
import {UserProvider} from './user-provider'

const AppProviders:React.FC = ({children}) => {
  return (
    <UserProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </UserProvider>
  )
}

export default AppProviders