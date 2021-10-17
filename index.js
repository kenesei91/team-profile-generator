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
const userPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter employee name:',
            name: 'name',
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                }else {
                    return 'Please enter employee name';
                }
            }
        },

        {
            type: 'input',
            message: 'Please enter your email address:',
            name: 'email',
            validate: function (emailInput) {
                if (emailInput.includes('@')) {
                    return true;
                }else {
                    return 'Please enter a valid email address';
                }
            }
        },

        {
            type: 'input',
            message: 'Please enter your employee ID:',
            name : 'id',
            validate: function (idInput) {
                if (idInput) {
                    return true;
                }else {
                    return 'Please enter an employee ID';
                }
            }
        },

        {
            type: 'list',
            message: 'Please select your role:',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
            default: 'Engineer'
        }
    ])

    // create prompt for role selected as Manager, Intern or Engineer
    .then(userAnswer => {
        if (userAnswer.role === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    messsage: 'Please enter your office number',
                    validate: officeInput => {
                        if (officeInput) {
                            return true;
                        }else {
                            return 'Please enter your office number';
                        }
                    }
                }
            ])
            .then(response => {
                //console.log(response.office);
                const managers = new Manager (userAnswer.name, userAnswer.email, userAnswer.id, userAnswer.role, response.office);
                myTeamArray.push(managers);
                additionalEmployee();
            })
        }else if (userAnswer.role === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    messsage: 'Please enter your Github username',
                    name: 'github',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        }else {
                            return 'Please enter your github username';
                        }
                    }
                }
            ])
            .then(response => {
                //console.log(response.github);
                const Engineers = new Engineer (userAnswer.name, userAnswer.email, userAnswer.id, userAnswer.role, response.github);
                myTeamArray.push(Engineers);
                additionalEmployee();
            })
        }else if (userAnswer.role === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    messsage: 'Please enter your school name',
                    name: 'school',
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        }else {
                            return 'Please enter your school name';
                        }
                    }
                }
            ])
            .then(response => {
                //console.log(response.school);
                const interns = new Intern (userAnswer.name, userAnswer.email, userAnswer.id, userAnswer.role, response.school);
                myTeamArray.push(interns);
                additionalEmployee();
            })
        }else {
            const employees = new Employee (userAnswer.name, userAnswer.email, userAnswer.id, userAnswer.role);
            myTeamArray.push(employees);
            
        }

        // add additional employee
        const additionalEmployee = () => {
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'confirmAdditionalEmployee',
                    message: 'Would you like to add more members to the team?',
                    default: true
                }
            ])
            .then(response => {
                if (response.confirmAdditionalEmployee === true) {
                    userPrompts(myTeamArray);
                }else {
                    console.log('team', myTeamArray);
                }
            })
        }

    })
}; 

userPrompts()
    .then(teamData => {
        return generateHTML(myTeamArray)
    })
    .then(htmlPage => {
        return writeFile(htmlPage)
    })
    

// const writePaage = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//         // if there is an error 
//         if (err) {
//             console.log(err);
//             return;
//         // when the profile has been created 
//         } else {
//             console.log("Your team profile has been successfully created! Please check out the index.html")
//             console.log(writePaage);
//         }
//     })
// }; 


// init()
// .then(myTeamArray => {
//     return generateHTML(myTeamArray);
// })
// .then(pageHTML => {
//     return writeFile(pageHTML);
// })
// .catch(err => {
// console.log(err);
// });   








