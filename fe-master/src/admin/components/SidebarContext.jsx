import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(64);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setSidebarWidth(sidebarOpen ? 16 : 64);
  };

  return (
    <SidebarContext.Provider value={{ sidebarOpen, sidebarWidth, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
