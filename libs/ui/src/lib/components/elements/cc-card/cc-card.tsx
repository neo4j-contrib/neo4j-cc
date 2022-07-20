import * as React from 'react'

import { Card, CardProps } from 'react-daisyui'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CcCardProps extends CardProps {}

export class CcCard extends React.Component<CcCardProps> {

  static Title = Card.Title
  static Actions = Card.Actions
  static Image = Card.Image
  static Body = Card.Body

  render() {
    return (<Card {...this.props} />);
  }
}
