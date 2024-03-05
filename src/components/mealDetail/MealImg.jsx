import React, { useContext } from "react";
import vegetarian from "../../assets/vegetarian.svg";
import vegan from "../../assets/vegan.svg";
import glutenFree from "../../assets/glutenFree.svg";
import dairyFree from "../../assets/dairyFree.svg";
import time from "../../assets/time.svg";
import styles from "./MealImg.module.css";
import Card from "../../shared/UIElements/Card";
import { RequestApiContext } from "../../shared/context/APIRequest-context";

function MealImg() {
  const { mealInformation } = useContext(RequestApiContext);
  return (
    <div className={styles.mealImgPage}>
      <Card className={styles.imgBox}>
        <img src={mealInformation.image} alt={mealInformation.title} />
      </Card>
      <div className={styles.iconBox}>
        {mealInformation.vegetarian && (
          <div className={styles.icon}>
            <img src={vegetarian} alt="vegetarian" />
            <span>vegetarian</span>
          </div>
        )}
        {mealInformation.vegan && (
          <div className={styles.icon}>
            <img src={vegan} alt="vegan" />
            <span>vegan</span>
          </div>
        )}
        {mealInformation.dairyFree && (
          <div className={styles.icon}>
            <img src={dairyFree} alt="dairy free" />
            <span>dairy-free</span>
          </div>
        )}
        {mealInformation.glutenFree && (
          <div className={styles.icon}>
            <img src={glutenFree} alt="gluten free" />
            <span>gluten-free</span>
          </div>
        )}
        {mealInformation.readyInMinutes && (
          <div className={styles.icon}>
            <img src={time} alt="ready in minutes" />
            <span>ready in {mealInformation.readyInMinutes} min.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MealImg;
