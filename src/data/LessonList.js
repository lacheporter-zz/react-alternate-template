import { Lesson1Data, Lesson1Quiz } from "./Lesson1";
import { Lesson2Data, Lesson2Quiz } from "./Lesson2";
import { Lesson3Data, Lesson3Quiz } from "./Lesson3";
import { Lesson4Data, Lesson4Quiz } from "./Lesson4";

const lessons = {
  Lesson1Data,
  Lesson2Data,
  Lesson3Data,
  Lesson4Data,
};
const quizzes = {
  Lesson1Quiz,
  Lesson2Quiz,
  Lesson3Quiz,
  Lesson4Quiz,
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
];
export { quizzes, lessons, lessonList };
