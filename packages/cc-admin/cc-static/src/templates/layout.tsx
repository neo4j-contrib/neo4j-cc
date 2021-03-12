import React, { FC } from "react"

const Layout: FC = function ({ children }) {
  return (
    <div className="inset-0 container">
      {children}
    </div>
  )
}
export default Layout
