
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import { Modal, ModalProps, Button } from 'react-daisyui'

import { CcButton } from '../cc-button/cc-button'

import { CcModal, CcModalProps } from './cc-modal'

export default {
  component: CcModal,
  title: 'elements/CcModal',
} as Meta;

export const Daisy: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible}>
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Yay!</Button>
        </Modal.Actions>
      </Modal>
    </div>
  )

}

export const Default: Story<CcModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <CcModal {...args} open={visible}>
        <CcModal.Header className="font-bold">
          Congratulations random Interner user!
        </CcModal.Header>

        <CcModal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </CcModal.Body>

        <CcModal.Actions>
          <Button onClick={toggleVisible}>Yay!</Button>
        </CcModal.Actions>
      </CcModal>
    </div>
  )

}

export const CloseButton: Story<CcModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <CcModal {...args} open={visible}>
        <Button
          size="sm"
          shape="circle"
          className="absolute right-2 top-2"
          onClick={toggleVisible}
        >
          ✕
        </Button>
        <CcModal.Header className="font-bold">
          Congratulations random Interner user!
        </CcModal.Header>

        <CcModal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </CcModal.Body>
      </CcModal>
    </div>
  )

}

export const ClickedOutside: Story<CcModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <CcModal {...args} open={visible} onClickBackdrop={toggleVisible}>
        <CcModal.Header className="font-bold">
          Congratulations random Interner user!
        </CcModal.Header>

        <CcModal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </CcModal.Body>
      </CcModal>
    </div>
  )
}


export const CustomWidth: Story<CcModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible}>
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Yay!</Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}
CustomWidth.args = {
  className: 'w-11/12 max-w-5xl',
}