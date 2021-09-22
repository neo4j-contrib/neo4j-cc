
import React, { FC, Fragment } from 'react'
import { Transition } from '@headlessui/react'
import {
  XIcon,
} from '@heroicons/react/outline'
import { Neo4jLogoBased } from '../icons'
import { CcRandomPhrase } from '../elements/CcText'
import { nouns, adjectives } from '../../lib/words'

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export interface CcNavigationItem {
  name: string;
  href: string;
  icon: (props:React.SVGProps<SVGSVGElement>) => JSX.Element;
  current: boolean
}

export const CcDesktopSidebar:FC<{navigation:CcNavigationItem[]}> = ({navigation}) => {
  return (
    <div className="hidden bg-neo4j-blue md:flex md:flex-shrink-0">
      <div className="flex flex-col w-48">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col h-0 flex-1">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="mx-auto">
              <Neo4jLogoBased className="h-12 fill-current text-white" />
              <div className="text-gray-400 text-xs text-center">
                <CcRandomPhrase nouns={nouns} adjectives={adjectives} />
            </div>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-800 text-white' : 'text-white hover:bg-blue-600 hover:bg-opacity-75',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-blue-300" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-blue-800 p-4">
            <a href="#" className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Tom Cook</p>
                  <p className="text-xs font-medium text-blue-200 group-hover:text-white">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export const CcMobileSidebar:FC<{navigation:CcNavigationItem[]} & {handleClose:() => void}> = ({navigation, handleClose}) => (
  <Transition.Child
  as={Fragment}
  enter="transition ease-in-out duration-300 transform"
  enterFrom="-translate-x-full"
  enterTo="translate-x-0"
  leave="transition ease-in-out duration-300 transform"
  leaveFrom="translate-x-0"
  leaveTo="-translate-x-full"
>

  <div className="relative flex-1 flex flex-col max-w-xs w-full bg-green-700">
    <Transition.Child
      as={Fragment}
      enter="ease-in-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="absolute top-0 right-0 -mr-12 pt-2">
        <button
          className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={handleClose}
        >
          <span className="sr-only">Close sidebar</span>
          <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </Transition.Child>
    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
      <div className="flex-shrink-0 flex items-center px-4">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-logo-blue-300-mark-white-text.svg"
          alt="Neo4j Community Center"
        />
      </div>
      <nav className="mt-5 px-2 space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-blue-800 text-white'
                : 'text-white hover:bg-blue-600 hover:bg-opacity-75',
              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
          >
            <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-blue-300" aria-hidden="true" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
    <div className="flex-shrink-0 flex border-t border-blue-800 p-4">
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-base font-medium text-white">Tom Cook</p>
            <p className="text-sm font-medium text-blue-200 group-hover:text-white">View profile</p>
          </div>
        </div>
      </a>
    </div>
  </div>
  </Transition.Child>
)