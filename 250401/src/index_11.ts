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
// 타입 오버로드방식으로
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
  if (typeof text === "string") return text.replaceAll(" ", "");
  else {
    return undefined;
  }
}

let result = removeSpaces("tggu hhh ");
let result2 = removeSpaces(undefined);
