import { createRoot } from "react-dom/client";
// 이제 앱 필요없음
// import App from "./Root.tsx";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

// 앱 대신에 라우터 이용
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Router} />
);
