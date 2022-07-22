import { Any } from '@effect-ts/core/Prelude';
import { pipe } from 'fp-ts/lib/function';
import { has } from 'fp-ts/lib/ReadonlyRecord';
import './item-views.module.scss';

export type ViewableRecord = Record<'key', string> & Partial<Record<'name', string>> & Record<string, unknown>
export type ViewablePrimitive = string | number
export type ViewableItem =  ViewableRecord | ViewablePrimitive;

export const isViewableRecord = (o:unknown):o is ViewableRecord => (typeof o === 'object' && o !== null && has('key', o))

export const match = <B,>(
    onRecord:(item:ViewableRecord) => B, 
  onPrimitive:(item:ViewablePrimitive) => B) => 
  (item:ViewableItem):B => {
  return isViewableRecord(item) 
    ? onRecord(item)
    : onPrimitive(item)
}

export const showItem = (item:ViewableItem):string => {
  return pipe(item,
    match(
      (item) => item.name || item.key,
      (item) => String(item)
    )
  )
}

export const keyForItem = (item:ViewableItem):string => {
  return pipe(item,
    match(
      (item) => item.key,
      (item) => String(item)
    )
  )
}

export interface ItemViewsProps {
  item:ViewableItem
}

export const ItemTextView = ({item}:ItemViewsProps) => (
  <p className="bg-blue-200 h-full overflow-hidden p-1">{JSON.stringify(item)}</p>
)


export const DebugItemView = ({item}:ItemViewsProps) => (
  <pre className="bg-red-400 h-auto overflow-scroll p-1">
    <button className="bg-red-200 h-auto p-0 px-1 mr-1" onClick={() => console.log(item)}>log</button>
    {JSON.stringify(item)}
  </pre>
)

export default DebugItemView;
