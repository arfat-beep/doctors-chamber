import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import "./AuthLogin.css";
const AuthLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
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
