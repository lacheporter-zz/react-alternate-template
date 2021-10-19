import React from "react";
import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button type={props.type} className={styles.AppButton} onClick={props.onclick}>
      {props.text}
    </button>
  );
}
