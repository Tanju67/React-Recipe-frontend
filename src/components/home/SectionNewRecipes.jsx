import React from "react";
import styles from "./SectionNewRecipes.module.css";
import NewRecipes from "./NewRecipes";

function SectionNewRecipes({ mealList }) {
  return (
    <div className={styles.section}>
      <h2>New Recipes </h2>
      <NewRecipes mealList={mealList} />
    </div>
  );
}

export default SectionNewRecipes;
