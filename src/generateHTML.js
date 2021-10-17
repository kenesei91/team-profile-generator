// create the Manager card
const generateManager = function (manager) {
    return `
    <div class="card col" style="width: 18rem">
        <div class="card-body card-header">
            <h4 class="card-title">${manager.name}</h5>
            <h5 class="card-subtitle mb-2 text-muted">${role}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Email: <a href="mailto:${manager.email}">${manager.email}</a>
            </li>
            <li class="list-group-item">Employee ID: ${manager.id}</li>
            <li class="list-group-item">Office: ${manager.officeNumber}</li>
        </ul>
    </div>
    `;
}

// create the Intern card
const generateIntern = function (intern) {
    return `
    <div class="card col" style="width: 18rem">
        <div class="card-body card-header">
            <h4 class="card-title">${intern.name}</h5>
            <h5 class="card-subtitle mb-2 text-muted">${intern.role}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Email: <a href="mailto:${intern.email}">${intern.email}</a>
            </li>
            <li class="list-group-item">Employee ID: ${intern.id}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
    `;
}

// create the Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="card col" style="width: 18rem">
        <div class="card-body card-header">
            <h4 class="card-title">${engineer.name}</h5>
            <h5 class="card-subtitle mb-2 text-muted">${engineer.role}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
            </li>
            <li class="list-group-item">Employee ID: ${engineer.id}</li>
            <li class="list-group-item">
              GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
            </li>
        </ul>
    </div>
    `;
}