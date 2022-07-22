
import { Story, Meta } from '@storybook/react';

import { Rating, RatingProps } from 'react-daisyui'

import { CcRating, CcRatingProps } from './cc-rating'

export default {
  component: CcRating,
  title: 'elements/CcRating',
} as Meta;

export const Daisy: Story<RatingProps> = (args) => {
  return (
    <Rating {...args}>
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" defaultChecked />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
    </Rating>
  )
}

export const Default: Story<CcRatingProps> = (args) => {
  return (
    <CcRating {...args}>
      <CcRating.Item name="rating-1" className="mask mask-star" />
      <CcRating.Item name="rating-1" className="mask mask-star" defaultChecked />
      <CcRating.Item name="rating-1" className="mask mask-star" />
      <CcRating.Item name="rating-1" className="mask mask-star" />
      <CcRating.Item name="rating-1" className="mask mask-star" />
    </CcRating>
  )
}

export const MaskStart2WithWarningColor: Story<CcRatingProps> = (args) => {
  return (
    <CcRating {...args}>
      <CcRating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <CcRating.Item
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <CcRating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <CcRating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <CcRating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </CcRating>
  )
}

export const MaskHeartWithMultipleColors: Story<CcRatingProps> = (args) => {
  return (
    <CcRating {...args}>
      <CcRating.Item name="rating-3" className="mask mask-heart bg-red-400" />
      <CcRating.Item
        name="rating-3"
        className="mask mask-heart bg-orange-400"
        checked
      />
      <CcRating.Item name="rating-3" className="mask mask-heart bg-yellow-400" />
      <CcRating.Item name="rating-3" className="mask mask-heart bg-lime-400" />
      <CcRating.Item name="rating-3" className="mask mask-heart bg-green-400" />
    </CcRating>
  )
}

export const MaskStart2WithGreen500Color: Story<CcRatingProps> = (args) => {
  return (
    <CcRating {...args}>
      <CcRating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <CcRating.Item
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
        checked
      />
      <CcRating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <CcRating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <CcRating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
    </CcRating>
  )
}

export const RatingHidden: Story<CcRatingProps> = (args) => {
  return (
    <CcRating {...args}>
      <CcRating.Item name="rating-9" className="rating-hidden" />
      <CcRating.Item name="rating-9" className="mask mask-star" />
      <CcRating.Item name="rating-9" className="mask mask-star" defaultChecked />
      <CcRating.Item name="rating-9" className="mask mask-star" />
      <CcRating.Item name="rating-9" className="mask mask-star" />
      <CcRating.Item name="rating-9" className="mask mask-star" />
    </CcRating>
  )
}
RatingHidden.args = {
  size: 'lg',
}

export const HalfStars: Story<CcRatingProps> = (args) => {
  return (
    <CcRating {...args}>
      <CcRating.Item name="rating-10" className="rating-hidden" />
      <CcRating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-green-500"
      />
      <CcRating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-green-500"
      />
      <CcRating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-green-500"
        checked
      />
      <CcRating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-green-500"
      />

      <CcRating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-green-500"
      />
      <CcRating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-green-500"
      />

      <CcRating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-green-500"
      />
      <CcRating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-green-500"
      />

      <CcRating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-green-500"
      />
      <CcRating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-green-500"
      />
    </CcRating>
  )
}
HalfStars.args = {
  size: 'lg',
  half: true,
}