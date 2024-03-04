import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import styles from "./SearchMeal.module.css";
import FilterSideMenu from "./FilterSideMenu";
import SearchResult from "./SearchResult";

function SearchMeal() {
  const [filterIsVisible, setFilterIsVisible] = useState(false);
  return (
    <div className={styles.searchMeal}>
      {!filterIsVisible && (
        <IoFilter
          className={styles.svg}
          onClick={() => setFilterIsVisible(true)}
        />
      )}
      <FilterSideMenu
        filterIsVisible={filterIsVisible}
        setFilterIsVisible={setFilterIsVisible}
      />
      <SearchResult />
    </div>
  );
}

export default SearchMeal;
