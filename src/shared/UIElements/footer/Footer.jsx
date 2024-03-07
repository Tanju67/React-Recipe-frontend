import React from "react";
import styles from "./Footer.module.css";
import Logo from "../navbar/Logo";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
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
          <NavLink to="/myrecipe">My Recipe</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
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
