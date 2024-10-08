import { createBrowserRouter, redirect } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <h1>halo ini register</h1>,
  },
  {
    path: "/login",
    element: <h1>halo ini login</h1>,
  },
  {
    path: "/",
    element: <h1>halo ini /</h1>,
    children:[
        {
            path: "/profiles",
            element: <h1>halo ini profiles</h1>,
          },
    ]
  },
]);
