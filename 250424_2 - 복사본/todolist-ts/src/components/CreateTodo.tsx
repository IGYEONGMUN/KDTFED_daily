import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { toDoState, categoryState } from "../atoms";

interface IForm {
  todo: string;
}

const CreateTodo = () => {
  // 변경되는 카테고리 스테이트값을 받아서 이용
  const category = useRecoilValue(categoryState);
  const handleValid = ({ todo }: IForm) => {
    setTodos((oldTodos) => [
      { id: Date.now(), text: todo, category },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };

  const { register, handleSubmit, setValue } = useForm<IForm>();

  // 셋만 설정하고 투두값은 설정할필요가없음
  const setTodos = useSetRecoilState(toDoState);

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", { required: "Write here" })}
        type="text"
        placeholder="투두리스트 작성"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateTodo;
