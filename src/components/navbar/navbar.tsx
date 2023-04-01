import "./navbar.css";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="FRE__Navbar">
      <div className="FRE__Navbar__Img">
        <Link to="/">
          <img src="/FreeMe.png" alt="" />
        </Link>
      </div>

      {(() => {
        if (sessionStorage.getItem("uuid") === null) {
          return (
            <ul>
              <li>
                <Link to="#">About FreeMe</Link>
              </li>
            </ul>
          );
        }
      })()}

      <div>
        {(() => {
          if (
            location.pathname === "/dashboard" ||
            sessionStorage.getItem("uuid") !== null
          ) {
            return (
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
            );
          }

          return (
            <>
              <button>
                <Link to="/login">
                  Login <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
              </button>
            </>
          );
        })()}
      </div>
    </nav>
  );
}
