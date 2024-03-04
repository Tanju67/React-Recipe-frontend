import React, { useContext } from "react";
import { FcSearch } from "react-icons/fc";
import styles from "./SearchForm.module.css";
import Button from "../Button";
import { RequestApiContext } from "../../context/APIRequest-context";
import { FilterRequestContext } from "../../context/filterRequestContext";

function SearchForm() {
  const { getSearchRecipe, query, setQuery, page, setIsQuerySubmit } =
    useContext(RequestApiContext);
  const { filterState } = useContext(FilterRequestContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(query);
    getSearchRecipe(
      query,
      page,
      filterState.cuisine,
      filterState.diet,
      filterState.type
    );
    setIsQuerySubmit(true);
  };
  return (
    <form onSubmit={submitHandler} className={styles.searchForm}>
      <div className={styles.formControl}>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
            setIsQuerySubmit(false);
          }}
          value={query}
          type="text"
          placeholder="Search..."
        />
        <Button type={"submit"}>
          <FcSearch />
          <span> Search</span>
        </Button>
      </div>
    </form>
  );
}

export default SearchForm;
