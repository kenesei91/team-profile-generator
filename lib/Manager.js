const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, email, id, role, office){
        // super function for employee parameters
        super (name, email, id, role)
        this.office = office;
    }

    getOfficeNo(){
        return this.office;
    }
}
module.exports = Manager;