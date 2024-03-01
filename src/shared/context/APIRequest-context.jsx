import { createContext, useState } from "react";

export const RequestApiContext = createContext({
  isLoading: false,
  error: null,
  hopePageMealList: [],
  getRandomRecipe: () => {},
});

export const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hopePageMealList, setHomePageMealList] = useState([]);

  const httpRequest = async (url, fn) => {
    try {
      setIsLoading(true);
      const res = await fetch(url);

      const data = await res.json();
      setIsLoading(false);
      fn(data);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const getRandomRecipe = async () => {
    httpRequest(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=10`,
      (data) => {
        setHomePageMealList(data.recipes);
      }
    );
  };
  return (
    <RequestApiContext.Provider
      value={{ isLoading, error, getRandomRecipe, hopePageMealList }}
    >
      {children}
    </RequestApiContext.Provider>
  );
};
