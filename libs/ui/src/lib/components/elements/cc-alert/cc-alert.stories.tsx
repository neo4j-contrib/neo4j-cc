
import { Story, Meta } from '@storybook/react';

import { CcAlert, CcAlertProps } from './cc-alert';

export default {
  component: CcAlert,
  title: 'elements/CcAlert',
} as Meta;

const Template: Story<CcAlertProps> = (args) => <CcAlert {...args} />;

export const Info = Template.bind({});
Info.args = {
  children: 'Information is data in context',
  status: 'info'
};

