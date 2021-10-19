import checkpoint from "../assets/checkpoint.svg";
import objectives from "../assets/objectives.svg";
import image3 from "../assets/Image3.svg";
import image4 from "../assets/Image4.svg";
import image5 from "../assets/Image5.svg";
import image6 from "../assets/Image6.png";
import image8 from "../assets/Image8.png";
import image9 from "../assets/Image9.png";
import image10 from "../assets/Image10.png";
import image11 from "../assets/Image11.jpg";
import hrPayroll from "../assets/hr_payroll.svg";

const imageSize = "100%";

const Lesson5Data = [
  {
    index: 0,
    title: "Welcome to Maintain Master Employee Records",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Welcome to the Maintain Master Employee module. In this module we will discuss methods and procedures necessary to create, modify, and display employee records in GFEBS. We will also discuss secondary tools key to promoting efficiency and accuracy when processing employee data.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Upon completion of this module you should have a greater understanding of how to leverage GFEBS system functionality to create and maintain master employee records.",
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
          "Identify sources of employee data",
          "Recognize transaction codes used to maintain master employee records",
          "Access GFEBS to process employee record creation and modification",
          "Identify functions of employee record upload tool",
        ],
      },
    ],
    image: objectives,
    width: imageSize,
  },
  {
    index: 2,
    title: "Overview of Employee Record Maintenance (1 of 2)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Army civilian employee records are created via an interface with ACPERS on a nightly basis. In addition to this interface, GFEBS will receive Division 32 National Guard employee records from DCPS. These interfaces will execute specific personnel processes such as, hiring, terminating, leaves of absence, returns from leaves of absence, and rehiring. The DCPS interface will execute a single personnel process, hiring.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Both interfaces will update employee records and provide data to meet manpower reporting requirements. Manpower reporting enables the Army to understand the composition of its workforce and assist in decisions on workforce staffing and funding decisions.",
      },
    ],
    image: image3,
    width: imageSize,
  },
  {
    index: 3,
    title: "Overview of Employee Record Maintenance (2 of 2)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "In the event that an employee records needs to be manually created, (i.e. civilian personnel action not yet processed or employee is not an Army civilian), the employee record upload extension can be used to mass create or change employee master records in GFEBS. When manually creating or changing an employee record, the record may be locked due to interface processing actions. A record is locked when another user is updating the same record.",
      },
      {
        type: "space",
        height: "1em",
      },

      {
        type: "paragraph",
        text: "Note: GFEBS does not generate or send actual personnel actions to the personnel system. The LOA does not come from an external system and must be entered by site end users.",
      },
    ],
    image: image4,
    width: imageSize,
  },
  {
    index: 3,
    title: "Procedures to Maintaining Employee Records Identify Employee Records for Maintenance",
    layout: "standard",
    content: [
      {
        type: "list",
        title: "Identify Employee Records for Maintenance",
        items: [
          "Use GFEBS reports HR Master Data Report in ECC (Transaction Code: ZSCM_PAR1) and BI HR Master Data Report to identify which employee records require maintenance.",
        ],
      },
      {
        type: "list",
        title: "Manually Maintain Master Employee record in GFEBS",
        items: [
          "To manually maintain individual employee records in GFEBS, system roles HR Employee Maintainer, or Payroll Corrections and HR LOA Processor should be assigned.",
          "Transaction Code PA30 – Maintain HR Master Data is used by the aforementioned roles to create, change or display a record. Transaction Code PA40 – Personnel Actions can also be used for similar actions.",
        ],
      },
    ],
    image: image5,
    width: imageSize,
  },
  {
    index: 4,
    title: "Transaction Code: PA30 Maintain HR Master Data (1 of 2)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "T Code PA30 allows users to perform personnel actions derived through infotypes such as actions, organizational assignment, personnel data, and etc.",
      },
      {
        type: "space",
        height: "2em",
      },
      {
        type: "paragraph",
        text: "This screenshot is the initial screen for PA30 – Maintain HR Master Data.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "After selecting Actions and clicking on the 'Create' icon, the user will be taken to the Create Actions Infotype screen to select the type of action being entered. ",
      },
    ],
    image: image6,
    height: "300px",
    width: imageSize,
  },
  {
    index: 5,
    title: "Transaction Code: PA30 Maintain HR Master Data (2 of 2)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "When manually entering an Action in HR, the user will automatically be taken through each Infotype screen and will have to decide if anything on that screen needs to be updated or if they can skip that screen and move to the next. ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Once a record has been created, the header containing the employee’s Personnel Number, Name, Personnel Area, Employee Group, Sub Group, and Status will be displayed on each Infotype screen. ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "NOTE: If upon creating or changing the record, the employee group becomes <> 1 and employee subgroup becomes <> U0 or U7 and a valid PDN no longer exists for the LOA Start Date, the Transmit to DCPS Indicator changes from a ‘Y’ to a defaulted ‘N’ value and a warning message will be displayed on the screen ‘Transmit to DCPS updated based on inputted data’.",
      },
    ],
    image: image8,
    height: "300px",
    width: imageSize,
  },
  {
    index: 6,
    title: "PA30 Maintain HR Master Data: Demonstration",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The Maintain HR Master Data demonstration guides you through creating a new record in GFEBS ECC. The demonstration is a guided practical exercise designed to give users visual confirmation of necessary steps to operating in GFEBS ECC and creating new employee records.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Click the button to begin.",
      },
      {
        type: "link",
        text: "Run Demonstration",
        path: "https://ssilrc.army.mil/resources/FMS/GFEBS/L436C/ECC_Maintain%20HR%20Report%20-%20DEMO/index.html",
      },
    ],
  },
  {
    index: 7,
    title: "PA30 Maintain HR Master Data: Simulation",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "The Maintain HR Master Data simulation is a practical exercise that allows students to guide themselves through creating new employee records at their own pace in GFEBS ECC. To maximize learning value, students should resort to using the hint function on a limited basis. This simulation is a measurement of knowledge gained from module material and the demonstration exercise. ",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "Click the button to begin.",
      },
      {
        type: "link",
        text: "Run Simulation",
        path: "https://ssilrc.army.mil/resources/FMS/GFEBS/L436C/ECC_Maintain%20HR%20Report%20%20SIM/index.html",
      },
    ],
  },
  {
    index: 8,
    title: "Employee Record Upload Tool (1 of 3)",
    layout: "standard",
    content: [
      {
        type: "paragraph",
        text: "Users can execute mass updates (create or change) of multiple employee master records via a spreadsheet upload in GFEBS. Use Transaction Code; ZSCM_EMPL_MTCE",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "This mass upload has edit functionality which means it can be used to update one or more fields without overwriting the other fields that are not being updated. An asterisk can be entered in any field to remove a value that previously existed and make that field blank.",
      },
    ],
    image: image9,
    height: "300px",
    width: imageSize,
  },
  {
    index: 9,
    title: "Employee Record Upload Tool (2 of 3)",
    layout: "standard",
    content: [
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "The employee record upload tool requires a Microsoft Excel spreadsheet, “HR Master Record Upload Template” for entering the employee data.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "The same template will be used by both the HR Employee Maintainer for both creating and changing the employee record and the Payroll Corrections and HR LOA Processor for adding or changing the LOA.",
      },
      {
        type: "space",
        height: "1em",
      },
      {
        type: "paragraph",
        text: "The spreadsheet template must remain in the established for format; deleting or moving columns will cause the upload to fail.",
      },
    ],
    image: image10,
    height: "300px",
    width: imageSize,
  },
  {
    index: 10,
    title: "Employee Record Upload Tool (3 of 3)",
    layout: "standard",
    content: [
      {
        type: "list",
        title: "The extension that processes the spreadsheet upload has the following functions:",
        items: [
          "Automatically navigate the various Infotype screens to enter the spreadsheet data in the correct fields.",
          "Perform the required derivations for fund center and personnel area.",
          "Confirm that master data entered on the spreadsheet is valid in GFEBS. ",
          "Automatically create a cost center/ activity type rate of zero if a new combination of cost center and activity type is being entered. ",
          "Automatically convert all text to upper case regardless of case entered; the upload tool is not case sensitive and will not fail validation due to varying case usage. ",
          "Add a hot button that allows students to access this example of the spreadsheet:",
        ],
      },
    ],
    image: image11,
    height: "100px",
    width: "125px",
  },
  {
    index: 11,
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
const Lesson5Quiz = {
  questions: [
    {
      question:
        "Manpower reporting enables the Army to understand the _____________ of its workforce and assist in decisions on workforce staffing and funding decisions.",
      answers: ["composition", "demographics", "length of service", "educational background"],
      questionType: "text",
      correctAnswer: "1",
      answerSelectionType: "single",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    },
    {
      question:
        "GFEBS does not generate or send actual personnel actions to the personnel system. The LOA does not come from an external system and must be entered by site end users.",
      questionType: "text",
      answers: ["True", "False"],
      correctAnswer: "1",
      answerSelectionType: "single",
    },

    {
      question:
        "Transaction Code PA30 is used to create, change or display a record. What other transaction codes can be used for similar actions?",
      answers: ["Only PA30", "PA70", "PA40", "All the above"],
      questionType: "text",
      correctAnswer: "3",
      answerSelectionType: "single",
    },
    {
      question:
        "Users can execute mass updates (create or change) of multiple employee master records via a spreadsheet upload in GFEBS. What transaction code is to access the upload tool?",
      answers: ["ZSCM_EMPL_MTCE", "ZSCM_PAR1", "ZSSC_EMPL_MPAR1", "ZSCM_EMP_MTBE"],
      questionType: "text",
      correctAnswer: "1",
      answerSelectionType: "single",
    },
    {
      question:
        "What are the functions performed by the extension in GFEBS that processes mass uploaded employee data?",
      answers: [
        "Confirm master data ",
        "Create a cost center/ activity type ",
        "Convert all text to upper case ",
        "All the above",
      ],
      questionType: "text",
      correctAnswer: "4",
      answerSelectionType: "single",
    },
  ],
};
export { Lesson5Data, Lesson5Quiz };
