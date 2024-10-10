import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleRegularLogin = async (e) => {
    try {
      e.preventDefault();
      let user = await axios({
        url: "http://localhost:3000/users/login",
        method: "post",
        data: {
          email,
          password,
        },
      });
      localStorage.setItem("access_token", user.data.access_token);

      let profile = await axios({
        url: "http://localhost:3000/users/validateProfile",
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (
        profile.data.message ===
        "Profile not found, please create your profile first"
      ) {
        navigate("/profiles/create");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCredentialResponse = async (response) => {
    localStorage.setItem("access_token", response.credential);

    let profile = await axios({
      url: "http://localhost:3000/users/validateProfile",
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
  };

  useEffect(() => {
    google?.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    google?.accounts?.id?.renderButton(document.getElementById("buttonDiv"), {
      theme: "outline",
      size: "large",
    });
    google?.accounts.id.prompt();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1 p-8 text-gray-800 shadow-lg bg-opacity-20 backdrop-blur-lg rounded-2xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">Welcome Back!</h1>
        <form className="w-full max-w-sm" onSubmit={handleRegularLogin}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 text-gray-800 bg-white border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        {/* Google Login */}
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
