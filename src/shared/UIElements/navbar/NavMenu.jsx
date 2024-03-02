import React from "react";
import { GiCook } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa6";
import styles from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <ul className={styles.navMenu}>
      <li>
        <FaBookOpen />
        <NavLink>MyRecipe</NavLink>
      </li>
      <li>
        <GiCook />
        <NavLink>Login</NavLink>
      </li>
    </ul>
  );
}

export default NavMenu;
