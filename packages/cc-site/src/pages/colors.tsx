import React, {FC} from "react"

import useSiteMetadata from '../hooks/use-site-metadata';

import Layout from "../components/app/SidebarLayout";
const colors = require('tailwindcss/colors')

const ColorSwatch:FC<{colorName:string, colorValue:string}> = ({colorName, colorValue}) => {
  return (
    <div className="space-y-1.5">
    <div className="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0" style={{backgroundColor: colorValue}}></div>
    <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
      <div className="w-6 font-medium text-gray-900">{colorName}</div>
      <div>{colorValue}</div>
    </div>
    </div>
  )
}

const IndexPage = () => {
  const { title } = useSiteMetadata();

  return (
    <Layout title={title} >
        <div className="grid grid-cols-1 gap-8">

          {Object.keys(colors).map( (colorGroup) => (
            <div>
            <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
              <div className="w-32 flex-shrink-0">
                <div className="h-10 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-gray-900">{colorGroup}</div>
                  <div>
                    <code className="text-xs text-gray-500">colors.{colorGroup}</code>
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {( (typeof colors[colorGroup] === 'object') ? Object.keys(colors[colorGroup]).map( (colorName) => (
                  <ColorSwatch colorName={`${colorGroup}-${colorName}`} colorValue={colors[colorGroup][colorName]} />
                )) :
                  <ColorSwatch colorName={colorGroup} colorValue={colors[colorGroup]} />
                )}

              </div>
            </div>
          </div>

          ))}
        </div>
    </Layout>
  )
}

export default IndexPage
