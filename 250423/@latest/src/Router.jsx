import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ReactQuery from "./pages/Reactquery";
import NormalPage from "./pages/NormalPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, // == path: ""
        element: <Home />,
      },
      {
        path: "normal",
        element: <NormalPage />,
      },
      {
        path: "react-query",
        element: <ReactQuery />,
      },
    ],
  },
]);

export default router;
