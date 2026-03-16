import { motion } from "motion/react";
import { LayoutDashboard, Activity, ShieldAlert, ShieldCheck, Settings, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const PortalSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Overview", href: "/portal/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Live Feed", href: "/portal/dashboard/live", icon: <Activity className="w-5 h-5" /> },
    { name: "Risk Posture", href: "/portal/dashboard/risk", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Incidents", href: "/portal/dashboard/incidents", icon: <ShieldAlert className="w-5 h-5" /> },
    { name: "Settings", href: "/portal/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 border-r border-white/5 h-[calc(100vh-80px)] fixed left-0 top-20 bg-black/20 backdrop-blur-sm p-4 hidden xl:block">
      <div className="space-y-1">
        <div className="px-4 py-2 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Dashboard Menu</span>
        </div>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${isActive ? "bg-accent/10 text-accent" : "text-white/40 hover:text-white hover:bg-white/5"}`}
            >
              <div className="flex items-center gap-3">
                <div className={`${isActive ? "text-accent" : "text-white/20 group-hover:text-white"} transition-colors`}>
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              {isActive && (
                <motion.div layoutId="sidebar-active-indicator">
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>

      <div className="absolute bottom-8 left-4 right-4">
        <div className="glass p-4 rounded-2xl border-white/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Node Status: Secure</span>
          </div>
          <div className="text-[9px] text-white/30 leading-relaxed">
            Connected to Rail: IN-MUM-04<br />
            Last Sync: 2s ago
          </div>
        </div>
      </div>
    </aside>
  );
};
