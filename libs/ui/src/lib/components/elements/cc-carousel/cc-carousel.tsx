import './cc-carousel.css';

import { Carousel, CarouselProps } from 'react-daisyui';

/* eslint-disable-next-line */
export interface CcCarouselProps extends CarouselProps {}

export const CcCarousel = (props:CcCarouselProps) => (
<Carousel {...props} />
);

CcCarousel.Item = Carousel.Item