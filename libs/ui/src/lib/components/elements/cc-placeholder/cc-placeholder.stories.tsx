
import { Story, Meta } from '@storybook/react';

import { CcPlaceholder, CcPlaceholderProps } from './cc-placeholder';

export default {
  component: CcPlaceholder,
  title: 'elements/CcPlaceholder',
} as Meta;


export const Primary: Story<CcPlaceholderProps> = (args) => 
    <CcPlaceholder {...args} color='primary'/>

