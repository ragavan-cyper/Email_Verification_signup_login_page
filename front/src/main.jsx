import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Signup from "./signup";
import Verify from "./verify";
import Login from "./login";
import Homepage from "./home_page/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
