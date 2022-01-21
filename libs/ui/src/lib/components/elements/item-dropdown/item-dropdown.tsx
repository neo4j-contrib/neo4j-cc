import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';
import { keyForItem, showItem, ViewableItem } from '../item-views/item-views';
import './item-dropdown.module.scss';


export interface ItemDropdownProps {
  items: ViewableItem[]
  onSelected?: (item:ViewableItem) => unknown
}

export interface ItemSelectionButtonProps {
  item: ViewableItem
  onSelected?: (item:ViewableItem) => unknown
}


export function ItemSelectionButton({item, onSelected}:ItemSelectionButtonProps) {
  return (
    <Menu.Item key={keyForItem(item)}>
      {({ active }) => (
        <button
          onClick={() => {if (onSelected !== undefined) onSelected(item)}}
          className={`${
            active ? 'bg-blue-500 text-white' : 'text-gray-900'
          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
        >
          {showItem(item)}
        </button>
      )}
    </Menu.Item>
  )
}

export function ItemDropdown({items, onSelected}: ItemDropdownProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)


  const onSelectItem = (value:ViewableItem) => {
    setSelectedItemIndex(items.indexOf(value));
    if (onSelected) onSelected(value)
  }

  return (
    <Menu as="div" className="relative inline-block text-left w-56">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {showItem(items[selectedItemIndex])}
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
            {items.map( item => (<ItemSelectionButton item={item} onSelected={onSelectItem} />))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
