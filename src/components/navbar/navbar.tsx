import "./navbar.css";

import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect, FC } from "react";

import { FreeMeLogo } from "../../assets/__img__";

export default function Navbar() {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.getItem("uuid") === null
      ? setUserLoggedIn(false)
      : setUserLoggedIn(true);
  }, [userLoggedIn]);

  return (
    <nav className="FRE__Navbar">
      {userLoggedIn ? <_NavbarLoggedIn /> : <_NavbarNotLoggedIn />}
    </nav>
  );
}

interface _INavbarLoggedInProps {}

const _NavbarLoggedIn: FC<_INavbarLoggedInProps> = ({}) => {
  return (
    <div className="FRE__Navbar__LoggedIn">
      <ul className="FRE__Navbar__LoggedIn__List">
        <li>
          <Link to="/socialMedia">Social Media</Link>
        </li>
        <li>
          <Link to="/balances">Balances</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <Link to="/dashboard">
          <img src={FreeMeLogo} alt="" />
        </Link>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/communityNetwork">Corporate Network</Link>
        </li>
        <li>
          <Link
            onClick={() => {
              sessionStorage.clear();
            }}
            to="/login"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
interface _INavbarNotLoggedInProps {}

const _NavbarNotLoggedIn: FC<_INavbarNotLoggedInProps> = ({}) => {
  return (
    <div className="FRE__Navbar__NotLoggedIn">
      <Link to="/about">About FreeMe</Link>
      <Link to="/">
        <img src={FreeMeLogo} alt="" />
      </Link>
      <Link
        onClick={() => {
          sessionStorage.clear();
        }}
        to="/login"
      >
        Login <i className="fa-solid fa-right-from-bracket"></i>
      </Link>
    </div>
  );
};
