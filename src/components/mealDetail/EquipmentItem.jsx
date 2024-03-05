import React from "react";
import styles from "./EquipmentItem.module.css";

function EquipmentItem({ list, image, title }) {
  return (
    <div className={`${styles.item} ${list ? styles.list : ""}`}>
      <div className={styles.img}>
        <img src={import.meta.env.VITE_EQUIPMENT_URL + image} alt={title} />
      </div>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default EquipmentItem;
