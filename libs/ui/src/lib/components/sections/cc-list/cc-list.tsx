import { forwardRef } from 'react';
import { CcColorName } from '../../tokens/cc-colors/cc-colors';

import './cc-list.css';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type CcListItemProps =
  Omit<React.HTMLAttributes<HTMLLIElement>, 'color'> &
{
  color?: CcColorName
  item: string
}

export const CcListItem = forwardRef<HTMLLIElement, CcListItemProps>(
  (props: CcListItemProps, ref): JSX.Element => {
    const {
      color,
      item,
      ...listItemProps
    } = props;
  
    return (
      <li ref={ref} {...listItemProps}>{item}</li>
    )
  }
)

export type CcListProps = 
  Omit<React.HTMLAttributes<HTMLUListElement>, 'color'> &
{
  color?: CcColorName
  items: string[]
}

export const CcList = forwardRef<HTMLUListElement, CcListProps>(
  (props: CcListProps, ref): JSX.Element => {
    const {
      color,
      items,
      ...ulProps 
    } = props;

    return (
      <ul
        ref={ref}
        {...ulProps}
      >
        {items.map( (item) => (<CcListItem item={item}/>))}
      </ul>
    );
  }
)
