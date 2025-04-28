import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./Router.tsx";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </RecoilRoot>
);
