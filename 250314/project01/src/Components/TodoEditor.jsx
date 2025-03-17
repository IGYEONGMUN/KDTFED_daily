import React, { useState, useRef, useContext } from "react";
// import { TodoContext } from "../App";
import { TodoDispatchContext } from "../App";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const onSubmit = () => {
    // e.preventDefault();
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    // e.preventDefault();
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 🎨</h4>
      <form className="editor_wrapper" name="todolist" action="#" method="get">
        <input
          type="text"
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo..."
        ></input>
        <input type="button" value="추가" onClick={onSubmit}></input>
      </form>
    </div>
  );
};

export default TodoEditor;
