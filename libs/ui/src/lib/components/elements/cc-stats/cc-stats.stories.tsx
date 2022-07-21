
import { Story, Meta } from '@storybook/react';

import { Stats, StatsProps } from 'react-daisyui'

import { CcButton } from '../cc-button/cc-button'
import { CcAvatar } from '../cc-avatar/cc-avatar'
import { CcStats, CcStatsProps } from './cc-stats'

export default {
  component: CcStats,
  title: 'elements/CcStats',
} as Meta;

export const Daisy: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="bg-base-200 shadow">
      <Stats.Stat>
        <Stats.Stat.Item variant="title">Total Page Views</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">89,400</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">21% more than last month</Stats.Stat.Item>
      </Stats.Stat>
    </Stats>
  )
}

export const Default: Story<CcStatsProps> = (args) => {
  return (
    <CcStats {...args} className="bg-base-200 shadow">
      <CcStats.Stat>
        <CcStats.Stat.Item variant="title">Total Page Views</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">89,400</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">21% more than last month</CcStats.Stat.Item>
      </CcStats.Stat>
    </CcStats>
  )
}

export const IconsOrImage: Story<CcStatsProps> = (args) => {
  return (
    <CcStats {...args} className="shadow font-sans">
      <CcStats.Stat>
        <CcStats.Stat.Item variant="figure" className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </CcStats.Stat.Item>
        <CcStats.Stat.Item variant="title">Total Likes</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value" className="text-primary">
          25.6K
        </CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">21% more than last month</CcStats.Stat.Item>
      </CcStats.Stat>

      <CcStats.Stat>
        <CcStats.Stat.Item variant="figure" className="text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </CcStats.Stat.Item>
        <CcStats.Stat.Item variant="title">Page Views</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value" className="text-secondary">
          2.6M
        </CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">21% more than last month</CcStats.Stat.Item>
      </CcStats.Stat>

      <CcStats.Stat>
        <CcStats.Stat.Item variant="figure" className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </CcStats.Stat.Item>
        <CcStats.Stat.Item variant="figure" className=" text-secondary">
          <CcAvatar
            size="sm"
            online={true}
            src="https://api.lorem.space/image/face?w=128&h=128"
            shape="circle"
          ></CcAvatar>
        </CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">86%</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="title">Tasks done</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc" className="text-secondary">
          31 tasks remaining
        </CcStats.Stat.Item>
      </CcStats.Stat>
    </CcStats>
  )
}

export const CenteredItems: Story<CcStatsProps> = (args) => {
  return (
    <CcStats {...args} className="shadow font-sans">
      <CcStats.Stat className="place-items-center">
        <CcStats.Stat.Item variant="title">Downloads</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">31K</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">From January 1st to February 1st</CcStats.Stat.Item>
      </CcStats.Stat>

      <CcStats.Stat className="place-items-center">
        <CcStats.Stat.Item variant="title">Users</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value" className="text-secondary">
          4,200
        </CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc" className="text-secondary">
          ↗︎ 40 (2%)
        </CcStats.Stat.Item>
      </CcStats.Stat>

      <CcStats.Stat className="place-items-center">
        <CcStats.Stat.Item variant="title">New Registers</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">1,200</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">↘︎ 90 (14%)</CcStats.Stat.Item>
      </CcStats.Stat>
    </CcStats>
  )
}

export const Vertical: Story<CcStatsProps> = (args) => {
  return (
    <CcStats {...args} className="shadow font-sans">
      <CcStats.Stat>
        <CcStats.Stat.Item variant="title">Downloads</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">31K</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">Jan 1st - Feb 1st</CcStats.Stat.Item>
      </CcStats.Stat>

      <CcStats.Stat>
        <CcStats.Stat.Item variant="title">New Users</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">4,200</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">↗︎ 400 (22%)</CcStats.Stat.Item>
      </CcStats.Stat>

      <CcStats.Stat>
        <CcStats.Stat.Item variant="title">New Registers</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">1,200</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">↘︎ 90 (14%)</CcStats.Stat.Item>
      </CcStats.Stat>
    </CcStats>
  )
}
Vertical.args = {
  vertical: true,
}

export const Responsive: Story<CcStatsProps> = (args) => {
  return (
    <CcStats className="CcStats-vertical lg:CcStats-horizontal shadow">
      <CcStats.Stat>
        <CcStats.Stat.Item variant="title">Downloads</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">31K</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">Jan 1st - Feb 1st</CcStats.Stat.Item>
      </CcStats.Stat>

      <CcStats.Stat>
        <CcStats.Stat.Item variant="title">New Users</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">4,200</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">↗︎ 400 (22%)</CcStats.Stat.Item>
      </CcStats.Stat>

      <CcStats.Stat>
        <CcStats.Stat.Item variant="title">New Registers</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">1,200</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="desc">↘︎ 90 (14%)</CcStats.Stat.Item>
      </CcStats.Stat>
    </CcStats>
  )
}

export const CustomColorsAndButton: Story<CcStatsProps> = (args) => {
  return (
    <CcStats {...args} className="font-sans bg-primary text-primary-content">
      <CcStats.Stat>
        <CcStats.Stat.Item variant="title">Account balance</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">$89,400</CcStats.Stat.Item>
        <div className="stat-actions">
          <CcButton size="sm" color="success">
            Add funds
          </CcButton>
        </div>
      </CcStats.Stat>
      <CcStats.Stat>
        <CcStats.Stat.Item variant="title">Current balance</CcStats.Stat.Item>
        <CcStats.Stat.Item variant="value">$89,400</CcStats.Stat.Item>
        <div className="stat-actions gap-1 flex">
          <CcButton size="sm">Withdrawal</CcButton>
          <CcButton size="sm">deposit</CcButton>
        </div>
      </CcStats.Stat>
    </CcStats>
  )
}