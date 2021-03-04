import React, { ReactNode } from 'react';

interface CCTwoPanelProps {
  left: ReactNode;
  right: ReactNode;
}
export const CCTwoPanel:React.FC<CCTwoPanelProps> = ({left,right}) => (
  <div className="App p-4">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          {left}
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        {right}
      </div>
    </div>
  </div>
);

