import React from "react";
import styles from "./Logo.module.css";
import { GiHotMeal } from "react-icons/gi";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to={"/"}>
        <GiHotMeal />
        <span>R-Recipe</span>
      </Link>
    </div>
  );
}

export default Logo;
