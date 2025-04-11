import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  // 스토어는 리듀서에서 연산된 값으로 넘겨줘야함
  <Provider store={store}>
    <App />
  </Provider>
);
