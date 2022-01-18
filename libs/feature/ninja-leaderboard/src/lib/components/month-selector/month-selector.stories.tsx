import { Story, Meta } from '@storybook/react';
import { MonthSelector, MonthSelectorProps } from './month-selector';

export default {
  component: MonthSelector,
  title: 'components/MonthSelector',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<MonthSelectorProps> = (args) => (
  <div className="w-56 text-right fixed top-16">
    <MonthSelector {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  upToMonthsBack: 4
};
