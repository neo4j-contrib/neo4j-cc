import './month-selector.module.scss';


import { subMonths } from 'date-fns'
import { makeBy as makeArrayBy } from 'fp-ts/NonEmptyArray'
import { pipe } from '@neo4j-cc/prelude'

import { Fragment, useState } from 'react';

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

import { formatHumanMonth, formatISODate } from '../../utils/dates';

const indexedMonthPriorTo = (d:Date, onSelected?:(value:Date) => unknown) => (prior:number) => {
  
  const priorMonth = subMonths(d, prior);

  return (
    // <option key={formatISODate(priorMonth)} value={formatISODate(priorMonth)}>
    //   {formatHumanMonth(priorMonth)}
    // </option> 
    <Menu.Item key={formatISODate(priorMonth)}>
      {({ active }) => (
        <button
          onClick={() => {if (onSelected !== undefined) onSelected(priorMonth)}}
          className={`${
            active ? 'bg-blue-500 text-white' : 'text-gray-900'
          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
        >
          {formatHumanMonth(priorMonth)}
        </button>
      )}
    </Menu.Item>
  )
}


export interface MonthSelectorProps {
  upToMonthsBack: number
  onSelected?: (isoMonth:Date) => void
}

export function MonthSelector({upToMonthsBack, onSelected}: MonthSelectorProps) {
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date())

  const onSelectMonth = (value:Date) => {
    setSelectedMonth(value);
    if (onSelected) onSelected(value)
  }

  const monthOptions = <>
    {pipe(upToMonthsBack, makeArrayBy(indexedMonthPriorTo(new Date(), onSelectMonth)))}
  </>


  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {formatHumanMonth(selectedMonth)}
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {monthOptions}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MonthSelector;
