import React, { useContext, useState } from "react";
import { GiCook } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import styles from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import SmallScreen from "./SmallScreen";

function NavMenu() {
  const { isLoggedIn, onLogout } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisisble] = useState(false);

  const clickHandler = () => {
    if (!isLoggedIn) return;
    onLogout();
  };

  const menuHandler = () => {
    setIsMenuVisisble((prev) => !prev);
  };
  return (
    <>
      <div className={styles.menuIcon} onClick={menuHandler}>
        <MdMenu />
      </div>
      {isMenuVisible && (
        <SmallScreen
          isLoggedIn={isLoggedIn}
          clickHandler={clickHandler}
          onClose={menuHandler}
        />
      )}
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
    </>
  );
}

export default NavMenu;
