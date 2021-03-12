import React from 'react'

export interface WorkspaceProps {
}

export const Workspace:React.FC<WorkspaceProps> = (props) => {

  return (
    <main className="workspace flex-1 focus:outline-none overflow-hidden w-full bg-yellow-200 p-6" tabIndex={0}>
      <div className="h-full">
      {props.children}
      </div>
    </main>
  );
}
