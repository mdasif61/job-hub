import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/JSX/Home";
import Statistics from "./components/JSX/Statistics";
import ApplyJob from "./components/JSX/ApplyJob";
import Blog from "./components/JSX/Blog";
import Main from "./components/JSX/Main";
import Details from "./components/JSX/Details";
import ErrorPage from "./components/JSX/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("/featuredJob.json"),
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/featuredJob.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/job",
        element: <ApplyJob></ApplyJob>,
        loader: () => fetch("/featuredJob.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
