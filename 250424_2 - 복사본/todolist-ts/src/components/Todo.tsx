import React from "react";
import { ITodo, toDoState, Categories } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoSelector } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  // 값 수정가능
  const setToDos = useSetRecoilState(toDoState);

  const selectOutput = useRecoilValue(todoSelector);
  console.log(selectOutput);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      // 구조분해할당
      currentTarget: { name },
    } = e;

    // 유니온 타입에선 한놈만 적용됐을 때 타입 오류나는경우 - 타입가드적용
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      // const oldTodo = oldToDos[targetIndex];
      // 카테고리만 가고자하는 네임값으로 찾아서 교체 / 카테고리 타입은 네임 하나만 있으니 올드투두스 오류 - 사용자가 투두,두잉,돈 어디로 갈지 모르니 애니로 타입단언
      const newTodo = { id, text, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  // 대괄호표기법?왜?
  // const onclick01 = (newCategory: ITodo["category"]) => {
  //   console.log("I want go to", newCategory);
  // };

  return (
    <li>
      <span>{text}</span>
      {/* 버튼 나오게 할지 안나오게 할지 정하는 알고리즘 */}
      {/* 버튼에 네임태그를 주면서 코드 간결하게 */}
      {category !== Categories.TODO && (
        // +""문자열로 바꿔준거임
        <button name={Categories.TODO + ""} onClick={onClick}>
          Todo
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ""} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ""} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
