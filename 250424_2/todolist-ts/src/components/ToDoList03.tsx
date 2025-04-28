import { useForm } from "react-hook-form";
import styled from "styled-components";

const ToDoList = () => {
  // 유즈폼 반환값은 객체임
  // const test = useForm();

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  interface IFormContents {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    repassword: string;
    userName: string;
    extraError?: string;
  }

  // 각각의 입력폼에 등록된 값들을 등록해놓기 위해서 씀
  // formState-레지스터로 입력된 값을 확인하ㅅ면서 동시에 에러가 발생된 곳이 있다면 확인해주는 목적 (.errors)
  const {
    register,
    // watch,
    handleSubmit,
    // 구조분해할당
    formState: { errors },
    // 특정에러 커스터마이징 가능
    setError,
    setValue,
  } = useForm<IFormContents>({
    // 플레이스홀더 말고 기본값제공
    defaultValues: {
      email: "@google.com",
    },
  });
  // 레지스터라는 객체(함수(콘솔찍어보면 함수라고 나옴))에 필수값중에 name이 있어서 그 값을 인자로 줘야함
  // console.log(register("toDo"));

  // 레지스터의 값을 와치를 이용해서 콘솔로 확인가능
  // console.log(watch());

  // 레지스터로 입력한 모든 값을 데이터라는 객체로 가져옴 - 즉 이것들이 유효성 검사를 할 대상이 됨
  const onValid = (data: IFormContents) => {
    console.log(data);
    if (data.password !== data.repassword) {
      // 패스워드 타입에 메시지 주는거임 근데 이렇게 하면 required 커서주는게 생략돼버림-슈드포커스 줘야됨
      setError("password", { message: "패스워드가 같지 않습니다." });
      setError(
        "repassword",
        { message: "패스워드가 같지 않습니다." },
        { shouldFocus: true }
      );
    }
    // 특정한 요소에 에러를 주는게 아니라 전역적으로 에러를 정의할때
    setError("extraError", { message: "서버 오프라인..." });
    // 서버에 값 보내고 나서 리셋
    setValue("email", "");
  };

  // 입력값이 무엇인지 관찰하는 역할
  return (
    // 온밸리드 안에 콜백함수 실행
    <Form onSubmit={handleSubmit(onValid)}>
      {/* 이렇게 안했으면 각각 스테이트가 필요했을 거임 */}
      {/* required: true 유효성검사  minLength 최소 입력값*/}
      <input
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Za-z0-9]+@google.com/gm,
            message: "Only google.com 이메일입력",
          },
        })}
        type="email"
        placeholder="Email"
      />
      <span>{errors.email?.message as string}</span>
      <input
        {...register("firstName", {
          required: "Write Here",
          // 인클루드안의 값 판별 - 있으면 안되는게 있어야 하는부분 판별해야하니까(욕설)
          validate: (v) => (!v.includes("test") ? "No test Allowed" : true),
        })}
        type="text"
        placeholder="First Name"
      />
      <span>{errors.firstName?.message as string}</span>

      <input
        {...register("lastName", { required: true })}
        type="text"
        placeholder="Last Name"
      />
      <span>{errors.lastName?.message as string}</span>

      <input
        {...register("userName", { required: true })}
        type="text"
        placeholder="User Name"
      />
      <span>{errors.userName?.message as string}</span>

      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "8 words required",
          },
        })}
        type="password"
        placeholder="Password"
      />
      <span>{errors.password?.message as string}</span>

      <input
        {...register("repassword", { required: true })}
        type="password"
        placeholder="Re Password"
      />
      <span>{errors.repassword?.message as string}</span>

      <button>Add</button>
      <span>{errors.extraError?.message as string}</span>
    </Form>
  );
};

export default ToDoList;
