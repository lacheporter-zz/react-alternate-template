import checkpoint from "../assets/checkpoint.svg";
import objectives from "../assets/objectives.svg";
import interfaces1 from "../assets/interfaces1.svg";
import interfaces2 from "../assets/interfaces2.svg";
import interfaces3 from "../assets/interfaces3.svg";
import interfaces4 from "../assets/interfaces4.svg";
import interfaces5 from "../assets/interfaces5.svg";
import interfaces6 from "../assets/interfaces6.svg";
import interfaces7 from "../assets/interfaces7.svg";
import interfaces8 from "../assets/interfaces8.svg";
import interfaces9 from "../assets/interfaces9.svg";
import interfaces10 from "../assets/interfaces10.svg";
import dataflowchart from "../assets/data_flow_chart.svg";
import personnel from "../assets/personnel_information_transfer.svg";
import hrPayroll from "../assets/hr_payroll.svg";
const imageSize = "100%";

const Lesson4Data = [
  {
    index: 0,
    title: "Welcome to Payroll Data Flow",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Welcome to the Payroll Data Flow module. In this module we will discuss the various interfacing systems such as Army Civilian Personnel System (ACPERS), Defense Civilian Pay System (DCPS), Defense Cash Accountability System (DCAS), and Automated Time Attendance and Production System (ATAAPS). We will also discuss the frequency and content of information exchanges between GFEBS and external systems",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Upon completion of this module you should have a greater understanding of the data flow processes, specific systems involved, and how information is managed.",
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
          "Recognize varying GFEBS interfacing systems",
          "Identify the data flow process (sequence) of pay and labor information",
          "Define types of information transmitted between varying systems",
          "Orient systems in the payroll data flow chart",
        ],
      },
    ],
    image: objectives,
    width: imageSize,
  },
  {
    index: 2,
    title: "Personnel Information Transfer",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "GFEBS receives files and data from multiple external systems. Some of these interfaces use the GFEBS HR LOA to process transactions related to civilian payroll. GFEBS sends outbound data to many of these systems in order to keep master data in synch.",
      },
    ],
    image: personnel,
    width: imageSize,
  },
  {
    index: 3,
    title: "ACPERS and DCPS Interfaces (1 of 5)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "GFEBS receives a daily file containing employee master data from ACPERS to create or update Army civilian employee records in the GFEBS Human Resource module.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "list",
        title:
          "DCPS sends the Master Data Record (MER) (ARNG Title 323 only-DCPS) to GFEBS daily with each civilian employee’s:",
        items: [
          "Full Name (Last Name, First Name, Middle Name, and Suffix)",
          "Social Security Number (SSN)",
          "Unit Identification Code (UIC)",
          "Payroll Office Identification Code (POIC)",
        ],
      },
    ],
    image: interfaces1,
    width: imageSize,
  },
  {
    index: 4,
    title: "ACPERS and DCPS Interfaces (2 of 5)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The MER (ARNG Title 32 only-DCPS) or the master data file (ACPERS) creates the employee record in GFEBS HR.",
      },
      {
        type: "space",
        height: "2em",
      },
      {
        type: "paragraph",
        text: "DCPS sends the Gross Pay File (GPF) to GFEBS bi-weekly to record hours and amounts for pay and benefit entitlements, awards, settlements and other pay-related data. The interface looks up each employee’s SSN on the GPF to fund the employee’s LOA (Fund, Functional Area, Cost Center, and Activity Types) for posting. ",
      },
    ],
    image: interfaces2,
    width: imageSize,
  },
  {
    index: 5,
    title: "ACPERS and DCPS Interfaces (3 of 5)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "If an employee record is missing or the LOA has not been created by the user, the record fails and posts to the DCPS Error Extension. While most of the records on the inbound Gross Pay Reconciliation (GRP) file are summarized and posted in ECC to an account using the FB50 transaction a few of the records have either an Earning Adjustment Indicator that begins with “Q” or a DCPS Fiscal Year value of “R”. These indicators designate the records as collections. These records are not processed but are made available in BI for reporting purposes.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "DCPS sends the Unfunded Leave File (UFL) bi-weekly to record summary level unpaid leave liability by UIC.",
      },
    ],
    image: interfaces3,
    width: imageSize,
  },
  {
    index: 6,
    title: "ACPERS and DCPS Interfaces (4 of 5)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "GFEBS Sends the Outbound LOA to DCPS file daily to ensure that DCPS disburses from the same treasury elements that are used for posting the payroll transactions. All of the treasury elements required by DCPS for disbursing are contained in the GFEBS fund or in FM tables related to the fund.",
      },
    ],
    image: interfaces4,
    width: imageSize,
  },
  {
    index: 7,
    title: " ACPERS and DCPS Interfaces (5 of 5)",
    layout: "standard",
    content: [
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "An update in GFEBS HR to the fund or the Personnel Area (OA) creates change pointers in the background to flag a record to be sent to DCPS. The transmit to DCPS box will be blank. If end users do not want DCPS to receive the update, they would enter an “N” in the transmit to DCPS field. If a record needs to be resent to DCPS even though a change has not been made in GFEBS HR, they would enter a “Y” in the transmit to DCPS field. The outbound file to DCPS includes:",
      },
      {
        type: "list",
        title: "",
        items: [
          "Payroll Office Identification Code",
          "SSN",
          "Department Code",
          "Transfer Department",
          "Fiscal Year",
          "Basic Symbol",
          "Limited Subhead",
          "Date Effective and Date End",
          "Exclude from Fiscal Year Rollover Indicator",
        ],
      },
    ],
    image: interfaces5,
    width: imageSize,
  },
  {
    index: 8,
    title: "DCAS Interface",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "DCAS sends GFEBS a cash reconciliation file. The civilian payroll transactions are sent by DCPS in the file to be recorded in GFEBS. A comparison of the total value from the file and the DCAS disbursement notification is made to determine if there is any difference. If there are differences, adjustments are made to bring cash in balance with U.S. Treasury.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "The Payroll Interface Processing Monitor is responsible for monitoring the error log (i.e., error spool) for error messages that may occur during disbursement.",
      },
    ],
    image: interfaces6,
    width: imageSize,
  },
  {
    index: 9,
    title: "ATAAPS Interface (1 of 4)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The Outbound Cost Objects file to ATAAPS is triggered by the Interface Indicator assigned to the organizations. Users insert their ATAAPS Interface Indicator on the cost objects (e.g., cost cent, internal orders, WBS elements, etc.) they want available in ATAAPS for labor charge postings. GFEBS generates these files on a daily basis and places them on the server for various ATAAPS host sites to pick up.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Sites may elect to manually enter their cost objects in ATAAPS and not receive this file.",
      },
    ],
    image: interfaces7,
    width: imageSize,
  },
  {
    index: 10,
    title: "ATAAPS Interface (2 of 4)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "In most cases, the Labor File is sent from ATAAPS on a daily basis for processing in GFEBS. However, not all ATAAPS files are sent daily depending on the ATAAPS database and when that administrator sends the file. This interface is used by organizations who record their time-tracking in ATAAPS. ATAAPS captures the charged hours against the cost object where the productive work was performed. This process and interface is not applicable for organizations who just use ATAAPS to record time & attendance for DCPS payroll.",
      },
    ],
    image: interfaces8,
    width: imageSize,
  },
  {
    index: 11,
    title: "ATAAPS Interface (3 of 4)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The interface hours are used to calculate the cost of labor using the hours worked, multiplied by the employee’s Activity Type Rate. GFEBS then allocates the hours and costs from the individuals’ LOA in GFEBS HR to the cost objects charged in ATAAPS. If the employee record is missing in GFEBS HR or the LOA has not yet been loaded by the user, the record fails and posts to the Time-Tracking Error Extension.",
      },
    ],
    image: interfaces9,
    width: imageSize,
  },
  {
    index: 12,
    title: "ATAAPS Interface (4 of 4)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "GFEBS HR Master Data and Payroll Labor attributes are extracted from ECC into BI for reporting and analysis using the BI HR Master Data Report. All the BI payroll and labor reports that contain the Personnel Number (PERNR) are now updated with all the attributes of the Personnel Number from ECC.",
      },
    ],
    image: interfaces10,
    width: imageSize,
  },
  {
    index: 13,
    title: "Data Flow Chart",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "GFEBS HR Master Data and Payroll Labor attributes are extracted from ECC into BI for reporting and analysis using the BI HR Master Data Report. All the BI payroll and labor reports that contain the Personnel Number (PERNR) are now updated with all the attributes of the Personnel Number from ECC.",
      },
      {
        type: "list",
        title: "",
        items: [
          "DCPDS: Defense Civilian Personnel Data System",
          "DCPS: Defense Civilian Pay System",
          "ADS: Automated Disbursing System",
          "ATAAPS: Automated Time Attendance and Production System",
          "GFEBS ECC: General Fund Enterprise Business System - ERP Central Component",
          "DCAS: Defense Cash Accountability System",
          "ACPERS: Army Civilian Personnel System",
          "GFEBS BI: General Fund Enterprise Business System - Business Intelligence",
        ],
      },
    ],
    map: {
      name: "my-map",
      areas: [
        {
          id: 1,
          shape: "circle",
          coords: [115, 342, 15],
          preFillColor: "rgba(163, 165, 222, 0.5)",
          strokeColor: "red",
          lineWidth: "2",
          fillColor: "rgba(165, 165, 255, 0.8)",
          content: "#1: GFEBS receives a daily file containing employee master data from ACPERS.",
        },
        {
          id: 2,
          shape: "circle",
          coords: [290, 106, 15],
          preFillColor: "rgba(163, 165, 222, 0.5)",
          strokeColor: "red",
          lineWidth: "2",
          fillColor: "rgba(123, 165, 222, 0.9)",
          content: "#2: DCPS sends the Master Data Record (MER) to GFEBS daily.",
        },
        {
          id: 3,
          shape: "circle",
          coords: [332, 181, 15],
          preFillColor: "rgba(163, 165, 222, 0.5)",
          strokeColor: "red",
          lineWidth: "2",
          fillColor: "rgba(163, 165, 222, 0.8)",
          content:
            "#3: GFEBS sends the Outbound LOA to DCPS file daily to ensure DCPS disburses from the same treasury elements. ",
        },
        {
          id: 4,
          shape: "circle",
          coords: [362, 266, 15],
          preFillColor: "rgba(163, 165, 222, 0.5)",
          strokeColor: "red",
          lineWidth: "2",
          fillColor: "rgba(163, 165, 222, 0.8)",
          content: "#4: DCAS sends GFEBS a cash reconciliation file.",
        },
        {
          id: 5,
          shape: "circle",
          coords: [302, 225, 15],
          preFillColor: "rgba(163, 165, 222, 0.5)",
          strokeColor: "red",
          lineWidth: "2",
          fillColor: "rgba(163, 165, 222, 0.8)",
          content: "#5) The Payroll Interface Processing Monitor is responsible for monitoring the error log.",
        },
        {
          id: 6,
          shape: "circle",
          coords: [240, 238, 15],
          preFillColor: "rgba(163, 165, 222, 0.5)",
          strokeColor: "red",
          lineWidth: "2",
          fillColor: "rgba(163, 165, 222, 0.8)",
          content:
            "#6: The Outbound Cost Objects file to ATAAPS is triggered by the Interface Indicator assigned to organizations.",
        },
        {
          id: 7,
          shape: "circle",
          coords: [163, 268, 15],
          preFillColor: "rgba(163, 165, 222, 0.5)",
          strokeColor: "red",
          lineWidth: "2",
          fillColor: "rgba(163, 165, 222, 0.8)",
          content: "#7: In most cases, the Labor File is sent from ATAAPS on a daily basis for processing in GFEBS.",
        },
        {
          id: 8,
          shape: "circle",
          coords: [310, 318, 15],
          preFillColor: "rgba(163, 165, 222, 0.5)",
          strokeColor: "red",
          lineWidth: "2",
          fillColor: "rgba(163, 165, 222, 0.8)",
          content:
            "#8: GFEBS HR Master Data and Payroll Labor attributes are extracted from ECC into BI for reporting and analysis.",
        },
      ],
    },
    diagram: dataflowchart,
    width: 550,
  },
  {
    index: 14,
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
const Lesson4Quiz = {
  questions: [
    {
      question: "GFEBS receives files and data from a single external system.",
      questionType: "text",
      answers: ["True", "False"],
      correctAnswer: "2",
      answerSelectionType: "single",
    },
    {
      question: "Identify an element that is included in the Master Data Record (MER) transfer to GFEBS.",
      answers: [
        "Line of Accounting (LOA)",
        "Personnel Number (PERNR)",
        "Unit Identification Code (UIC)",
        "Human Resource Action Identifier (HRAI)",
      ],
      questionType: "text",
      correctAnswer: "3",
      answerSelectionType: "single",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    },

    {
      question:
        "If an employee record is missing or the LOA has not been created by the user, the record fails and posts to the __________ Error Extension.",
      answers: ["ECC", "DSCPDS", "GFEBS", "DCPS"],
      questionType: "text",
      correctAnswer: "4",
      answerSelectionType: "single",
    },
    {
      question:
        "DCAS sends GFEBS a cash reconciliation file. The civilian payroll transactions are sent by DCPS in the file to be recorded in GFEBS.",
      questionType: "text",
      answers: ["True", "False"],
      correctAnswer: "1",
      answerSelectionType: "single",
    },

    {
      question:
        "What is the frequency of creation for the Outbound Cost Objects file that GFEBS makes available for ATAAPS?",
      answers: ["Daily Basis", "12 hour intervals", "Bi-weekly", "6 hour intervals"],
      questionType: "text",
      correctAnswer: "1",
      answerSelectionType: "single",
    },

    {
      question: "DCPS sends the ________________ bi-weekly to record summary level unpaid leave liability by UIC.",
      answers: [
        "Leave Correction File (LCF)",
        "Unfunded Leave File (UFL)",
        "Manpower Balance File (MBF)",
        "Timesheet Maintenance File (TMF)",
      ],
      questionType: "text",
      correctAnswer: "2",
      answerSelectionType: "single",
    },
    {
      question:
        "DCAS sends GFEBS a cash reconciliation file; the civilian payroll transactions are sent by DCPS in the file to be recorded in GFEBS. The ___________________is responsible for monitoring the error log (i.e., error spool) for error messages that may occur during disbursement.",
      answers: [
        "Payroll Corrections and HR Monitor",
        "HR Employee Record Reporter",
        "Payroll Audit Reporter",
        "Payroll Interface Processing Monitor",
      ],
      questionType: "text",
      correctAnswer: "4",
      answerSelectionType: "single",
    },
  ],
};
export { Lesson4Data, Lesson4Quiz };
