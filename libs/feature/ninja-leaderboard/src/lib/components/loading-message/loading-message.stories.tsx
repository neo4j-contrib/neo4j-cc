import { Story, Meta } from '@storybook/react';
import { LoadingMessage, LoadingMessageProps } from './loading-message';

export default {
  component: LoadingMessage,
  title: 'components/LoadingMessage',
} as Meta;

const Template: Story<LoadingMessageProps> = (args) => <div className="bg-yellow-200 p-4">
    <LoadingMessage {...args} />
  </div>;

export const PlaintextMessage = Template.bind({});
PlaintextMessage.args = {
  children: (<p>Plain text</p>)
}

