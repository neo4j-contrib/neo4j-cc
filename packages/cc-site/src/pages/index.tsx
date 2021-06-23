import * as React from "react"

import useSiteMetadata from '../hooks/use-site-metadata';

import Layout from "../components/app/SidebarLayout";

const IndexPage = () => {
  const { title } = useSiteMetadata();

  return (
    <Layout title={title} >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <h1>Hello</h1>
      </div>
    </Layout>
  )
}

export default IndexPage
