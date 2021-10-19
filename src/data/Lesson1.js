import targetAudience from "../assets/target_audience.svg";
import trainingDisclaimer from "../assets/training_disclaimer.svg";
import GFEBS from "../assets/gfebs.svg";
import chair from "../assets/chair.svg";
import overview from "../assets/overview.svg";
import motivator from "../assets/motivator.svg";
import courseflow from "../assets/courseflow.svg";
import employeeMale from "../assets/employee_male.svg";
import employeeFemale from "../assets/employee_female.svg";
import checkpoint from "../assets/checkpoint.svg";

const imageSize = "100%";

const Lesson1Data = [
  {
    index: 0,
    title: "Welcome to GFEBS Introduction",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        tag: "GFEBS",
        text: "Welcome to the General Fund Enterprise Business System (GFEBS) Human Resource (HR) and Payroll/ Labor Processes lesson. In this introduction, an overview of important concepts, terminology, and roles are explained.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "The purpose of this training is to provide an overview of the Human Resources (HR) functionality in GFEBS, as well as the payroll and labor process.",
      },
    ],
    image: GFEBS,
    width: imageSize,
  },
  {
    index: 1,
    title: "Target Audience",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        tag: "HR Employee Maintainer, Payroll Corrections and HR LOA Processor, Payroll Interface Processing Monitor, BI Payroll Audit Reporter",
        text: "The target audience for this course is anyone who is assigned roles as a HR Employee Maintainer, Payroll Corrections and HR LOA Processor, Payroll Interface Processing Monitor, BI Payroll Audit Reporter, and/or BI Labor Reporter based on their command’s requirements or organizational needs.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Successful completion of this course is required before a user is provisioned with the aforementioned GFEBS user roles.",
      },
    ],
    image: targetAudience,
    width: imageSize,
  },
  {
    index: 2,
    title: "GFEBS Training Disclosure",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The GFEBS Human Resource (HR) and Payroll/ Labor Processes lesson is based upon procedures and screens at the time of development. Production environments are updated on a regular basis and therefore the procedures and screens contained within this product may not reflect the latest information.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        tag: "https://gfebs.army.mil/gm/",
        text: "For the most up to date information visit the GFEBS Training and PerformanceSupport Website (PSW): https://gfebs.army.mil/gm/ ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "After accessing the site, click on the corresponding area such as Job Aids, Training Guides, and etc. for help with GFEBS user procedures..",
      },
    ],
    image: trainingDisclaimer,
    width: imageSize,
  },
  {
    index: 3,
    title: "Instructional Seat Time/ Prerequisites",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The GFEBS Human Resource (HR) and Payroll/ Labor Processes lesson courseware includes approximately 7 hours of Interactive Multimedia Instruction (IMI), including the Introduction, and 5 lessons. Prior to completing this course, students are required to complete courses GFEBS Essentials, and GFEBS BI Reporting. ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "The GFEBS Human Resource (HR) and Payroll/ Labor Processes lesson includes lesson checkpoints and learning assessments that provide opportunities to demonstrate learning objective comprehension.",
      },
    ],
    image: chair,
    width: imageSize,
  },
  {
    index: 4,
    title: "Course Flow",
    layout: "standard",
    content: [
      {
        type: "list",
        title: "The course flow and lessons contained within this lesson are as follows:",
        items: [
          "Introduction",
          "Overview of GFEBS HR & Payroll and Labor Process",
          "Human Resource Personnel Administration (HRPA)",
          "Payroll Data Flow",
          "Maintain Master Employee Records",
          "Reports",
          "Review",
        ],
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "At the end of this course, you are required to receive a minimum passing score of 80% on the post-assessment in order to successfully complete this course.",
      },
    ],
    image: courseflow,
    width: imageSize,
  },
  {
    index: 5,
    title: "Motivator",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The GFEBS Human Resource (HR) and Payroll/ Labor Processes lesson is a vital training medium that provides essential learning tailored toward Financial Management professionals who will perform HR & Payroll/ Labor duties.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "This lesson provides users with an explanation of processes, user roles, terminology, concepts, and reports. Successful completion of this course will enable the successful completion of HR and Payroll/ Labor tasks.",
      },
    ],
    image: motivator,
    width: imageSize,
  },
  {
    index: 6,
    title: "User Roles (1 of 2)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        tag: "HR Employee Maintainer:",
        text: "HR Employee Maintainer: This role creates and changes employee recordsin the HR module. Users with this role can display the line of accounting (LOA) but cannot add or change the LOA. This role allows access to PersonallyIdentifiable Information (PII) as it permits access/visibility to the Social Security Number in the employee records as well as in the HR Employee Master Data reports in ECC.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        tag: "Payroll Corrections and HR LOA Processor:",
        text: "Payroll Corrections and HR LOA Processor: This role is designed to view and modify employee records by adding the Line of Accounting information. Itis required to reprocess errors in the error extension. This is a Restricted Roleas it permits access/visibility to the name and last four digits of the Social Security Number in the DCPS error extension. Please note, this role does not permit access to the full Social Security Number in the HR error extension or in reports.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        tag: "Payroll Interface Processing Monitor:",
        text: "Payroll Interface Processing Monitor: This role monitors inbound and outbound interfaces for pay and labor files and maintains the tables required for these interfaces and for the HR module.",
      },
    ],
    image: employeeMale,
    width: "100%",
  },
  {
    index: 7,
    title: "User Roles (2 of 2)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "BI Payroll Audit Reporter: This role is able to run the in BI. This role is ableto view the PII information in the BI HR Master Data Report, this includes displaying the employee Social Security Number (SSN). ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "List of available BI Reports for this role: ",
        items: [
          "Payroll Source Data Report",
          "Financial Reconciliation report – PII",
          "Budget Alignment and Hours Comparison Report",
          "Detail Labor Management Report",
          "Audit Report",
          "HR Master Data Report",
        ],
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "BI Payroll Audit Reporter: This role is able to run the in BI. This role is ableto view the PII information in the BI HR Master Data Report, this includes displaying the employee Social Security Number (SSN). ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title: "List of available BI Reports for this role:",
        items: [
          "Standard Rate Variance (Summary)",
          "Budget Alignment and Hours Comparison Report",
          "Time Tracking Source Data Report",
          "Civilian Manpower",
          "Detail Labor Cost Report",
          "Financial Reconciliation Report",
          "HR Master Data Report",
        ],
      },
    ],
    image: employeeFemale,
    width: "100%",
  },
  {
    index: 8,
    title: "Key Terms (1 of 3)",
    layout: "wide",
    content: [
      {
        type: "terms",
        terms: [
          {
            name: "Business Intelligence (BI)",
            definition:
              "BI is a data warehousing environment where ECC summary transactions, detailed employee-level pay and time-tracking records, and HR employee records are stored for reporting",
          },
          {
            name: "DCPS Gross Pay File (GPF):",
            definition:
              "GFEBS receives the GPF (also called Gross Reconciliation File) from DCPS biweekly. The GPF contains detailed records byemployee for pay, benefits, awards, etc. The GPF records reflect the appropriation data used by DCPS to disburse payroll.",
          },
          {
            name: "Army Civilian Personnel System (ACPERS):",
            definition:
              "ACPERS is the Management Information System for Army civilian personnel data. ACPERS serves as a reporting hub providing Army civilian employee master data from DCPDS to other partner applications to support the Army’s civilian personnel manning mission and management information needs.",
          },
          {
            name: "Defense Civilian Pay System (DCPS): ",
            definition: " DCPS is the system of record for Department of the Army civilian pay and entitlements.",
          },
        ],
      },
    ],
  },
  {
    index: 9,
    title: "Key Terms (2 of 3)",
    layout: "wide",
    content: [
      {
        type: "terms",
        terms: [
          {
            name: "Defense Civilian Personnel Data System (DCPDS):",
            definition:
              "DCPDS is the system of record for all DOD civilian employee master data. The system is designed to support appropriated fund, non-appropriated fund, and Local National human resources operations.",
          },
          {
            name: "ERP Central Component (ECC):",
            definition:
              "ECC is the core financial system where summary level labor and payroll transactions are recorded",
          },
          {
            name: "Human Resource Personnel Administration (HR):",
            definition:
              "The component/sub-module of the Human Resource module where GFEBS employee master records are housed.",
          },
          {
            name: "Infotype:",
            definition:
              "Infotype is a screen used to store similar data regarding an employee in GFEBS. Distinguished by a four-character code and name (i.e., 0002 Personal Data). GFEBS is using a combination of standard and custom infotypes.",
          },
        ],
      },
    ],
  },
  {
    index: 10,
    title: "Key Terms (3 of 3)",
    layout: "wide",
    content: [
      {
        type: "terms",
        terms: [
          {
            name: "Line of Accounting (LOA): ",
            definition:
              "BI is a data warehousing environment where ECC summary transactions, detailed employee-level pay and time-tracking records, and HR employee records are stored for reporting",
          },
          {
            name: "Personally Identifiable Information (PII):",
            definition:
              "GFEBS receives the GPF (also called Gross Reconciliation File) from DCPS biweekly. The GPF contains detailed records byemployee for pay, benefits, awards, etc. The GPF records reflect the appropriation data used by DCPS to disburse payroll.",
          },
          {
            name: "Unit Identification Code (UIC):",
            definition:
              "ACPERS is the Management Information System for Army civilian personnel data. ACPERS serves as a reporting hub providing Army civilian employee master data from DCPDS to other partner applications to support the Army’s civilian personnel manning mission and management information needs.",
          },
        ],
      },
    ],
  },
  {
    index: 11,
    title: "Lesson Overview (1 of 2)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        tag: "Overview of GFEBS HR & Payroll/ Labor Process, what comprises Human Resource Personnel Administration (HRPA), Payroll Data Flow, and available Reports",
        text: "The GFEBS Human Resource (HR) and Payroll/ Labor Processes lesson contains 4 key subject areas such as an Overview of GFEBS HR & Payroll/ Labor Process, what comprises Human Resource Personnel Administration (HRPA), Payroll Data Flow, and available Reports.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "At the conclusion of this lesson students should have a greater understandingof the functionality of GFEBS’ Human Resource module, its data protocol, andhow it interfaces with various systems to support the storage and facilitation for payment of labor/payroll cost.",
      },
    ],
    image: overview,
    width: "100%",
  },
  {
    index: 12,
    title: "Lesson Overview (2 of 2)",
    layout: "wide",
    content: [
      {
        type: "list",
        title: "Overview of GFEBS HR & Payroll/ Labor Process",
        items: [
          "GFEBS is the system of record for the LOA for select pay and labor processes. The Human Resource (HR) module has several components for processing personal actions and payroll. ",
        ],
      },
      {
        type: "list",
        title: "Human Resource Personnel Administration (HRPA)",
        items: [
          "HRPA is comprised of Infotypes, Master Data, and Actions. Standard and custom data metrics are maintained on an employee master record. The master record holds standard and custom data important to the organization of employee and system information. ",
        ],
      },
      {
        type: "list",
        title: "Payroll Data Flow",
        items: [
          "GFEBS receives files and data from multiple external systems and sends outbound data to many of these systems in order to keep master data in synch.",
        ],
      },
      {
        type: "list",
        title: "Reports",
        items: [
          "There are two reports available in ECC & BI associated with employee records in GFEBS. The HR Master Data Report in ECC is a real time repot with custom infotypes. The BI HR Master Data report contains custom and standard data as the aforementioned, however, this report is not real-time.",
        ],
      },
    ],
  },
  {
    index: 13,
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
const Lesson1Quiz = {
  questions: [
    {
      question:
        "What is an example of employee master data necessary to facilitate the pay, labor process and reporting in GFEBS? ",
      answers: [
        "Security clearance level",
        "Military service record",
        "Number of dependents",
        "Employee personnel information",
      ],
      questionType: "text",
      correctAnswer: "4",
      answerSelectionType: "single",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    },
    {
      question:
        "ACPERS is the system of record for the Line of Accounting (LOA) used for posting to DCPS, ATAAPS and the Manual Time-Tracking upload spreadsheet.",
      questionType: "text",
      answers: ["True", "False"],
      correctAnswer: "2",
      answerSelectionType: "single",
    },
    {
      question: "Identify examples of the basic treasury information that GFEBS sends DCPS.",
      answers: [
        "Department Code & Fiscal Station Number",
        "Fiscal Year & AMSCO",
        "Appropriation & Functional Area",
        "Limitation & Commitment Item",
      ],
      questionType: "text",
      correctAnswer: "1",
      answerSelectionType: "single",
    },
    {
      question: "Users of GFEBS can create, change and view employee data via ______________.",
      answers: [
        "Entering T Code ZOS_IFV",
        "Infotypes",
        "Syncing GFEBS HR reports with DCPDS",
        "Updating the HR module",
      ],
      questionType: "text",
      correctAnswer: "2",
      answerSelectionType: "single",
    },
    {
      question: "Infotypes are employee master data grouped together in HR according to ___________ and _____________.",
      answers: [
        "HR policies & system procedures",
        "ECC data & BI data",
        "subject matter & logical groups",
        "record creation date & age of master data",
      ],
      questionType: "text",
      correctAnswer: "3",
      answerSelectionType: "single",
    },
  ],
};
export { Lesson1Quiz, Lesson1Data };
