import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <div id="main">
      <div className="fof">
        <h1>Error 404</h1> <br />
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
