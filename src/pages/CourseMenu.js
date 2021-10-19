import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ProgressCircle } from "../components/Layout/Progress";
import styles from "./CourseMenu.module.css";
import logo from "../logo.png";
import Checkbox from "../components/UI/Checkbox";

export default function CourseMenu(props) {
  const context = useContext(AppContext);
  const percentage = context.courseProgress;

  useEffect(() => {
    //on load get local storage values
    let initialValue = localStorage.getItem("checked", JSON.stringify(context.checkedState));
    if (initialValue === null) {
      return null;
    } else {
      //parse the values
      const newValue = JSON.parse(initialValue);
      //filter the values
      const count = newValue.filter((value) => value).length;
      const total = Math.round((count * 100) / 7);
      context.setCourseProgress(total);
      context.setCheckedState(newValue);
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.course}>
          <div className={styles.courseHeading}>
            <img src={logo} alt="logo" className={styles.menuLogo} />
            {/* <img src={gfebs} alt="gfebs logo" className={styles.menuLogo} /> */}
            <h1 className={styles.courseTitle}>Welcome to Demo Course </h1>
            <h2 className={styles.courseSubtitle}>Course Subtitle</h2>
          </div>
        </div>
        <div className={styles.progress}>
          <ProgressCircle percent={percentage} />
        </div>
        <div className={styles.lessons}>
          <div className={styles.lessonsList}>
            {context.LessonList.map((module, index) => (
              <div key={index} className={styles.card}>
                <Link
                  to={`/Lesson/${index + 1}`}
                  onClick={() => {
                    props.setLesson(index + 1);
                    context.setCurrentSlide(0);
                  }}
                  className={styles.cardLink}
                >
                  <h3 className={styles.cardSubtitle}>{module.subtitle}</h3>
                  <h2 className={styles.cardTitle}>{module.title}</h2>
                </Link>
                <Checkbox
                  index={index}
                  label={true}
                  id={`checkbox${index}`}
                  checked={context.checkedState[index]}
                  htmlFor={`checkbox${index}`}
                  checkedState={context.checkedState[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
