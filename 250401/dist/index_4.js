"use strict";
// 기본적으로 프라미스는 언노운타입 반환- 특정 메서드 함수에서 충돌가능성있음 -여기선number의 제네릭 타입으로 정의
Object.defineProperty(exports, "__esModule", { value: true });
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
});
promise.then((response) => {
    console.log(response);
});
// 에러는 애니타입으로 디폴트로 들어옴- 찝찝함
promise.catch((error) => {
    if (typeof error === "string") {
        console.error(error);
    }
});
