import { motion } from "motion/react";
import { Shield, Zap, Lock, Eye, Fingerprint, Terminal, Activity, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductOverview = () => {
  const products = [
    {
      id: "threat-karma",
      title: "ThreatKarma™ Rail",
      desc: "The world's first collective intelligence rail for sub-millisecond threat propagation.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Real-time Sync", "Privacy Preserving", "National Scale"]
    },
    {
      id: "explainability",
      title: "Explainability Engine",
      desc: "Deep forensic insights into why AI flagged a threat, mapped to MITRE ATT&CK.",
      icon: <Eye className="w-8 h-8" />,
      features: ["SHAP Values", "Evidence Logs", "Actionable Intel"]
    },
    {
      id: "deepfake-guard",
      title: "Deepfake Guard",
      desc: "Advanced forensic analysis to detect synthetic media in real-time communications.",
      icon: <Fingerprint className="w-8 h-8" />,
      features: ["Audio Analysis", "Video Forensics", "Liveness Check"]
    },
    {
      id: "llm-security",
      title: "LLM Security",
      desc: "Protecting corporate AI models from prompt injection and data exfiltration.",
      icon: <Terminal className="w-8 h-8" />,
      features: ["Injection Shield", "Data Leak Guard", "Policy Enforcement"]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">The Platform</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mt-6 mb-8 tracking-tighter">
            Unified <span className="text-accent italic">Defense.</span>
          </h1>
          <p className="text-xl text-white/50 font-light leading-relaxed">
            CyberRakshak isn't just a tool; it's a comprehensive ecosystem designed to protect modern enterprises from the next generation of AI-powered cyber threats.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[48px] p-12 border-white/5 hover:border-accent/30 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
              <p className="text-white/40 mb-8 leading-relaxed">{product.desc}</p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {product.features.map(f => (
                  <span key={f} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60">
                    {f}
                  </span>
                ))}
              </div>

              <Link 
                to={`/product/${product.id}`}
                className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all"
              >
                Deep Dive <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-black/50 mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Why CyberRakshak?</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { title: "Legacy Tools", desc: "Reactive, siloed, and easily bypassed by AI-generated polymorphic malware.", status: "Vulnerable" },
              { title: "Standard AI Tools", desc: "Black-box models with high false positives and no collective intelligence.", status: "Limited" },
              { title: "CyberRakshak", desc: "Proactive, explainable, and powered by a national-scale defense rail.", status: "Superior", highlight: true }
            ].map((item, i) => (
              <div key={i} className={`p-10 rounded-[32px] ${item.highlight ? "orange-gradient shadow-2xl shadow-accent/20" : "glass border-white/5"}`}>
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${item.highlight ? "text-white/80" : "text-accent"}`}>{item.status}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className={`${item.highlight ? "text-white/80" : "text-white/40"} text-sm leading-relaxed`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductOverview;
