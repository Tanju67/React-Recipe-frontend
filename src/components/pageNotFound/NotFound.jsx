import React from "react";
import styles from "./NotFound.module.css";
import MainNavigation from "../../shared/UIElements/navbar/MainNavigation";
import { TbError404 } from "react-icons/tb";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <MainNavigation />
      <div className={styles.content}>
        <TbError404 />
        <p>Page not found!</p>
      </div>
    </div>
  );
}

export default NotFound;
