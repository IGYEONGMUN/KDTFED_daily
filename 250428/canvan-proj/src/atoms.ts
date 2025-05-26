import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

// 여기서부터 타입을 제네릭으로 정의해줘서 자식요소 프랍스로 전달될때도 타입에 문제가 없음
interface ITodoState {
  // 인풋요소안의 값이 객체니까 인터페이스로 타입정의 유즈폼이용해서 가져온값
  [key: string]: ITodo[];
}

export const todoState = atom<ITodoState>({
  key: "todo",
  default: {
    todo: [],
    doing: [],
    done: [],
  },
});
