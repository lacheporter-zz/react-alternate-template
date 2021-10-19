import { Lesson1Data, Lesson1Quiz } from "./Lesson1";
import { Lesson2Data, Lesson2Quiz } from "./Lesson2";
import { Lesson3Data, Lesson3Quiz } from "./Lesson3";
import { Lesson4Data, Lesson4Quiz } from "./Lesson4";
import { Lesson5Data, Lesson5Quiz } from "./Lesson5";
import { Lesson6Data, Lesson6Quiz } from "./Lesson6";
import { Lesson7Data, Lesson7Quiz } from "./Lesson7";

const lessons = {
  Lesson1Data,
  Lesson2Data,
  Lesson3Data,
  Lesson4Data,
  Lesson5Data,
  Lesson6Data,
  Lesson7Data,
};
const quizzes = {
  Lesson1Quiz,
  Lesson2Quiz,
  Lesson3Quiz,
  Lesson4Quiz,
  Lesson5Quiz,
  Lesson6Quiz,
  Lesson7Quiz,
};
const lessonList = [
  {
    title: `Lesson Title`,
    subtitle: "Lesson #1",
  },
  {
    title: `Lesson Title`,
    subtitle: "Lesson #2",
  },
  {
    title: `Lesson Title`,
    subtitle: "Lesson #3",
  },
  {
    title: `Lesson Title`,
    subtitle: "Lesson #4",
  },
  {
    title: `Lesson Title`,
    subtitle: "Lesson #5",
  },
  {
    title: "Lesson Title",
    subtitle: "Lesson #6",
  },
  {
    title: "Review",
    subtitle: "Lesson 7",
  },
];
export { quizzes, lessons, lessonList };
