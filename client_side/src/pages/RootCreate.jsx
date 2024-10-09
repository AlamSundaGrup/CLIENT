import { Outlet } from "react-router-dom";

export default function RootCreate() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-slate-50">
      {/* Left side - Image */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <img
          className="h-full w-full object-cover"
          src="https://s3-alpha.figma.com/hub/file/408830524/c98e3200-42db-4c7f-b7cd-225875e0af3a-cover"
          alt="Login illustration"
        />
      </div>

      {/* Right side - Sign-in form */}
      <Outlet />
    </div>
  );
}
