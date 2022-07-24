
import { Story, Meta } from '@storybook/react';

import { CcList, CcListProps } from './cc-list';

export default {
  component: CcList,
  title: 'sections/CcList',
} as Meta;


export const Default: Story<CcListProps> = (args) => 
    <CcList {...args} color='primary'/>
  Default.args = {
    items: [
      "one", "two", "three"
    ]
  }

