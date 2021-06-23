import React, { FC } from "react"
import { Helmet } from "react-helmet"

import {AppLayoutProps} from "./AppLayoutProps";
import {Workspace} from "./Workspace";


const Layout:FC<AppLayoutProps> = function ({ title, children }) {

  return (
    <div className="layout h-screen bg-white overflow-hidden flex">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${title ? title : "CC-UNTITLED"}`}</title>
      </Helmet>

      <div className="bg-green-400 flex-1 max-w-none mx-auto w-0 flex flex-col md:px-8 xl:px-0">
        <Workspace>{children}</Workspace>
      </div>
    </div>
  )
}

export default Layout