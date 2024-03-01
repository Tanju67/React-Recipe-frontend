import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import SectionNewRecipes from "./SectionNewRecipes";

function Home({ mealList }) {
  return (
    <div className={styles.homePage}>
      <Header />
      <SectionNewRecipes mealList={mealList} />
    </div>
  );
}

export default Home;
