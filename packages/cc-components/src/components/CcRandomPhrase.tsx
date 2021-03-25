import React from 'react';
import { randomElement } from './utils';


export const communityCenterWords = {
  adjectives: [
    "Calm", "Carbon", "Careful", "Caring", "Central", "Centralized", "Code", "Collaborative", "Community", "Concentric", "Connected", "Connecting", "Contiguous", "Continuous", "Cool", "Constant", "Cooperative", "Copy", "Core", "Cosmic", "Creative", "Crowdsourced", "Curated", "Current"
  ],
  nouns: [
    "Center", "Channel", "Code", "Collaboration", "Colleagues", "Comments", "Commons", "Community", "Connections", "Content", "Copy", "Creations"
  ]
}

export interface CcRandomPhraseProps {
  adjectives: string[];
  nouns: string[];
}

export const CcRandomPhrase:React.FC<CcRandomPhraseProps> = ({nouns, adjectives, ...props}) => (
  <span {...props}>{randomElement(adjectives)} {randomElement(nouns)}</span>
)
