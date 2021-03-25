import React from 'react';
import { range } from 'fp-ts/Array'

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { WildflowerScene, WildflowerSceneProps } from '../components/Wildflowers';

export default {
  title: 'CC/WildflowerScene',
  component: WildflowerScene,
} as Meta;

const Template: Story<WildflowerSceneProps> = (args) => <WildflowerScene {...args} />;

export const UnobstructedView = Template.bind({});
UnobstructedView.args = {
};

