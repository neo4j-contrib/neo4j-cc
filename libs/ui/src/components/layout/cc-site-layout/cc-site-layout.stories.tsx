import { CcSiteLayoutProps } from '@neo4j-cc/ui';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {CcSiteLayout} from './cc-site-layout';

export default {
  component: CcSiteLayout,
  title: 'layout/CcSiteLayout',
} as Meta;

const Template: Story<React.PropsWithChildren<CcSiteLayoutProps>> = (props) => (
  <div>
    <CcSiteLayout {...props}>
      {props.children}
    </CcSiteLayout>
  </div>
);

export const Empty = Template.bind({});
Empty.args = {};
Empty.parameters = {
  layout: 'fullscreen' // no padding around this component
}

export const WithTitle = Template.bind({});
WithTitle.args = { title: "Page Title", children: <p>Hello</p> };
WithTitle.parameters = {
  layout: 'fullscreen' // no padding around this component
}