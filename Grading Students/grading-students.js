function gradingStudents(grades) {
  // Write your code here

  let newGrades = [];
  for (let i = 0; i < grades.length; i++) {
    newGrades[i] =
      grades[i] < 38 || grades[i] % 5 < 3
        ? grades[i]
        : grades[i] + (5 - (grades[i] % 5));
  }
  return newGrades;
}
