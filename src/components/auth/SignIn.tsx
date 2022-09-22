import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "../core/components/card/Card";
import { Variants } from "../core/enums/variants";
import styles from "./Auth.module.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const onSignInButtonClick = () => {
    navigate("/todo");
  };

  return (
    <div className={styles.Auth}>
      <Card varient={Variants.Success}>
        <CardHeader>
          <CardTitle>SignIn</CardTitle>
          <CardSubtitle>SignIn to continue</CardSubtitle>
        </CardHeader>
        <CardBody>
          <form>
            <label>Username</label>
            <input name="firstName" type="text" />

            <label>Password</label>
            <input name="lastName" type="text" />

            <button onClick={onSignInButtonClick}>SignIn</button>
            <Link to="/sign-up">Don't have account? SignUp</Link>
          </form>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
