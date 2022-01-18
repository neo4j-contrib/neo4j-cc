import './loading-message.module.scss';

export interface LoadingMessageProps {
  children: React.ReactNode
}

export function LoadingMessage({children}:LoadingMessageProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-600 dark:text-white border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        {children}
      </div>
    </div>
  )
}