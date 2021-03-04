import React from 'react';

export interface SummaryPanelProps {
  title: string;
}
export const SummaryPanel:React.FC<SummaryPanelProps> = ({title, children}) => (
  <div className="p-4 bg-gray-300">
    <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
    {children}
  </div>
)

