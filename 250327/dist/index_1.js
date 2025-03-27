"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//number
// 123타입
const num1 = 123;
// num타입 - 재할당가능하기때문
let num2 = 456;
num2 = 789;
// num2 = "123"; 오류
let num3 = 700;
// number-타입주석 기본적으로 타입스크립트는 타입주석(*Type annotation)을 설정하도록 되어었지만 생략해도 ㄱㅊ
let num10 = 10;
let test10;
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
let test1 = null;
test1 = null;
let test2 = undefined;
test2 = undefined;
let numArr = [1, 2, 3];
// numArr = ["1", 2, 3];오류
let strArr = ["hello", "world"];
let boolArr = [true, false, true];
// 제네릭형식
let bool1Arr = [true, false, true, 1, "node"];
// 유니온타입
let multiArr = [1, "hello"];
// 숫자를 가지고있는 배열을 가지고있는 배열이 있다
let doubleArr = [["ㅇㅇㅇ", 1, 2, 3], [4, 5], [6]];
// 튜플타입 - 엄격하게 배열개수를 정의해서 사용-유연하게 쓰려면 배열을 쓰셈
let tupl = [1, 2];
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
let user = {
    id: 1,
    name: "david",
};
// user.id; 이러면 오류남 - 쓰지마셈
let user1 = {
    id: 1,
    name: "david",
};
let user2 = {
    id: 3,
    name: "Jane",
};
let user3 = {
    id: 4,
    name: "Brown",
};
let user4 = {
    id: 5,
};
// 타입별칭 - 동일한 스코프 안에서 동명의 타입별칭을 사용할 수없음
// 동일하지 않은 스코프에서만 사용가능
// 객체형태를 띄고 있기 때문에 동일한 이름의 인터페이스 사용가능 -비추천
// 객체타입을 보다 유연하게 사용하고자 할때 사용하면 효율적임
const test12 = () => {
};
let user5 = {
    id: 5,
    name: "통키",
    nickname: "피구왕",
    birth: "2002.02.02",
    bio: "내꿈은 피구왕",
    location: "서울시 서초구",
};
let countryCode = {
    korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
    // Mexico: 1,이러면 인덱스시그니처 오류
};
