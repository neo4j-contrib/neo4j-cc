import './cc-avatar.css';

import React from 'react';
import { Avatar, AvatarProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcAvatarProps extends AvatarProps {}

export class CcAvatar extends React.Component<CcAvatarProps> {

  static Group = Avatar.Group

  render() {
    return (<Avatar {...this.props} />);
  }
}
