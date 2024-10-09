import { createBrowserRouter, redirect } from "react-router-dom";
import RootCreate from "./pages/RootCreate";
import RegisterForm from "./components/RegisterForm";
import ProfileForm from "./components/ProfileForm";
import LoginForm from "./components/LoginForm";
import Homepage from "./pages/Homepage";
import LoginGoogle from "./pages/LoginGoogle";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const router = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <LoginForm />,
  // },
  // {
  //   path: "/register",
  //   element: <RegisterForm />,
  // },
  // {
  //   path: "/login-google",
  //   element: (
  //     <GoogleOAuthProvider clientId="554479727507-70867vtpo11qqa220uvc2hcn7j99ccch.apps.googleusercontent.com">
  //       <LoginGoogle />
  //     </GoogleOAuthProvider>
  //   ),
  //   loader: () => {
  //     if (localStorage.getItem("token")) {
  //       return redirect("/home");
  //     }
  //     return null;
  //   },
  // },
  // {
  //   loader: () => {
  //     if (!localStorage.getItem("token")) {
  //       return redirect("/login");
  //     }
  //     return null;
  //   },
  //   path: "/",
  //   element: <RootCreate />,
  //   children: [
  //     {
  //       path: "/home",
  //       element: <Homepage />,
  //     },
  //     {
  //       path: "/profiles/create",
  //       element: <ProfileForm />,
  //     },
  //   ],
  // },

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
        path: "/login-google",
        element: (
          <GoogleOAuthProvider clientId="554479727507-70867vtpo11qqa220uvc2hcn7j99ccch.apps.googleusercontent.com">
            <LoginGoogle />
          </GoogleOAuthProvider>
        ),
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

// -------------------
// import { createBrowserRouter, redirect } from "react-router-dom";
// import RootCreate from "./pages/RootCreate";
// import RegisterForm from "./components/RegisterForm";
// import ProfileForm from "./components/ProfileForm";
// import LoginForm from "./components/LoginForm";
// import Homepage from "./pages/Homepage";
// import LoginGoogle from "./pages/LoginGoogle";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// // Auth check loader function
// const requireAuth = () => {
//   const token = localStorage.getItem("token");
//   console.log("Token in requireAuth:", token); // Debugging log to see if token is set

//   if (!token) {
//     console.log("No token found, redirecting to /login");
//     return redirect("/login");
//   }
//   return null; // If token exists, allow access
// };

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootCreate />,
//     children: [
//       {
//         path: "/register",
//         element: <RegisterForm />,
//       },
//       {
//         path: "/login",
//         element: <LoginForm />,
//       },
//       {
//         path: "/login-google",
//         element: (
//           <GoogleOAuthProvider clientId="554479727507-70867vtpo11qqa220uvc2hcn7j99ccch.apps.googleusercontent.com">
//             <LoginGoogle />
//           </GoogleOAuthProvider>
//         ),
//         loader: () => {
//           const token = localStorage.getItem("token");
//           console.log("Checking token in /login-google:", token); // Debugging log

//           if (token) {
//             console.log("Token found, redirecting to /home");
//             return redirect("/home");
//           }
//           return null;
//         },
//       },
//       {
//         path: "/profiles/create",
//         element: <ProfileForm />,
//         loader: requireAuth, // Check if token exists
//       },
//     ],
//   },
//   {
//     path: "/home",
//     element: <Homepage />,
//     loader: requireAuth, // Check if token exists
//   },
// ]);
