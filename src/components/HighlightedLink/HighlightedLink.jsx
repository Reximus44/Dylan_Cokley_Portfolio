import "./HighlightedLink.css";
import { Link, useLocation } from "react-router-dom";

function HighlightedLink({ to, children, className }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`${className} ${isActive ? "highlighted-link" : ""}`}
    >
      {children}
    </Link>
  );
}

export default HighlightedLink;
