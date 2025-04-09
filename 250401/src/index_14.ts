// infer : Inferred : 추론된
// 기본적으로 어떤 변수를 선언하고 해당 변수안에 값을 적용해서 타입을 추론 하지만 infer 추론은 특정 함수에서 반환값의 타입을추론
// R이라는게 상속될수잇는 서브타입이면 R 아니면 never
type ReturnType<T> = T extends () => infer R ? R : never;

// T extends () => infer R 이게 참이 되게끔 추론을 해야하니까 A는 string으로 추론함
type FuncA = () => string;
type FuncB = () => number;
type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
