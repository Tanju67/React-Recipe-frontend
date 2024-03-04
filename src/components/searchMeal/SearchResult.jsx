import React, { useContext } from "react";
import styles from "./SearchResult.module.css";
import NewRecipes from "../../shared/UIElements/recipe/NewRecipes";
import { RequestApiContext } from "../../shared/context/APIRequest-context";

function SearchResult() {
  const {
    searchMealList,
    totalResult,
    page,
    setPage,
    error,
    isLoading,
    query,
    isQuerySubmit,
  } = useContext(RequestApiContext);
  const totalPage = Math.ceil(totalResult / 12);

  const nextPage = () => {
    if (page >= totalPage) return;
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };
  return (
    <div className={styles.searchResult}>
      <div className={styles.pagination}>
        <p>
          <span>Result:{totalResult}</span>
          <span>
            <strong onClick={prevPage}>{"<"}</strong>
            <span className={styles.pageIndex}>Page {page}</span>
            <strong onClick={nextPage}>{">"}</strong>
          </span>
        </p>
      </div>
      {isLoading && <p className="loader">Loading...</p>}
      {error && !isLoading && <p className="error">💥{error}</p>}
      {!error && !isLoading && <NewRecipes mealList={searchMealList} />}
      {isQuerySubmit && searchMealList.length === 0 && (
        <p style={{ textAlign: "center", fontSize: "1.6rem" }}>
          No meal found for "{query}"
        </p>
      )}
    </div>
  );
}

export default SearchResult;
