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
            content += ` 
            <div class="col-12 col-sm-6 col-lg-4">
            <div class="card text-white mx-5 mb-3" style="max-width: 18rem;">
            <div class="card-header bg-info text-center h3">${tempEmployee.name}</div>
            <div class="card-body" style="color:black">
                <h5 class="card-title text-center"> Manager </h5>
                <p class="card-text"> 
                ID: ${tempEmployee.id} <hr/> </br>
                Email: <a href="mailto:${tempEmployee.email}"> ${tempEmployee.email}</a> <hr/> </br>
                Office Number: ${tempEmployee.officenumber}. <hr/> </p>
            </div>
        </div>
        </div>`;
        } else if (employeeType == "engineer") {
            content += ` 
            <div class="col-12 col-sm-6 col-lg-4">
            <div class="card text-white mx-5 mb-3" style="max-width: 18rem;">
            <div class="card-header bg-info text-center h3"> ${tempEmployee.name} </div>
            <div class="card-body" style="color:black">
                <h5 class="card-title text-center">Engineer</h5>
                <p class="card-text">  ID: ${tempEmployee.id} <hr/> </br>
               Email: <a href="mailto: ${tempEmployee.email}"> ${tempEmployee.email}</a> <hr/> </br>
               Github: <a href= "https://github.com/${tempEmployee.github}"> github </a> <hr/>
            </p>
            </div>
        </div>
        </div>`;
        }
        else if (employeeType == "intern") {
            content += ` 
            <div class="col-12 col-sm-6 col-lg-4">
            <div class="card text-white mx-5 mb-3" style="max-width: 18rem;">
            <div class="card-header bg-info text-center h3"> ${tempEmployee.name}</div>
            <div class="card-body" style="color:black">
                <h5 class="card-title text-center">Intern</h5>
                <p class="card-text">
                ID: ${tempEmployee.id} <hr/> </br>
                Email: <a href="mailto:${tempEmployee.email}"> ${tempEmployee.email}</a> <hr/> </br>
                School: ${tempEmployee.school}. <hr/> </p>
                </p>
            </div>
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
