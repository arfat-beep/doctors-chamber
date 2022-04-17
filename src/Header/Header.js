import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import "./Header.css";
const Header = () => {
  const [navValue, setNavValue] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <header>
      <div>
        <Link className="logo-name" to="/">
          Doctor's Chamber
        </Link>
      </div>
      <nav style={navValue ? { top: " 82px" } : { top: "-300px" }}>
        <Link onClick={() => setNavValue(!navValue)} to="/">
          Home
        </Link>
        <Link onClick={() => setNavValue(!navValue)} to="/blogs">
          Blogs
        </Link>
        <Link onClick={() => setNavValue(!navValue)} to="/about">
          About
        </Link>
        {user ? (
          <Link
            to="/"
            onClick={() => {
              signOut(auth);
              setNavValue(!navValue);
            }}
          >
            Logout
          </Link>
        ) : (
          <Link onClick={() => setNavValue(!navValue)} to="/login">
            Login
          </Link>
        )}
      </nav>
      <button className="menu-icon" onClick={() => setNavValue(!navValue)}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>
    </header>
  );
};

export default Header;
