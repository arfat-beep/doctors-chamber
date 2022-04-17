import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
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
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
