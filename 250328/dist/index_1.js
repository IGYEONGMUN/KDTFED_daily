"use strict";
// 리터럴타입
// let a: 1 = 1;
Object.defineProperty(exports, "__esModule", { value: true });
let intersection = {
    name: "",
    color: "",
    language: "",
};
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
let union4 = {
    name: "",
};
union4 = union3;
// union3 = union4; 다운캐스팅-오류
// 가장아래의 서브타입 -never - 어떤값도 다운캐스팅 받을수없다
let variable;
