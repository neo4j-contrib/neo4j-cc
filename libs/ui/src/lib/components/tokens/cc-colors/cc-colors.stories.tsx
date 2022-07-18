
import { Story, Meta } from '@storybook/react';

import { CcColorSwatch, CcColorSwatchProps } from './cc-colors';

export default {
  component: CcColorSwatch,
  title: 'tokens/CcColorSwatch',
} as Meta;


export const Primary: Story<CcColorSwatchProps> = (args) => 
    <CcColorSwatch {...args} color='primary' />

