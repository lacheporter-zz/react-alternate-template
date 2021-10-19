import React, { Fragment } from "react";
import styles from "./LessonHeader.module.css";
import { ProgressBar } from "./Progress";

export default function Header(props) {
  return (
    <Fragment>
      <div className={styles.header}>
        <div>
          <h1 className={styles.headerTitle}>{props.title}</h1>
          <h2 className={styles.headerSubtitle}>{props.subtitle}</h2>
        </div>
        <ProgressBar />
      </div>
    </Fragment>
  );
}
