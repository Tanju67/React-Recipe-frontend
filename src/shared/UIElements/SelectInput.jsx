import React, { useEffect, useState } from "react";
import styles from "./SelectInput.module.css";

function SelectInput({ label, selectList, className, icon, onInput, value }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    onInput(inputValue, label);
  }, [inputValue, label]);
  return (
    <div className={`${styles.select} ${className}`}>
      <label htmlFor={label}>
        {icon} {label}
      </label>
      <select
        onChange={(e) => setInputValue(e.target.value)}
        name={label}
        value={value}
      >
        {selectList.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
