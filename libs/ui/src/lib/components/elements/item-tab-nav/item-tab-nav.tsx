import { useState } from 'react';
import { classNames } from '../../../utils';
import { keyForItem, showItem, ViewableItem } from '../item-views/item-views';
import './item-tab-nav.module.scss';


/* eslint-disable-next-line */
export interface ItemTabNavProps {
  items: ViewableItem[]
  onSelected?: (item:ViewableItem) => unknown
  children: React.ReactNode
}

export function ItemTabNav({items, onSelected, children}: ItemTabNavProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)
  
  const onSelectItem = (value:ViewableItem) => {
    setSelectedItemIndex(items.indexOf(value));
    if (onSelected) onSelected(value)
  }

  return (
    <div className="pb-5 border-b border-gray-200 sm:pb-0">
      <div className="mt-3 sm:mt-4">
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {items.map((item, i) => (
              <span
                key={keyForItem(item)}
                onClick={() => {onSelectItem(item)}}
                className={classNames(
                  (i === selectedItemIndex)
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'cursor-pointer whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={(i === selectedItemIndex) ? 'page' : undefined}
              >
                {showItem(item)}
              </span>
            ))}
            <span className="flex-grow" />
            <span>
              {children}
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ItemTabNav;
