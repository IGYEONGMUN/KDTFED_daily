// 조건부타입
type A = number extends string ? number : string;
type ObjA = {
  a: number;
};
type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

type StringNumber<T> = T extends number ? string : number;

let varA: StringNumber<number>;
let varB: StringNumber<string>;

// const removeSpaces = (text: string | undefined | null) => {
//   if (typeof text === "string") return text.replaceAll(" ", "");
//   else {
//     return undefined;
//   }
// };

const removeSpaces = <T>(text: T): T extends string ? string : undefined => {
  // 제네릭타입으로 타입변수 막쓰려고 하는데 스트링으로 타입가드해버리지마셈- 조건부타입으로 지정필요
  // 현재 이프문안에서는 타입단언을 해줘야됨 - 현재는 값이 미정이기때문에
  if (typeof text === "string") return text.replaceAll(" ", "") as any;
  else {
    return undefined as any;
  }
};

let result = removeSpaces("tggu hhh ");
// result 값이 확실하게 넘버가 아니면 이런거 오류날수도있음
// result.toLowerCase();
