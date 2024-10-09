import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProfileForm() {
  let navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let token = localStorage.getItem("access_token");

      await axios({
        url: "http://localhost:3000/profiles",
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          displayName,
          profilePicture,
        },
      });
      
      navigate("/home");
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      {/* Right side - Profile Creation form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-2xl rounded-3xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 drop-shadow-lg">
          Create Your Profile
        </h1>
        <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
          {/* Profile Image URL Input */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4 border-4 border-blue-400 shadow-lg">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-semibold mb-1 text-gray-800"
              htmlFor="profilePicture"
            >
              Profile Picture URL
            </label>
            <input
              type="url"
              id="profilePicture"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
              className="w-full p-3 rounded-lg text-gray-800 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
              placeholder="Paste profile picture URL here"
            />
          </div>

          {/* Username Input */}
          <div>
            <label
              className="block text-sm font-semibold mb-1 text-gray-800"
              htmlFor="displayName"
            >
              Username
            </label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e)=>setDisplayName(e.target.value)}
              className="w-full p-3 rounded-lg text-gray-800 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
              placeholder="Enter your displayName"
            />
          </div>

          {/* Create Profile Button */}
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Create Profile
          </button>
        </form>
      </div>
    </>
  );
}
