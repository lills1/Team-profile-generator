

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
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
            <div class="card text-white mb-3" style="max-width: 18rem;">
                <div class="card-header bg-info">Header</div>
                <div class="card-body" style="color:black">
                    <h5 class="card-title">Info card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                </div>
            </div>
    </body>
    
    </html>
  `;
}



module.exports = generateMarkdown;
