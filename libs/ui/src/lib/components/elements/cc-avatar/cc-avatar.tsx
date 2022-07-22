import './cc-avatar.css';

import React from 'react';
import { Avatar, AvatarProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcAvatarProps extends AvatarProps {}

export const CcAvatar = (props:CcAvatarProps) => (<Avatar {...props} />)

CcAvatar.Group = Avatar.Group

