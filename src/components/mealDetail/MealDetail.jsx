import React, { useContext } from "react";
import styles from "./MealDetail.module.css";

import MealImg from "./MealImg";
import MealSummary from "./MealSummary";
import MealIngredients from "./MealIngredients";
import { RequestApiContext } from "../../shared/context/APIRequest-context";
import MealEquipment from "./MealEquipment";
import MealInstructions from "./MealInstructions";
import MealSimilar from "./MealSimilar";
import { FaHeartCirclePlus } from "react-icons/fa6";

function MealDetail() {
  const { mealInformation } = useContext(RequestApiContext);
  return (
    <div className={styles.mealDetail}>
      {mealInformation?.title?.length > 0 && (
        <>
          <div className={styles.icon}>
            <FaHeartCirclePlus />
          </div>
          <div className={styles.bg}></div>
          <h2>{mealInformation.title}</h2>
          <MealImg />
          <MealSummary />
          <MealIngredients />
          <MealEquipment />
          <MealInstructions />
          <MealSimilar />
        </>
      )}
    </div>
  );
}

export default MealDetail;
