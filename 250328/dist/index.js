"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const warning = (animal) => {
    // 외부~ in타입가드
    if ("isBark" in animal) {
        console.log(animal.isBark ? "짖음" : "안짖음");
    }
};
