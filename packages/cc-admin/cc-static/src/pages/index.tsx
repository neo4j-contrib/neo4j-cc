import * as React from "react"

import Layout from "components/SiteLayout";
import { LinkCard } from "components/LinkCard";

const IndexPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <LinkCard title="People" detail="" to="/people"/>
        <LinkCard title="Meetups" detail="" to="/meetups"/>
        <LinkCard title="experiments" detail="" to="/experiments"/>
      </div>
    </Layout>
  )
}

export default IndexPage
