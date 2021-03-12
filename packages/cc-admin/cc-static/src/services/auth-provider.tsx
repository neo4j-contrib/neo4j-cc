import React, { useState, useEffect } from 'react';

import { navigate } from "gatsby"

import auth0, { Auth0UserProfile, WebAuth } from "auth0-js"

import { pipe } from "fp-ts/function";
import {Option, some, none, map} from "fp-ts/Option"

import {useUser,PersonRecord} from '../services/user-provider';

const isBrowser = typeof window !== "undefined"

type Callback = () => any

const auth0ProfileToPerson = (profile:Auth0UserProfile):PersonRecord => ({
  '@type': 'Person',
  identifier: profile.sub,
  name: profile.name,
  summary: "",
  email: profile.email,
  image: profile.picture,
  username: profile.nickname
})

interface AuthContextValues {
  login: () => void;
  logout: () => void;
  register?: () => void;
  isAuthenticated: () => boolean;
  concludeAuth: () => void;
}

const noop = () => {}

const defaultAuthContextValues = {
  login:noop, 
  logout:noop, 
  isAuthenticated:()=>false, 
  concludeAuth:noop
}

const AuthContext = React.createContext<AuthContextValues>(defaultAuthContextValues);

const AuthProvider:React.FC = (props) => {
  
  const {setUser, clearUser} = useUser(); 

  const [loading, setLoading] = useState(true);

  const auth:Option<WebAuth> = isBrowser
  ? some(new auth0.WebAuth({
      domain: process.env.GATSBY_AUTH0_DOMAIN!,
      clientID: process.env.GATSBY_AUTH0_CLIENTID!,
      redirectUri: process.env.GATSBY_AUTH0_CALLBACK!,
      responseType: "token id_token",
      scope: "openid profile email",
    }))
  : none;

  type StringOrBoolean = string | boolean;
  type NumberOrBoolean = number | boolean;
  
  type TokenStore = {
    accessToken: StringOrBoolean;
    idToken: StringOrBoolean;
    expiresAt: NumberOrBoolean;
  }
  
  const tokens:TokenStore = {
    accessToken: false,
    idToken: false,
    expiresAt: false,
  }

  // useEffect(() => {
  //   silentAuth(handleCheckSession)
  // });


  
  const setSession = (cb:Callback = () => {}) => (err:any, authResult:any) => {
    if (err) {
      console.log(err, authResult);
      navigate("/")
      cb()
      return
    }
  
    console.log('setSession', authResult);
  
    if (authResult && authResult.accessToken && authResult.idToken) {
      let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
      tokens.accessToken = authResult.accessToken
      tokens.idToken = authResult.idToken
      tokens.expiresAt = expiresAt
      setUser(auth0ProfileToPerson(authResult.idTokenPayload));
      console.log('user', authResult.idTokenPayload);
      localStorage.setItem("isLoggedIn", "true")
      navigate("/")
      cb()
    }
  }

  const silentAuth = (callback:Callback) => {
    // if (!isAuthenticated()) return callback()
    // pipe(
    //   auth,
    //   map( a => a.checkSession({}, setSession(callback)))
    // )
    return callback();
  }

  const handleCheckSession = () => {
    setLoading(false);
  }

  const register = () => { alert('register, somehow :)')} // register the user

  const isAuthenticated = () => {
    if (!isBrowser) {
      return false;
    }
  
    return localStorage.getItem("isLoggedIn") === "true"
  }
    
  const login = () => {
    pipe(
      auth,
      map( a => a.authorize() )
    )
  }
  const logout = () => {
    localStorage.setItem("isLoggedIn", "false")
    clearUser();
    pipe(
      auth,
      map((a) => a.logout({}))
    )
  }

  const concludeAuth = () => {
    pipe(
      auth,
      map( a => a.parseHash(setSession()))
    )
  }

  // if (loading) return (<>Loading</>);

  return (
    <AuthContext.Provider value={{login, logout, register, isAuthenticated, concludeAuth}} {...props}/>
  )
};

const useAuth = () => React.useContext(AuthContext)

export {AuthProvider, useAuth}