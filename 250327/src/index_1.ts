//number
// 123타입
const num1 = 123;
// num타입 - 재할당가능하기때문
let num2 = 456;
num2 = 789;
// num2 = "123"; 오류
let num3: number = 700;
// number-타입주석 기본적으로 타입스크립트는 타입주석(*Type annotation)을 설정하도록 되어었지만 생략해도 ㄱㅊ

let num10: number = 10;
let test10: unknown;

// 대수타입
// num10 = test10;오류
test10 = num10;

//string
let str1 = "Hello";
// str1 = 1; 오류
str1 = "world";

// let str2: "fff" = "ddd";오류

let bool = true;
bool = false;

let test1: null = null;
test1 = null;

let test2: undefined = undefined;
test2 = undefined;

let numArr: number[] = [1, 2, 3];
// numArr = ["1", 2, 3];오류
let strArr: string[] = ["hello", "world"];
let boolArr: boolean[] = [true, false, true];
// 제네릭형식
let bool1Arr: Array<boolean | number | string> = [true, false, true, 1, "node"];

// 유니온타입
let multiArr = [1, "hello"];

// 숫자를 가지고있는 배열을 가지고있는 배열이 있다
let doubleArr: (number | string)[][] = [["ㅇㅇㅇ", 1, 2, 3], [4, 5], [6]];

// 튜플타입 - 엄격하게 배열개수를 정의해서 사용-유연하게 쓰려면 배열을 쓰셈
let tupl: [number, number] = [1, 2];

// tupl = [1, 2, 3];  오류
// tupl = ["1", 2];오류
// tupl.push(1); 이런건되니까 인기가없음

// const users: [string, number][] = [
//   ["david", 1],
//   ["Jane", 2],
//   ["Juliet", 3],
//   ["Brown", 4],
//   [5, "Whitney"], 이거만 오류 발견 - 이럴때 튜플 쓰는거임
// ];

// --------------------

let user: object = {
  id: 1,
  name: "david",
};
// user.id; 이러면 오류남 - 쓰지마셈

let user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "david",
};
// 객체 리터럴타입 - 객체 사이즈에 따라 코드가 매우 길어질수 있고 유사한 형태의 객체가 나타나더라도 타입 재활용할수없음

interface User {
  readonly id: number;
  // 읽기전용 속성
  name?: string;
  // optional Property -선택적 프로퍼티/속성 - 있어도되고 없어도되는 옵션
}

let user2: User = {
  id: 3,
  name: "Jane",
};

let user3: User = {
  id: 4,
  name: "Brown",
};

let user4: User = {
  id: 5,
};

// user4.id = 8; 오류 - readonly 속성을 줬기때문에

type Usernick = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
// 타입별칭 - 동일한 스코프 안에서 동명의 타입별칭을 사용할 수없음
// 동일하지 않은 스코프에서만 사용가능
// 객체형태를 띄고 있기 때문에 동일한 이름의 인터페이스 사용가능 -비추천
// 객체타입을 보다 유연하게 사용하고자 할때 사용하면 효율적임

const test12 = () => {
  type Usernick = {};
};

let user5: Usernick = {
  id: 5,
  name: "통키",
  nickname: "피구왕",
  birth: "2002.02.02",
  bio: "내꿈은 피구왕",
  location: "서울시 서초구",
};

// import nick as name from "./~~" as-> alias약자

// interface ICountryCode {
//   korea: string;
//   UnitedState: string;
//   UnitedKingdom: string;

//  [key: string]: string;

// }

type CountryCode = {
  // korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;

  // 인덱스시그니처
  [key: string]: string;
};

let countryCode: CountryCode = {
  korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // Mexico: 1,이러면 인덱스시그니처 오류
};
