import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const onSignInButtonClick = () => {
    navigate("/todo");
  };

  return (
    <div>
      <h2>SignIn</h2>
      <form>
        <label>Username</label>
        <input name="firstName" type="text" />

        <label>Password</label>
        <input name="lastName" type="text" />
        <button onClick={onSignInButtonClick}>SignIn</button>
        <Link to="/sign-up">Don't have account? SignUp</Link>
      </form>
    </div>
  );
};

export default SignIn;
