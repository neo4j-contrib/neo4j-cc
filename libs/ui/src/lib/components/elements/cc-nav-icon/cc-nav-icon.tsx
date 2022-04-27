import styles from './cc-nav-icon.module.scss';

/* eslint-disable-next-line */
export interface CcNavIconProps {
  children: React.ReactNode
}

export function CcNavIcon({children}: CcNavIconProps) {
  return (
    <div className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6 cursor-pointer select-none">
      {children}
    </div>
  );
}

