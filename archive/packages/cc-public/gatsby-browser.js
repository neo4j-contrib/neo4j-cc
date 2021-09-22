import './src/styles/global.css';

import React from "react"
import AppProviders from "./src/services/app-providers";

export const wrapRootElement = ({ element }) => {
  return <AppProviders>{element}</AppProviders>
}
