
import { Card, CardProps } from 'react-daisyui'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CcCardProps extends CardProps {}

export const CcCard = (props:CcCardProps) => (
  <Card {...props} />
)

CcCard.Title = Card.Title
CcCard.Actions = Card.Actions
CcCard.Image = Card.Image
CcCard.Body = Card.Body