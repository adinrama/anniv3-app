import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import Halaman2 from "./pages/Halaman2";
import Halaman3 from "./pages/Halaman3";
import Halaman4 from "./pages/Halaman4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hal2",
    element: <Halaman2 />,
  },
  {
    path: "/hal3",
    element: <Halaman3 />,
  },
  {
    path: "/hal4",
    element: <Halaman4 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
