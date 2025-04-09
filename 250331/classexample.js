class Student {
  //Field
  name;
  grade;
  age;
  //Constructor생성자함수영역
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
}
const studentC = new Student("Romeo", "B", 21);
console.log(studentC);
