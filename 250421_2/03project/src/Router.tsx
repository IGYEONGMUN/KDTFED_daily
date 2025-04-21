import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorComponent from "./components/ErrorComponent";
import User from "./pages/User";
import Followers from "./pages/Followers";

// 이 라우터가 메인 역할 할거임
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        // 유저컴포넌트에서 아웃렛컴포넌트로 또 줬기 때문에 자식요소로 또 줄 수 잇음
        children: [
          {
            // 이렇게 슬래쉬 주면 안됨 - 절대경로로 준다는 뜻이니까
            // path: "/followers",
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

export default Router;
