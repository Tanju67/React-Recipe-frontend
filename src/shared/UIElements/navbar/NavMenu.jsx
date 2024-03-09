import React, { useContext } from "react";
import { GiCook } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa6";
import styles from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

function NavMenu() {
  const { isLoggedIn, onLogout } = useContext(AuthContext);

  const clickHandler = () => {
    if (!isLoggedIn) return;
    onLogout();
  };
  return (
    <ul className={styles.navMenu}>
      <li>
        <NavLink to={isLoggedIn ? "/main/myrecipe" : "/main/login"}>
          <FaBookOpen />
          <span>MyRecipe</span>
        </NavLink>
      </li>
      <li onClick={clickHandler}>
        <NavLink to={isLoggedIn ? "/" : `/main/login`}>
          <GiCook />
          <span>{isLoggedIn ? "Logout" : "Login"}</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default NavMenu;
