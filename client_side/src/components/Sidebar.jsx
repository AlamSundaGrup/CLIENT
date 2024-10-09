import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [login, setLogin] = useState(false);
  const [profile, setProfile] = useState({
    displayName: "Guest",
    profilePicture: "",
    email: "guest@example.com", 
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setLogin(true);
    }

    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setLogin(false);
    navigate("/login");
  };

  return (
    <div className="w-full text-base-content p-4 flex justify-between items-center shadow-md bg-transparent">
    
      <div className="flex items-center">
        <img
          src={
            profile.profilePicture ||
            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          }
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>

          <button
            className="font-bold text-lg"
            onClick={() => document.getElementById("profile_modal").showModal()}
          >
            {profile.displayName || "GUEST"}
          </button>
        </div>
      </div>

      <div>
        {login ? (
          <button className="btn btn-sm btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        )}
      </div>

      {/*  Modal */}
      <dialog id="profile_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col items-center justify-center">
            <img
              src={
                profile.profilePicture ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="font-bold text-lg">
              {profile.displayName || "Guest"}
            </h3>
            <p className="py-4">{profile.email || "guest@example.com"}</p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Sidebar;
