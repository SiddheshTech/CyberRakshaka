import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="pt-32 pb-12 bg-bg border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 orange-gradient rounded-2xl flex items-center justify-center">
                <Shield className="text-white w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-3xl tracking-tighter leading-none">CyberRakshak</span>
                <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-accent font-bold">National Defense Rail</span>
              </div>
            </div>
            <p className="text-white/40 text-lg leading-relaxed max-w-md font-light">
              India's first collective AI cyber defense platform. Protecting the nation's digital future through shared intelligence and automated response.
            </p>
            <div className="mt-10 flex items-center gap-6">
              {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                <a key={social} href="#" className="text-white/20 hover:text-accent transition-colors text-sm font-medium">{social}</a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-8 text-white/80 uppercase tracking-widest text-xs">Product</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><Link to="/product/threat-karma" className="hover:text-accent transition-colors">ThreatKarma™</Link></li>
                <li><Link to="/product/explainability" className="hover:text-accent transition-colors">Explainability</Link></li>
                <li><Link to="/product/deepfake-guard" className="hover:text-accent transition-colors">Deepfake Guard</Link></li>
                <li><Link to="/product/llm-security" className="hover:text-accent transition-colors">LLM Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-white/80 uppercase tracking-widest text-xs">Solutions</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><Link to="/solutions/bfsi" className="hover:text-accent transition-colors">Banking & Finance</Link></li>
                <li><Link to="/solutions/government" className="hover:text-accent transition-colors">Government</Link></li>
                <li><Link to="/solutions/critical-infrastructure" className="hover:text-accent transition-colors">Critical Infrastructure</Link></li>
                <li><Link to="/solutions/enterprise" className="hover:text-accent transition-colors">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-white/80 uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><Link to="/resources/reports" className="hover:text-accent transition-colors">Threat Reports</Link></li>
                <li><Link to="/resources/docs" className="hover:text-accent transition-colors">API Docs</Link></li>
                <li><Link to="/resources/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
                <li><Link to="/resources/blog" className="hover:text-accent transition-colors">Security Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <div className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-mono">
            © 2026 CyberRakshak Defense Systems. All Rights Reserved. Made in India for the World.
          </div>
          <div className="flex items-center gap-8 text-[10px] text-white/20 uppercase tracking-widest font-bold">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
