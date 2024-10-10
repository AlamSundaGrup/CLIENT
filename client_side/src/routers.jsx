import { createBrowserRouter, redirect } from "react-router-dom";
import RootCreate from "./pages/RootCreate";
import RegisterForm from "./components/RegisterForm";
import ProfileForm from "./components/ProfileForm";
import LoginForm from "./components/LoginForm";
import Homepage from "./pages/Homepage";
import LoginGoogle from "./pages/LoginGoogle";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <RootCreate />,
    children: [
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
        loader: () => {
          if (localStorage.getItem("access_token")) {
            return redirect("/home");
          }
          return null;
        },
      },
      {
        path: "/profiles/create",
        element: <ProfileForm />,
      },
    ],
  },
]);