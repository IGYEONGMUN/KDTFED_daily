import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  //  프로바이더는 프랍스로 스토어 값을 전달해줘야함
  <Provider store={store}>
    <App />
  </Provider>
);
