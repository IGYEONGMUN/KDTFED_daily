type Dog = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// const warning = (animal: Animal) => {
//   // 외부~ in타입가드
//   if ("isBark" in animal) {
//     // 사용자정의 타입가드
//     console.log(animal.isBark ? "짖음" : "안짖음");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "할큄" : "안할큄");
//   }
// };

const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).isBark !== undefined;
};
const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScratch !== undefined;
};
const warning = (animal: Animal) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖음" : "안짖음");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할큅니다");
  }
};
