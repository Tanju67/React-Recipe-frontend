import { createContext, useState } from "react";

export const RequestApiContext = createContext({
  isLoading: false,
  error: null,
  hopePageMealList: [],
  query: "",
  searchMealList: [],
  totalResult: 0,
  page: 1,
  isQuerySubmit: false,
  setIsQuerySubmit: () => {},
  setError: () => {},
  setPage: () => {},
  setQuery: () => {},
  getRandomRecipe: () => {},
  getSearchRecipe: () => {},
});

export const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hopePageMealList, setHomePageMealList] = useState([]);
  const [searchMealList, setSearchMealList] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isQuerySubmit, setIsQuerySubmit] = useState(false);

  const httpRequest = async (url, fn) => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Something went wrong by fetching data!");
      }
      const data = await res.json();
      setIsLoading(false);
      fn(data);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const getRandomRecipe = async () => {
    httpRequest(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=16`,
      (data) => {
        setHomePageMealList(data.recipes);
      }
    );
  };

  const getSearchRecipe = async (
    query,
    page = 1,
    cuisine = "",
    diet = "",
    type = ""
  ) => {
    httpRequest(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&query=${query}&number=12&offset=${
        (page - 1) * 12
      }&cuisine=${cuisine}&diet=${diet}&type=${type}&addRecipeInformation=true`,
      (data) => {
        console.log(data);
        setSearchMealList(data.results);
        setTotalResult(data.totalResults);
      }
    );
  };
  return (
    <RequestApiContext.Provider
      value={{
        isLoading,
        error,
        getRandomRecipe,
        hopePageMealList,
        getSearchRecipe,
        query,
        setQuery,
        searchMealList,
        totalResult,
        page,
        setPage,
        setError,
        isQuerySubmit,
        setIsQuerySubmit,
      }}
    >
      {children}
    </RequestApiContext.Provider>
  );
};
