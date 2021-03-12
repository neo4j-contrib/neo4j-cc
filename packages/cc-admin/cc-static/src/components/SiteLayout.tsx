import React, { FC } from "react"
import { Helmet } from "react-helmet"

import {SiteHeader} from "./SiteHeader";
import {SiteFooter} from "./SiteFooter";
import {Workspace} from "./Workspace";

import useSiteMetadata from '../hooks/use-site-metadata';

const alertWith = (msg:string) => () => { alert(msg) }

export interface LayoutProps {
  title?: string;
}

const Layout:FC<LayoutProps> = function ({ title, children }) {
  const { title:siteTitle } = useSiteMetadata();

  return (
    <div className="layout h-screen bg-white overflow-hidden flex">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${siteTitle} ${title ? title : ""}`}</title>
      </Helmet>

      <div className="bg-green-400 flex-1 max-w-none mx-auto w-0 flex flex-col md:px-8 xl:px-0">
        <SiteHeader/>
        <Workspace>{children}</Workspace>
        <SiteFooter />
      </div>
    </div>
  )
}

export default Layout