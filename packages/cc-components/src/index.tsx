import React, { FC, HTMLAttributes, ReactChild } from 'react';

import './global.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Snozzle: FC<Props> = ({ children }) => {
  return <div className="text-serif text-yellow-400">{children || `the snozzberries taste like snozzberries`}</div>;
};