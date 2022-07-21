import './cc-badge.css';

import { Badge, BadgeProps } from 'react-daisyui';

/* eslint-disable-next-line */
export interface CcBadgeProps extends BadgeProps {}

export const CcBadge = (props: CcBadgeProps) => (
  <Badge {...props} />
)