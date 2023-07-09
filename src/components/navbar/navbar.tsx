import "./navbar.css";

import { Link, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import { FreeMeLogo } from "../../assets/__img__";

export default function Navbar() {
  const location = useLocation();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    sessionStorage.getItem("uuid") === null
      ? setUserLoggedIn(false)
      : setUserLoggedIn(true);
  }, [userLoggedIn]);

  return (
    <nav className="FRE__Navbar">
      <div className="FRE__Navbar__Img">
        <Link to="/">
          <img src={FreeMeLogo} alt="" />
        </Link>
      </div>

      {!userLoggedIn ? (
        <>
          <ul>
            <li>
              <Link to="#">About FreeMe</Link>
            </li>
          </ul>
        </>
      ) : null}

      <div>
        {userLoggedIn ? (
          <>
            <button>
              <Link to="/profile">Profile</Link>
            </button>
            <button>
              <div>
                <Link to="/dashboard">Dashboard</Link>
              </div>
            </button>
            <button
              onClick={() => {
                sessionStorage.clear();
              }}
            >
              <Link to="/login">
                Logout <i className="fa-solid fa-right-from-bracket"></i>
              </Link>
            </button>
          </>
        ) : (
          <>
            <button>
              <Link to="/login">
                Login <i className="fa-solid fa-right-to-bracket"></i>
              </Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
