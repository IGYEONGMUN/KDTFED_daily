"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = (value) => {
    // value.toUpperCase();오류 -타입가드필요
    // value.toFixed();오류 -타입가드필요
    // console.log(value.name); 오류
    if (typeof value === "number") {
        console.log(value.toFixed());
    }
    else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date) {
        // 내장프로토타입객체전용 타입가드
        console.log(value.getFullYear);
        // in타입가드 외부에서 별도로 만든 타입별칭을 유니온 타입으로 사용한 경우
    }
    else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살`);
    }
};
func("value");
