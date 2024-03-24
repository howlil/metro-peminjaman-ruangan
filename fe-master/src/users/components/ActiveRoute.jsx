import { useLocation, Link } from "react-router-dom";

export default function ActiveRoute({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeClass = "bg-custom-100 text-white p-8";
  const inactiveClass = "text-gray-700";

  return (
      <Link to={to} className={isActive ? activeClass : inactiveClass}>
        {children}
      </Link>
  );
}
