import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div>
        <img src="https://i.ibb.co/84gN6SG/logo.png" alt="" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
