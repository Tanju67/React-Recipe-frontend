import React, { useContext, useState } from "react";
import styles from "./MealIngredients.module.css";
import { RequestApiContext } from "../../shared/context/APIRequest-context";
import IngredientItem from "./IngredientItem";

function MealIngredients() {
  const { mealIngredients } = useContext(RequestApiContext);
  const [viewValue, setViewValue] = useState("grid");
  const [serving, setServing] = useState(1);
  const [measure, setMeasure] = useState("metric");
  return (
    <div className={styles.mealIngr}>
      <div className={styles.container}>
        <h3>Ingredients</h3>
        <div className={styles.inputsBox}>
          <div className={styles.view}>
            <span
              className={viewValue === "grid" ? styles.active : ""}
              onClick={() => setViewValue("grid")}
            >
              grid
            </span>
            <span
              className={viewValue === "list" ? styles.active : ""}
              onClick={() => setViewValue("list")}
            >
              list
            </span>
          </div>
          <div className={styles.serving}>
            <label htmlFor="serving">Servings:</label>
            <input
              id="serving"
              type="number"
              value={serving}
              onChange={(e) => setServing(e.target.value)}
            />
          </div>
          <div className={styles.measure}>
            <span
              className={measure === "metric" ? styles.active : ""}
              onClick={() => setMeasure("metric")}
            >
              metric
            </span>
            <span
              className={measure === "us" ? styles.active : ""}
              onClick={() => setMeasure("us")}
            >
              US
            </span>
          </div>
        </div>
        <div
          className={`${styles.items} ${
            viewValue === "list" ? styles.list : ""
          }`}
        >
          {mealIngredients.map((item, i) => (
            <IngredientItem
              list={viewValue === "list"}
              key={i}
              title={item.name}
              image={item.image}
              amount={item.amount}
              measure={measure}
              serving={serving}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MealIngredients;
