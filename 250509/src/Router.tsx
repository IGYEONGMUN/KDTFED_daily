import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateAccount";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // 이렇게 하면 홈컴포넌트, 프로파일 컴포넌트 둘다 보호가 되니까 걍 이렇게 씀
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  // 독립적인 페이지라 슬래쉬 따로 줘야됨 위에서는 루트슬래쉬를 기준으로 프로파일 이렇게 나뉨
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

export default router;
