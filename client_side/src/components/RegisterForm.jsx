import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterForm() {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios({
        url: "https://belakangan.ajiesep.tech/users/register",
        method: "post",
        data: {
          email,
          password,
        },
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCredentialResponse = (response) => {
    localStorage.setItem("access_token", response.credential);
    navigate("/home");
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
        <h1 className="mb-8 text-4xl font-bold text-gray-800">Join Us!</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 text-gray-800 bg-white border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        {/* Google Sign-Up Button */}
        <div id="buttonDiv" className="w-full max-w-sm mt-4">
          <button
            to={"/login"}
            className="flex items-center justify-center w-full p-3 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-800">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500 underline">
            Sign in here
          </Link>
        </p>
      </div>
    </>
  );
}
