import React, { useContext } from "react";
import styles from "./MealSimilar.module.css";
import { RequestApiContext } from "../../shared/context/APIRequest-context";
import SimilarMealItem from "./SimilarMealItem";

function MealSimilar() {
  const { mealSmilar } = useContext(RequestApiContext);
  return (
    <div className={styles.mealSimilar}>
      <h3>Similar Recipes</h3>
      <div>
        {mealSmilar.map((item, i) => (
          <SimilarMealItem key={i} title={item.title} id={item.id} />
        ))}
      </div>
    </div>
  );
}

export default MealSimilar;
