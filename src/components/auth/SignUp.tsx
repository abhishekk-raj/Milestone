import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h2>SignUp</h2>
      <form>
        <label>First Name</label>
        <input name="firstName" type="text" />

        <label>Last Name</label>
        <input name="lastName" type="text" />

        <label>Username</label>
        <input name="userName" type="text" />

        <label>Password</label>
        <input name="password" type="text" />
        <button>SignUp</button>
        <Link to="/sign-in">Already have account? SignIn</Link>
      </form>
    </div>
  );
};

export default SignUp;
