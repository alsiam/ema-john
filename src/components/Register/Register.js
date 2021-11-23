import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import '../Login/Login.css'



const Register = () => {
  const { googleSignIn } = useFirebase();
  return (
    <div className="register-section">
      <div>
        <h1>Register Form</h1>
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
          Already Have an Account? <NavLink to="register">Login Here!</NavLink>
        </p>
        <p>----------------or-----------------</p>
        <p onClick={googleSignIn} className="google-btn">Sign in With Google</p>
      </div>
    </div>
  );
};

export default Register;
