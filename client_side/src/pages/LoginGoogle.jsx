import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function LoginGoogle() {
  const navigate = useNavigate();

  async function fetchLoginGoogle(response) {
    console.log("Google response:", response);

    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:5174/google-login",
        headers: {
          google_token: response.credential,
        },
      });
      console.log("Backend response:", data);
      localStorage.setItem("token", data.access_token);
      navigate("/");
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      console.log(error, "<<<<<<");
    }
  }

  const handleLoginGoogle = async (response) => {
    fetchLoginGoogle(response);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-1 p-8 text-gray-800 shadow-lg bg-opacity-20 backdrop-blur-lg rounded-2xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">Welcome Back!</h1>
        <div className="w-full max-w-sm">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              handleLoginGoogle(credentialResponse);
            }}
            onError={() => {
              console.log("Login failed");
            }}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="flex items-center justify-center w-full p-3 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <FaGoogle className="w-5 h-5 mr-2" />
                Sign in with Google
              </button>
            )}
          />
        </div>

        <p className="mt-6 text-sm text-gray-800">
          Don&apos;t have an account?{" "}
          <Link to={"/register"} className="text-blue-500 underline">
            Sign up here
          </Link>
        </p>

        <Link
          to="/login"
          className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Back to login
        </Link>
      </div>
    </div>
  );
}

export default LoginGoogle;

// import axios from "axios";
// import { GoogleLogin } from "@react-oauth/google";
// import { Link, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";

// function LoginGoogle() {
//   const navigate = useNavigate();

//   async function fetchLoginGoogle(response) {
//     console.log("Google response:", response);

//     try {
//       const { data } = await axios({
//         method: "POST",
//         url: "http://localhost:5174/google-login",
//         headers: {
//           google_token: response.credential,
//         },
//       });
//       console.log("Backend response:", data);
//       localStorage.setItem("token", data.access_token);
//       navigate("/");
//     } catch (error) {
//       console.error(
//         "Login error:",
//         error.response ? error.response.data : error.message
//       );
//       console.log(error, "<<<<<<");
//     }
//   }

//   const handleLoginGoogle = async (response) => {
//     fetchLoginGoogle(response);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex flex-col items-center justify-center flex-1 p-8 text-gray-800 shadow-lg bg-opacity-20 backdrop-blur-lg rounded-2xl">
//         <h1 className="mb-8 text-4xl font-bold text-gray-800">Welcome Back!</h1>
//         <div className="w-full max-w-sm">
//           <GoogleLogin
//             onSuccess={(credentialResponse) => {
//               handleLoginGoogle(credentialResponse);
//             }}
//             onError={() => {
//               console.log("Login failed");
//             }}
//             render={(renderProps) => (
//               <button
//                 onClick={renderProps.onClick}
//                 disabled={renderProps.disabled}
//                 className="flex items-center justify-center w-full p-3 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 <FaGoogle className="w-5 h-5 mr-2" />
//                 Sign in with Google
//               </button>
//             )}
//           />
//         </div>

//         <p className="mt-6 text-sm text-gray-800">
//           Don&apos;t have an account?{" "}
//           <Link to={"/register"} className="text-blue-500 underline">
//             Sign up here
//           </Link>
//         </p>

//         <Link
//           to="/login"
//           className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500"
//         >
//           Back to login
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default LoginGoogle;

// import axios from "axios";
// import { GoogleLogin } from "@react-oauth/google";
// import { Link, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa"; // Import Google icon

// function LoginGoogle() {
//   const navigate = useNavigate();

//   async function fetchLoginGoogle(response) {
//     console.log("Google response:", response);

//     try {
//       const { data } = await axios({
//         method: "POST",
//         url: "http://localhost:5174/google-login",
//         headers: {
//           google_token: response.credential,
//         },
//       });
//       console.log("Backend response:", data);
//       localStorage.setItem("token", data.access_token);
//       navigate("/");
//     } catch (error) {
//       console.error(
//         "Login error:",
//         error.response ? error.response.data : error.message
//       );
//       console.log(error, "<<<<<<");
//     }
//   }

//   const handleLoginGoogle = async (response) => {
//     fetchLoginGoogle(response);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="w-full max-w-md">
//         <div className="overflow-hidden bg-white rounded-lg shadow-2xl">
//           <div className="p-8">
//             <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
//               Welcome Back
//             </h2>
//             <p className="mb-8 text-center text-gray-600">
//               Please sign in to continue
//             </p>

//             <div className="flex justify-center mb-6">
//               <GoogleLogin
//                 onSuccess={(credentialResponse) => {
//                   handleLoginGoogle(credentialResponse);
//                 }}
//                 onError={() => {
//                   console.log("Login failed");
//                 }}
//                 render={(renderProps) => (
//                   <button
//                     onClick={renderProps.onClick}
//                     disabled={renderProps.disabled}
//                     className="flex items-center justify-center w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                   >
//                     <FaGoogle className="w-5 h-5 mr-2" />
//                     Sign in with Google
//                   </button>
//                 )}
//               />
//             </div>

//             <div className="text-center">
//               <Link
//                 to="/login"
//                 className="text-sm font-medium text-blue-600 hover:text-blue-500"
//               >
//                 Back to login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginGoogle;

// import axios from "axios";
// import { GoogleLogin } from "@react-oauth/google";
// import { Link, useNavigate } from "react-router-dom";

// function LoginGoogle() {
//   const navigate = useNavigate();

//   async function fetchLoginGoogle(response) {
//     console.log("Google response:", response);

//     try {
//       const { data } = await axios({
//         method: "POST",
//         url: "http://localhost:5174/google-login",
//         headers: {
//           google_token: response.credential,
//         },
//       });
//       console.log("Backend response:", data);
//       localStorage.setItem("token", data.access_token);
//       navigate("/");
//     } catch (error) {
//       console.error(
//         "Login error:",
//         error.response ? error.response.data : error.message
//       );
//       console.log(error, "<<<<<<");
//     }
//   }

//   const handleLoginGoogle = async (response) => {
//     fetchLoginGoogle(response);
//   };

//   return (
//     <div>
//       <div
//         className="flex items-center justify-center h-full min-h-screen p-4"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="justify-center w-full max-w-md mx-auto">
//           <form className="p-8 text-white shadow-lg bg-opacity-80 bg-zinc-900 rounded-2xl backdrop-blur-md">
//             <div className="mb-8 text-center">
//               <h3 className="text-3xl font-extrabold">Sign in</h3>
//               <p className="mt-2 text-zinc-400">
//                 Welcome back! Please sign in to your account.
//               </p>
//             </div>
//             <hr className="my-6 border-gray-600" />
//             <div className="flex justify-center mb-6">
//               <GoogleLogin
//                 onSuccess={(credentialResponse) => {
//                   handleLoginGoogle(credentialResponse);
//                 }}
//                 onError={() => {
//                   console.log("Login failed");
//                 }}
//               />
//             </div>
//             <div className="text-center">
//               <p className="text-zinc-500"></p>
//               <Link
//                 to={"/login"}
//                 type="button"
//                 className="px-6 py-3 mt-4 text-white transition duration-300 bg-teal-500 rounded-full shadow-md hover:bg-teal-400"
//               >
//                 back to login
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginGoogle;
