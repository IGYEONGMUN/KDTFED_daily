"use strict";
// const func = (a: number, b: number): number => {
//   return a + b;
// };
Object.defineProperty(exports, "__esModule", { value: true });
// 다중패러다임 선언실행같이가능 - 리턴생략가능 -중괄호제거
const func = (a, b) => a + b;
// 선택적 매개변수
// 선택적 매개변수는 반드시 뒤에와야함 tall?number,name:string 에러
const introduce = (name, tall) => {
    // console.log(`tall: ${tall + 10}`);에러 - 있을수도있고 없을수도있어서- 타입가드줘야함
    if (typeof tall === "number") {
        console.log(`tall : ${tall + 10}`);
    }
};
introduce("ㅇㅇㅇ", 180);
introduce("ㅇㅇㅇ");
const getSum = (...rest) => {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    console.log(sum);
    return sum;
};
getSum(1, 2, 3);
const add = (a, b) => a + b;
const add1 = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divid = (a, b) => a / b;
// 고차함수
const test = (a, b) => a + b;
// 타입별칭을 활용해서 호출 시그니처(객체타입으로 타입별칭 만들어놓고 함수의 타입으로 지정)라는 것을 생성가능
