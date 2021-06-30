import React from 'react';
import { randomPick } from '../../lib';

export interface CcRandomPhraseProps {
  adjectives: string[];
  nouns: string[];
}

export const CcRandomPhrase:React.FC<CcRandomPhraseProps> = ({nouns, adjectives, ...props}) => (
  <span {...props}>{randomPick(adjectives)} {randomPick(nouns)}</span>
)
