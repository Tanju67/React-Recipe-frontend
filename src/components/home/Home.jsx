import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";

function Home() {
  return (
    <div className={styles.homePage}>
      <Header />
    </div>
  );
}

export default Home;
