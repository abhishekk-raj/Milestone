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
import { Input, Label } from "../core/components/form/Input";
import { Variants } from "../core/enums/variants";
import styles from "./Auth.module.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const onSignInButtonClick = () => {
    navigate("/todo");
  };

  const onInputChange = (e: any) => {
    console.log(e);
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
            <Label>Username</Label>
            <Input
              type="text"
              name="firstName"
              placeholder="Username"
              onChange={onInputChange}
            />

            <Label>Password</Label>
            <Input
              type="date"
              name="password"
              placeholder="Password"
              onChange={onInputChange}
            />

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
