const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let employees = [];

// TODO: Create a function to initialize app
function createManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the team manager's name?",
                name: "managerName",
            },

            {
                type: "input",
                message: "What is the team manager's id?",
                name: "managerId",
            },
            {
                type: "input",
                message: "What is the team manager's email",
                name: "managerEmail",
            },
            {
                type: "input",
                message: "What is the team manager's office number?",
                name: "managerNumber",
            },
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "teamMembers",
                choices: ["Engineer", "Intern", "I don't want to add any more"]

            }
        ])
        .then((answers) => {
            console.log(answers);
            tempManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
            // console.log(tempManager);
            employees.push(tempManager);
            fs.writeFile('employees.json', JSON.stringify(employees), (err) =>
                err ? console.log(err) : ""
            )
            const htmlPageContent = generateMarkdown(employees);
            fs.writeFile('employees.html', htmlPageContent, (err) =>
                err ? console.log(err) : ""
            )
            // console.log(answers.teamMembers);
            if (answers.teamMembers == "Engineer") {
                createEngineer();
            } else if (answers.teamMembers == "Intern") {
                createIntern();
            }
        });

}

function createEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "engineerName",
            },

            {
                type: "input",
                message: "What is the engineer's id?",
                name: "engineerId",
            },
            {
                type: "input",
                message: "What is the team engineer's email",
                name: "engineerEmail",
            },
            {
                type: "input",
                message: "What is the enginner's github?",
                name: "engineerGithub",
            },
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "teamMembers",
                choices: ["Engineer", "Intern", "I don't want to add any more"]

            }
        ])
        .then((answers) => {
            // console.log(answers);
            tempEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            // console.log(tempEngineer);
            employees.push(tempEngineer);
            fs.writeFile('employees.json', JSON.stringify(employees), (err) =>
                err ? console.log(err) : ""
            )
            const htmlPageContent = generateMarkdown(employees);
            fs.writeFile('employees.html', htmlPageContent, (err) =>
                err ? console.log(err) : ""
            )
            // console.log(answers.teamMembers);
            if (answers.teamMembers == "Engineer") {
                createEngineer();
            } else if (answers.teamMembers == "Intern") {
                createIntern();
            }
        });

}

function createIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "internName",
            },

            {
                type: "input",
                message: "What is the intern's id?",
                name: "internId",
            },
            {
                type: "input",
                message: "What is the team engineer's email",
                name: "internEmail",
            },
            {
                type: "input",
                message: "What is the intern's school?",
                name: "internSchool",
            },
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "teamMembers",
                choices: ["Engineer", "Intern", "I don't want to add any more"]

            }
        ])
        .then((answers) => {
            // console.log(answers);
            tempIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            // console.log(tempIntern);
            employees.push(tempIntern);
            fs.writeFile('employees.json', JSON.stringify(employees), (err) =>
                err ? console.log(err) : console.log('successfully created file!')
            )
            const htmlPageContent = generateMarkdown(employees);
            fs.writeFile('employees.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('successfully created file!')
            )
            // console.log(answers.teamMembers);
            if (answers.teamMembers == "Engineer") {
                createEngineer();
            } else if (answers.teamMembers == "Intern") {
                createIntern();
            }
        });

}


createManager();
