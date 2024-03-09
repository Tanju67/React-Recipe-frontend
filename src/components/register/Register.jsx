import React, { useContext } from "react";
import styles from "./Register.module.css";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/formElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../shared/UIElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import registerImg from "../../assets/pexels-andrea-piacquadio-821054.jpg";
import { AuthContext } from "../../shared/context/auth-context";

function Register() {
  const [inputHandler, formState] = useForm({
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    isValid: false,
  });

  const navigate = useNavigate();
  const { sendAuthRequest } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    sendAuthRequest(
      "auth/register",
      {
        name: formState.name.value,
        email: formState.email.value,
        password: formState.password.value,
      },
      { "Content-Type": "application/json" },
      () => {
        navigate("/main/login");
      }
    );
  };
  return (
    <div className={styles.registerPage}>
      <Card className={styles.container}>
        <form onSubmit={submitHandler}>
          <h3>Register</h3>
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            placeholder="Name"
            errorMsg="Please enter a valid name!"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
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
            Register
          </Button>
          <p>
            Do You already have an account?
            <Link to={"/main/login"}>Login</Link>
          </p>
        </form>
        <div className={styles.imgBox}>
          <img src={registerImg} alt="login image" />
        </div>
      </Card>
    </div>
  );
}

export default Register;
