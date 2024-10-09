import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    localStorage.setItem("access_token", response.credential);
    navigate("/home");
  };

  useEffect(() => {
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
        theme: "outline",
        size: "large",
      });
      google.accounts.id.prompt();
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1 p-8 text-gray-800 shadow-lg bg-opacity-20 backdrop-blur-lg rounded-2xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">Welcome Back!</h1>
        <form className="w-full max-w-sm">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 text-gray-800 bg-white border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 text-gray-800 bg-white border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <div id="buttonDiv" className="w-full max-w-sm mt-4"></div>

        <p className="mt-6 text-sm text-gray-800">
          Don&apos;t have an account?{" "}
          <Link to={"/register"} className="text-blue-500 underline">
            Sign up here
          </Link>
        </p>
      </div>
    </>
  );
}
