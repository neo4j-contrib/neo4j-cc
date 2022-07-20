import './cc-modal.css';

import React from 'react';
import { Modal, ModalProps } from 'react-daisyui'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CcModalProps extends ModalProps {}

export class CcModal extends React.Component<CcModalProps> {

  static Header = Modal.Header
  static Body = Modal.Body
  static Actions = Modal.Actions

  render() {
    return (<Modal {...this.props} />);
  }
}
