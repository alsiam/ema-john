import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";



const Login = () => {
  const { googleSignIn } = useFirebase();
  return (
    <div>
      <div>
        <h1>Login Form</h1>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Enter Your Email" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Haven't Account? <NavLink to="register">Sign UP Here!</NavLink>
        </p>
        <p>----------------or-----------------</p>
        <p onClick={googleSignIn}>Sign in With Google</p>
      </div>
    </div>
  );
};

export default Login;
