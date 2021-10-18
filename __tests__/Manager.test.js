/// use the Manager constructor 
const Manager = require('../lib/Manager');

// create manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Ken', 'keneilo91@yahoo.com', 9203, 256);
    
    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
});

// gets office number from getOfficeNo()
test('gets office number', () => {
    const manager = new Manager('Ken', 'keneilo91@yahoo.com', 9203, 256);

    expect(manager.getOfficeNo()).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets employee role', () => {
    const manager = new Manager('Ken', 'keneilo91@yahoo.com', 9203, 'Manager');

    expect(manager.getRole()).toEqual("Manager");
}); 