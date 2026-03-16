import { motion } from "motion/react";
import { Fingerprint, Activity, Shield, Globe, Zap, ChevronRight, UserCheck } from "lucide-react";

const CyberAadhaarPage = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">CyberAadhaar™ Behavioral Identity</h1>
        <p className="text-white/40 mt-1">Verifiable device session identity built from 47 behavioral signals. Zero PII.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass rounded-[40px] p-10 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <Fingerprint className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Session Trust Engine</h3>
                    <p className="text-sm text-white/40">Real-time behavioral fingerprinting without tracking personal data.</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-display font-bold text-accent">98.2</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">Global Trust Score</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 glass rounded-2xl border-white/5">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Behavioral Signals</div>
                  <div className="space-y-3">
                    {['Keystroke Dynamics', 'Mouse Movement Path', 'Scroll Velocity', 'Touch Pressure', 'Device Orientation'].map((signal, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-xs">{signal}</span>
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 glass rounded-2xl border-white/5">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Privacy Compliance</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-xs">Zero PII Collected</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-xs">Anonymized Session ID</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-xs">DPDP Act Compliant</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 glass rounded-3xl border border-accent/20 bg-accent/5">
                <div className="flex items-center gap-4 mb-4">
                  <UserCheck className="w-6 h-6 text-accent" />
                  <h4 className="font-bold">National Trust Network</h4>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  CyberAadhaar scores are shareable across every organization in India. A session trusted by a bank is instantly recognized as low-risk by a government portal, reducing friction while enhancing security.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-[40px] p-10 border-white/5">
            <h3 className="text-xl font-bold mb-8">Recent Trusted Sessions</h3>
            <div className="space-y-4">
              {[
                { id: "SID-8821", origin: "Mumbai", device: "macOS / Chrome", score: 99, time: "Just now" },
                { id: "SID-8820", origin: "Delhi", device: "Android / App", score: 94, time: "2m ago" },
                { id: "SID-8819", origin: "Bangalore", device: "Windows / Edge", score: 88, time: "5m ago" },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between p-6 glass rounded-2xl border-white/5 hover:border-accent/30 transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">{session.device}</div>
                      <div className="text-xs text-white/40">{session.origin} • {session.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-display font-bold text-accent">{session.score}</div>
                    <div className="text-[10px] font-mono text-white/20 uppercase">{session.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass rounded-[40px] p-8 border-white/5">
            <h3 className="text-xl font-bold mb-6">Signal Analysis</h3>
            <div className="space-y-6">
              {[
                { label: "Temporal Patterns", value: 92 },
                { label: "Network Context", value: 88 },
                { label: "Hardware Fingerprint", value: 95 },
                { label: "Interaction Velocity", value: 74 },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-white/40">{stat.label}</span>
                    <span>{stat.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.value}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[40px] p-8 border-white/5">
            <h3 className="text-xl font-bold mb-6">Network Effect</h3>
            <div className="text-center p-6">
              <div className="text-4xl font-display font-bold text-accent mb-2">14.2M</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Verified Sessions Today</div>
              <div className="mt-6 flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <motion.div 
                    key={i}
                    animate={{ height: [10, 30, 10] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1 bg-accent/40 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberAadhaarPage;
