// 얘가 프로바이더의 프롭스형태로 전달될거임

// 컨피규어스토어는 크레이트스토어 대체할거임
import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./reducer";

// 컨피규어에선 리듀서를 객체형태로 변경
const store = configureStore({ reducer: contactReducer });

export default store;
