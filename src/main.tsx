import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import DeletedUsersPage from "./pages/DeletedUsersPage.tsx";
import NavBar from "./components/NavBar.tsx";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
        children: [
          {
            path: "/users/deleted",
            element: <DeletedUsersPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
