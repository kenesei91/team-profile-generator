const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, email, id, office){
        // super function for employee parameters
        super (name, email, id)
        this.office = office;
    }

    getOfficeNo(){
        return this.office;
    }

    getRole() {
        return `Manager`
    }
}
module.exports = Manager;