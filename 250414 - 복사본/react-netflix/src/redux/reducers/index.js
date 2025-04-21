// 대표파일격으로 index
import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

// 객체화되어진 데이터 익스포트함 - 안에 리듀서들이 복수니까
export default combineReducers({
  movie: movieReducer,
});
