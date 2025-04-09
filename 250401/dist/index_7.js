"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "ddd",
    age: 20,
    location: "Seoul",
};
// const getPropertyKey = (person: Person, key: "name" | "age" | "location") => {
//   // 인덱스드액세스방식
//   // return person["name"];
//   return person[key];
// Keyof방식
const getPropertyKey = (person, key) => {
    // 인덱스드액세스방식
    // return person["name"];
    return person[key];
};
// keyof typeof 같이 쓸수도있다
// keyof - 타입에만 부착가능
// typeof - 변수에만 부착가능
