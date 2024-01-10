import "./navbar.scss";

import { useLocation, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const ROUTES = {
  INDEX: "/",
};

export default function Navbar() {
  const location = useLocation();

  return <>{location.pathname === ROUTES.INDEX ? <NavbarHome /> : null}</>;
}

const NavbarHome = () => {
  const nav = useNavigate();

  return (
    <nav className="Navbar__Home">
      <Link className="Link" to={"/about"}>
        About FreeMe
      </Link>

      <div>
        <img onClick={() => nav("/")} src="/logo.png" alt="" />
      </div>

      <Link className="Link" to={"/login"}>
        Login <FontAwesomeIcon className="Icon" icon={faRightFromBracket} />
      </Link>
    </nav>
  );
};
