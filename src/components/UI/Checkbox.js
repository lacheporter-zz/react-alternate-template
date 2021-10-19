import React from "react";
import styles from "./Checkbox.module.css";
export default function Checkbox(props) {
  return (
    <div className={styles.checkboxContainer}>
      <input
        key={props.i}
        className={styles.checkbox}
        id={`checkbox${props.index}`}
        type="checkbox"
        onChange={() => {}}
        checked={props.checked}
      />
      {props.label && (
        <label htmlFor={props.htmlFor} style={{ marginLeft: "10px" }}>
          {props.checkedState ? "Completed" : "Incomplete"}
        </label>
      )}
    </div>
  );
}
