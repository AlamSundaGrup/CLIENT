import { createBrowserRouter } from "react-router-dom";
import RootCreate from "./pages/RootCreate";
import RegisterForm from "./components/RegisterForm";
import ProfileForm from "./components/ProfileForm";
import LoginForm from "./components/Loginform";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <h1>Hello World Guys!</h1>,
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
        path: "/profiles/create",
        element: <ProfileForm />,
      },
    ],
  },
]);
