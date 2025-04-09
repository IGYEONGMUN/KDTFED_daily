// Exclude 조건부 타입

type Exclude<T, U> = T extends U ? never : T;
// 두번째 값이 U 그렇게 계산하면됨
type A = Exclude<number | string | boolean, string>;
