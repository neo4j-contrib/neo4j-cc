
import { Story, Meta } from '@storybook/react';

import { Carousel, CarouselProps } from 'react-daisyui';

import { CcCarousel, CcCarouselProps } from './cc-carousel';

import { CcButton } from '../cc-button/cc-button';

export default {
  component: CcCarousel,
  title: 'elements/CcCarousel',
} as Meta;

export const Daisy: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args} className="rounded-box">
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A"
        alt="Burger"
      />
    </Carousel>
  )
}
Daisy.args = {
}

export const Default: Story<CcCarouselProps> = (args) => {

  return (
    <CcCarousel {...args} className="rounded-box">
      <CcCarousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2"
        alt="Burger"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB"
        alt="Burger"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6"
        alt="Burger"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693"
        alt="Burger"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7"
        alt="Burger"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094"
        alt="Burger"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A"
        alt="Burger"
      />
    </CcCarousel>
  )
}
Default.args = {
}

export const Snap: Story<CcCarouselProps> = (args) => {
  return (
    <CcCarousel {...args} className="rounded-box">
      <CcCarousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=8B7BCDC2"
        alt="Drinks"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=500B67FB"
        alt="Drinks"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=A89D0DE6"
        alt="Drinks"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=225E6693"
        alt="Drinks"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=9D9539E7"
        alt="Drinks"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=BDC01094"
        alt="Drinks"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=7F5AE56A"
        alt="Drinks"
      />
    </CcCarousel>
  )
}
Snap.args = {
  snap: 'end',
}

export const FullWidth: Story<CcCarouselProps> = (args) => {
  return (
    <CcCarousel {...args} className="w-64 rounded-box">
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A"
        alt="Videogame Poster"
      />
    </CcCarousel>
  )
}
FullWidth.args = {
  width: 'full',
}

export const HalfWidth: Story<CcCarouselProps> = (args) => {
  return (
    <CcCarousel {...args} className="w-64 rounded-box">
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A"
        alt="Videogame Poster"
      />
    </CcCarousel>
  )
}
HalfWidth.args = {
  width: 'half',
}

export const Vertical: Story<CcCarouselProps> = (args) => {
  return (
    <CcCarousel {...args} className="h-96 w-64 rounded-box">
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094"
        alt="Videogame Poster"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A"
        alt="Videogame Poster"
      />
    </CcCarousel>
  )
}
Vertical.args = {
  width: 'full',
  vertical: true,
}

export const Numbered: Story<CcCarouselProps> = (args) => {
  return (
    <CcCarousel {...args} className="rounded-box">
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
        alt="Car"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
        alt="Car"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
        alt="Car"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
        alt="Car"
      />
    </CcCarousel>
  )
}
Numbered.args = {
  display: 'numbered',
}

export const Sequential: Story<CcCarouselProps> = (args) => {
  return (
    <CcCarousel {...args} className="rounded-box">
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
        alt="Car"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
        alt="Car"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
        alt="Car"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
        alt="Car"
      />
    </CcCarousel>
  )
}
Sequential.args = {
  display: 'sequential',
}

export const CustomButton: Story<CcCarouselProps> = (args) => {
  const buttonStyle = (value: string) => {
    return <CcButton color="primary">{value}</CcButton>
  }

  args.buttonStyle = buttonStyle

  return (
    <CcCarousel {...args} className="rounded-box">
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
        alt="Car"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
        alt="Car"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
        alt="Car"
      />
      <CcCarousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
        alt="Car"
      />
    </CcCarousel>
  )
}
CustomButton.args = {
  display: 'sequential',
}