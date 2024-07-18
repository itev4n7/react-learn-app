import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts.tsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.tsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetails.tsx";
import RootLayour from "./routes/RootLayout.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayour />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: "/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
