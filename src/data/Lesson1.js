import placeholder from "../assets/placeholder.svg";
const imageSize = "100%";

const Lesson1Data = [
  {
    title: "Slide Title",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        tag: "lesson",
        text: "Slide text information for lesson 1.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Providing tags in the object model will bold those words.",
      },
    ],
    image: placeholder,
    width: imageSize,
  },
  {
    title: "Slide Title",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "This is some slide text content.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        tag: "https://url.com/",
        text: "For the most up to date information visit: https://url.com/",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Slide text information.",
      },
    ],
    image: placeholder,
    width: imageSize,
  },
  {
    title: "Slide Title",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "This is a paragraph.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "This is a paragraph.",
      },
    ],
    image: placeholder,
    width: imageSize,
  },

  {
    title: "Slide List",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "This is a slide made up of a paragraph and list.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "List heading",
        items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Some text information.",
      },
    ],
    image: placeholder,
    width: "100%",
  },
  {
    title: "Slide Terms",
    layout: "wide",
    content: [
      {
        type: "terms",
        terms: [
          {
            name: "Term 1",
            definition: "This is a definition 1.",
          },
          {
            name: "Term 2",
            definition: "This is a definition 2.",
          },
          {
            name: "Term 3",
            definition: "This is a definition 3.",
          },
          {
            name: "Term 4",
            definition: "This is a definition 4.",
          },
        ],
      },
    ],
  },

  {
    title: "Checkpoint",
    content: [
      {
        type: "paragraph",
        text: "Proceed to the check on learning questions and assess your knowledge of previously covered information. ",
      },
    ],
    image: placeholder,
    width: "75%",
  },
];
//QUIZ//
const Lesson1Quiz = {
  questions: [
    {
      question: "What color is an apple?",
      answers: ["Blue", "Red", "Purple", "Rainbow"],
      questionType: "text",
      correctAnswer: "2",
      answerSelectionType: "single",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    },

    {
      question: "The answer to this question is true.",
      questionType: "text",
      answers: ["True", "False"],
      correctAnswer: "1",
      answerSelectionType: "single",
    },
  ],
};
export { Lesson1Quiz, Lesson1Data };
