const generateCards = teamData => {
 
    const manager = teamData.manager.map(function(map1) {
        let generatedManagerHtml = `
        <div class="card col" style="width: 18rem">
          <div class="card-body card-header">
            <h4 class="card-title">${map1.name}</h5>
            <h5 class="card-subtitle mb-2 text-muted">Engineer</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Email: <a href="mailto:${map1.email}">${map1.email}</a>
            </li>
            <li class="list-group-item">Employee ID: ${map1.id}</li>
            <li class="list-group-item">
              Office Number: ${map1.office}
            </li>
          </ul>
        </div>
        `;
        return generatedManagerHtml;
    });

    const engineer = teamData.engineer.map(function(map1) {
        let generatedEngineerHtml = `
        <div class="card col" style="width: 18rem">
          <div class="card-body card-header">
            <h4 class="card-title">${map1.name}</h5>
            <h5 class="card-subtitle mb-2 text-muted">Engineer</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Email: <a href="mailto:${map1.email}">${map1.email}</a>
            </li>
            <li class="list-group-item">Employee ID: ${map1.id}</li>
            <li class="list-group-item">
              GitHub: <a href="https://github.com/${map1.github}">${map1.github}</a>
            </li>
          </ul>
        </div>
        `;
        return generatedEngineerHtml;
    })

    const intern = teamData.intern.map(function(map1) {
        let generatedInternHtml = `
        <div class="card col" style="width: 18rem">
          <div class="card-body card-header">
            <h4 class="card-title">${map1.name}</h5>
            <h5 class="card-subtitle mb-2 text-muted">Intern</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Email: <a href="mailto:${map1.email}">${map1.email}</a>
            </li>
            <li class="list-group-item">Employee ID: ${map1.id}</li>
            <li class="list-group-item">School: ${map1.school}</li>
          </ul>
        </div>
        `;
        return generatedInternHtml;
    })
    return [manager,engineer,intern];
}



module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <body>
            <nav class="navbar">
                <div class="navbar-header">
                    <span class="navbar-brand mb-0 h1 text-center">My Team</span>
                </div>
            </nav>
    
            <main class="container">
                <div class="row">
                    ${generateCards(templateData)}
                </div>
            </main>
        </body>
        </html>    
        `
}
