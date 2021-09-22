import { Story, Meta } from '@storybook/react';
import { Neo4jLogo } from '@neo4j-cc/ui';

export default {
  component: Neo4jLogo,
  title: 'elements/icons/Neo4jLogo',
} as Meta;

const Template: Story<{className:string}> = ({className}) => (
  <div className={className}>
    <Neo4jLogo />
  </div>
);

export const Regular = Template.bind({});
Regular.args = {};

export const Tailwind = Template.bind({});
Tailwind.args = {
  className:"text-blue-300 w-32"
};
