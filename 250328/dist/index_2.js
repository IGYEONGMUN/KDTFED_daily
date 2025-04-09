"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 타입단언 - 지금은 빈깡통이지만 나중에 펄슨타입하고 일치할거임 약속함
let person = {};
person.name = "";
person.age = 20;
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};
let dogAI = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};
let dogNew = dogAI;
// 타입단언규칙 : 단언하고자 하는 자료의 타입과 단언받고자 하는 자료의 타입이 반드시 서로 슈퍼 및 서브타입이어야함
let num1 = 10;
// num1 = 20;오류- 다운캐스팅
let num2 = 10;
num2 = "hello";
// let num3 = 10 as string;오류 - 형제타입이니까
// 다중단언 - 비추
let num3 = 10;
// const 단언
let num4 = 10;
let post = {
    title: "게시글1",
};
// 언디파인인경우도 정의해줘라
const len = post.author.length;
