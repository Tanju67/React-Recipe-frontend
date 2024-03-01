import { useContext, useEffect } from "react";
import Home from "../components/home/Home";
import { RequestApiContext } from "../shared/context/APIRequest-context";

function HomePage() {
  const { getRandomRecipe, hopePageMealList } = useContext(RequestApiContext);
  console.log(hopePageMealList);
  useEffect(() => {
    getRandomRecipe();
  }, []);
  return <Home mealList={hopePageMealList} />;
}

export default HomePage;
