import './tailwind-imports.css';

import * as React from 'react'

import { StoryLayout } from './story-layout'
import { DEFAULT_THEME, STORAGE_KEY, THEME_PICKER_LIST } from './theming'

export const parameters = {
  themes: {
    default: window.localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME,
    onChange: (theme) => {
      // STORAGE_KEY does not work in onChange... not sure why
      if (theme) {
        window.localStorage.setItem(
          'sb-react-cc-preview-theme',
          theme.class
        )
      } else {
        window.localStorage.removeItem('sb-react-cc-preview-theme')
      }
    },
    list: THEME_PICKER_LIST,
  },
  backgrounds: { disable: true },
}

export const decorators = [
  (Story, options) => (
    <StoryLayout>
      <Story />
    </StoryLayout>
  ),
]