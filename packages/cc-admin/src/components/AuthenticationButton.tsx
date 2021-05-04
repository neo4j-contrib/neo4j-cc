import {LoginButton, LoginButtonProps} from "./LoginButton";
import {LogoutButton} from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const socialConnections:{[key:string]:LoginButtonProps} = {
  discord: {
    connection: 'discord',
    name:"Discord"
  },
  google: {connection:'google', name:"Google"},
  github: {connection:'github', name:"GitHub"},
  any: {connection:undefined, name:"Social"}
}

export interface AuthenticationButtonProps {
  social: keyof typeof socialConnections
}

export const AuthenticationButton:React.FC<AuthenticationButtonProps> = ({social}) => {
  const { isAuthenticated } = useAuth0();
  const chosenSocial = socialConnections[social];

  return isAuthenticated ? <LogoutButton /> : <LoginButton {...chosenSocial} />;
};
