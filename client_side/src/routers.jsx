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
      },
      {
        path: "/login-google",
        element: (
          <GoogleOAuthProvider clientId="554479727507-70867vtpo11qqa220uvc2hcn7j99ccch.apps.googleusercontent.com">
            <LoginGoogle />
          </GoogleOAuthProvider>
        ),
        loader: () => {
          if (localStorage.getItem("token")) {
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
