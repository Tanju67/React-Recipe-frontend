import React from "react";
import styles from "./MealDetail.module.css";

import { singleMeal } from "../../data/data";
import MealImg from "./MealImg";

function MealDetail() {
  return (
    <div className={styles.mealDetail}>
      <div className={styles.bg}></div>
      <h2>{singleMeal.title}</h2>
      <MealImg singleMeal={singleMeal} />
    </div>
  );
}

export default MealDetail;
