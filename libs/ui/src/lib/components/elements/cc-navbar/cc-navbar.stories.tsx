/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Navbar, NavbarProps, Button } from 'react-daisyui'

import { CcNavbar, CcNavbarProps } from './cc-navbar'

import { CcButton } from '../cc-button/cc-button'
import { CcMenu } from '../cc-menu/cc-menu'

import { twMerge } from 'tailwind-merge'
import { CcForm } from '../../sections/cc-form/cc-form'
import { CcInput } from '../cc-input/cc-input'
import { CcDropdown } from '../cc-dropdown/cc-dropdown'
import { CcBadge } from '../cc-badge/cc-badge'
import { CcCard } from '../cc-card/cc-card'
import { CcIndicator } from '../cc-indicator/cc-indicator'

export default {
  title: 'elements/CcNavbar',
  component: CcNavbar,
  args: {
    className: 'bg-base-100 shadow-xl rounded-box',
  },
} as Meta

export const Daisy: Story<NavbarProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar {...args}>
        <Button className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </Navbar>
    </div>
  )
}

export const Default: Story<CcNavbarProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <CcNavbar {...args}>
        <CcButton className="text-xl normal-case" color="ghost">
          daisyUI
        </CcButton>
      </CcNavbar>
    </div>
  )
}

export const WithTitleAndIcon: Story<CcNavbarProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <CcNavbar {...args}>
        <CcNavbar.Start>
          <CcButton className="text-xl normal-case" color="ghost">
            daisyUI
          </CcButton>
        </CcNavbar.Start>
        <CcNavbar.End>
          <CcButton shape="square" color="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </CcButton>
        </CcNavbar.End>
      </CcNavbar>
    </div>
  )
}

export const WithIconAtStartAndEnd: Story<CcNavbarProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <CcNavbar {...args}>
        <div className="flex-none">
          <CcButton shape="square" color="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </CcButton>
        </div>
        <div className="flex-1">
          <CcButton className="text-xl normal-case" color="ghost">
            daisyUI
          </CcButton>
        </div>
        <div className="flex-none">
          <CcButton shape="square" color="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </CcButton>
        </div>
      </CcNavbar>
    </div>
  )
}

export const WithMenuAndSubMenu: Story<CcNavbarProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 pb-40 items-center justify-center gap-2 font-sans">
      <CcNavbar {...args}>
        <div className="flex-1 ">
          <CcButton color="ghost" className="normal-case text-xl">
            daisyUI
          </CcButton>
        </div>
        <div className="flex-none">
          <CcMenu horizontal className="p-0">
            <CcMenu.Item>
              <a>Item 1</a>
            </CcMenu.Item>
            <CcMenu.Item tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <CcMenu className="p-2 bg-base-100">
                <CcMenu.Item>
                  <a>SubCcMenu 1</a>
                </CcMenu.Item>
                <CcMenu.Item>
                  <a>SubCcMenu 2</a>
                </CcMenu.Item>
              </CcMenu>
            </CcMenu.Item>
            <CcMenu.Item>
              <a>Item 3</a>
            </CcMenu.Item>
          </CcMenu>
        </div>
      </CcNavbar>
    </div>
  )
}

export const WithSearchInputAndDropdown: Story<CcNavbarProps> = (args) => {
  return (
    <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <CcNavbar {...args}>
        <div className="flex-1">
          <CcButton className="text-xl normal-case" color="ghost">
            daisyUI
          </CcButton>
        </div>
        <div className="flex-none gap-2">
          <CcForm>
            <CcInput bordered type="text" placeholder="Search" />
          </CcForm>
          <CcDropdown vertical="end">
            <CcButton color="ghost" className="avatar" shape="circle">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </CcButton>
            <CcDropdown.Menu className="w-52 CcMenu-compact">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <CcDropdown.Item>Settings</CcDropdown.Item>
              <CcDropdown.Item>Logout</CcDropdown.Item>
            </CcDropdown.Menu>
          </CcDropdown>
        </div>
      </CcNavbar>
    </div>
  )
}

