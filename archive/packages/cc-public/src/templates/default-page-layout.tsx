import React from "react"

import Layout from "components/SiteLayout";

export default function DefaultPageLayout({ children }:any) {
  return (
    <Layout>
      <div className="prose p-8 bg-white rounded max-w-none">
      {children}
      </div>
    </Layout>
  )
}