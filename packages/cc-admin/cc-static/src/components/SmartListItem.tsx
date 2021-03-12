import React from 'react';
import { useMachine } from '@xstate/react';
import { selectMachine } from 'components/select-machine';
import { navigate } from '@reach/router';

// type Record = {[key:string]:any}

export interface SmartTileProps {

  onSelect?: (key:number|string) => any;

  value: Record<any,any>;
}

const NonNullText:React.FC<any> = ({children, className}) => children ? <span className={className}>{children}</span> : null;

/**
 * Primary UI component for user interaction
 * 
 * Hoverable, selectable, actionable.
 */
export const SmartListItem: React.FC<SmartTileProps> = ({
  value: record,
  onSelect
}) => {
  const [selectedState, toSelect] = useMachine(selectMachine);
  const [expandedState, toExpand] = useMachine(selectMachine);

  const isSelected = selectedState.matches('selected');
  const selectedStyle = isSelected ? 'cc-tile--selected' : '';
  const isExpanded = expandedState.matches('selected');
  const expandedStyle = isExpanded ? 'cc-tile--expanded' : '';

  const key = record.identifier ?? record.id ?? record.guid ?? record.key;

  const title = record.title ?? record.name ?? key;

  const description = record.description ?? record.summary ?? record.brief;

  const url = record.url ?? record.canonical_url;

  const rank = record.rank ?? record.weight ?? record.value;

  const labels = record.labels ?? record.tags ?? record.keywords;

  return (
    <div
      key={key}
      className={['cc-tile', 'bg-gray-100','space-x-4', selectedStyle, expandedStyle].join(' ')}
    >
      <div
        className="grab-area flex-none w-12 cursor-move text-gray-400 hover:text-black" 
        onClick={() => {toSelect('TOGGLE'); if (onSelect !== undefined) onSelect(key); }} >
        <div 
          className={`my-auto mx-auto h-6 w-6 rounded-full border border-solid  ${isSelected ? "text-blue-400":""}`}
          
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>      
        </div>
      </div>
      <a 
        className="text-left flex-grow grid gap-x-4 grid-flow-col auto-cols-min cursor-pointer"
        // onClick={() => { if (url) navigate(url); }}
        href={url}
      >
        <NonNullText>{title}</NonNullText>
        <NonNullText className="text-gray-400 hidden md:inline">{description}</NonNullText>
      </a>

      <div
        className="reveal-area flex-none w-12 cursor-pointer hover:text-yellow-400" 
        onClick={() => {toExpand('TOGGLE')}} >
        <div className="my-auto mx-auto h-6 w-6 rounded-full border border-solid">
          { isExpanded ? 
            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>)
            :
            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          )
          }
        </div>
      </div>
    </div>
  );
};
