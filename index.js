const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

/*

when the app starts, the user is prompted to enter team managers 

    - name
    - employee id 
    - email address
    - office number 

when this prompt is completed a menu will be displayed with options to choose to:

    - Add an engineer
    - Add an intern 
    - Or to finish building the team 

on selecing engineer option, user is prompted to enter the following, and then taken back to menu

    - engineers name
    - id
    - email
    - github user name

on selecing intern option, user is prompted to enter the following, and then taken back to menu

    - interns name
    - id
    - email
    - school

on selecting finish building team, a html file is generated and saved to output directory.

*/

// creating an empty array to store the team objects

const team = [];

// creating array of objects to store all the questions to ask the user

const questions = [
  {
    manager: [
      {
        type: "input",
        name: "manager__name",
        message: "Enter your full name ",
        validate(name) {
          if (name.includes(" ")) {
            return true;
          } else {
            console.log("Enter your full name");
          }
        },
      },

      {
        type: "input",
        name: "manager__id",
        message: "Enter your Employee Id",
      },

      {
        type: "input",
        name: "manager__email",
        message: "Enter your Email Address",
        default: () => {},
        validate(email) {
          const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            email
          );

          if (valid) {
            console.log("\n Valid Email Entered");
            return true;
          } else {
            console.log("\n Enter a valid Email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "manager__office__number",
        message: "Enter your office number",
      },
    ],

    engineer: [
      {
        type: "input",
        name: "engineer__name",
        message: "Enter the Engineers full name",
        validate(name) {
          if (name.includes(" ")) {
            return true;
          } else {
            console.log("Enter the Engineers full name");
          }
        },
      },
      {
        type: "input",
        name: "engineer__id",
        message: "Enter the Engineers Id",
      },

      {
        type: "input",
        name: "engineer__email",
        message: "Enter the Engineers Email Address",
        default: () => {},
        validate(email) {
          const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            email
          );

          if (valid) {
            console.log("\n Valid Email Entered");
            return true;
          } else {
            console.log("Enter a valid Email address");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "engineer__github",
        message: "Enter the Engineers Github username",
      },
    ],

    intern: [
      {
        type: "input",
        name: "intern__name",
        message: "Enter your full name",
        validate(name) {
          if (name.includes(" ")) {
            return true;
          } else {
            console.log("Enter the Interns full name");
          }
        },
      },
      {
        type: "input",
        name: "intern__id",
        message: "Enter the Interns Id",
      },

      {
        type: "input",
        name: "intern__email",
        message: "Enter the Interns Email Address",
        default: () => {},
        validate(email) {
          const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            email
          );

          if (valid) {
            console.log("Valid Email Entered");
            return true;
          } else {
            console.log("Enter a valid Email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "intern__school",
        message: "Enter the Interns School",
      },
    ],
  },
];

// function to bring up application menu

const menuOpts = [
  {
    type: "list",
    name: "menu__options",
    choices: ["ADD AN ENGINEER", "ADD AN INTERN", "BUILD TEAM"],
    default: "BUILD TEAM",
  },
];

// function to refactor switch statement

const menu = (choice) => {
  console.log(choice.menu__options);

  switch (choice.menu__options) {
    case "ADD AN ENGINEER":
      addEngineer();
      break;
    case "ADD AN INTERN":
      addIntern();
      break;
    default:
      buildTeam();
  }
};

// function to add an engineer

const addEngineer = async () => {
  const engineerQs = questions[0]["engineer"];

  console.log(engineerQs);

  const { engineer__name, engineer__id, engineer__email, engineer__github } =
    await inquirer.prompt(engineerQs);

  team.push(
    new Engineer(
      engineer__name,
      engineer__id,
      engineer__email,
      engineer__github
    )
  );

  const menuOpt = await inquirer.prompt(menuOpts);

  menu(menuOpt);
};

const addIntern = async () => {
  const internQs = questions[0]["intern"];

  console.log(internQs);

  const { intern__name, intern__id, intern__email, intern__school } =
    await inquirer.prompt(internQs);

  team.push(
    new Intern(intern__name, intern__id, intern__email, intern__school)
  );

  const menuOpt = await inquirer.prompt(menuOpts);

  menu(menuOpt);
};

// function to build team

const buildTeam = () => {
  console.log("Team Built");
  console.log(team);

  const html = render(team);

  console.log(html);
};

(async function () {
  const managerQs = questions[0]["manager"];

  const {
    manager__name,
    manager__id,
    manager__email,
    manager__office__number,
  } = await inquirer.prompt(managerQs);

  console.log("name: ", manager__name);
  console.log("id: ", manager__id);
  console.log("email: ", manager__email);
  console.log("office number: ", manager__office__number);

  // pushing new object to team array of objects

  team.push(
    new Manager(
      manager__name,
      manager__id,
      manager__email,
      manager__office__number
    )
  );

  const menuOpt = await inquirer.prompt(menuOpts);

  console.log(menuOpt);

  // invoking the menu function
  menu(menuOpt);
})();
