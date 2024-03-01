import React from "react";
import styles from "./Button.module.css";

function Button({ className, children, onClick, type }) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${styles.btn} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
