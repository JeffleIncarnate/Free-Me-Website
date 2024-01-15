import "./navbar.scss";

import { useLocation, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { store } from "../../core/state/store";

const ROUTES = {
  INDEX: "/",
};

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {location.pathname === ROUTES.INDEX ? <NavbarHome /> : <LoggedInNavbar />}
    </>
  );
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
        Sign In <FontAwesomeIcon className="Icon" icon={faRightFromBracket} />
      </Link>
    </nav>
  );
};

const LoggedInNavbar = () => {
  const nav = useNavigate();

  const [profilePicture, setProfilePicture] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setProfilePicture(store.getState().userData.profilePicture);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <nav className="Navbar__LoggedIn">
      <div className="Dashboard">
        <img onClick={() => nav("/dashboard")} src="/logo.png" alt="" />
      </div>

      {profilePicture && (
        <div
          className="ProfilePicture"
          style={{
            backgroundImage: `url("${"data:image/jpeg;base64,"}${profilePicture}")`,
          }}
        ></div>
      )}
    </nav>
  );
};
