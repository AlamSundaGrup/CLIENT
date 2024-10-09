import { Link } from "react-router-dom";
import aetherSunset from "../assets/front.png"; 

export default function LoginForm() {
  const backgroundColor = "#17233B"; 
  return (
    <div
      className="min-h-screen flex justify-center items-center relative"
      style={{ backgroundColor }}
    >

      <div className="bg-[#D0B181] flex justify-between items-center w-[1000px] h-auto lg:h-[500px] rounded-xl shadow-lg overflow-hidden mx-auto relative p-6">
      
        <div className="w-[50%] h-full flex flex-col justify-center items-center pl-8 pr-8">
          <h1 className="text-5xl font-oswald font-extrabold mb-1 text-[#17233bff]">
            LOGIN
          </h1>{" "}
          {/* Oswald 900 */}
          <p className="text-sm mb-4 mt-1 text-[#17233bff] font-poppins">
            TO YOUR ACCOUNT
          </p>{" "}
          {/* Poppins for subheading */}
          <form className="space-y-4 w-full">
            <div>
              <label
                className="block text-sm font-poppins mb-2 text-[#9D6C4A]"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D0B181]" // Ecru for focus ring
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-poppins mb-2 text-[#9D6C4A]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D0B181]" // Ecru for focus ring
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full p-1.5 text-xs font-poppins rounded-md bg-[#5A857B] hover:bg-[#9D6C4A] text-white font-semibold transition-all duration-300" // Hooker's Green for button background, Raw Umber for hover
            >
              SIGN IN
            </button>
          </form>
          <button className="mt-4 w-full p-1.5 text-xs rounded-md bg-[#D9CEB5] hover:bg-[#5A857B] font-poppins font-semibold text-gray-700 flex justify-center items-center transition-all duration-300">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="w-4 h-4 mr-2"
            />
            SIGN IN WITH GOOGLE
          </button>
          <p className="mt-4 text-sm font-poppins text-gray-800">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-[#9D6C4A] underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Short Vertical line beside the form */}
        <div className="h-[300px] w-1 border-l-4 border-[#17233bff]"></div>

        {/* Right side - Image */}
        <div className="w-[50%] h-full flex justify-center items-center p-6">
          <img
            src={aetherSunset}
            alt="Aether Sunset"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
