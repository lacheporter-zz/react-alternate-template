import checkpoint from "../assets/checkpoint.svg";
import objectives from "../assets/objectives.svg";
import ReportsUses from "../assets/ReportsUses.svg";
import Reports2 from "../assets/Reports2.png";
import Reports3 from "../assets/Reports3.png";
import Reports4 from "../assets/Reports4.png";
import hrPayroll from "../assets/hr_payroll.svg";

const imageSize = "100%";

const Lesson6Data = [
  {
    index: 0,
    title: "Welcome to Reports",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: " Welcome to the Reports module. In this module we will discuss reports available in GFEBS ECC and BI. Using these reports will enable HR maintainers to research employee information, generate actions, and search uniquely identifiable data.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Upon completion of this module you should have a greater understanding of how to use the GFEBS HR module to manage and extract data for purpose of personnel management.",
      },
    ],
    image: hrPayroll,
    width: imageSize,
  },
  {
    index: 1,
    title: "Objectives",
    layout: "standard",
    content: [
      {
        type: "list",
        title: "At the end of this module, you should be able to:",
        items: [
          "Recognize how to navigate to the reports in GFEBS",
          "Identify master data reports",
          "Define the uses of the master data reports",
          "Identify GFEBS user roles required for accessing the reports",
        ],
      },
    ],
    image: objectives,
    width: imageSize,
  },
  {
    index: 2,
    title: "Searching and Displaying Employee Records (1 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Two reports are available to search and display employee records in GFEBS HR:",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "The HR Master Data Report in ECC. This real-time report contains standard SAP report functionality, the standard GFEBS HR fields and infotypes, as well as the fields on the custom infotypes, such as LOA, and UIC.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Transaction Code: ZSCM_PAR1 – HR Master Data Report",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "Enter the following fields for best results: ",
        items: ["Personnel Area", "Cost Center", "UIC", "Employee Group", "Employee Subgroup", "Fund Functional Area"],
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Click Execute. This report was sourced from the training client. In GFEBS production, normally all of the default fields are populated with the associated data.",
      },
    ],
    // image: Reports1,
    image: Reports2,
    height: "300px",
    width: imageSize,
  },
  {
    index: 3,
    title: " Searching and Displaying Employee Records (2 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        tag: "Payroll Audit Reporter",
        text: "This report provides you with the ability to search for employee records with missing line of accounting (LOA) data. You may also validate other parameters associated with Employee Master Data by executing this Business Intelligence (BI) report. This report can be executed by users with the BI roles Payroll Audit Reporter and Labor Reporter. Employee Social Security Number (SSN) will be displayed on the report by the Payroll Audit Reporter, but, will be masked from display for the Labor Reporter.",
      },
      {
        type: "space",
        height: "1em",
      },

      {
        type: "paragraph",
        text: "The BI HR Master Data Report also contains both the standard and custom fields. BI is not real-time (data is refreshed at least every 24 hours); however, users will use BI for large volume reports to avoid impacting the performance of ECC.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        tag: "Key Date",
        text: "Only the Key Date field is required to execute this HR Master Data report. ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "This report was sourced from the training client. In GFEBS production, normally all of the default fields are populated with the associated data.",
      },
    ],
    image: Reports3,
    height: "140px",
    width: imageSize,
  },
  {
    index: 3,
    title: "Searching and Displaying Employee Records (3 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        tag: "HR Employee Maintainer",
        text: "Both reports include PII data elements in the GFEBS HR record as well as other data that is not PII related. The HR Employee Maintainer role is able to view PII data and the Payroll Corrections and HR LOA Processor is not able to view any PII data in GFEBS HR. The role with no PII authorization is able to select and display all fields that are not PII related. ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "There are other standard reports available in ECC for these two roles to display employee master data, but, they do not have the custom infotype fields. There are also other pay and labor reports in BI that display employee master data in addition to the pay and labor transactional data. ",
      },
    ],
    image: Reports4,
    height: "320px",
    width: imageSize,
  },
  {
    index: 4,
    title: "Uses for HR Reports",
    layout: "standard",
    content: [
      {
        type: "list",
        title: "",
        items: [
          "Enable HR Employee Maintainer to be able to look up employee SSN when needed to generate actions in the personnel and payroll feeder systems.",
          "Display new employees who have been added but are missing LOA.",
          "Display employees LOA to verify that data is accurate.",
          "Search for employees by name, UIC, cost center or other parameters available to find the personnel number required for GFEBS HR LOA updates or plant maintenance work center assignment.",
        ],
      },
    ],
    image: ReportsUses,
    height: "300px",
    width: imageSize,
  },

  {
    index: 9,
    title: "Lesson Checkpoint",
    content: [
      {
        type: "paragraph",
        text: "Proceed to the check on learning questions and assess your knowledge of previously covered information. ",
      },
    ],
    image: checkpoint,
    width: "75%",
  },
];
const Lesson6Quiz = {
  questions: [
    {
      question:
        "What is a key distinguishing feature between reports HR Master Data Report in ECC and BI HR Master Data Report?",
      answers: ["time of day access to reporting modules", "formatting", "equally viable", "real-time reporting"],
      questionType: "text",
      correctAnswer: "4",
      answerSelectionType: "single",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    },
    {
      question: "What is the transaction code to access the BI HR Master Data Report in GFEBS?",
      answers: ["ZSCM_PAR1", "BI reports do not require a transaction code", "PA30", "PA40"],
      questionType: "text",
      correctAnswer: "2",
      answerSelectionType: "single",
    },
    {
      question: "What PII is masked on the BI HR Master Data Report for the Labor Reporter role?",
      answers: ["Social Security Number", "Personnel Number", "First and Last Name", "Personnel Area"],
      questionType: "text",
      correctAnswer: "1",
      answerSelectionType: "single",
    },
    {
      question: "What are some custom infotypes that the HR Master Data Report in ECC will display?",
      answers: ["LOA", "UIC", "All of the above", "None of the above"],
      questionType: "text",
      correctAnswer: "3",
      answerSelectionType: "single",
    },
    {
      question: "Only the Key Date field is required to execute the BI HR Master Data Report. ",
      questionType: "text",
      answers: ["True", "False"],
      correctAnswer: "1",
      answerSelectionType: "single",
    },
  ],
};
export { Lesson6Data, Lesson6Quiz };
