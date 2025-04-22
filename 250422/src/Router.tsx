import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Coins />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
        // 코인컴포넌트 아래에 아웃렛 줬으니까 여기 아래에 칠드런 요소로 해줄 수 있음
        children: [
          {
            path: "",
            // 리액트 라우터 돔에있는 컴포넌트 / 어디론가 리턴 즉 보내는 역할만 하는 컴포넌트 /리다이렉트라고 함
            element: <Navigate to={"chart"} replace />,
          },
          {
            path: "chart",
            element: <Chart />,
          },
          { path: "price", element: <Price /> },
        ],
      },
    ],
  },
]);

export default router;
