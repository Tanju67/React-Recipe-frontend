import React from "react";
import styles from "./SimilarMealItem.module.css";
import { Link } from "react-router-dom";

function SimilarMealItem({ id, title }) {
  return (
    <div className={styles.item}>
      <Link to={`/main/${id}`}>
        <span>{title}</span>
      </Link>
    </div>
  );
}

export default SimilarMealItem;
