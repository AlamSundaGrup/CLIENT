import { createBrowserRouter } from "react-router-dom";
import RootCreate from "./pages/RootCreate";
import RegisterForm from "./components/RegisterForm";
import ProfileForm from "./components/ProfileForm";
import LoginForm from "./components/Loginform";
import Homepage from "./pages/Homepage";

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
        path: "/profiles/create",
        element: <ProfileForm />,
      },
    ],
  },
]);
