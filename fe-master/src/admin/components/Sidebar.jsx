import React, { useState } from 'react';
import { sidebarData } from "../data/SideLink";
import ActiveRoute from "./ActiveRoute";
import { Link } from "react-router-dom";
import { useSidebar } from './SidebarContext';
import Logout from './Overlays/Logout';

export default function Sidebar() {
  const { sidebarOpen, sidebarWidth, toggleSidebar } = useSidebar();
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleLogout = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutSuccess = () => {
    window.location.href = '/admin/login';
  };

  return (
    <aside>
      <div className="flex h-screen fixed w-64">
        <div className={`bg-custom-200 w-${sidebarWidth} transition-all duration-300 ease-in-out`}>
          <div className="flex py-6 items-center px-6">
            <img src="/iconSidebar/hamburger.svg" alt="hide" onClick={toggleSidebar} className="cursor-pointer w-10"/>
          </div>
          {sidebarOpen ? (
            <nav>
              {sidebarData.map((data, i) => (
                <div key={i}>
                  <ActiveRoute to={data.link}>
                    <img src={data.icon} className="mr-2 w-6" alt="Icon"></img>
                    <Link to={data.link} className="text-white">
                      {data.label}
                    </Link>
                  </ActiveRoute>
                </div>
              ))}
              <div className='bg-custom-300 flex w-full cursor-pointer inline-block p-3 pl-7' onClick={handleLogout}> 
                <img src="/iconSidebar/admin.svg" className="mr-2 w-6" alt="Icon"></img>
                <Link className="text-white w-full">
                  Admin
                </Link>
                <img src="/iconSidebar/logout.svg" className="ml-auto mr-2 w-6" alt="Icon" ></img>
              </div>
            </nav>
          ) : (
            <nav className=" justify-center">
              {sidebarData.map((data, i) => (
                <div key={i} className="text-center">
                  <ActiveRoute to={data.link}>
                    <img src={data.icon} alt="Icon"></img>
                  </ActiveRoute>
                </div>
              ))}
              <div className="bg-custom-300 flex w-full inline-block p-3 pl-7"> 
                <img src="/iconSidebar/logout.svg"  alt="Icon" onClick={handleLogout}></img>
              </div>
            </nav>
          )}
        </div>
      </div>

      {logoutDialogOpen && (
        <Logout 
          onCancel={() => {
            setLogoutDialogOpen(false);
          }}
          onLogout={() => {
            setLogoutDialogOpen(false);
            handleLogoutSuccess();
          }}
        />
      )}
    </aside>
  );
}
