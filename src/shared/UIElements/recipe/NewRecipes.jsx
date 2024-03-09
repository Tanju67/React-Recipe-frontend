import React from "react";
import styles from "./NewRecipes.module.css";
import NewRecipeItem from "./NewRecipeItem";

function NewRecipes({ mealList, myRecipe }) {
  return (
    <div className={styles.newRecipes}>
      {mealList?.map((item, i) => (
        <NewRecipeItem
          key={i}
          image={item.image}
          title={item.title}
          id={myRecipe ? item.recipeId : item.id}
        />
      ))}
    </div>
  );
}

export default NewRecipes;
