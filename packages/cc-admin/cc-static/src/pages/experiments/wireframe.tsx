
import * as React from "react"

import Layout from "components/SiteLayout";

interface PlacecardProps {
  title: string
  link: string
  order: "first"|"second"|"middle"|"penultimate"|"last"
}

const cornerClasses = {
  first: "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500",
  second: "sm:rounded-tr-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500",
  middle: "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500",
  penultimate: "sm:rounded-bl-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500",
  last: "rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
}

const Placecard:React.FC<PlacecardProps> = ({title, link, order, children}) => (
  <div className={cornerClasses[order]}>
  <div>
    <span className="rounded-full h-12 text-center w-12 inline-block p-3 bg-blue-50 text-blue-700 ring-4 ring-white"> 
      {title.slice(0,1)}
    </span>
  </div>
  <div className="mt-8">
    <h3 className="text-lg font-medium">
      <a href={link} className="focus:outline-none">
        { /** <!-- Extend touch target to entire panel --> */}
        <span className="absolute inset-0" aria-hidden="true"></span>
        {title}
      </a>
    </h3>
    <p className="mt-2 text-sm text-gray-500">
      {children}
    </p>
  </div>
  <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
    </svg>
  </span>
</div>
)

const LandingPage = () => {
  return (
    <Layout>
      <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">

        <Placecard title="People" link="/people/" order="first">
          Registered Neo4j community users.
        </Placecard>

        <Placecard title="Data" link="/" order="second">
          Data
        </Placecard>
        
      </div>
    </Layout>
  )
}

export default LandingPage
