import React from 'react';

import {Link} from 'gatsby';

const links = [
  {
    to: 'https://neo4j.com',
    title: 'Neo4j'
  },
  {
    to: 'https://neo4j.com/developer/',
    title: 'Developer Guides'
  },
  {
    to: 'https://community.neo4j.com',
    title: 'Forums'
  },
  {
    to: 'https://neo4j.com/graphacademy/',
    title: 'Graph Academy'
  },
  {
    to: 'https://medium.com/neo4j/',
    title: 'Blog'
  },
]

export interface FooterProps {
  user?: {};
}

export const SiteFooter: React.FC<FooterProps> = (props) => {
  const {user} = props;

  return (
    <footer className="bg-white flex-none">
      <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {links.map(link => (
              <a 
                key={link.to}
                href={link.to} 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"                
              >
                {link.title}
              </a>
            ))}
        </nav>
        <p className="mt-4 text-xs text-center text-gray-400">
          &copy; {new Date().getFullYear()} Neo4j, Inc. All rights reserved.
        </p>
      </div>
    </footer>    
  );
};

