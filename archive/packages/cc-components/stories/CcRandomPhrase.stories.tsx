import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CcRandomPhrase, CcRandomPhraseProps, communityCenterWords } from '../src';
import { range } from 'fp-ts/Array'

const meta: Meta = {
  title: 'CC/RandomPhrase',
  component: CcRandomPhrase,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    count: {
      control: {
        type: 'number',
      },
      defaultValue: 12
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CcRandomPhraseProps & {count:number}> = args => <ul>{range(1, args.count).map( () => (<li><CcRandomPhrase {...args} /></li>))}</ul>;

export const EmptyWords = Template.bind({});
EmptyWords.args = {
  adjectives: [],
  nouns: []
} as CcRandomPhraseProps;

export const IncludedWords = Template.bind({});
IncludedWords.args = communityCenterWords;
