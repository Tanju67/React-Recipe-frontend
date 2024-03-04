import { useContext, useEffect } from "react";
import Home from "../components/home/Home";
import { RequestApiContext } from "../shared/context/APIRequest-context";

function HomePage() {
  const { getRandomRecipe } = useContext(RequestApiContext);

  useEffect(() => {
    getRandomRecipe();
  }, []);
  return <Home />;
}

export default HomePage;
