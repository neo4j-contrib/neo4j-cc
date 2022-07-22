import React from 'react';
import './cc-rating.css';

import { Rating, RatingProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcRatingProps extends RatingProps {}

export class CcRating extends React.Component<CcRatingProps> {

  static Item = Rating.Item

  render() {
    return (<Rating {...this.props} />);
  }
}
