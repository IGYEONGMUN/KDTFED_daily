// 분산적 조건부타입
type StringNumber<T> = T extends number ? string : number;
// number인경우 한번 계산하고 string인 경우 다시 계산해서 타입지정을 하기때문에 순서가 바뀌어서 타입지정됨
let c: StringNumber<number | string>;
