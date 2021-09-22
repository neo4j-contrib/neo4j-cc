import React from "react"

import {useAuth} from '../services/auth-provider';

const Callback = () => {
  const {concludeAuth} = useAuth();

  concludeAuth()

  return <p>Loading...</p>
}

export default Callback
