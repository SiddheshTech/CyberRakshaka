import { motion } from "motion/react";
import { BarChart3, Eye, Shield, Search, Activity, ChevronRight, Info } from "lucide-react";

const ExplainabilityPage = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">AI Transparency</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mt-6 mb-8 tracking-tighter leading-[0.9]">
              Explainable <br />
              <span className="text-white/30 italic">Security.</span>
            </h1>
            <p className="text-xl text-white/50 font-light leading-relaxed mb-10">
              Stop guessing why your security tools flagged an alert. CyberRakshak's Explainability Engine provides deep, human-readable insights into every detection.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 orange-gradient rounded-full font-bold shadow-lg shadow-accent/20">View Demo</button>
              <button className="px-8 py-4 glass rounded-full font-bold">API Docs</button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="glass rounded-[48px] p-10 border-white/5 shadow-2xl overflow-hidden group">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-accent w-6 h-6" />
                  <span className="font-bold uppercase tracking-widest text-xs">SHAP Analysis</span>
                </div>
                <div className="text-[10px] font-mono text-white/30 uppercase">Threat ID: CR-9281</div>
              </div>

              <div className="space-y-8">
                {[
                  { label: "Visual Similarity", score: 92, color: "bg-red-500" },
                  { label: "Domain Age", score: 85, color: "bg-accent" },
                  { label: "Payload Entropy", score: 64, color: "bg-blue-500" },
                  { label: "Rail Reputation", score: 98, color: "bg-red-500" }
                ].map((bar, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-white/60">{bar.label}</span>
                      <span className="text-white">{bar.score}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.score}%` }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        className={`h-full ${bar.color}`} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] font-bold text-accent uppercase mb-2">MITRE ATT&CK Mapping</div>
                <div className="text-sm font-medium mb-4">T1566.001 - Phishing: Spearphishing Attachment</div>
                <div className="flex gap-2">
                  {['Initial Access', 'Execution', 'Defense Evasion'].map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-white/5 text-[8px] text-white/40 border border-white/5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">The 5 Levels of Evidence.</h2>
            <p className="text-white/40">We provide a multi-layered approach to understanding threat intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Hard Evidence", desc: "Direct forensic markers like malicious IPs, hashes, and domain metadata.", icon: <Shield /> },
              { title: "SHAP Importance", desc: "Mathematical proof of which features influenced the AI's decision.", icon: <BarChart3 /> },
              { title: "Counterfactuals", desc: "Explaining what would have happened if specific features were different.", icon: <Info /> },
              { title: "MITRE Alignment", desc: "Mapping threats to the global standard for adversary tactics.", icon: <Search /> },
              { title: "Rail Context", desc: "Historical data from the ThreatKarma™ rail to provide global perspective.", icon: <Activity /> },
              { title: "Actionable Steps", desc: "Clear, automated instructions on how to remediate the threat.", icon: <ChevronRight /> }
            ].map((item, i) => (
              <div key={i} className="glass p-10 rounded-[32px] border-white/5 hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplainabilityPage;
