import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function ActiveRoute({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.includes(`${to}/`);
  const activeClass = "bg-custom-100 text-white  flex w-full inline-block p-3 pl-7";
  const inactiveClass = "text-white flex w-full inline-block p-3 pl-7";

  return (
    <Link to={to} className={isActive ? activeClass : inactiveClass}>
      {children}
    </Link>
  );
}
