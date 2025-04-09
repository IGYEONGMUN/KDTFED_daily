"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let varA;
let varB;
// const removeSpaces = (text: string | undefined | null) => {
//   if (typeof text === "string") return text.replaceAll(" ", "");
//   else {
//     return undefined;
//   }
// };
const removeSpaces = (text) => {
    // 제네릭타입으로 타입변수 막쓰려고 하는데 스트링으로 타입가드해버리지마셈- 조건부타입으로 지정필요
    // 현재 이프문안에서는 타입단언을 해줘야됨 - 현재는 값이 미정이기때문에
    if (typeof text === "string")
        return text.replaceAll(" ", "");
    else {
        return undefined;
    }
};
let result = removeSpaces(1123);
// result 값이 확실하게 넘버가 아니면 이런거 오류날수도있음
// result.toLowerCase();
