import { Link } from "gatsby";
import * as React from "react"


export interface CardProps {title:string}

export const Card:React.FC<CardProps> = ({title, children}) => (
  <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
    <div className="px-4 py-5 sm:px-6">
      {title}
    </div>
    <div className="px-4 py-5 sm:p-6">
      {children}
    </div>
  </div>
  
  
)
