import './cc-modal.css';

import { Modal, ModalProps } from 'react-daisyui'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CcModalProps extends ModalProps {}

export const CcModal = (props:CcModalProps) => (
  <Modal {...props} />
)

CcModal.Header = Modal.Header
CcModal.Body = Modal.Body
CcModal.Actions = Modal.Actions
