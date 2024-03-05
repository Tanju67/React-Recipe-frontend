import React, { useContext, useState } from "react";
import styles from "./MealEquipment.module.css";
import { RequestApiContext } from "../../shared/context/APIRequest-context";
import EquipmentItem from "./EquipmentItem";

function MealEquipment() {
  const { mealEquipments } = useContext(RequestApiContext);
  const [viewValue, setViewValue] = useState("grid");
  return (
    <div className={styles.mealEquipment}>
      <div className={styles.container}>
        <h3>Equipments</h3>
        <div className={styles.inputsBox}>
          <div className={styles.view}>
            <span
              className={viewValue === "grid" ? styles.active : ""}
              onClick={() => setViewValue("grid")}
            >
              grid
            </span>
            <span
              className={viewValue === "list" ? styles.active : ""}
              onClick={() => setViewValue("list")}
            >
              list
            </span>
          </div>
        </div>
        <div
          className={`${styles.items} ${
            viewValue === "list" ? styles.list : ""
          }`}
        >
          {mealEquipments.map((item, i) => (
            <EquipmentItem
              list={viewValue === "list"}
              key={i}
              title={item.name}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MealEquipment;
