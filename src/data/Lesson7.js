import hrAdmin from "../assets/hr_module_admin.svg";
import personnel_information from "../assets/personnel_information_transfer.svg";
import conclusion from "../assets/conclusionClipboard.svg";
import gfebs from "../assets/gfebs.svg";

const imageSize = "100%";

const Lesson7Data = [
  {
    index: 0,
    title: "Welcome to Human Resources Overview Process Review",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "This concludes the Human Resources Overview Process course. In this course, we discussed the Overview of GFEBS HR & Payroll and Labor Process, Human Resource Personnel Administration (HRPA), the Payroll Data Flow, how to Maintain Master Employee Records, and important Reports critical to analysis of employee records.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "This course introduced you to the required GFEBS user roles needed to view reports, and maintain employee records. These user roles afforded the access to be able to use transaction codes PA 20, PA 30, PA 40, ZSCM_PAR1, and ZSCM_EMPL_MTCE. Additionally, you learned how to view employee records in the Business Intelligence (BI) component of GFEBS.",
      },
    ],
    image: gfebs,
    width: imageSize,
  },

  {
    index: 1,
    title: "Human Resource Module and Administration (1 of 2)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The Human Resource module in GFEBS is responsible for housing employee records such as, lines of accounting (LOA) for sending and creating DCPS Employee lines of accounting, personnel information used for manpower reporting, and identifying information that enables the user to delaminate data in reports. ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Within Human Resource Personnel Administration (HRPA), it is important to understand how to interpret classifications, groupings, and corresponding data in order to properly perform duties in the Human Resources role. During the lesson, you learned common acronyms, how to define them, and the purpose they serve in the process. ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Employee Groups and Infotypes are data grouped together in GFEBS HR that support an organized manner of performing maintenance when updating employee records. These fields classify data into logical order to facilitate searches and reporting. ",
      },
    ],
    image: hrAdmin,
    width: imageSize,
  },
  {
    index: 3,
    title: "Human Resource Module and Administration (2 of 2)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The Payroll Data Flow process discusses how personnel information is transferred through external system interfaces with GFEBS. External systems ACPERS, DCPS, DCAS, and ATAAPS transmit varying personnel information at specific intervals and GFEBS sends outbound data to many of these systems in order to keep master data in synch.",
      },
      {
        type: "space",
        height: "1em",
      },

      {
        type: "paragraph",
        text: "We also discussed that the data flow chart provides a picture of how the multi-system process organizes itself, stores and sends data, and processes payroll transactions.  ",
      },
    ],
    image: personnel_information,
    width: imageSize,
  },
  {
    index: 4,
    title: "Conclusion",
    layout: "standard",
    content: [
      {
        type: "list",
        title: "",
        items: [
          "This concludes Human Resources Overview Process Review.",
          "You may exit the lesson or continue reviewing the material to ensure understanding.",
        ],
      },
    ],
    image: conclusion,
    width: imageSize,
  },
];
const Lesson7Quiz = {
  questions: [
    {
      question: "Congratulations!",
      answers: ["Exit", "formatting", "equally viable", "real-time reporting"],
      questionType: "text",
      correctAnswer: "1",
    },
  ],
};
export { Lesson7Data, Lesson7Quiz };
