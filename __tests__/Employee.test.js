// use the Employee constructor 
const Employee = require('../lib/Employee');

// create the employee object 
test('creates an employee object', () => {
    const employee = new Employee('Nicole', 'nicole.elisaw@gmail.com', 90,);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
});

// gets id from getName() 
test('gets employee name', () => {
    const employee = new Employee('Ken', 'keneilo@yahoo.com', 9203);

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee id', () => {
    const employee = new Employee('Ken', 'keneilo91@yahoo.com', 9203);

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Ken', 'keneilo91@yahoo.com', 9203);

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Ken', 'keneilo91@yahoo.com', 9203, 'Employee');

    expect(employee.getRole()).toEqual("Employee");
});