import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./Box";

function App() {
  // 유즈셀렉터안에 콜백함수는 스토어 안의 스테이트
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);

  const dispatch = useDispatch();
  const inCrease = () => {
    // 액션객체를 만들어서 리듀서에 전달 / 페이로드,즉 부산물로 값 전달가능
    dispatch({ type: "INCREMENT", payload: { num: 4 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "ㅁㅁㅁ", password: "1234" } });
  };

  const deCrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 4 } });
  };

  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <h1>{count}</h1>
      <Box />
      <button onClick={inCrease}>증가</button>
      <button onClick={login}>로그인</button>
      <button onClick={deCrease}>감소</button>
    </div>
  );
}

export default App;
