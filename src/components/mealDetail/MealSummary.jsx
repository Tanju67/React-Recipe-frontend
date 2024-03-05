import React, { useContext } from "react";
import styles from "./MealSummary.module.css";
import parse from "html-react-parser";
import { RequestApiContext } from "../../shared/context/APIRequest-context";

function MealSummary() {
  const { mealSummary } = useContext(RequestApiContext);
  let reactEl;
  if (mealSummary.summary) {
    reactEl = parse(mealSummary.summary);
  }

  return (
    <div className={styles.mealSummary}>
      <h3>Summary</h3>
      <div className={styles.summaryText}>{reactEl}</div>
    </div>
  );
}

export default MealSummary;
