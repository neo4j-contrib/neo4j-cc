import { Button, ButtonProps } from 'react-daisyui'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CcButtonProps extends ButtonProps {}

export function CcButton(props: CcButtonProps) {
  return (
    <Button {...props}/>
  );
}

