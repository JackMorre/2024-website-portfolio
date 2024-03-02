import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/componants/error/Error.jsx";
import WorkItem from "./pages/WorkItem.jsx";

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
        path: "the-bodega",
        element: <WorkItem />,
      },
      {
        path: "best-game-deals",
        element: <WorkItem />,
      },
      {
        path: "frontend-mentor",
        element: <WorkItem />,
      },
      {
        path: "/:anything",
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
