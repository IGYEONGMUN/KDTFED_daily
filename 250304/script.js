const student = {
  name: "짱구",
  major: "컴공",
  grade: 2,
};

const json = JSON.stringify(student);

const json2 = JSON.parse(json);
console.log(json2);
