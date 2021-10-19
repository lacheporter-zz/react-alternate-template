import checkpoint from "../assets/checkpoint.svg";
import objectives from "../assets/objectives.svg";
import leadin1 from "../assets/lead_in_1.svg";
import leadin2 from "../assets/lead_in_2.svg";
import leadin3 from "../assets/lead_in_3.svg";
import infotypes from "../assets/infotypes.svg";
import validityPeriod from "../assets/validity_period.svg";
import maintainRecords from "../assets/maintaining_records.svg";
import hrModule from "../assets/gfebs_hr_module.svg";
import hrPayroll from "../assets/hr_payroll.svg";
import personell_identification from "../assets/personell_identification.svg";

const imageSize = "100%";
const Lesson3Data = [
  {
    index: 0,
    title: "Welcome to Overview of the Human Resources Personnel Administration (HRPA)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Welcome to the Human Resources Personnel Administration module. In this module we will discuss the GFEBS HR Module, Infotypes, Validity Periods, Creating and Maintaining Employee Records, and Personnel Identification Numbers.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Upon completion of this module you should have a greater understanding of how the human resources function integrates with GFEBS for the purpose of personnel pay/ labor administration",
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
          "Identify the components of the GFEBS HR Module",
          "Define Infotypes",
          "Recognize Infotypes maintained in GFEBS",
          "Identify how to create and maintain employee records",
        ],
      },
    ],
    image: objectives,
    width: imageSize,
  },
  {
    index: 2,
    title: "Module Lead-In(1 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The Human Resources function of GFEBS is driven by the HR module. Interfacing with multiple systems, GFEBS accumulates data and organizes it for functionality. The Personnel Area is a required element critical to organizing information.",
      },

      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "The Personnel Area of the GFEBS HR module contains the Command’s Operating Activity (OA) Code. The Funds Center on the LOA derives the OA onthe Personnel Area infotype. If the LOA does not exist on the employee record, this defaults to the United States Public Sector (USPS).",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "United States Public Sector (USPS): a SAP standard delivered acronym.  ",
      },
    ],
    image: leadin1,
    width: imageSize,
  },
  {
    index: 3,
    title: "Module Lead-In (2 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Employee records in GFEBS can be entered in one of three ways. An LOA must be entered for payroll and labor to process certain records. Site end users must update employee records with the LOA before the pay and labor files are processed.",
      },
    ],
    image: leadin2,
    width: imageSize,
  },
  {
    index: 4,
    title: "Module Lead-In (3 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The SSN is a required key field in GFEBS HR for creating employee records. Feeder system interfaces use the SSN as the unique identifier key. The Personnel ID field contains the SSN in GFEBS HR but is only visible to the authorized users with the HR Employee Maintainer role.",
      },
      {
        type: "space",
        height: "2em",
      },
      // {
      //   type: "terms",
      //   terms: [
      //     {
      //       name: "Term 1",
      //       definition: "Definition 1",
      //     },
      //     {
      //       name: "Term 2",
      //       definition: "Definition 2",
      //     },
      //     {
      //       name: "Term 3",
      //       definition: "Definition 3",
      //     },
      //     {
      //       name: "Term 4",
      //       definition: "Definition 4",
      //     },
      //   ],
      // },
    ],
    image: leadin3,
    width: imageSize,
  },
  {
    index: 5,
    title: "GFEBS HR Module",
    layout: "standard",
    content: [
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "List Heading:",
        items: [
          "The GFEBS HR module contains required standard fields used to classify employee records with parameters for facilitating searches and reports.",
          "Employee Group contains three employee types: Civilians (1), Military (2), and Contractors (3). Local National (LN) employee records are manually created using group 1 employee type.",
          "Employee Sub-Group provides a further breakdown within each group, such as, APF, LN Direct and LN Indirect.",
        ],
      },
    ],
    image: hrModule,
    width: imageSize,
  },
  {
    index: 6,
    title: "Infotypes",
    layout: "standard",
    content: [
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "Infotypes",
        items: [
          "Infotypes are employee master data grouped together in GFEBS HR according to subject matter and logical groups. Examples include, Organizational Assignment, Personal Data, or Line of Accounting. GFEBS isusing a combination of standard and custom infotypes for the GFEBS HR solution.",
        ],
      },
      {
        type: "list",
        title: "Infotypes Maintained in GFEBS",
        items: ["In GFEBS, the following infotypes are maintained on an employee master record."],
      },
    ],
    image: infotypes,
    width: imageSize,
  },
  {
    index: 7,
    title: "Validity Period",
    layout: "standard",
    content: [
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "All infotypes have validity periods that define the effective dates of an action within GFEBS. The start date and end date define the validity period for the Action entered on an infotype. Validity periods enable GFEBS to capture changes to the infotype while retaining history of those changes. The default date for the end of any validity period is 12/31/9999. When changing or displaying a particular infotype it is important to make sure the correct dates are entered for the validity period.",
      },
    ],
    image: validityPeriod,
    width: imageSize,
  },
  {
    index: 8,
    title: "Creating and Maintaining Employee Records",
    layout: "standard",
    content: [
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "GFEBS creates employee records in one of four ways:",
        items: [
          "Army civilian employee master records created via the Inbound Employee Master Data ACPERS interface into GFEBS.",
          "ONLY Army National Guard Title 32 civilian employee master records created via the MER file from DCPS into GFEBS.",
          "The Master Employee Record Upload Extension Spreadsheet to manually mass create or change employee master records in GFEBS HR (e.g. civilian personnel action not yet processed or employee is not an Army civilian). A Microsoft Excel spreadsheet template is used for this purpose.",
          "Manual creation of individual employee records in GFEBS via transaction PA30 - Maintain HR Master Data.",
        ],
      },
    ],
    image: maintainRecords,
    width: imageSize,
  },
  {
    index: 9,
    title: "Personnel Identification Numbers",
    layout: "standard",
    content: [
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "When an employee record is initially created in GFEBS, the system assigns a unique Personnel Number (PERNR) for each employee. The PERNR allows execution of transactions, searches and reports without having to display the SSN. The Personnel Number is key identifier for mass load of employee record changes in GFEBS HR. It is also required to post labor allocations usingthe Manual Time-Tracking spreadsheet. The PERNR is only available in BI to the reports listed under the BI Payroll Audit Reporter role.",
      },
    ],
    image: personell_identification,
    width: imageSize,
  },

  {
    index: 10,
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
const Lesson3Quiz = {
  questions: [
    {
      question: "The _______________of the GFEBS HR module contains the Command’s Operating Activity (OA) Code.",
      answers: [
        "ERP Central Component (ECC)",
        "Business Intelligence (BI)",
        "Personnel Area ",
        "Line of Accounting (LOA)",
      ],
      questionType: "text",
      correctAnswer: "3",
      answerSelectionType: "single",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    },
    {
      question:
        "The Personnel ID field contains the SSN in GFEBS HR but is only visible to the authorized users with the HR Employee Maintainer role.",
      questionType: "text",
      answers: ["True", "False"],
      correctAnswer: "1",
      answerSelectionType: "single",
    },
    {
      question: "What is an example of an infotype logical group? ",
      answers: ["Organizational Assignment", "Personnel Data", "Line of Accounting", "All the above"],
      questionType: "text",
      correctAnswer: "4",
      answerSelectionType: "single",
    },
    {
      question: "How many employee types comprise an employee group?",
      answers: [
        "Three employee types",
        "Two employee types",
        "Employee groups comprise employee types",
        "Four employee types",
      ],
      questionType: "text",
      correctAnswer: "1",
      answerSelectionType: "single",
    },
    {
      question:
        "When an employee record is initially created in GFEBS, the system assigns a unique Personnel Number (PERNR) for each employee. When executing transactions, searches and reports, the PERNR display simultaneously with the employee’s SSN.",
      questionType: "text",
      answers: ["True", "False "],
      correctAnswer: "1",
      answerSelectionType: "single",
    },
  ],
};
export { Lesson3Data, Lesson3Quiz };
