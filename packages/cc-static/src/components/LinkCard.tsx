import { Link } from "gatsby";
import * as React from "react"


export interface LinkCardProps {title:string, detail:string, to:string}

export const LinkCard:React.FC<LinkCardProps> = ({title, detail, to}) => (
  <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
  <div className="flex-shrink-0">
    <div className="h-10 w-10 rounded-full text-center py-2 inline-block font-bold bg-gray-200">{title.slice(0,1)}</div>
  </div>
  <div className="flex-1 min-w-0">
    <Link to={to} className="focus:outline-none">
      <span className="absolute inset-0" aria-hidden="true"></span>
      <p className="text-sm font-medium text-gray-900">
        {title}
      </p>
      <p className="text-sm text-gray-500 truncate">
        {detail}
      </p>
    </Link>
  </div>
</div>
)
