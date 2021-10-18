// use the Intern constructor 
const Intern = require('../lib/Intern');

// creating engineer object  
test('creates an Intern object', () => {
    const intern = new Intern('Ken', 'keneilo91@yahoo.com', 9203, 'LSU');
    
    expect(intern.school) .toEqual(expect.any(String));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
});

// gets school from getSchool()
test('gets intern school', () => {
    const intern = new Intern('Ken', 'keneilo91@yahoo.com', 9203, 'LSU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole() 
test('gets intern role', () => {
    const intern = new Intern('Ken', 9203, 'keneilo91@yahoo.com', 'LSU', Intern);

    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});