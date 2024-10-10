import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Sidebar = () => {
  const [login, setLogin] = useState(false);
  const [profile, setProfile] = useState(null); // State to store profile data
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setLogin(true);
      fetchProfileData(token); // Fetch profile data when user is logged in
    }
  }, []);

  const fetchProfileData = async (token) => {
    try {
      const response = await axios.post(
        "/profiles", // POST request to /profiles
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      );
      setProfile(response.data); // Assuming profile data is returned in response
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setLogin(false); // Update login state
    setProfile(null); // Clear profile data
    navigate("/login");
  };

  return (
    <div className="sidebar-container h-screen">
      <ul className="menu p-1 w-full md:w-20 h-full bg-base-200 text-base-content flex flex-col justify-between">
        <div className="flex-grow"></div>

        <div className="relative group">
          <button className="btn btn-ghost mb-4">
            <img
              src={profile?.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
          </button>

          <div className="absolute bottom-14 left-0 bg-base-100 text-base-content rounded-lg p-4 shadow-lg hidden group-hover:block w-48">
            <div className="flex items-center"></div>
            <div className="mt-2">
              <button
                className="btn btn-sm btn-primary w-full"
                onClick={() =>
                  document.getElementById("profile_modal").showModal()
                }
              >
                Profile
              </button>

              {/* Profile Modal */}
              <dialog id="profile_modal" className="modal">
                <div className="modal-box w-full">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={profile?.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                      alt="Profile"
                      className="w-24 h-24 rounded-full mb-4"
                    />
                    <h3 className="font-bold text-lg">{profile?.name || "User Name"}</h3>
                    <p className="py-4">{profile?.email || "user@example.com"}</p>
                  </div>
                </div>
              </dialog>

              {/* Conditional Rendering for Logout/Login */}
              {login ? (
                <button
                  className="btn btn-sm btn-secondary w-full mt-1"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="btn btn-sm btn-secondary w-full mt-1"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
