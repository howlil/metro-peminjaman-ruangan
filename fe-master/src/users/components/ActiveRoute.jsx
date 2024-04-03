import { useLocation, Link } from "react-router-dom";

export default function ActiveRoute({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const activeClass =
    "bg-custom-100 text-white md:p-6 p-4 rounded md:rounded-none";
  const inactiveClass = "text-gray-700 p-6";
  const className = isActive ? activeClass : inactiveClass;

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
