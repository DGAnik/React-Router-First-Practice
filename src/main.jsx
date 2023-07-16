import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Error from "./components/Error/Error.jsx";
import First from "./components/First/First.jsx";
import Friends from "./components/Friends/Friends.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostContent from "./components/PostContent/PostContent.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "/friend/:friendId",
        element: <Detail></Detail>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "/friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/content/:postId",
        element: <PostContent></PostContent>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
