import { Outlet } from "react-router-dom";

export default function RootCreate() {
  return (
    <div>

      {/* Right side - Sign-in form */}
      <Outlet />
    </div>
  );
}
