import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodosPage } from "./Presentation/UI/Pages/TodosPage";
import { UsersPage } from "./Presentation/UI/Pages/UsersPage";
import { AppServicesContainerProvider } from "./Services/AppServicesContainer";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />,
  },
  {
    path: "/todos",
    element: <TodosPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppServicesContainerProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AppServicesContainerProvider>
  </React.StrictMode>
);
