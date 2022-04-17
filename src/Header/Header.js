import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import "./Header.css";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <header>
      <div>
        <Link to="/">
          <img src="https://i.ibb.co/84gN6SG/logo.png" alt="" />
        </Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        {user ? (
          <Link to="/" onClick={() => signOut(auth)}>
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
