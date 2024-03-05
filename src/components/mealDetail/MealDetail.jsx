import React, { useContext } from "react";
import styles from "./MealDetail.module.css";

import MealImg from "./MealImg";
import MealSummary from "./MealSummary";
import MealIngredients from "./MealIngredients";
import { RequestApiContext } from "../../shared/context/APIRequest-context";
import MealEquipment from "./MealEquipment";

function MealDetail() {
  const { mealInformation } = useContext(RequestApiContext);
  return (
    <div className={styles.mealDetail}>
      <div className={styles.bg}></div>
      <h2>{mealInformation.title}</h2>
      <MealImg />
      <MealSummary />
      <MealIngredients />
      <MealEquipment />
    </div>
  );
}

export default MealDetail;
