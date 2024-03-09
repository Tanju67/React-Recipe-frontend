import React, { useContext, useState } from "react";
import styles from "./MealDetail.module.css";

import MealImg from "./MealImg";
import MealSummary from "./MealSummary";
import MealIngredients from "./MealIngredients";
import { RequestApiContext } from "../../shared/context/APIRequest-context";
import MealEquipment from "./MealEquipment";
import MealInstructions from "./MealInstructions";
import MealSimilar from "./MealSimilar";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHeartCircleMinus } from "react-icons/fa6";
import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router-dom";
import { useHttpRequest } from "../../shared/hooks/fetchdata-hook";

function MealDetail() {
  const { mealInformation } = useContext(RequestApiContext);
  const { sendAuthRequest, allMyRecipes } = useContext(AuthContext);
  const { sendRequest } = useHttpRequest();

  const alreadyRecipeList =
    allMyRecipes.filter((item) => +item.recipeId === mealInformation.id)
      .length > 0;

  console.log(alreadyRecipeList, allMyRecipes);
  const navigate = useNavigate();
  console.log(mealInformation);
  const clickHandler = async () => {
    if (!alreadyRecipeList) {
      const token = localStorage.getItem("token");
      sendAuthRequest(
        "recipe",
        {
          title: mealInformation.title,
          image: mealInformation.image,
          recipeId: mealInformation.id,
        },
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        (data) => {
          console.log(data);
          navigate("/main/myrecipe");
        }
      );
    } else {
      const token = localStorage.getItem("token");
      sendRequest(
        `http://localhost:5000/api/v1/recipe/${mealInformation.id}`,
        "DELETE",
        undefined,
        undefined,
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        () => {
          navigate("/main/myrecipe");
        }
      );
    }
  };
  return (
    <div className={styles.mealDetail}>
      {mealInformation?.title?.length > 0 && (
        <>
          <div className={styles.icon}>
            <div onClick={clickHandler}>
              {!alreadyRecipeList && <FaHeartCirclePlus />}
              {alreadyRecipeList && <FaHeartCircleMinus />}
            </div>
            <p>
              {" "}
              {!alreadyRecipeList && "Add your list"}
              {alreadyRecipeList && "remove from your list"}
            </p>
          </div>

          <div className={styles.bg}></div>
          <h2>{mealInformation.title}</h2>
          <MealImg />
          <MealSummary />
          <MealIngredients />
          <MealEquipment />
          <MealInstructions />
          <MealSimilar />
        </>
      )}
    </div>
  );
}

export default MealDetail;
