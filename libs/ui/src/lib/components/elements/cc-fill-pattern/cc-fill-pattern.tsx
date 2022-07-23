import './cc-fill-pattern.scss';
import React, { forwardRef, ReactNode } from 'react'

import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { CcColorName } from '../../tokens/cc-colors/cc-colors';


export type CcFillPatternProps = Omit<React.BaseHTMLAttributes<HTMLDivElement>, 'color'> & {
  color?: CcColorName
  pattern: 'checkerboard' | 
    'diagonal-checkerboard' | 
    'anchors' | 
    'diagonal-stripes' | 
    'honeycomb' | 
    'stripes' | 
    'vertical-stripes' |
    'zigzag' |
    'fishes' |
    'triangles' |
    'arrows' |
    'weave' |
    'marrakesh' |
    'carbon' |
    'carbonfiber' |
    'hearts' |
    'argyle' |
    'steps' |
    'waves'
  children: ReactNode
}

export const CcFillPattern = forwardRef<HTMLDivElement, CcFillPatternProps>(
  (props, ref):JSX.Element => {
    const {
      children,
      pattern,
      color,
      className,
      ...divProps
    } = props;
    const classes = twMerge(
      'pattern',
      className,
      pattern,
      clsx([{
        [`pattern-${color}`]: color
      }])
    )
    return (
      <div 
        ref={ref}
        className={classes}
        {...divProps}
        >
        {children}
      </div>
    );
  }
)

export default CcFillPattern;
