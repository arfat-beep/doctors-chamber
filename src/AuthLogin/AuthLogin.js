import React from "react";
import "./AuthLogin.css";
const AuthLogin = () => {
  return (
    <div className="AuthLogin-container">
      <div className="or-bar">
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <button>Github</button>
      <button>Google</button>
    </div>
  );
};

export default AuthLogin;
