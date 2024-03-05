import React, { useContext, useEffect } from "react";
import MealDetail from "../components/mealDetail/MealDetail";
import { useParams } from "react-router-dom";
import { RequestApiContext } from "../shared/context/APIRequest-context";

function MealDetailPage() {
  const mealId = useParams().id;
  const { getIngredients, getMealInformations, getMealSummary, getEquipments } =
    useContext(RequestApiContext);
  useEffect(() => {
    getIngredients(mealId);
    getMealSummary(mealId);
    getMealInformations(mealId);
    getEquipments(mealId);
  }, []);

  return <MealDetail />;
}

export default MealDetailPage;
