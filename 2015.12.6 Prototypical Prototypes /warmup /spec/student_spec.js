var Student = require('../student');

describe('#getFirstName', function() {
  it('returns the firstName of the student', function() {
    var awesomeStudent = new Student('Awesome', 'Student');
    expect(awesomeStudent.getFirstName()).toEqual('Awesome');
  });
});

describe('#getLastName', function() {
  it('returns the lastName of the student', function() {
    var awesomeStudent = new Student('Awesome', 'Student');
    expect(awesomeStudent.getLastName()).toEqual('Student');
  });
});

describe('#fullName', function() {
  it('returns the first and last name of the student separated by a space', function() {
    var awesomeStudent = new Student('Awesome', 'Student');
    expect(awesomeStudent.fullName()).toEqual('Awesome Student');
  });
});

describe('modification by outside entities', function() {
  it('does not allow modification of the firstName', function() {
    var awesomeStudent = new Student('Awesome', 'Student');
    awesomeStudent.firstName = 'foobar';
    expect(awesomeStudent.getFirstName()).toEqual('Awesome');
  });

  it('does not allow modification of the lastName', function() {
    var awesomeStudent = new Student('Awesome', 'Student');
    awesomeStudent.lastName = 'foobar';
    expect(awesomeStudent.getLastName()).toEqual('Student');
  });
});
