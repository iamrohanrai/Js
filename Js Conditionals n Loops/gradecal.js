// 90 - a, 80 - b, 70 - c, 60 - d, <60 f

let marks = 91;
let grade;
function calculateGrade(marks) {
  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 80) {
    grade = "B";
  } else if (marks >= 70) {
    grade = "C";
  } else if (marks >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}
console.log(calculateGrade(marks));
