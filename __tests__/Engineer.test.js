// use the Engineer constructor 
const Engineer = require('../lib/Engineer');

// create engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Ken', 'keneilo91@yahoo.com', 9203, 'kenesei91');
    
    expect(engineer.github) .toEqual(expect.any(String));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
});

// gets github from getGithub()
test('gets engineer github username', () => {
    const engineer = new Engineer('Ken', 'keneilo91@yahoo.com', 9203, 'Engineer', 'kenesei91');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Ken', 'keneilo91@yahoo.com', 9203, 'Engineer');

    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});