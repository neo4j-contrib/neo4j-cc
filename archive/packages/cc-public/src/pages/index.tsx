import * as React from "react"

import Layout from "components/SiteLayout";
import { LinkCard } from "components/LinkCard";

const IndexPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <LinkCard title="Data" detail="" to="/data"/>
        <LinkCard title="Code" detail="" to="/code"/>
      </div>
    </Layout>
  )
}

export default IndexPage
