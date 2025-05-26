import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// 외부 에이피아이 값을 전역에서 쓰기위해서
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./Router.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
