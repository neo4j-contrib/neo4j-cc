import { Story, Meta } from '@storybook/react';
import { NinjaStatus, NinjaStatusProps } from './ninja-status';

export default {
  component: NinjaStatus,
  title: 'components/NinjaStatus',
} as Meta;

const Template: Story<NinjaStatusProps> = (args) => <div className="bg-yellow-200 p-4">
    <NinjaStatus {...args} />
  </div>;

const users = {
  abk: {
    "user":"andreas.kollegger",
    "discourseUser":"Andreas Kollegger",
    "categories":[],
    "weekly":{},
    "isNinja": false
  },
  dana: {
    "user": "dana.canzano",
    "discourseUser": "Dana Canzano",
    "weekly": {
      "2022-01-03": 9,
      "2021-12-27": 3
    },
    "categories": [
      {
        "name": "Operations",
        "id": 13
      },
      {
        "name": "Server",
        "id": 96
      },
      {
        "name": "Neo4j Graph Platform",
        "id": 10
      },
      {
        "name": "Procedures & APOC",
        "id": 77
      },
      {
        "name": "Cypher",
        "id": 12
      }
    ],
    "isNinja": false
  },
  florent: {
    "user": "florent.biville1",
    "discourseUser": "Florent Biville",
    "weekly": {
      "2022-01-03": 7
    },
    "categories": [
      {
        "name": "Drivers & Stacks",
        "id": 26
      }
    ],
    "isNinja": true
  },
}

export const InactiveNonNinja = Template.bind({});
InactiveNonNinja.args = {
  ninja: users.abk,
  activityCount: 0
}

export const ActiveNonNinja = Template.bind({});
ActiveNonNinja.args = {
  ninja: users.dana,
  activityCount: users.dana.weekly["2022-01-03"]
}

export const ActiveNinja = Template.bind({});
ActiveNinja.args = {
  ninja: users.florent,
  activityCount: users.florent.weekly["2022-01-03"]
}