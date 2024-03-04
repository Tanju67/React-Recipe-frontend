import React, { useContext } from "react";
import styles from "./SectionNewRecipes.module.css";
import NewRecipes from "../../shared/UIElements/recipe/NewRecipes";
import { RequestApiContext } from "../../shared/context/APIRequest-context";

function SectionNewRecipes({ mealList }) {
  const { error, isLoading, hopePageMealList } = useContext(RequestApiContext);
  return (
    <div className={styles.section}>
      <h2>New Recipes </h2>
      {isLoading && <p className="loader">Loading...</p>}
      {!error && !isLoading && <NewRecipes mealList={hopePageMealList} />}
      {error && !isLoading && <p className="error">💥{error}</p>}
    </div>
  );
}

export default SectionNewRecipes;
