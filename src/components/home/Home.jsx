import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import SectionNewRecipes from "./SectionNewRecipes";

function Home() {
  return (
    <div className={styles.homePage}>
      <Header />
      <SectionNewRecipes />
    </div>
  );
}

export default Home;
