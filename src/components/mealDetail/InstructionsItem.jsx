import React from "react";
import styles from "./InstructionsItem.module.css";

function InstructionsItem({ number, step }) {
  return (
    <div className={styles.item}>
      <p>
        <span className={styles.number}>{number}</span>
        <span className={styles.step}>{step}</span>
      </p>
    </div>
  );
}

export default InstructionsItem;
