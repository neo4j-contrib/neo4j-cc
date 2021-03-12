import React from "react"
import { Link } from "gatsby"

const dynamicContent = props => {
  const { pageContext } = props
  const { pageContent, links } = pageContext

  return (
    <div className={`bg-red-200`} >
      <ul>
        {pageContent.map((data, index) => {
          return <li key={`content_item_${index}`}>{data.item}</li>
        })}
      </ul>
      <ul>
        {links.map((item, index) => {
          return (
            <li key={`link_${index}`}>
              <Link to={item.to}>{item.to}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default dynamicContent