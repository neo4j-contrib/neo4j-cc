import { Route, RouteProps } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { CCLoading } from "../components/CCLoading";
import React from "react";

export interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>
}
export const ProtectedRoute:React.FC<ProtectedRouteProps> = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <CCLoading />,
    })}
    {...args}
  />
);
