
import { Story, Meta } from '@storybook/react';

import { Card, CardProps, Button } from 'react-daisyui'

import { CcButton } from '../cc-button/cc-button'

import { CcCard, CcCardProps } from './cc-card'

export default {
  component: CcCard,
  title: 'elements/CcCard',
} as Meta;

export const Daisy: Story<CardProps> = (args) => {
  return (
    <Card {...args}>
      <Card.Image
        src="https://api.lorem.space/image/shoes?w=400&h=225"
        alt="Shoes"
      />
      <Card.Body>
        <Card.Title tag="h2">Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes do they choose?</p>
        <Card.Actions className="justify-end">
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  )
}

export const Default: Story<CcCardProps> = (args) => {
  return (
    <CcCard {...args}>
      <CcCard.Image
        src="https://api.lorem.space/image/shoes?w=400&h=225"
        alt="Shoes"
      />
      <CcCard.Body>
        <CcCard.Title tag="h2">Shoes!</CcCard.Title>
        <p>If a dog chews shoes whose shoes do they choose?</p>
        <CcCard.Actions className="justify-end">
          <CcButton color="primary">Buy Now</CcButton>
        </CcCard.Actions>
      </CcCard.Body>
    </CcCard>
  )
}

export const Bordered: Story<CcCardProps> = (args) => {
  return (
    <CcCard {...args} bordered className="bg-neutral-content">
      <CcCard.Image
        src="https://api.lorem.space/image/shoes?w=400&h=225"
        alt="Shoes"
      />
      <CcCard.Body>
        <CcCard.Title tag="h2">Shoes!</CcCard.Title>
        <p>If a dog chews shoes whose shoes do they choose?</p>
        <CcCard.Actions className="justify-end">
          <CcButton color="primary">Buy Now</CcButton>
        </CcCard.Actions>
      </CcCard.Body>
    </CcCard>
  )
}

export const Responsive: Story<CcCardProps> = (args) => {
  return (
    <div>
      <div className="mb-3">
        (vertical on small screen, horizontal on large screen)
      </div>
      <CcCard {...args} side="lg">
        <CcCard.Image
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
        <CcCard.Body>
          <CcCard.Title tag="h2">Shoes!</CcCard.Title>
          <p>If a dog chews shoes whose shoes do they choose?</p>
          <CcCard.Actions className="justify-end">
            <CcButton color="primary">Buy Now</CcButton>
          </CcCard.Actions>
        </CcCard.Body>
      </CcCard>
    </div>
  )
}

export const Centered: Story<CcCardProps> = (args) => {
  return (
    <CcCard {...args}>
      <CcCard.Image
        src="https://api.lorem.space/image/shoes?w=400&h=225"
        alt="Shoes"
      />
      <CcCard.Body className="items-center text-center">
        <CcCard.Title tag="h2">Shoes!</CcCard.Title>
        <p>If a dog chews shoes whose shoes do they choose?</p>
        <CcCard.Actions className="justify-end">
          <CcButton color="primary">Buy Now</CcButton>
        </CcCard.Actions>
      </CcCard.Body>
    </CcCard>
  )
}


export const ImageOverlay: Story<CcCardProps> = (args) => {
  return (
    <CcCard {...args} imageFull>
      <CcCard.Image
        src="https://api.lorem.space/image/shoes?w=400&h=225"
        alt="Shoes"
      />
      <CcCard.Body>
        <CcCard.Title tag="h2">Shoes!</CcCard.Title>
        <p>If a dog chews shoes whose shoes do they choose?</p>
        <CcCard.Actions className="justify-end">
          <CcButton color="primary">Buy Now</CcButton>
        </CcCard.Actions>
      </CcCard.Body>
    </CcCard>
  )
}
