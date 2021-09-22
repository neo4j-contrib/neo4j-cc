import * as React from "react"

import { Router } from "@reach/router"
import { Link } from "gatsby"

import Layout from "components/SiteLayout";

import {useAuth} from '../services/auth-provider';
import {useUser} from '../services/user-provider';

const Home:React.FC<{path:string, user:any}> = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings:React.FC<{path:string}> = () => <p>Settings</p>
const Billing:React.FC<{path:string}> = () => <p>Billing</p>

const AccountPage:React.FC<{}> = () => {
  const {user, setUser, clearUser} = useUser();
  const {isAuthenticated, login, logout} = useAuth();

  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  return (
    <Layout>
      <nav>
        <Link to="/account">Home</Link>{" "}
        <Link to="/account/settings">Settings</Link>{" "}
        <Link to="/account/billing">Billing</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <Router>
        <Home path="/account" user={user}/>
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </Layout>
  )
}

export default AccountPage