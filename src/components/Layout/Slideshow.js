import React, { Fragment, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { AppContext } from "../../context/AppContext";

import SlideBlocks from "./SlideBlocks";
import Navigation from "./Navigation";
import QuizSlide from "./QuizSlide";
import Button from "../UI/Button";
import styles from "./Slideshow.module.css";

export default function Slideshow({ ...currentLesson }) {
  const context = useContext(AppContext);
  const slideRef = useRef();

  //set progress, render arrows conditionally, navigate from course list choice
  useEffect(() => {
    context.toggleProgress();
    slideRef.current.goTo(parseInt(context.currentSlide, 10));
  }, [context, context.currentSlide, context.toggleProgress]);

  //React slideshow package settings
  const slideProperties = {
    indicators: false,
    arrows: false,
    transitionDuration: 200,
    canSwipe: false,
    autoplay: false,
    defaultIndex: 0,
    onChange: (previous, next) => {
      context.onSlideChange(previous, next);
    },
  };
  //go to next slide
  const backHandler = () => {
    slideRef.current.goBack();
  };
  //go to prev slide
  const nextHandler = () => {
    slideRef.current.goNext();
  };
  //exit lesson
  const exitHandler = (currentLesson) => {
    context.handleChange(currentLesson.lesson - 1);
  };

  return (
    <Fragment>
      <Slide className={styles.slide} ref={slideRef} {...slideProperties}>
        {currentLesson.data.map((block, index) => (
          <SlideBlocks key={index} {...block} num={currentLesson.lesson} />
        ))}
        {currentLesson.quiz ? (
          <QuizSlide lesson={currentLesson.lesson} title="Checkpoint Questions" data={currentLesson.quiz} />
        ) : (
          <div className={`slide-title ${styles.slideTitle}`}>
            <h3 className={styles.exitTitle}>Well done, you may now exit the lesson.</h3>
            <Link to="/" className={styles.exitLink} onClick={exitHandler}>
              Exit
            </Link>
          </div>
        )}
      </Slide>
      <div className={styles.slideBtns}>
        {context.currentSlide === 0 ? <null /> : <Button type="button" onclick={backHandler} text="Back" />}
        {context.currentSlide === context.total ? <null /> : <Button type="button" onclick={nextHandler} text="Next" />}
      </div>
      <Navigation />
    </Fragment>
  );
}
