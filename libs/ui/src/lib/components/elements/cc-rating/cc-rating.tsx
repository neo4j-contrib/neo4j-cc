import React from 'react';
import './cc-rating.css';

import { Rating, RatingProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcRatingProps extends RatingProps {}

export const CcRating = (props:CcRatingProps) => (
  <Rating {...props} />
)

CcRating.Item = Rating.Item
