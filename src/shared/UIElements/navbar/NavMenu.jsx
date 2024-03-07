import React from "react";
import { GiCook } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa6";
import styles from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <ul className={styles.navMenu}>
      <li>
        <NavLink>
          <FaBookOpen />
          <span>MyRecipe</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/main/login"}>
          <GiCook />
          <span>Login</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default NavMenu;
