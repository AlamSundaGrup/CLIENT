import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();


  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      await axios({
        url: "http://localhost:3000/register",
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
  }
  

  return (
    <>
     
      <div className="flex-1 flex flex-col items-center justify-center bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-lg text-gray-800 p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Join Us!</h1>
        <form className="w-full max-w-sm"onSubmit={handleSubmit} >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg text-gray-800 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
              className="w-full p-3 rounded-lg text-gray-800 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
        <div className="w-full max-w-sm mt-4">
          <Link
            to={"/login-google"}
            className="flex items-center justify-center w-full p-3 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </Link>
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
