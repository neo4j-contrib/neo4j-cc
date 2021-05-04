import { RedirectLoginOptions, useAuth0 } from "@auth0/auth0-react";
import React from "react";

export type LoginButtonProps = Pick<RedirectLoginOptions, "connection"> & {
  name: string
}

export const LoginButton:React.FC<LoginButtonProps> = ({connection, name}) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      type="button"
      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => loginWithRedirect({connection})}
    >
      Log In to {name}
    </button>
  );
};
