import { motion } from "motion/react";
import { Database, Globe, Activity, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionsOverview = () => {
  const solutions = [
    {
      id: "bfsi",
      title: "Banking & Finance",
      desc: "Protecting digital transactions and preventing account takeover fraud with real-time AI forensics.",
      icon: <Database className="w-8 h-8" />,
      stats: ["99.9% Fraud Detection", "0.4ms Latency", "RBI Compliant"]
    },
    {
      id: "government",
      title: "Government & Defense",
      desc: "Securing national infrastructure and citizen data through a sovereign AI defense rail.",
      icon: <Globe className="w-8 h-8" />,
      stats: ["Sovereign Cloud", "CERT-In Integrated", "Air-Gapped Options"]
    },
    {
      id: "healthcare",
      title: "Healthcare",
      desc: "Ensuring patient data privacy and securing connected medical devices from ransomware.",
      icon: <Activity className="w-8 h-8" />,
      stats: ["HIPAA Ready", "Device Shielding", "Privacy First"]
    },
    {
      id: "enterprise",
      title: "Enterprise",
      desc: "Unified security for the modern distributed workforce against phishing and deepfakes.",
      icon: <Zap className="w-8 h-8" />,
      stats: ["Zero Trust Sync", "SSO Integration", "Automated SOC"]
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
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Industry Solutions</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mt-6 mb-8 tracking-tighter">
            Tailored <span className="text-accent italic">Defense.</span>
          </h1>
          <p className="text-xl text-white/50 font-light leading-relaxed">
            CyberRakshak adapts its AI models to the unique threat landscapes of different sectors, ensuring specialized protection where it matters most.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-8">
        {solutions.map((solution, i) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[48px] p-8 md:p-16 border-white/5 hover:border-accent/30 transition-all group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h2 className="text-4xl font-bold mb-6">{solution.title}</h2>
                <p className="text-white/40 text-lg mb-10 leading-relaxed">{solution.desc}</p>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  {solution.stats.map(s => (
                    <div key={s} className="flex items-center gap-2 text-sm font-bold text-white/80">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      {s}
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/solutions/${solution.id}`}
                  className="px-8 py-4 orange-gradient rounded-full font-bold inline-flex items-center gap-2 shadow-lg shadow-accent/20"
                >
                  Explore Solution <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="hidden lg:block">
                <div className="aspect-video glass rounded-[32px] border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-blue-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 font-display text-4xl font-bold italic tracking-tighter">
                      {solution.title} Dashboard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default SolutionsOverview;
