import React from 'react';

export const CCRandomPhrase:React.FC<{oneOf:string[]}> = ({oneOf, ...props}) => (
  <span {...props}>{oneOf[Math.floor(Math.random() * oneOf.length)]}</span>
)
