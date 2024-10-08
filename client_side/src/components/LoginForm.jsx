import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <>
      {/* Right side - Sign-in form */}
      <div className="flex-1 flex flex-col items-center justify-center bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-lg text-gray-800 p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome Back!</h1>
        <form className="w-full max-w-sm">
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg text-gray-800 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-lg text-gray-800 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold text-white transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Google Sign-In Button */}
        <div className="mt-4 w-full max-w-sm">
          <button className="w-full p-3 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 font-semibold text-gray-700 transition-all duration-300 flex items-center justify-center">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
        </div>

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
