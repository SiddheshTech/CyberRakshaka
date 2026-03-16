import { motion } from "motion/react";
import { Shield, Lock, Mail, ArrowRight, Fingerprint, Eye, EyeOff } from "lucide-react";
import { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate("/portal/dashboard");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 orange-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20 group-hover:rotate-180 transition-transform duration-500">
              <Shield className="text-white w-7 h-7" />
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-2xl tracking-tighter leading-none">CyberRakshak</div>
              <div className="text-[8px] font-mono tracking-[0.3em] uppercase text-accent font-bold">Defense Portal</div>
            </div>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Access Secure Rail</h1>
          <p className="text-white/40 mt-2">Enter your credentials to access the national defense network.</p>
        </div>

        <div className="glass rounded-[40px] p-8 md:p-10 border-white/5 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Authorized Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.gov.in" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Security Key</label>
                <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-white transition-colors">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-accent" />
              <label htmlFor="remember" className="text-xs text-white/40">Trust this device for 30 days</label>
            </div>

            <button 
              type="submit"
              className="w-full py-4 orange-gradient rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-accent/30 group"
            >
              Initialize Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-6">Or authenticate with</div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 glass rounded-xl text-xs font-bold hover:bg-white/10 transition-colors">
                <Fingerprint className="w-4 h-4 text-accent" /> Biometric
              </button>
              <button className="flex items-center justify-center gap-3 py-3 glass rounded-xl text-xs font-bold hover:bg-white/10 transition-colors">
                <Shield className="w-4 h-4 text-accent" /> Hardware Key
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-white/20">
            Authorized Personnel Only. All sessions are monitored and logged. <br />
            © 2026 CyberRakshak National Defense Rail.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
