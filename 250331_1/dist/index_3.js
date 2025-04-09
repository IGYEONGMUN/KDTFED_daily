"use strict";
// 특정값을 인자값으로 받아서 해당값을 반환하는 함수선언
// 위 특정 값이 숫자,문자,객체 ,배열일지 예측불가 ->any타입 막 써버리면 안됨
// const func = (value: unknown) => {
//   return value;
// };
Object.defineProperty(exports, "__esModule", { value: true });
// let num = func(10);
// let str = func("hello");
// any타입을 써버리면 이런 말도안되는것도 가능해버림
// num.toUpperCase();
// 언노운타입이다보니까 서브타입인 숫자에 toFIxed불가능
// num.toFixed();
// str.toUpperCase();
// 타입가드
// if (typeof num === "number") {
//   num.toFixed();
// }
// if (typeof str === "string") {
//   str.toUpperCase();
// }
// 넘버타입쓰고싶을때문자타입쓰고싶을때 타입가드 없이 적재적소에 쓰고싶을때 -> 제네릭써야함
// 즉 가변적인 값을 부여하고싶을떄
const func = (value) => {
    return value;
};
let num = func(10);
// const func01 = <T>(value: T) => {
//   return value;
// };
// 제네릭형식으로 타입지정하게되면, 기본적으로 상대적인 슈퍼타입을 타입으로 지정하려고함
let arr = func([1, 2, 3]);
