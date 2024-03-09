import React, { useContext } from "react";
import styles from "./Footer.module.css";
import Logo from "../navbar/Logo";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { AuthContext } from "../../context/auth-context";

function Footer() {
  const { isLoggedIn, onLogout } = useContext(AuthContext);
  const clickHandler = () => {
    if (!isLoggedIn) return;
    onLogout();
  };
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/main">Search Recipe</NavLink>
        </li>
        <li>
          <NavLink to={isLoggedIn ? "/main/myrecipe" : "/main/login"}>
            My Recipe
          </NavLink>
        </li>
        <li onClick={clickHandler}>
          <NavLink to={isLoggedIn ? "/" : "/main/login"}>
            {isLoggedIn ? "Logout" : "Login"}
          </NavLink>
        </li>
      </ul>
      <div className={styles.icon}>
        <FaFacebookSquare />
        <FaSquareInstagram />
        <FaTwitterSquare />
      </div>
    </div>
  );
}

export default Footer;
