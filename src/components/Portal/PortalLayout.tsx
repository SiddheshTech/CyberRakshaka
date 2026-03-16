import { Outlet } from "react-router-dom";
import { PortalNavbar } from "./PortalNavbar";

export const PortalLayout = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-accent selection:text-white">
      <PortalNavbar />
      <main className="pt-20 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};
