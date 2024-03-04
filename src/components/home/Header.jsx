import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHotMeal } from "react-icons/gi";
import styles from "./Header.module.css";
import Button from "../../shared/UIElements/Button";
import { RequestApiContext } from "../../shared/context/APIRequest-context";

function Header() {
  const { setError } = useContext(RequestApiContext);
  const navigate = useNavigate();
  const clickHandler = () => {
    setError(null);
    navigate("/main");
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <GiHotMeal />
        <h1>Best Recipes</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          sunt eum quia sit non dicta id odit optio delectus sed.
        </p>
        <div>
          <Button onClick={clickHandler}>Start searching recipes</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
