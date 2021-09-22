import './cc-site-layout.module.scss';

/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { classNames } from '@neo4j-cc/ui'
import {CcSiteMenubar} from '@neo4j-cc/ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CcSiteLayoutProps {
  title?: string
}

const CcPageHeader:React.FC<{title?:string}> = ({title}) => {
  return (title !== undefined) ? 
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-lg leading-6 font-semibold text-gray-900">Dashboard</h1>
      </div>
    </header>
    : null
}


export const CcSiteLayout:React.FC<CcSiteLayoutProps> = ({children, title}) => {
  return (
    <div className="inset-0 bg-yellow-200">
      <CcSiteMenubar />
      <CcPageHeader title={title} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}
