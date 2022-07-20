import './cc-swap.css';

import { Swap, SwapProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcSwapProps extends SwapProps {}

export function CcSwap(props: CcSwapProps) {
  return (
    <Swap {...props}/>
  );
}
