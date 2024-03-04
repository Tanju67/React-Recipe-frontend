import React, { useContext, useEffect, useReducer } from "react";
import { FaKitchenSet } from "react-icons/fa6";
import { LuVegan } from "react-icons/lu";
import { GiMeal } from "react-icons/gi";
import styles from "./FilterSideMenu.module.css";
import SelectInput from "../../shared/UIElements/SelectInput";
import { cuisine } from "../../data/data";
import { diet } from "../../data/data";
import { types } from "../../data/data";
import Button from "../../shared/UIElements/Button";
import { RequestApiContext } from "../../shared/context/APIRequest-context";
import { FilterRequestContext } from "../../shared/context/filterRequestContext";

function FilterSideMenu({ filterIsVisible, setFilterIsVisible }) {
  const { getSearchRecipe, query, page } = useContext(RequestApiContext);
  const { filterState, inputHandler } = useContext(FilterRequestContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (query === "") return;
    getSearchRecipe(
      query,
      page,
      filterState.cuisine,
      filterState.diet,
      filterState.type
    );
    setFilterIsVisible(false);
  };
  useEffect(() => {
    console.log(filterState);
    if (query === "") return;
    getSearchRecipe(
      query,
      page,
      filterState.cuisine,
      filterState.diet,
      filterState.type
    );
  }, [page]);
  return (
    <div
      className={`${styles.sideMenu} ${filterIsVisible ? styles.visible : ""}`}
    >
      <span onClick={() => setFilterIsVisible(false)} className={styles.clsBtn}>
        &times;
      </span>
      <h3>Filter Your Search</h3>
      <form onSubmit={submitHandler} className={styles.filterForm}>
        <SelectInput
          onInput={inputHandler}
          value={filterState.cuisine}
          label="cuisine"
          selectList={cuisine}
          icon={<FaKitchenSet />}
        />
        <SelectInput
          onInput={inputHandler}
          value={filterState.diet}
          label="diet"
          selectList={diet}
          icon={<LuVegan />}
        />
        <SelectInput
          onInput={inputHandler}
          value={filterState.type}
          label="type"
          selectList={types}
          icon={<GiMeal />}
        />
        <Button type={"submit"}>Filter</Button>
      </form>
    </div>
  );
}

export default FilterSideMenu;
