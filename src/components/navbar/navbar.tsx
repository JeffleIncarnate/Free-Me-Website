import "./navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="FRE__Navbar">
      <div className="FRE__Navbar__Img">
        <Link to="/">
          <img src="/FreeMe.png" alt="" />
        </Link>
      </div>

      <ul>
        <li>
          <Link to="#">About FreeMe</Link>
        </li>
      </ul>

      <div>
        {sessionStorage.getItem("token") === null ? (
          <>
            <button>
              <Link to="/login">
                Login <i className="fa-solid fa-right-to-bracket"></i>
              </Link>
            </button>
          </>
        ) : (
          <>
            <button>
              <div>
                <Link to="/dashboard">
                  Dashboard <i className="fa-solid fa-table-columns"></i>
                </Link>
              </div>
            </button>
            <button
              onClick={() => {
                sessionStorage.clear();
              }}
            >
              <Link to="/">
                Logout <i className="fa-solid fa-right-from-bracket"></i>
              </Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
