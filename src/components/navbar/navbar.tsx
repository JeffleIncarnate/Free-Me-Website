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
        <button>
          <div>
            <Link to="/login">
              Login <i className="fa-solid fa-right-to-bracket"></i>
            </Link>
          </div>
        </button>
      </div>
    </nav>
  );
}
