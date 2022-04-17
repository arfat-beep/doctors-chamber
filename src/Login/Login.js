import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthLogin from "../AuthLogin/AuthLogin";
import {
  useSignInWithEmailAndPassword,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [updatePassword] = useUpdatePassword(auth);
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    user && navigate(from, { replace: true });
  };
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      updatePassword(email);
      toast.success("Please check your email");
    } else {
      toast.error("something is wrong. Check email box");
    }
  };
  return (
    <div className="form-container">
      <div>
        <ToastContainer />
        <h1 className="section-title">Login</h1>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" ref={emailRef} name="email" id="" required />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                ref={passwordRef}
                name="password"
                id=""
                required
              />
            </div>
            <p>
              New User? <Link to="/signup">Sign Up</Link>
            </p>
            <p
              onClick={handleForgetPassword}
              style={{ color: "red", cursor: "pointer" }}
            >
              Forget Password ?
            </p>
            <div>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
        <AuthLogin></AuthLogin>
      </div>
    </div>
  );
};

export default Login;
