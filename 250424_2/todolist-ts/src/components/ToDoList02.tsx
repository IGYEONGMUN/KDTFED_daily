import { useForm } from "react-hook-form";

const ToDoList = () => {
  // watch사용자가 입력한 값이뭔지확인가능
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input
          {...register("todo")}
          type="text"
          placeholder="오늘 할 일 작성"
        />
        <input type="submit" value={"Add"} />
      </form>
    </div>
  );
};

export default ToDoList;