export const WithIconIndicatorAndDropdown: Story<CcNavbarProps> = (args) => {
  return (
    <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <CcNavbar {...args}>
        <div className="flex-1">
          <CcButton className="text-xl normal-case" color="ghost">
            daisyUI
          </CcButton>
        </div>
        <div className="flex-none">
          <CcDropdown vertical="end">
            <CcButton tabIndex={0} color="ghost" shape="circle">
              <CcIndicator item={<CcBadge size="sm">8</CcBadge>}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </CcIndicator>
            </CcButton>
            <CcDropdown.Menu
              tabIndex={0}
              className="mt-3 card card-compact  w-52 bg-base-100 !p-0"
            >
              <CcCard.Body className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <CcCard.Actions>
                  <CcButton color="primary" fullWidth>
                    View cart
                  </CcButton>
                </CcCard.Actions>
              </CcCard.Body>
            </CcDropdown.Menu>
          </CcDropdown>
          <CcDropdown vertical="end">
            <CcButton color="ghost" className="avatar" shape="circle">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </CcButton>
            <CcDropdown.Menu className="w-52 CcMenu-compact">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <CcDropdown.Item>Settings</CcDropdown.Item>
              <CcDropdown.Item>Logout</CcDropdown.Item>
            </CcDropdown.Menu>
          </CcDropdown>
        </div>
      </CcNavbar>
    </div>
  )
}
export const WithDropdownCenterLogoAndIcon: Story<CcNavbarProps> = (args) => {
  return (
    <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <CcNavbar {...args}>
        <CcNavbar.Start>
          <CcDropdown>
            <CcButton color="ghost" shape="circle" tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </CcButton>
            <CcDropdown.Menu tabIndex={0} className="CcMenu-compact w-52">
              <CcDropdown.Item>Homepage</CcDropdown.Item>
              <CcDropdown.Item>Portfolio</CcDropdown.Item>
              <CcDropdown.Item>About</CcDropdown.Item>
            </CcDropdown.Menu>
          </CcDropdown>
        </CcNavbar.Start>
        <CcNavbar.Center>
          <CcButton color="ghost" className="normal-case text-xl">
            daisyUI
          </CcButton>
        </CcNavbar.Center>
        <CcNavbar.End className="CcNavbar-end">
          <CcButton color="ghost" shape="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </CcButton>
          <CcButton color="ghost" shape="circle">
            <CcIndicator item={<CcBadge size="xs" color="primary" />}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </CcIndicator>
          </CcButton>
        </CcNavbar.End>
      </CcNavbar>
    </div>
  )
}

export const Responsive: Story<CcNavbarProps> = (args) => {
  return (
    <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <CcNavbar {...args}>
        <CcNavbar.Start>
          <CcDropdown>
            <CcButton color="ghost" tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </CcButton>
            <CcDropdown.Menu tabIndex={0} className="w-52 CcMenu-compact mt-3">
              <CcDropdown.Item>Item 1</CcDropdown.Item>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>SubCcMenu 1</a>
                  </li>
                  <li>
                    <a>SubCcMenu 2</a>
                  </li>
                </ul>
              </li>
              <CcDropdown.Item>Item 3</CcDropdown.Item>
            </CcDropdown.Menu>
          </CcDropdown>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </CcNavbar.Start>
        <CcNavbar.Center className="hidden lg:flex">
          <CcMenu horizontal className="p-0">
            <CcMenu.Item>
              <a>Item 1</a>
            </CcMenu.Item>
            <CcMenu.Item tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <CcMenu className="p-2 bg-base-100">
                <CcMenu.Item>
                  <a>SubCcMenu 1</a>
                </CcMenu.Item>
                <CcMenu.Item>
                  <a>SubCcMenu 2</a>
                </CcMenu.Item>
              </CcMenu>
            </CcMenu.Item>
            <CcMenu.Item>
              <a>Item 3</a>
            </CcMenu.Item>
          </CcMenu>
        </CcNavbar.Center>
        <CcNavbar.End>
          <CcButton>Get started</CcButton>
        </CcNavbar.End>
      </CcNavbar>
    </div>
  )
}

export const WithColors: Story<CcNavbarProps> = ({ className, ...args }) => {
  return (
    <div className="flex flex-col w-full component-preview p-4 gap-2 font-sans">
      <CcNavbar
        {...args}
        className={twMerge(className, 'bg-neutral text-neutral-content')}
      >
        <CcButton className="text-xl normal-case" color="ghost">
          daisyUI
        </CcButton>
      </CcNavbar>
      <CcNavbar {...args} className={twMerge(className, 'bg-base-300')}>
        <CcButton className="text-xl normal-case" color="ghost">
          daisyUI
        </CcButton>
      </CcNavbar>
      <CcNavbar
        {...args}
        className={twMerge(className, 'bg-primary text-primary-content')}
      >
        <CcButton className="text-xl normal-case" color="ghost">
          daisyUI
        </CcButton>
      </CcNavbar>
    </div>
  )
}

