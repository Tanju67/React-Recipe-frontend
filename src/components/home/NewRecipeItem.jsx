import React from "react";
import { TbHandClick } from "react-icons/tb";
import styles from "./NewRecipeItem.module.css";
import Card from "../../shared/UIElements/Card";

function NewRecipeItem({ image, id, title }) {
  return (
    <Card className={styles.item}>
      <div className={styles.imgBox}>
        <img src={image} alt={title} />
        <TbHandClick />
      </div>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
    </Card>
  );
}

export default NewRecipeItem;
