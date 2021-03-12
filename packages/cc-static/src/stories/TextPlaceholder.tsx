import React from 'react';

export const TextPlaceholder:React.FC<{text?:string|number}> = ({text}) => <p className="bg-blue-200 h-8 p-1 align-middle font-mono font-thin">Placeholder Text: {text}</p>
