import React from "react";
import styles from "./Login.module.css";
import Card from "../../shared/UIElements/Card";
import Button from "../../shared/UIElements/Button";
import Input from "../../shared/formElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";
import { Link } from "react-router-dom";
import loginImg from "../../assets/pexels-dana-tentis-691114.jpg";

function Login() {
  const [inputHandler, formState] = useForm({
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    isValid: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <div className={styles.loginPage}>
      <Card className={styles.container}>
        <form onSubmit={submitHandler}>
          <h3>Login</h3>
          <Input
            id="email"
            element="input"
            type="email"
            label="Email"
            placeholder="Email"
            errorMsg="Please enter a valid email!"
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
          />
          <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            placeholder="Password"
            errorMsg="Please enter a valid password!"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(6)]}
          />
          <Button disabled={!formState.isValid} type="submit">
            Login
          </Button>
          <p>
            Doesn't have an account yet?
            <Link to={"/main/register"}>Register</Link>
          </p>
        </form>
        <div className={styles.imgBox}>
          <img src={loginImg} alt="login image" />
        </div>
      </Card>
    </div>
  );
}

export default Login;
