import React from "react";
import { GiHotMeal } from "react-icons/gi";
import styles from "./Header.module.css";
import Button from "../../shared/UIElements/Button";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <GiHotMeal />
        <h1>Best Recipes</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          sunt eum quia sit non dicta id odit optio delectus sed.
        </p>
        <Button>Start searching recipes</Button>
      </div>
    </div>
  );
}

export default Header;
