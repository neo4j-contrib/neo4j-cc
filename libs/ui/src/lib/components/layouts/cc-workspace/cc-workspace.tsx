import styles from './cc-workspace.module.scss';

/* eslint-disable-next-line */
export interface CcWorkspaceProps {
  children?: React.ReactNode
}

export function CcWorkspace({children}: CcWorkspaceProps) {
  return (
    <main className="bg-yellow-400 w-full flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
    
      <div className="py-6">
        <div className="mx-auto px-4 sm:px-6 md:px-8">
          {children}
        </div>
      </div>
    </main>
  )
}

export default CcWorkspace;
