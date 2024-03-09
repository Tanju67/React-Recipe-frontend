import React from "react";
import styles from "./MyRecipe.module.css";
import NewRecipes from "../../shared/UIElements/recipe/NewRecipes";

function MyRecipe({ recipes }) {
  return (
    <div className={styles.recipePage}>
      <h3>My Recipes</h3>
      <NewRecipes mealList={recipes} myRecipe={true} />
    </div>
  );
}

export default MyRecipe;
