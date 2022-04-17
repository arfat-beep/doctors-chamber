import React, { useState } from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Spinner from "../Spinner/Spinner";
import "./AuthLogin.css";
const AuthLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, gitHubLoading, githubError] =
    useSignInWithGithub(auth);
  gitHubLoading && <Spinner></Spinner>;
  if (googleUser || githubUser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="AuthLogin-container">
      <div className="or-bar">
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <button onClick={() => signInWithGoogle()}>Google</button>
      <button onClick={() => signInWithGithub()}>Github</button>
      {googleLoading && <p style={{ color: "#ffc700" }}>Loading Please Wait</p>}
      {googleError && <p style={{ color: "red" }}>{googleError.message}</p>}
      {gitHubLoading && <p style={{ color: "#ffc700" }}>Loading Please Wait</p>}
      {githubError && <p style={{ color: "red" }}>{githubError.message}</p>}
    </div>
  );
};

export default AuthLogin;
