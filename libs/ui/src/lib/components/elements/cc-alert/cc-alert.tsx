import { Alert, AlertProps } from 'react-daisyui';

/* eslint-disable-next-line */
export interface CcAlertProps extends AlertProps {}

export function CcAlert(props: CcAlertProps) {
  return (<Alert {...props} />);
}

export default CcAlert;
