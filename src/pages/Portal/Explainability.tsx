import { motion } from "motion/react";
import { Eye, Zap, Shield, Activity, RefreshCw, ChevronRight, AlertTriangle, HelpCircle, ArrowRight } from "lucide-react";

const ExplainabilityPage = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Counterfactual Explainability™</h1>
        <p className="text-white/40 mt-1">Understanding the 'Why' behind AI decisions through alternative scenarios.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass rounded-[40px] p-10 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <Eye className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Decision Logic Analysis</h3>
                  <p className="text-sm text-white/40">We don't just say 'this is dangerous.' we show exactly what would need to change to make it safe.</p>
                </div>
              </div>

              <div className="p-8 glass rounded-3xl border border-red-500/20 bg-red-500/5 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-bold uppercase tracking-widest text-red-500">Current Prediction: HIGH RISK (0.94)</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 glass rounded-xl border-white/5">
                    <div className="text-[10px] font-bold text-white/20 uppercase mb-2">Domain Age</div>
                    <div className="text-lg font-bold">2 Days</div>
                  </div>
                  <div className="p-4 glass rounded-xl border-white/5">
                    <div className="text-[10px] font-bold text-white/20 uppercase mb-2">SSL Provider</div>
                    <div className="text-lg font-bold">Let's Encrypt</div>
                  </div>
                  <div className="p-4 glass rounded-xl border-white/5">
                    <div className="text-[10px] font-bold text-white/20 uppercase mb-2">IP Reputation</div>
                    <div className="text-lg font-bold text-red-500">Flagged</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center my-8">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent animate-bounce">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </div>
              </div>

              <div className="p-8 glass rounded-3xl border border-green-500/20 bg-green-500/5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-bold uppercase tracking-widest text-green-500">Counterfactual: LOW RISK (0.12)</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 glass rounded-xl border-green-500/20 bg-green-500/10">
                    <div className="text-[10px] font-bold text-green-500/40 uppercase mb-2">Domain Age</div>
                    <div className="text-lg font-bold text-green-500">{">"} 180 Days</div>
                    <div className="text-[8px] text-green-500/60 mt-1">Required Change</div>
                  </div>
                  <div className="p-4 glass rounded-xl border-white/5 opacity-50">
                    <div className="text-[10px] font-bold text-white/20 uppercase mb-2">SSL Provider</div>
                    <div className="text-lg font-bold">Let's Encrypt</div>
                    <div className="text-[8px] text-white/20 mt-1">No Change Needed</div>
                  </div>
                  <div className="p-4 glass rounded-xl border-green-500/20 bg-green-500/10">
                    <div className="text-[10px] font-bold text-green-500/40 uppercase mb-2">IP Reputation</div>
                    <div className="text-lg font-bold text-green-500">Clean</div>
                    <div className="text-[8px] text-green-500/60 mt-1">Required Change</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-[40px] p-10 border-white/5">
            <h3 className="text-xl font-bold mb-8">Feature Attribution</h3>
            <div className="space-y-6">
              {[
                { label: "Domain Age", impact: 45, color: "bg-red-500" },
                { label: "IP Geolocation", impact: 12, color: "bg-accent" },
                { label: "SSL Certificate Type", impact: 8, color: "bg-accent" },
                { label: "HTML Structure Similarity", impact: 35, color: "bg-red-500" },
              ].map((feature, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">{feature.label}</span>
                    <span className="font-bold">{feature.impact}% Impact</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${feature.impact}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${feature.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass rounded-[40px] p-8 border-white/5">
            <h3 className="text-xl font-bold mb-6">Why Explainability?</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1">Regulatory Compliance</h4>
                  <p className="text-xs text-white/40 leading-relaxed">Meet DPDP and global AI transparency requirements by providing human-readable reasons for every block.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1">Reduced False Positives</h4>
                  <p className="text-xs text-white/40 leading-relaxed">Allow security teams to quickly verify AI decisions and adjust thresholds with confidence.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-[40px] p-8 border-white/5">
            <h3 className="text-xl font-bold mb-6">Model Transparency</h3>
            <div className="p-6 glass rounded-2xl border-white/5 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-white/20 mb-4">Current Model</div>
              <div className="text-lg font-bold mb-2">XGBoost + SHAP</div>
              <div className="text-[10px] text-accent font-bold uppercase tracking-widest">Version 4.2.0-Stable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainabilityPage;
