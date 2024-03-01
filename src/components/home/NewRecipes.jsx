import React from "react";
import styles from "./NewRecipes.module.css";
import NewRecipeItem from "./NewRecipeItem";

function NewRecipes({ mealList }) {
  return (
    <div className={styles.newRecipes}>
      {mealList.map((item) => (
        <NewRecipeItem
          key={item.id}
          image={item.image}
          title={item.title}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default NewRecipes;
