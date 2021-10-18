// npm packages and modules
//const fs = require('fs');
const inquirer = require("inquirer");

// link to generated page
const generateHTML = require("./src/generateHTML");

// consructor functions
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const writeFile = require("./src/writefile");

let manager = [];
let intern = [];
let engineer = [];
let myTeamArray = { manager, engineer, intern };

function userPrompt() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "employee",
        message: "Enter employee's name",
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's email address?",
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee's id",
      },
      {
        type: "list",
        name: "role",
        message: "Select employee's role",
        choices: ['Manager', 'Engineer', 'Intern'],
        default: "Engineer"
      },
      
    ])
    .then(({ employee, id, email, role }) => {
      if (role === "Manager") {
        return inquirer
          .prompt([
            {
              type: "text",
              name: "office",
              message: "Please enter Manager's office number?",
            },
            {
              type: "confirm",
              name: "addNewMember",
              message: "Would you like to add another employee?",
              default: true,
            },
          ])
          .then(({ office, addNewMember }) => {
            manager.push(new Manager(employee, email, id, office));
            // console.log(employeeArr)
            if (addNewMember) {
              return userPrompt();
            }
          });
      } else if (role === "Engineer") {
        return inquirer
          .prompt([
            {
              type: "text",
              name: "github",
              message: "Please enter the Engineer's Github username?",
            },
            {
              type: "confirm",
              name: "addNewMember",
              message: "Would you like to add another employee?",
              default: true,
            },
          ])
          .then(({ github, addNewMember }) => {
            engineer.push(new Engineer(employee, email, id, github));
            // console.log(employeeArr)
            if (addNewMember) {
              return userPrompt();
            }
          });
      } else if (role === "Intern") {
        return inquirer
          .prompt([
            {
              type: "text",
              name: "school",
              message: "Please enter the Intern's school?",
            },
            {
              type: "confirm",
              name: "addNewMember",
              message: "Would you like to add another employee?",
              default: true,
            },
          ])
          .then(({ school, addNewMember }) => {
            intern.push(new Intern(employee, email, id, school));
            // console.log(employeeArr)
            if (addNewMember) {
              return userPrompt();
            }
          });
      }
    });
}

userPrompt()
  .then((teamData) => {
    return generateHTML(myTeamArray);
  })
  .then((htmlPage) => {
    return writeFile(htmlPage);
  });
