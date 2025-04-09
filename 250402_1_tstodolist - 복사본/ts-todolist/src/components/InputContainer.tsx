import TodoInput from "./TodoInput";
import ShowInputButton from "./ShowInputButton";
import { useState } from "react";

interface Props {
  readonly onAdd: (toDo: string) => void;
}

const InputContainer = ({ onAdd }: Props) => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onAddToDo = (toDo: string) => {
    onAdd(toDo);
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <TodoInput onAdd={onAddToDo} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
};

export default InputContainer;
