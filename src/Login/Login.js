import React, { useRef } from "react";
import { Link } from "react-router-dom";
import AuthLogin from "../AuthLogin/AuthLogin";
import "./Login.css";
const Login = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(name, email, password);
  };
  return (
    <div className="form-container">
      <div>
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
