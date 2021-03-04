import React from 'react';

export interface CcRandomPhraseProps {
  adjectives: string[];
  nouns: string[];
}

const randomWord = (words:string[]) => words[Math.floor(Math.random() * words.length)]

export const CcRandomPhrase:React.FC<CcRandomPhraseProps> = ({nouns, adjectives, ...props}) => (
  <span {...props}>{randomWord(adjectives)} {randomWord(nouns)}</span>
)
