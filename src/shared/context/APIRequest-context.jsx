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
  mealInformation: [],
  mealSummary: [],
  mealIngredients: [],
  mealEquipments: [],
  mealInstructions: [],
  mealSmilar: [],
  setIsQuerySubmit: () => {},
  setError: () => {},
  setPage: () => {},
  setQuery: () => {},
  getRandomRecipe: () => {},
  getSearchRecipe: () => {},
  getIngredients: () => {},
  getMealInformations: () => {},
  getMealSummary: () => {},
  getEquipments: () => {},
  getInstructions: () => {},
  getSmilarRecipes: () => {},
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
  const [mealInformation, setMealInformation] = useState([]);
  const [mealSummary, setMealSummary] = useState([]);
  const [mealIngredients, setMealIngredients] = useState([]);
  const [mealEquipments, setMealEquipments] = useState([]);
  const [mealInstructions, setMealInstructions] = useState([]);
  const [mealSmilar, setMealSmilar] = useState([]);

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
        setSearchMealList(data.results);
        setTotalResult(data.totalResults);
      }
    );
  };

  const getMealInformations = async (id) => {
    httpRequest(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`,
      (data) => {
        setMealInformation(data);
      }
    );
  };

  const getMealSummary = async (id) => {
    httpRequest(
      `https://api.spoonacular.com/recipes/${id}/summary?apiKey=${
        import.meta.env.VITE_API_KEY
      }`,
      (data) => {
        setMealSummary(data);
      }
    );
  };

  const getIngredients = async (id) => {
    httpRequest(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${
        import.meta.env.VITE_API_KEY
      }`,
      (data) => {
        setMealIngredients(data.ingredients);
      }
    );
  };

  const getEquipments = async (id) => {
    httpRequest(
      `https://api.spoonacular.com/recipes/${id}/equipmentWidget.json?apiKey=${
        import.meta.env.VITE_API_KEY
      }`,
      (data) => {
        setMealEquipments(data.equipment);
      }
    );
  };

  const getInstructions = async (id) => {
    httpRequest(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${
        import.meta.env.VITE_API_KEY
      }`,
      (data) => {
        setMealInstructions(data[0].steps);
      }
    );
  };

  const getSmilarRecipes = async (id) => {
    httpRequest(
      `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${
        import.meta.env.VITE_API_KEY
      }`,
      (data) => {
        setMealSmilar(data);
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
        getIngredients,
        getMealInformations,
        getMealSummary,
        getEquipments,
        getInstructions,
        getSmilarRecipes,
        mealInformation,
        mealSummary,
        mealIngredients,
        mealEquipments,
        mealInstructions,
        mealSmilar,
      }}
    >
      {children}
    </RequestApiContext.Provider>
  );
};
