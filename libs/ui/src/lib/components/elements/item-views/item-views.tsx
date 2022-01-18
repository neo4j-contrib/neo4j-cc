import './item-views.module.scss';

/* eslint-disable-next-line */
export type ViewableItem = Record<string, unknown> | string | number;

export interface ItemViewsProps {value:ViewableItem}

export const ItemTextView = ({value}:ItemViewsProps) => (
  <p className="bg-blue-200 h-full overflow-hidden p-1">{value}</p>
)


export const DebugItemView = ({value}:ItemViewsProps) => (
  <pre className="bg-red-400 h-auto overflow-scroll p-1">
    <button className="bg-red-200 h-auto p-0 px-1 mr-1" onClick={() => console.log(value)}>log</button>
    {JSON.stringify(value)}
  </pre>
)

export default DebugItemView;
