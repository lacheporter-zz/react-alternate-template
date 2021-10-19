import React, { createContext, useState } from "react";
import { lessonList } from "../data/index";

const AppContext = createContext();

function AppProvider(props) {
  const [checkedState, setCheckedState] = useState(new Array(lessonList.length).fill(false));
  const [index, setIndex] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [total, setTotal] = useState();
  const [quizComplete, setQuizComplete] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [progress, setProgress] = useState();
  const [courseProgress, setCourseProgress] = useState(0);

  //Generate an index of slides
  function handleIndex() {
    const slideTitles = [...document.querySelectorAll(".slide-title")].slice(1, -1);
    const index = slideTitles.map((title, i) => `${title.innerText}`);
    setIndex(index);
  }
  //check completion status
  function handleChange(position) {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    setCheckedState(updatedCheckedState);
    localStorage.setItem("checked", JSON.stringify(updatedCheckedState));
  }
  //Updates slide index on slide change
  function onSlideChange(previous, next) {
    let currentSlide = next;
    setCurrentSlide(currentSlide);
  }
  //Recalculates progress bar percentage on every slide change
  function toggleProgress() {
    setTotal(document.querySelectorAll(".slide-title").length - 3);
    let progressBar = (currentSlide / total) * 100;
    setProgress(progressBar);
  }
  //Sets quiz state to complete
  function onQuizCompletion(obj) {
    setQuizComplete(true);
  }
  //toggle course side nav
  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  //Export everything
  const values = {
    LessonList: lessonList,
    checkedState: checkedState,
    index: index,
    currentSlide: currentSlide,
    progress: progress,
    total: total,
    quizComplete: quizComplete,
    showSideNav: showSideNav,
    courseProgress: courseProgress,
    setCourseProgress: setCourseProgress,
    handleIndex: handleIndex,
    handleChange: handleChange,
    setCurrentSlide: setCurrentSlide,
    onSlideChange: onSlideChange,
    onQuizCompletion: onQuizCompletion,
    toggleProgress: toggleProgress,
    toggleSideNav: toggleSideNav,
    setShowSideNav: setShowSideNav,
    setCheckedState: setCheckedState,
  };

  return <AppContext.Provider value={values}>{props.children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
