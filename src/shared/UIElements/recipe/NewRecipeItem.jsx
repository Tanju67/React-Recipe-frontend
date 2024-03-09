import React from "react";
import { TbHandClick } from "react-icons/tb";
import styles from "./NewRecipeItem.module.css";
import Card from "../Card";
import { Link } from "react-router-dom";

function NewRecipeItem({ image, id, title }) {
  return (
    <Card className={styles.item}>
      <Link to={`/main/detail/${id}`}>
        <div className={styles.imgBox}>
          <img src={image} alt={title} />
          <TbHandClick />
        </div>
        <div className={styles.title}>
          <h4>{title}</h4>
        </div>
      </Link>
    </Card>
  );
}

export default NewRecipeItem;
