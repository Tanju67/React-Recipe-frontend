import React, { useEffect, useReducer } from "react";
import classes from "./Input.module.css";
import { validate } from "../utils/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators),
      };

    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };

    case "RESET":
      return { value: "", isTouched: false, isValid: false };

    default:
      return state;
  }
};

function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    isTouched: false,
    isValid: props.valid || false,
  });

  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      payload: e.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );
  return (
    <div
      className={`${classes.formControl} ${
        !inputState.isValid && inputState.isTouched ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <p className={classes.error}>{props.errorMsg}</p>
      )}
    </div>
  );
}

export default Input;
