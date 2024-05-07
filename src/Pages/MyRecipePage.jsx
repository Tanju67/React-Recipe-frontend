import React, { useContext, useEffect, useState } from "react";
import MyRecipe from "../components/myRecipe/MyRecipe";
import { AuthContext } from "../shared/context/auth-context";

function MyRecipePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { allMyRecipes, setAllMyRecipes } = useContext(AuthContext);

  const getAllRecipes = async () => {
    const token = localStorage.getItem("token");
    try {
      setIsLoading(true);
      const res = await fetch(
        import.meta.env.VITE_BACKEND_URL + `/api/v1/recipe`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok)
        throw new Error("Something went wrong by fetching data from backend.");
      const data = await res.json();
      setAllMyRecipes(data.recipes);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);
  return <MyRecipe recipes={allMyRecipes} />;
}

export default MyRecipePage;
