import React, { FC } from "react"

import {AppLayoutProps} from "./AppLayoutProps";

const Layout:FC<AppLayoutProps> = function ({ children }) {

  return (
    <div className="layout h-full w-full bg-white overflow-hidden">
      {children}
    </div>
  )
}

export default Layout