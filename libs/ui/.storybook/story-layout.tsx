import React, { useEffect, useState } from 'react'

import { Theme } from 'react-daisyui'

import { useGlobalTheme } from './theming'


export const StoryLayout = ({ children }) => {
  const globalTheme = useGlobalTheme()

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', globalTheme)
  }, [globalTheme])

  return (
    <Theme dataTheme={globalTheme} className="w-full h-1/2 p-8 bg-base-100">

        <div className='block sm:hidden'>
          {children}
        </div>

        <div className='hidden sm:grid'>
          <div className='relative overflow-x-auto'>
            <div
              className="preview border-base-300 bg-base-100 
                        flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2
                        overflow-x-hidden overflow-y-hidden border bg-cover bg-top p-4"
              style={{ backgroundSize: '5px 5px' }}
            >
              {children}
            </div>
          </div>
        </div>
    </Theme>
  )
}
