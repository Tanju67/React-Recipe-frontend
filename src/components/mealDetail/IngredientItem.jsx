import React from "react";
import styles from "./IngredientItem.module.css";

function IngredientItem({ image, amount, title, measure, serving, list }) {
  return (
    <div className={`${styles.item} ${list ? styles.list : ""}`}>
      <div className={styles.amount}>
        {measure === "metric" && (
          <span>
            {Number((amount.metric.value * serving).toFixed(2))}{" "}
            {amount.metric.unit}
          </span>
        )}

        {measure === "us" && (
          <span>
            {Number((amount.us.value * serving).toFixed(2))} {amount.us.unit}
          </span>
        )}
      </div>
      <div className={styles.img}>
        <img src={import.meta.env.VITE_INGREDIENT_URL + image} alt={title} />
      </div>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default IngredientItem;
