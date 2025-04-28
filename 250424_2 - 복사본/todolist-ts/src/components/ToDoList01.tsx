import React, { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  // 인풋요소 받아서 뭐 하겠다는 뜻임
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="오늘 할 일 작성"
        />
        <input type="submit" value={"Add"} />
      </form>
    </div>
  );
};

export default ToDoList;
