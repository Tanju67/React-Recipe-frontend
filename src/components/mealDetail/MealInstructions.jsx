import React, { useContext } from "react";
import styles from "./MealInstructions.module.css";
import { RequestApiContext } from "../../shared/context/APIRequest-context";
import InstructionsItem from "./InstructionsItem";

function MealInstructions() {
  const { mealInstructions } = useContext(RequestApiContext);
  return (
    <div className={styles.instructions}>
      <h3>Instructions</h3>
      <div className={styles.recipeBox}>
        {mealInstructions.map((item, i) => (
          <InstructionsItem key={i} number={item.number} step={item.step} />
        ))}
      </div>
    </div>
  );
}

export default MealInstructions;
