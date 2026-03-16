import { motion } from "motion/react";
import { Shield, Bell, Search, User, LogOut, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const PortalNavbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: "Dashboard", href: "/portal/dashboard" },
    { name: "Scanner", href: "/portal/scanner" },
    { name: "AttackDNA", href: "/portal/attack-dna" },
    { name: "ThreatKarma", href: "/portal/threat-karma" },
    { name: "CyberAadhaar", href: "/portal/cyber-aadhaar" },
    { name: "Passport", href: "/portal/cyber-passport" },
    { name: "Explain", href: "/portal/explainability" },
    { name: "Mutation", href: "/portal/mutation-lab" },
    { name: "Alerts", href: "/portal/alerts" },
    { name: "Reports", href: "/portal/reports" },
  ];

  const activeLink = navLinks.find(link => location.pathname.startsWith(link.href)) || navLinks[0];

  return (
    <nav className="h-20 border-b border-white/5 bg-black/50 backdrop-blur-xl fixed top-0 left-0 w-full z-50 px-6">
      <div className="max-w-[1600px] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 orange-gradient rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
              <Shield className="text-white w-6 h-6" />
            </div>
            <div className="hidden xl:block">
              <div className="font-display font-bold text-xl tracking-tighter leading-none">CyberRakshak</div>
              <div className="text-[7px] font-mono tracking-[0.2em] uppercase text-accent font-bold">Defense Portal</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all relative group ${location.pathname.startsWith(link.href) ? "text-white bg-white/5" : "text-white/40 hover:text-white hover:bg-white/5"}`}
              >
                {link.name}
                {location.pathname.startsWith(link.href) && (
                  <motion.div 
                    layoutId="portal-nav-active"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-accent transition-colors" />
            <input 
              type="text" 
              placeholder="Search threats, logs, assets..." 
              className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs w-64 focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-accent transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-black" />
            </button>
            
            <div className="h-8 w-px bg-white/10 mx-2" />

            <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold">Dr. Arjun Sharma</div>
                <div className="text-[9px] text-accent font-bold uppercase tracking-widest">Admin Node</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-accent to-blue-600 p-0.5">
                <div className="w-full h-full rounded-[9px] bg-black flex items-center justify-center">
                  <User className="w-5 h-5 text-white/60" />
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
