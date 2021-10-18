const Employee = require('./Employee');

class Engineer extends Employee{
    constructor (name, email, id, github) {
        // super function for employee parameters
        super(name, email, id)
        this.github = github;
    }

    getGitHub(){
        return this.github;
    }

    getRole() {
        return `Engineer`
    }
}
// export 
module.exports = Engineer;