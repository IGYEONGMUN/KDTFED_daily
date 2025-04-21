// 리덕스 최신문법은 컨피규어스토어 - 간소화됨 - 함수중심으로 코드가 움직임
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
// 인덱스 파일이라 파일명 생략가능
import rootReducer from "./reducers";

// 크리에이트스토어는 함수임
const store = createStore(
  rootReducer,
  // 컴포즈데브툴즈로 실시간 모니터링 가능하게해줌, 성크버전으로 미들웨어 설정
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
