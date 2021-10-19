import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Quiz from "react-quiz-component";
import QA from "../../assets/Q&A.svg";
import styles from "./SlideBlocks.module.css";

export default function QuizSlide({ lesson, title, data }) {
  const context = useContext(AppContext);

  const finishQuiz = () => {
    context.handleChange(lesson - 1);
  };
  const onCompleteAction = () => {
    context.onQuizCompletion();
  };
  const resultPage = () => {
    return (
      <>
        <h3 className={styles.exitTitle}>Well done, you may now exit the lesson.</h3>
        <Link to="/" className={styles.exitLink} onClick={finishQuiz}>
          Exit Lesson
        </Link>
      </>
    );
  };

  return (
    <div className={styles.standardGrid}>
      <span className={`slide-title ${styles.title}`}>{title}</span>
      <div className={styles.content}>
        <Quiz
          quiz={data}
          continueTillCorrect={true}
          showDefaultResult={false}
          onComplete={onCompleteAction}
          customResultPage={resultPage}
        />
      </div>
      {data.questions && <img className={styles.picture} src={QA} alt="checkpoint" />}
    </div>
  );
}
