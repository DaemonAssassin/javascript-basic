function Student(rollNo) {
  this.rollNo = rollNo;
  this.doWork = function () {
    console.log("Work");
  };
}

console.log(Student.constructor);

const MyStudent = new Function(
  "rollNo",
  `this.rollNo = rollNo;
  this.doWork = function () {
    console.log("Work");
  };`
);

const s2 = new MyStudent(33);
console.log(MyStudent.constructor);
