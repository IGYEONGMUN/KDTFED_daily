import { useForm } from "react-hook-form";
import styled from "styled-components";
// recoil > atom 안에 보관된 값을 찾아올 때 사용하는함수useRecoilValue / useSetRecoilState 리코일안에 아톰안에 보관된 값을 편집, 수정하고자 할때 사용하는 함수 / useRecoilState 리코일>아톰 안에 보관된 값을 찾아오기도 하면서 동시에 편집도 가능한 함수
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  hr {
    width: 100%;
  }
`;

const ToDoList = () => {
  const [todos, setTodos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    console.log(data);
    setValue("todo", "");
  };

  interface IForm {
    todo: string;
  }

  return (
    <Container>
      <h1>ToDo's List</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", { required: "Write here" })}
          type="text"
          placeholder="투두리스트 작성"
        />
        <button>Add</button>
      </form>
      <ul>
        <li>ㅇㅇ</li>
      </ul>
    </Container>
  );
};

export default ToDoList;
