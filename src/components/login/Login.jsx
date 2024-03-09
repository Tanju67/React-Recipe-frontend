import React, { useContext } from "react";
import styles from "./Login.module.css";
import Card from "../../shared/UIElements/Card";
import Button from "../../shared/UIElements/Button";
import Input from "../../shared/formElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/pexels-dana-tentis-691114.jpg";
import { AuthContext } from "../../shared/context/auth-context";

function Login() {
  const [inputHandler, formState] = useForm({
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    isValid: false,
  });

  const navigate = useNavigate();
  const { sendAuthRequest, onLogin } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    sendAuthRequest(
      "auth/login",
      {
        email: formState.email.value,
        password: formState.password.value,
      },
      { "Content-Type": "application/json" },
      (data) => {
        console.log(data);
        onLogin(data.user.token, { name: data.user.name, id: data.user.id });
        navigate("/");
      }
    );
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
