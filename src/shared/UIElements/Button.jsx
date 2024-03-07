import React from "react";
import styles from "./Button.module.css";

function Button({ className, children, onClick, type, disabled }) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${styles.btn} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
