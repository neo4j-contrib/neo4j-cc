import { Story, Meta } from '@storybook/react';
import {CcSiteMenubar} from './cc-site-menubar';

export default {
  component: CcSiteMenubar,
  title: 'layouts/CcSiteMenubar',
} as Meta;

const Template: Story<{className:string}> = ({className}) => (
  <div className={className}>
    <CcSiteMenubar />
  </div>
);

export const Regular = Template.bind({});
Regular.args = {};
Regular.parameters = {
  layout: 'fullscreen' // no padding around this component
}