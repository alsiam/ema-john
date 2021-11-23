import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import './Login.css'



const Login = () => {
  const { googleSignIn } = useFirebase();
  return (
    <div className="login-section">
      <div>
        <h1>Login Form</h1>
        <form onSubmit="">
          <input className="input-email" type="email" name="" id="" placeholder="Enter Your Email" />
          <br />
          <input
          className="input-password"
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
          />
          <br />
          <input className="input-submit" type="submit" value="Submit" />
        </form>
        <p>
          Haven't Account? <NavLink to="register">Sign UP Here!</NavLink>
        </p>
        <p>----------------or-----------------</p>
        <p onClick={googleSignIn} className="google-btn">Sign in With Google</p>
      </div>
    </div>
  );
};

export default Login;
