import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  // 유즈셀렉터안에 콜백함수는 스토어 안의 스테이트
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const inCrease = () => {
    // 액션객체를 만들어서 리듀서에 전달
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inCrease}>증가</button>
    </div>
  );
}

export default App;
