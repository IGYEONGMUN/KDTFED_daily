import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import TV from "./pages/TV";
import Search from "./pages/Search";
import Review from "./pages/Review";
import Videos from "./pages/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        // 모달창 이용하려고 홈이용
        path: "/movies/:movieId",
        element: <Home />,
      },
      {
        path: "tv",
        element: <TV />,
      },
      {
        path: "search",
        element: <Search />,
        children: [
          {
            path: "review",
            element: <Review />,
          },
          {
            path: "video",
            element: <Videos />,
          },
        ],
      },
    ],
  },
]);

export default router;
