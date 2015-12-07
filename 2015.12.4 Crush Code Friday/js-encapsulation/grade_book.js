function GradeBook() {
  var students = {};
  return {
    getStudents: function() {
      return students;
    },
    addStudent: function(student) {
      var name = student.fullName();
      students[name] = [];
      return students;
    },
    getScoresForStudent: function(student) {
      var name = student.fullName();
      return students[name];
    },
    addScoreForStudent: function(student, score) {
      var name = student.fullName();
      if (students[name] !== undefined) {
        students[name].push(score);
      } else {
        throw 'Student "' + name + '" not found';
      }
      return students;
    }
  };
}

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = GradeBook;
