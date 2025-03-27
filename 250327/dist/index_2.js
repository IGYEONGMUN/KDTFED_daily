"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    // ADMIN = 0,
    // USER = 1,
    // GUEST = 2,
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user9 = {
    name: "ddd",
    role: Role.ADMIN,
};
const user8 = {
    name: "fff",
    role: Role.USER,
};
const user7 = {
    name: "ggg",
    role: Role.GUEST,
};
console.log(user7, user8, user9);
// =--------------------------------------------------------
let test1;
let test2 = 2;
// 타입계층구조도상 이럼
test1 = test2;
// test2 = test1; 오류
// any는 문자숫자보다 supertype
let anyVar = 10;
anyVar = "hello";
anyVar.toUpperCase();
anyVar = true;
anyVar = {};
anyVar = [];
anyVar.pop();
// any는 다운캐스팅 업캐스팅 막 다 가능함 unknown은 그래도 다운캐스팅은 안하는 양심은 있음
let num = 10;
// any는 다운캐스팅허용
num = anyVar;
let unknownVar;
unknownVar = "";
unknownVar = {};
// num = unknownVar; 오류/unknown은 다운캐스팅 안됨
// 타입가드 쳐놓을때만 가능
if (typeof unknownVar === "number") {
    num = unknownVar;
}
// void : 아무런 값도 반환하지 않는 타입(함수)
const func1 = () => {
    console.log("hello");
    // return "hello";이러면 에러
};
const func2 = () => {
    console.log("hello");
    return "hello";
};
let a;
a = undefined;
// never = 반환이 아예 불가능한 타입
const func3 = () => {
    while (true) {
        console.log("hello");
    }
};
const func4 = () => {
    throw new Error();
};
