import './cc-carousel.css';

import React from 'react';
import { Carousel, CarouselProps } from 'react-daisyui';

/* eslint-disable-next-line */
export interface CcCarouselProps extends CarouselProps {}

export class CcCarousel extends React.Component<CcCarouselProps> {

  static Item = Carousel.Item

  render() {
    return (<Carousel {...this.props} />);
  }
}
