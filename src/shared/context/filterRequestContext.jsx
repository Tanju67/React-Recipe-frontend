import { createContext, useReducer } from "react";

export const FilterRequestContext = createContext({
  filterState: {},
  inputHandler: () => {},
});

const initialState = {
  cuisine: "",
  diet: "",
  type: "",
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "CUISINE":
      return { ...state, cuisine: action.payload };
    case "DIET":
      return { ...state, diet: action.payload };
    case "TYPE":
      return { ...state, type: action.payload };
    case "RESET":
      return initialState;
    default:
      break;
  }
};

export const FilterProvider = ({ children }) => {
  const [filterState, dispatch] = useReducer(filterReducer, initialState);

  const inputHandler = (input, label) => {
    if (label === "cuisine") {
      dispatch({ type: "CUISINE", payload: input });
    }

    if (label === "diet") {
      dispatch({ type: "DIET", payload: input });
    }

    if (label === "type") {
      dispatch({ type: "TYPE", payload: input });
    }
  };
  return (
    <FilterRequestContext.Provider
      value={{
        filterState,
        inputHandler,
      }}
    >
      {children}
    </FilterRequestContext.Provider>
  );
};
