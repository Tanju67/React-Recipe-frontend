import React from "react";
import styles from "./SmallScreen.module.css";
import { NavLink } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa6";
import { GiCook } from "react-icons/gi";

function SmallScreen({ isLoggedIn, clickHandler, onClose }) {
  return (
    <ul className={styles.navMenu}>
      <span onClick={onClose} className={styles.clsBtn}>
        &times;
      </span>
      <div className={styles.container}>
        <li>
          <NavLink
            onClick={onClose}
            to={isLoggedIn ? "/main/myrecipe" : "/main/login"}
          >
            <FaBookOpen />
            <span>MyRecipe</span>
          </NavLink>
        </li>
        <li onClick={clickHandler}>
          <NavLink onClick={onClose} to={isLoggedIn ? "/" : `/main/login`}>
            <GiCook />
            <span>{isLoggedIn ? "Logout" : "Login"}</span>
          </NavLink>
        </li>
      </div>
    </ul>
  );
}

export default SmallScreen;
