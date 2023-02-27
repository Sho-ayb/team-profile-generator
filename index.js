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

// creating array of objects to store all the questions to ask the user

const questions = [
  {
    manager: [
      {
        type: "input",
        name: "manager__name",
        message: "Enter your full name",
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
        id: "manager__id",
        message: "Enter your Employee Id",
      },

      {
        type: "input",
        email: "manager__email",
        message: "Enter your Email Address",
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
        officeNumber: "manager__office__number",
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
        id: "engineer__id",
        message: "Enter the Engineers Id",
      },

      {
        type: "input",
        email: "engineer__email",
        message: "Enter the Engineers Email Address",
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
        github: "engineer__github",
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
        id: "intern__id",
        message: "Enter the Interns Id",
      },

      {
        type: "input",
        email: "intern__email",
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
        school: "intern__school",
        message: "Enter the Interns School",
      },
    ],
  },
];
