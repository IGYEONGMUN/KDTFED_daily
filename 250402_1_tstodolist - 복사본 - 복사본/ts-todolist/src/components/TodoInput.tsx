import { useState, useContext } from "react";
import styled from "styled-components";
import Title from "./Title";
import TextInput from "./TextInput";
import Button from "./Button";
import { ToDoListContext } from "../contexts/ToDoListContextProvider";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--light-color);
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

interface Props {
  readonly onClose: () => void;
}

const TodoInput = ({ onClose }: Props) => {
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setTodo] = useState("");

  const onAddTodo = () => {
    if (toDo === "") return;
    onAdd(toDo);
    setTodo("");
    onClose();
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title label="할 일 추가" />
        <InputContainer>
          <TextInput value={toDo} onChange={setTodo} />
          <Button label="추가" color="#304ffe" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

export default TodoInput;
