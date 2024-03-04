import React from "react";
import vegetarian from "../../assets/vegetarian.svg";
import vegan from "../../assets/vegan.svg";
import glutenFree from "../../assets/glutenFree.svg";
import dairyFree from "../../assets/dairyFree.svg";
import time from "../../assets/time.svg";
import styles from "./MealImg.module.css";
import Card from "../../shared/UIElements/Card";

function MealImg({ singleMeal }) {
  return (
    <div className={styles.mealImgPage}>
      <Card className={styles.imgBox}>
        <img src={singleMeal.image} alt={singleMeal.title} />
      </Card>
      <div className={styles.iconBox}>
        {singleMeal.vegetarian && (
          <div className={styles.icon}>
            <img src={vegetarian} alt="vegetarian" />
            <span>vegetarian</span>
          </div>
        )}
        {singleMeal.vegan && (
          <div className={styles.icon}>
            <img src={vegan} alt="vegan" />
            <span>vegan</span>
          </div>
        )}
        {singleMeal.dairyFree && (
          <div className={styles.icon}>
            <img src={dairyFree} alt="dairy free" />
            <span>dairy-free</span>
          </div>
        )}
        {singleMeal.glutenFree && (
          <div className={styles.icon}>
            <img src={glutenFree} alt="gluten free" />
            <span>gluten-free</span>
          </div>
        )}
        {singleMeal.readyInMinutes && (
          <div className={styles.icon}>
            <img src={time} alt="ready in minutes" />
            <span>ready in {singleMeal.readyInMinutes} min.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MealImg;
