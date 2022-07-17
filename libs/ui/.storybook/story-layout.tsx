import React, { useEffect, useState } from 'react'

import { Theme } from 'react-daisyui'

import { useGlobalTheme } from './theming'


export const StoryLayout = ({ children }) => {
  const globalTheme = useGlobalTheme()

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', globalTheme)
  }, [globalTheme])

  return (
    <Theme dataTheme={globalTheme} className="w-full h-screen p-8 bg-base-100">
      {children}
    </Theme>
  )
}
