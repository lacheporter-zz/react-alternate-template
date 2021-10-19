import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Progress.module.css";

const ProgressBar = () => {
  const context = useContext(AppContext);
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBarMeter}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${context.progress}%` }}
          aria-valuenow={parseInt(`${context.progress}`, 10)}
        />
      </div>
      <div className={styles.progressBarCounter}>{Math.round(context.progress, 10) + "%"}</div>
    </div>
  );
};

const ProgressCircle = ({ percent }) => {
  return (
    <div className={styles.progressCircleContainer}>
      <CircularProgressbar
        className={styles.progressCircle}
        value={percent}
        text={`${percent}%`}
        styles={buildStyles({
          textColor: "white",
          pathColor: "#51cf2e",
          trailColor: "white",
        })}
      />
      <div className={styles.progressCircleHeading}>
        <h2>Course Progress</h2>
        <p>At the end of each lesson your progress will be recorded.</p>
      </div>
    </div>
  );
};

export { ProgressBar, ProgressCircle };
