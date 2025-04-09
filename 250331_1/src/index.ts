//제네릭 타입별칭
// type Map2<T> = {
//   [key: string]: T;
// };

// let stringMap2: Map2<string> = {
//   key: "ddd",
// };

interface IKeyPair<K, V> {
  key: K;
  value: V;
}

// 이렇게 하지말고 제네릭인터페이스 사용
// interface IKeyPair2 {
//   key: boolean;
//   value: string[];
// }

let keyPair: IKeyPair<string, number> = {
  key: "Key",
  value: 10,
};

let keyPair2: IKeyPair<boolean, string[]> = {
  key: true,
  value: ["i"],
};
