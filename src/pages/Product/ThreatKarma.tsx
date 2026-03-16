import { motion } from "motion/react";
import { Network, Shield, Zap, Server, Globe, Activity, ArrowRight } from "lucide-react";

const ThreatKarmaPage = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Core Technology</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mt-6 mb-8 tracking-tighter leading-[0.9]">
              ThreatKarma™ <br />
              <span className="text-accent italic">Rail.</span>
            </h1>
            <p className="text-xl text-white/50 font-light leading-relaxed mb-10">
              The ThreatKarma™ Rail is a national-scale, privacy-preserving intelligence network. It ensures that a threat detected at one node is blocked across the entire network in under 0.4 milliseconds.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 orange-gradient rounded-full font-bold shadow-lg shadow-accent/20">Deploy Node</button>
              <button className="px-8 py-4 glass rounded-full font-bold">Read Whitepaper</button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="glass rounded-[48px] p-12 aspect-square flex items-center justify-center relative overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-20"
              >
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5 5" />
                  <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
                </svg>
              </motion.div>
              
              <div className="relative z-10 w-40 h-40 orange-gradient rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(255,99,33,0.4)]">
                <Shield className="text-white w-20 h-20" />
              </div>

              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div 
                    style={{ transform: `rotate(${angle}deg) translateX(150px)` }}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-accent"
                  >
                    <Server className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Sub-ms Propagation", desc: "Using advanced gossip protocols, we achieve near-instantaneous threat sharing across the globe.", icon: <Zap /> },
              { title: "Privacy Preserving", desc: "Zero-Knowledge Proofs (ZKP) ensure that threat signatures are shared without exposing sensitive data.", icon: <Lock /> },
              { title: "National Resilience", desc: "Designed to withstand large-scale infrastructure attacks through decentralized node architecture.", icon: <Globe /> }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[60px] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-accent/5 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">How it works.</h2>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Detection", desc: "A local node detects a novel AI-generated threat." },
                    { step: "02", title: "Signature Generation", desc: "The platform generates a privacy-preserving signature." },
                    { step: "03", title: "Rail Broadcast", desc: "The signature is broadcasted to the nearest rail nodes." },
                    { step: "04", title: "Universal Immunity", desc: "Every node on the network updates its defense instantly." }
                  ].map((s, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="text-2xl font-display font-bold text-accent">{s.step}</div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{s.title}</h4>
                        <p className="text-sm text-white/40">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black/40 rounded-3xl p-8 border border-white/10 font-mono text-xs space-y-4">
                <div className="text-accent">// ThreatKarma Sync Protocol v2.4</div>
                <div className="text-white/40">Initializing node handshake...</div>
                <div className="text-green-500">SUCCESS: Node IN-MUM-04 connected.</div>
                <div className="text-white/40">Receiving delta update [TID-99281]...</div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-accent" 
                    />
                  </div>
                  <span className="text-accent">SYNCING</span>
                </div>
                <div className="text-white/40">Applying signature to local firewall...</div>
                <div className="text-green-500">PROTECTION ACTIVE: 0.38ms latency.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreatKarmaPage;
