import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/componants/error/Error.jsx";
import WorkElement from "./pages/componants/work/WorkElement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/the-bodega",
        element: <WorkElement name="the-bodega" />,
        errorElement: <Error />,
      },
      {
        path: "/best-game-deal",
        element: <WorkElement name="best-game-deal" />,
        errorElement: <Error />,
      },
      {
        path: "/frontend-mentor",
        element: <WorkElement name="frontend-mentor" />,
        errorElement: <Error />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
