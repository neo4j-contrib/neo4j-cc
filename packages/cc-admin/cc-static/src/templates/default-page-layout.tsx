import React from "react"

export default function DefaultPageLayout({ children }) {
  return (
    <div className="inset-0 container">
      {children}
    </div>
  )
}