import React from "react";
import styles from "./MainNavigation.module.css";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import NavMenu from "./NavMenu";

function MainNavigation() {
  return (
    <nav className={styles.mainNav}>
      <Logo />
      <SearchForm />
      <NavMenu />
    </nav>
  );
}

export default MainNavigation;
