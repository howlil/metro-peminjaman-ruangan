import React from 'react';
import { useSidebar } from './SidebarContext';

export default function Content({ children }) {
  const { sidebarWidth } = useSidebar();

  return (
    <div className={`container ml-${sidebarWidth} ${sidebarWidth === 64 ? 'lg:ml-64' : 'lg:ml-16'} transition-all duration-300 ease-in-out`}>
      <div className="m-10">
        {children}
      </div>
    </div>
  );
}
