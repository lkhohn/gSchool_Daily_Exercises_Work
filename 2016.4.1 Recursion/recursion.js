function countStudents(students){
  if(students.length === 1) {
    return 1;
  } else {
    return countStudents(students.slice(students,1)) + 1;
  }
}
console.log(countStudents(g17AfterHiringDay));
