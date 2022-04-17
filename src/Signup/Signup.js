import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthLogin from "../AuthLogin/AuthLogin";
import auth from "../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdatePassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { async } from "@firebase/util";
import { toast, ToastContainer } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, SignUpLoading, SignUpError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  user && navigate("/");
  SignUpError && toast.error(SignUpError?.message);
  return (
    <div className="form-container">
      <div>
        <h1 className="section-title">Sign Up</h1>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" ref={nameRef} name="name" id="" required />
            </div>
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
            <ToastContainer />
            <p>
              Already Have an Account? <Link to="/login">Login</Link>
            </p>

            <div>
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
        <AuthLogin></AuthLogin>
      </div>
    </div>
  );
};

export default Signup;
