// 얘가 프로바이더의 프롭스형태로 전달될거임

import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
