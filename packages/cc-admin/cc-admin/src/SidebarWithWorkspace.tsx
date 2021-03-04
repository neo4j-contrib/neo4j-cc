import React from 'react';
import { CCSidebar } from './components/CCSidebar';
import { CCWorkspace } from './components/CCWorkspace';

export const SidebarWithWorkspace:React.FC = () => (
  <div className="h-screen flex overflow-hidden bg-white">
    <CCSidebar />
    <CCWorkspace />
  </div>
)
