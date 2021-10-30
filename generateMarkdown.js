const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const intern = require("./lib/Intern");
const engineer = require("./lib/Engineer");

// TODO: Create a function to generate markdown for README
function generateMarkdown(employees) {
    content = `
    <!DOCTYPE html>
    <html>
    
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"> 
    </head>
    
    <body>
        <header>
            <div class="jumbotron text-center bg-dark" style="color:white">
                <h1 class="display-5"> My team</h1>
            </div>
        </header>
        <div class="container">
        <div class="row">`;
    employees.forEach(tempEmployee => {
        // console.log(tempEmployee);
        let employeeType = tempEmployee.hasOwnProperty('officenumber') ? "manager" : (tempEmployee.hasOwnProperty('github') ? "engineer" : (tempEmployee.hasOwnProperty('school') ? "intern" : "unknown"));
        // console.log(employeeType);
        if (employeeType == "manager") {
            content += ` <div class="card text-white mx-5 mb-3" style="max-width: 18rem;">
            <div class="card-header bg-info">${tempEmployee.name}</div>
            <div class="card-body" style="color:black">
                <h5 class="card-title"> Manager </h5>
                <p class="card-text"> 
                ID: ${tempEmployee.id} </br>
                Email: ${tempEmployee.email}</br>
                Office Number:${tempEmployee.officenumber}.</p>
            </div>
        </div>`;
        } else if (employeeType == "engineer") {
            content += ` <div class="card text-white mx-5 mb-3" style="max-width: 18rem;">
            <div class="card-header bg-info">${tempEmployee.name}</div>
            <div class="card-body" style="color:black">
                <h5 class="card-title">Engineer</h5>
                <p class="card-text">  ID: ${tempEmployee.id} </br>
                Email: ${tempEmployee.email}</br>
                Office Number:${tempEmployee.github}.</p>.</p>
            </div>
        </div>`;
        }
        else if (employeeType == "intern") {
            content += ` <div class="card text-white mx-5 mb-3" style="max-width: 18rem;">
            <div class="card-header bg-info">${tempEmployee.name}</div>
            <div class="card-body" style="color:black">
                <h5 class="card-title">Intern</h5>
                <p class="card-text">
                ID: ${tempEmployee.id} </br>
                Email: ${tempEmployee.email}</br>
                Office Number:${tempEmployee.school}.</p>
                </p>
            </div>
        </div>`;
        }
    });
    content += `
    </div>
    </body>
    </div>
    </html>
  `;
    return content;
}




module.exports = generateMarkdown;
