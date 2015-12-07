var GradeBook = require('../grade_book');
var Student = require('../student');

describe('getStudents', function() {
  it('returns all students in the GradeBook', function() {
    var gradeBook = new GradeBook();
    expect(gradeBook.getStudents()).toEqual({});
  });
});

describe('addStudent', function() {
  it('adds a student to the gradebook with no scores entered', function() {
    var student = new Student('Best', 'Student');
    var gradeBook = new GradeBook();
    gradeBook.addStudent(student);

    expect(gradeBook.getStudents()).toEqual({'Best Student': []});
  });
});

describe('getScoresForStudent', function() {
  it('returns the set of scores for a given student', function() {
    var student = new Student('Best', 'Student');
    var gradeBook = new GradeBook();
    gradeBook.addStudent(student);

    expect(gradeBook.getScoresForStudent(student)).toEqual([]);
  });

  it('returns undefined if the student does not exist', function() {
    var gradeBook = new GradeBook();

    expect(gradeBook.getScoresForStudent(new Student('Best', 'Student'))).toBe(undefined);
  });
});

describe('addScoreForStudent', function() {
  it('returns true when the student could be found and the score is added', function() {
    var student = new Student('Best', 'Student');
    var gradeBook = new GradeBook();
    gradeBook.addStudent(student);

    gradeBook.addScoreForStudent(student, 100);
    gradeBook.addScoreForStudent(student, 99);
    gradeBook.addScoreForStudent(student, 100);

    expect(gradeBook.getScoresForStudent(student)).toEqual([100,99,100]);
  });

  it('throws an error when the student does not exist', function() {
    var student = new Student('Missing', 'Student');
    var gradeBook = new GradeBook();

    expect(function(){
      gradeBook.addScoreForStudent(student, 100);
    }).toThrow('Student "Missing Student" not found');
  });
});
