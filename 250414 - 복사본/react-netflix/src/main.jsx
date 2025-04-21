import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// 티엠디비 에이피아이 비동기로 끌고와야됨 -> 리덕스
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
