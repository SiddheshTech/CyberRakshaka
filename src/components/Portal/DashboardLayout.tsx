import { Outlet } from "react-router-dom";
import { PortalSidebar } from "./PortalSidebar";

export const DashboardLayout = () => {
  return (
    <div className="flex">
      <PortalSidebar />
      <div className="flex-1 xl:ml-64">
        <Outlet />
      </div>
    </div>
  );
};
