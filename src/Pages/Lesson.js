import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import LessonHeader from "../components/Layout/LessonHeader";
import Search from "../components/Layout/Search";
import Slideshow from "../components/Layout/Slideshow";
import OptionPanel from "../components/Layout/OptionPanel";
import styles from "./Lesson.module.css";
import Modal from "../components/Layout/Modal";
import { lessonList } from "../data/LessonList";
import { lessons, quizzes } from "../data/LessonList";
import logo from "../assets/logo.svg";

export default function Lesson({ lesson }) {
  //state management
  const context = useContext(AppContext);
  const [showSearch, setShowSearch] = useState(false);

  //toggle search component
  const showSearchHandler = () => {
    setShowSearch(!showSearch);
  };

  //set lesson# to local storage
  useEffect(() => {
    context.handleIndex();
    localStorage.setItem("lesson", JSON.stringify(lesson));
  }, [lesson]);

  //pass lesson and data to slideshow properties
  const currentLesson = {
    lesson: lesson,
    data: lessons["Lesson" + lesson + "Data"],
    quiz: quizzes["Lesson" + lesson + "Quiz"],
  };

  //set lesson and quiz titles based on lesson number
  const lessonTitle = lessonList[lesson - 1].title;
  const lessonSubtitle = lessonList[lesson - 1].subtitle;

  //render
  return (
    <div className={styles.lessonContainer}>
      <Modal />
      <LessonHeader title={lessonTitle} source={logo} subtitle={lessonSubtitle} />
      <div className={styles.lessonSection}>
        <OptionPanel showSearchHandler={showSearchHandler} />
        <Search
          data={currentLesson.data}
          showSearch={showSearch}
          show={() => setShowSearch(true)}
          hide={() => setShowSearch(false)}
        />
        <Slideshow {...currentLesson} />
      </div>
    </div>
  );
}
