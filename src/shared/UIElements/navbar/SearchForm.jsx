import React, { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import styles from "./SearchForm.module.css";
import Button from "../Button";
import { RequestApiContext } from "../../context/APIRequest-context";

function SearchForm() {
  const { getSearchRecipe } = useContext(RequestApiContext);
  const [query, setQuery] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(query);
    getSearchRecipe(query, 2, "american");
  };
  return (
    <form onSubmit={submitHandler} className={styles.searchForm}>
      <div className={styles.formControl}>
        <input
          onChange={(e) => setQuery(e.target.value)}
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
