import "./navbar.scss";

import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faGear,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { store } from "../../core/state/store";
import { useAppDispatch } from "../../core/state/hooks";
import { logout } from "../../core/state/reducers/authSlice";
import { clearUserData } from "../../core/state/reducers/userDataSlice";
import { toast } from "react-toastify";

const ROUTES = {
  INDEX: "/",
  OAUTH: "/oauth",
};

const isHomeOrOauth = (currlocation: string) =>
  [ROUTES.INDEX, ROUTES.OAUTH].includes(currlocation);

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {isHomeOrOauth(location.pathname) ? <NavbarHome /> : <LoggedInNavbar />}
    </>
  );
}

const NavbarHome = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <nav className="Navbar__Home">
      <div>
        <img
          onClick={() => {
            localStorage.clear();
            sessionStorage.clear();

            dispatch(logout());
            nav("/");
          }}
          src="/logo.png"
          alt=""
        />
      </div>
    </nav>
  );
};

const LoggedInNavbar = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const [profilePicture, setProfilePicture] = useState<string | undefined>(
    undefined
  );

  const [openSettings, setOpenSettings] = useState<boolean>(false);

  useEffect(() => {
    setProfilePicture(store.getState().userData.profilePicture);
  }, []);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setProfilePicture(store.getState().userData.profilePicture);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();

    dispatch(logout());
    dispatch(clearUserData());
    nav("/");
  };

  return (
    <nav className="Navbar__LoggedIn">
      <div className="Navbar__LoggedIn__Image">
        <img onClick={() => nav("/dashboard")} src="/logo.png" alt="" />
      </div>

      {profilePicture && (
        <>
          <div
            className="ProfilePicture"
            style={{
              backgroundImage: `url("${"data:image/jpeg;base64,"}${profilePicture}")`,
            }}
            onClick={() => {
              setOpenSettings((prev) => !prev);
            }}
          ></div>

          <Settings openSettings={openSettings} handleLogout={handleLogout} />
        </>
      )}
    </nav>
  );
};

function Settings({
  openSettings,
  handleLogout,
}: {
  openSettings: boolean;
  handleLogout: () => void;
}) {
  if (openSettings) {
    return (
      <div className="Settings">
        <button
          onClick={() => {
            toast("Open settings");
          }}
        >
          Settings <FontAwesomeIcon icon={faGear} />
        </button>

        <button
          onClick={() => {
            toast("Enable dark mode");
          }}
        >
          Dark <FontAwesomeIcon icon={faMoon} />
        </button>

        <button onClick={handleLogout}>
          Log Out <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
      </div>
    );
  }

  return null;
}
