const studentA = {
  name: "David",
  grade: "A+",
  age: 27,
  study: function () {
    console.log("열심히 공부함!");
  },
  introduce: function () {
    console.log("안녕하세요!");
  },
};

const studentB = {
  name: "Jane",
  grade: "B+",
  age: 24,
  study: function () {
    console.log("열심히 공부할게요!");
  },
  introduce: function () {
    console.log("안녕할까요!");
  },
};

class Student {
  // Field
  name;
  grade;
  age;

  // Constructor
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //Method
  study() {
    console.log("공부함");
  }
  introduce() {
    // 디스객체 활용해서 템플릿리터럴활용하려고
    console.log(`안녕 ${this.name} 입니다`);
  }
}

const studentC = new Student("Romeo", "B", 21);
console.log(studentC);

studentC.study();
studentC.introduce();

class StudentDeveloper extends Student {
  //Field
  favoriteSkill;
  //constructor
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍`);
  }
}
const studentD = new StudentDeveloper("Ronaldo", "C", 21, "TS");
console.log(studentD);
studentD.programming();
