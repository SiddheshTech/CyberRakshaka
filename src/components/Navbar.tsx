import { motion, AnimatePresence } from "motion/react";
import { Shield, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 glass" : "py-8 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="w-10 h-10 orange-gradient rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,99,33,0.3)]"
          >
            <Shield className="text-white w-6 h-6" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-tighter leading-none">CyberRakshak</span>
            <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-accent font-bold">National Defense Rail</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium transition-colors relative group ${location.pathname === link.href ? "text-accent" : "text-white/60 hover:text-accent"}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all ${location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Portal Login</Link>
          <button className="px-6 py-2.5 orange-gradient rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/20">
            Join the Rail
          </button>
        </div>

        <button className="lg:hidden text-white p-2 glass rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full glass border-t border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-lg font-medium transition-colors ${location.pathname === link.href ? "text-accent" : "hover:text-accent"}`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col gap-4">
                <Link to="/login" className="w-full py-4 glass rounded-xl font-bold text-center">Portal Login</Link>
                <button className="w-full py-4 orange-gradient rounded-xl font-bold">Join the Rail</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
