import React from "react";
import styled from "styled-components";
// recoil > atom 안에 보관된 값을 찾아올 때 사용하는함수useRecoilValue / useSetRecoilState 리코일안에 아톰안에 보관된 값을 편집, 수정하고자 할때 사용하는 함수 / useRecoilState 리코일>아톰 안에 보관된 값을 찾아오기도 하면서 동시에 편집도 가능한 함수
import CreateTodo from "./CreateTodo";
import { useRecoilValue, useRecoilState } from "recoil";
import { todoSelector, categoryState, Categories } from "../atoms";
import Todo from "./Todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  hr {
    width: 100%;
  }
`;

const ToDoList = () => {
  // const todos = useRecoilValue(toDoState);
  // 원래 이렇게 중첩배열로 데이터를 통으로 가져왔었는데
  // const [todo, doing, done] = useRecoilValue(todoSelector);
  // 지금은 아톰스 안에 이프 문으로 단일배열만 가져왔기 때문에 이렇게 바꾼거임 - 코드 간소화
  const toDos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    // 셋스테이트처럼 쓰는거임
    // 어떤게 들어올지 여기서 알려줄 방법이 없음 - 애니타입으로 타입단언해줌
    setCategory(e.currentTarget.value as any);
  };

  return (
    <Container>
      <h1>ToDo's List</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>

      <CreateTodo />
      {/* <h2>TODO</h2> */}
      {/* <ul> */}
      {/* 키값줘라 */}
      {/* {todo.map((todo) => (
        // 안의값을 하나씩 쪼개서 보내겠다
        <Todo key={todo.id} {...todo} />
      ))} */}
      {/* </ul> */}
      {/* <hr /> */}
      {/* <h2>DOING</h2> */}
      {/* <ul> */}
      {/* 키값줘라 */}
      {/* {doing.map((todo) => (
        // 안의값을 하나씩 쪼개서 보내겠다
        <Todo key={todo.id} {...todo} />
      ))} */}
      {/* </ul> */}
      {/* <hr /> */}
      {/* <h2>DONE</h2> */}
      {/* <ul> */}
      {/* 키값줘라 */}
      {/* {done.map((todo) => (
        // 안의값을 하나씩 쪼개서 보내겠다
        <Todo key={todo.id} {...todo} />
      ))} */}
      {/* </ul> */}
      {/* {category === "TODO" &&
        todo.map((todo) => <Todo key={todo.id} {...todo} />)}
      {category === "DOING" &&
        doing.map((doing) => <Todo key={doing.id} {...doing} />)}
      {category === "DONE" &&
        done.map((done) => <Todo key={done.id} {...done} />)} */}
      {toDos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Container>
  );
};

export default ToDoList;
