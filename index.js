// npm packages and modules
//const fs = require('fs');
const inquirer = require('inquirer');

// link to generated page
const generateHTML = require('./src/generateHTML');

// consructor functions
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const writeFile = require('./src/writefile');

// my team array
const myTeamArray = [];

// begin prompts for users
function userPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employee Name ?: ',
            name: 'name',
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter employee name.';
                }
            }
        },

        {
            type: 'input',
            message: 'What is the employee email address ?: ',
            name: 'email',
            validate: function (emailInput) {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter employee email address.';
                }
            }
        },

        {
            type: 'input',
            message: 'What is the employee ID ?: ',
            name: 'id',
            validate: function (idInput) {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter employee ID.';
                }
            }
        },



        {
            type: 'list',
            message: 'Select desired role: ',
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"],
            default: 'Engineer'

        },

    ])
    .then(userAnswer => {

            if (userAnswer.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'office',
                        message:'What is your office number ?:',
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                return 'Please enter your office number.';
                            }
                        }
                        
                    }
                ])
                .then(response => {
                    const Managers = new Manager (userAnswer.name, userAnswer.email, userAnswer.id, userAnswer.role, response.office)
                    myTeamArray.push(Managers);
                    addNewMembers()
                })
            }else if(userAnswer.role === 'Engineer' ){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'gitHub',
                        message:'What is your Github name ?:',
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                return 'Please enter your gitHub username.';
                            }
                        }
                    }
                ])
                .then(response => {
                    const Engineers = new Engineer (userAnswer.name, userAnswer.email, userAnswer.id, userAnswer.role, response.gitHub)
                    myTeamArray.push(Engineers);
                    addNewMembers()
                })
            } else if (userAnswer.role === 'Intern'){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message:'What school did you attend ?:', 
                        validate: function (schoolInput) {
                            if (schoolInput) {
                                return true;
                            } else {
                                return 'Please enter name of school attended.';
                            }
                        }

                    }
                ])
                .then(response =>{
                    const interns = new Intern (userAnswer.name, userAnswer.email, userAnswer.id, userAnswer.role, response.school)
                    myTeamArray.push(interns);
                    addNewMembers()
                })
            }

            else {
                const employees = new Employee (userAnswer.name, userAnswer.email, userAnswer.id, userAnswer.role);
                myTeamArray.push(employees);
                addNewMembers()

            }

            //add option 

            function addNewMembers() {
                inquirer.prompt([
                    {
                        type:'confirm',
                        name: 'confirmAddNewMembers',
                        message:'Would you like to add another Employee?'
                    }
                ])
                .then(response =>{
                    if(response.confirmAddNewMembers === true){
                        userPrompt(myTeamArray);
                    }else{
                        console.log('team', myTeamArray);
                    }
                })
            }
    })
}


userPrompt();    

// .then(myTeamArray => {
//     return generateHTML(myTeamArray);
// })
// .then(pageHTML => {
//     return writeFile(pageHTML);
// })
// .catch(err => {
//     console.log(err);
// });   








