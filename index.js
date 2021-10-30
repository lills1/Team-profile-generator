const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

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
                choices: ["Enginner", "Intern", "I don't want to add any more"]

            }
        ])
        .then((answers) => {
            console.log(answers)
            const htmlPageContent = generateMarkdown(answers);
            fs.writeFile('README.md', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('successfully created file!')
            )
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
                choices: ["Enginner", "Intern", "I don't want to add any more"]

            }
        ])
        .then((answers) => {
            console.log(answers)
            const htmlPageContent = generateMarkdown(answers);
            fs.writeFile('README.md', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('successfully created file!')
            )
        });

}

function createEngineer() {
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
                choices: ["Enginner", "Intern", "I don't want to add any more"]

            }
        ])
        .then((answers) => {
            console.log(answers)
            const htmlPageContent = generateMarkdown(answers);
            fs.writeFile('README.md', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('successfully created file!')
            )
        });

}

createManager();
