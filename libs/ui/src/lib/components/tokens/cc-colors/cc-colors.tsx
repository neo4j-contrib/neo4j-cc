import React, { forwardRef } from 'react'
import { ButtonProps } from 'react-daisyui';
import clsx from 'clsx'
import { componentColors } from './constants';

/* eslint-disable-next-line */
export interface CcColorsProps {}

export function CcColors(props: CcColorsProps) {
  return (
    <div>
      <h1>Welcome to CcColors!</h1>
    </div>
  );
}

export type CcColorName = typeof componentColors[number]

export type CcColorSwatchProps =
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
  {
    color: CcColorName
  }

export const CcColorSwatch = forwardRef<HTMLDivElement, CcColorSwatchProps>(
  ({children, color, ...props}: CcColorSwatchProps, ref): JSX.Element => {
    const classes = `bg-${color}`

    return (
      <div
        {...props}
        ref={ref}
        className={classes}
      >
        <pre>
          {color}
        </pre>
      </div>
    );
  }
)

  