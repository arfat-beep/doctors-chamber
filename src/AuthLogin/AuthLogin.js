import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import "./AuthLogin.css";
const AuthLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);
  console.log(googleUser, githubUser);
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
    </div>
  );
};

export default AuthLogin;
