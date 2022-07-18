import React, { forwardRef } from 'react'

import { AlertProps, ButtonProps } from 'react-daisyui';

/* eslint-disable-next-line */
export type CcPlaceholderProps = 
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
  Omit<AlertProps, 'icon' | 'status'> & 
  Pick<ButtonProps, 'color'> 

export const CcPlaceholder = forwardRef<HTMLDivElement, CcPlaceholderProps>(
  (props: CcPlaceholderProps, ref): JSX.Element => {
    return (
      <div
        ref={ref}
      >
        <pre>
          {JSON.stringify(props)}
        </pre>
      </div>
    );
  }
)

