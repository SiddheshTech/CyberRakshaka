import { motion, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { 
  Shield, 
  Zap, 
  Globe, 
  Activity, 
  Cpu, 
  Eye, 
  Network, 
  Database, 
  BarChart3, 
  Fingerprint, 
  Radio, 
  Server, 
  Terminal, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  Dna,
  Lock,
  Share2,
  AlertTriangle,
  Layers,
  MousePointer2,
  MoveDown,
  FlaskConical
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScrollRevealText = ({ text, className = "" }: { text: string, className?: string }) => {
  const characters = text.split("");
  return (
    <p className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.5, delay: i * 0.01 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

const SVGLineAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.path
          d="M0,200 Q250,100 500,200 T1000,200"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M1000,800 Q750,900 500,800 T0,800"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6321" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF6321" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF6321" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[120vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
      <motion.div 
        style={{ y, scale, opacity, rotate }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,99,33,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
          alt="Cyber Background" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <SVGLineAnimation />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-accent/20 text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-12"
          >
            <Radio className="w-3 h-3 animate-pulse" />
            National Cyber Defense Rail v2.5
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-display font-bold tracking-tighter leading-[0.8] mb-12">
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="block"
            >
              COLLECTIVE
            </motion.span>
            <motion.span 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-accent italic block"
            >
              IMMUNITY.
            </motion.span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-3xl text-white/60 leading-tight mb-16 font-light tracking-tight">
              India's first autonomous threat intelligence economy. <br className="hidden md:block" />
              One detection shields the entire nation <span className="text-white font-medium">instantly.</span>
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/portal/dashboard">
              <motion.button 
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-16 py-6 orange-gradient rounded-2xl text-xl font-bold shadow-[0_20px_80px_rgba(255,99,33,0.3)] flex items-center justify-center gap-3 group"
              >
                Enter Portal <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", scale: 1.05, rotate: 1 }}
              className="w-full sm:w-auto px-16 py-6 glass rounded-2xl text-xl font-bold transition-all border border-white/10"
            >
              Technical Whitepaper
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to Explore</span>
        <MoveDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};

const ProblemSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={ref} className="py-40 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-32">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-red-500 font-bold tracking-[0.4em] uppercase text-xs block mb-6"
              >
                The Escalation
              </motion.span>
              <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] text-white">
                THE <span className="text-white/20">SILENT</span> <br />
                WARFARE.
              </h2>
            </div>
            <div className="md:pt-20 max-w-md">
              <ScrollRevealText 
                text="Every 11 seconds, an organization in India is targeted by a sophisticated cyber attack. Traditional siloed defense is no longer enough. When one bank is hit, the next is already vulnerable. We are changing the math of defense."
                className="text-xl text-white/40 leading-relaxed font-light"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Daily Attacks", val: "1.2M+", desc: "Attempted breaches across national infrastructure every 24 hours." },
              { label: "Avg. Detection Time", val: "192 Days", desc: "The time an attacker remains inside a network before discovery." },
              { label: "Economic Impact", val: "₹1.25T", desc: "Estimated annual loss to the Indian economy due to cyber crime." }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-10 glass rounded-[40px] border-white/5 hover:border-red-500/20 transition-colors group"
              >
                <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div className="text-5xl font-display font-bold mb-4">{stat.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/20 mb-4">{stat.label}</div>
                <p className="text-sm text-white/40 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-40 opacity-5 select-none pointer-events-none">
        <motion.div style={{ x: x1 }} className="text-[15vw] font-display font-bold whitespace-nowrap leading-none text-white">
          RANSOMWARE PHISHING DDOS EXFILTRATION MALWARE
        </motion.div>
        <motion.div style={{ x: x2 }} className="text-[15vw] font-display font-bold whitespace-nowrap leading-none text-accent">
          SPOOFING INJECTION ZERO-DAY BRUTEFORCE BOTNET
        </motion.div>
      </div>
    </section>
  );
};

const RailSection = () => {
  return (
    <section className="py-40 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10 glass rounded-[60px] p-12 border-white/5 aspect-square flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-blue-600/20 blur-[100px]" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 rounded-full border-2 border-dashed border-accent/30 flex items-center justify-center"
                  >
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 rounded-full border-2 border-dashed border-blue-500/30 flex items-center justify-center"
                    />
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-20 h-20 text-accent" />
                  </div>
                  
                  {/* Floating Nodes */}
                  {[0, 72, 144, 216, 288].map((angle, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                      style={{
                        top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * 160}px)`,
                        left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * 160}px)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 glass rounded-3xl p-6 border-white/10 flex flex-col justify-between z-20">
              <Activity className="w-6 h-6 text-accent" />
              <div>
                <div className="text-2xl font-bold">0.38ms</div>
                <div className="text-[8px] font-bold uppercase tracking-widest text-white/40">Propagation Latency</div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs block mb-6">The Solution</span>
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
                THE NATIONAL <br />
                <span className="text-white/20">DEFENSE</span> RAIL.
              </h2>
              <p className="text-2xl text-white/60 font-light leading-relaxed">
                CyberRakshak isn't just software. It's a high-speed intelligence rail connecting every critical node in India. When one node detects a threat, the "genetic signature" is broadcasted instantly.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { title: "Instant Propagation", desc: "Threat signatures travel across the national rail in sub-millisecond speeds.", icon: Zap },
                { title: "Privacy Preserving", desc: "No raw logs or PII ever leave your node. Only anonymized mathematical hashes.", icon: Lock },
                { title: "Autonomous Response", desc: "AI-driven nodes automatically update firewall rules based on peer intelligence.", icon: Cpu }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass border-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EditorialSection = () => {
  return (
    <section className="py-60 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Randomly Aligned Text Elements */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute -top-20 left-10 max-w-xs"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent block mb-4">01. Collective Intelligence</span>
          <p className="text-sm text-white/30 leading-relaxed italic">
            "The strength of the pack is the wolf, and the strength of the wolf is the pack."
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute top-40 right-0 max-w-sm text-right"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-blue-500 block mb-4">02. Privacy by Design</span>
          <p className="text-sm text-white/30 leading-relaxed">
            We built CyberRakshak on the principle that security should never come at the cost of privacy. Our zero-knowledge proofs ensure your data remains yours.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center text-center py-40">
          <h2 className="text-[12vw] font-display font-bold tracking-tighter leading-[0.75] mb-20">
            BEYOND <br />
            <span className="text-white/10">DETECTION.</span>
          </h2>
          <div className="max-w-2xl">
            <ScrollRevealText 
              text="We are not just building a scanner. We are building a national immune system. A living, breathing network that learns from every attack and grows stronger with every node that joins. This is the future of digital sovereignty."
              className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-white/80"
            />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute bottom-20 left-1/4 max-w-md"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-green-500 block mb-4">03. Future Proof</span>
          <p className="text-sm text-white/30 leading-relaxed">
            As quantum computing and AI-driven attacks emerge, our decentralized architecture provides the only viable path for long-term national security.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureDeepDive = () => {
  const features = [
    {
      id: "01",
      title: "ThreatKarma™",
      subtitle: "The Reputation Economy",
      desc: "An incentivized intelligence sharing model. Organizations earn 'Karma' by contributing high-fidelity threat signals. Higher karma unlocks deeper protection levels and national recognition.",
      details: [
        "Proof-of-Contribution consensus",
        "Automated fidelity scoring",
        "Tiered protection benefits",
        "National leaderboard integration"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
      align: "left"
    },
    {
      id: "02",
      title: "AttackDNA™",
      subtitle: "Genetic Fingerprinting",
      desc: "Every cyber attack leaves a unique behavioral trail. Our GNN-powered engine extracts these 'genes' to link disparate incidents to the same threat actor, even when they change IPs or domains.",
      details: [
        "Behavioral graph mapping",
        "Cross-sector correlation",
        "Attacker persona profiling",
        "Predictive move analysis"
      ],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000",
      align: "right"
    },
    {
      id: "03",
      title: "CyberPassport™",
      subtitle: "Verifiable Evidence",
      desc: "Transforming incident logs into cryptographically signed evidence tokens. Share proof of an attack with authorities without exposing sensitive internal data or PII.",
      details: [
        "SHA-256 commitment tokens",
        "Zero-knowledge verification",
        "Tamper-proof audit trails",
        "Legal compliance ready"
      ],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
      align: "left"
    }
  ];

  return (
    <section className="py-40 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-60">
          {features.map((f, i) => (
            <div key={i} className={`flex flex-col ${f.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-24`}>
              <div className="flex-1 space-y-10">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-display font-bold text-white/10">{f.id}</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div>
                  <h3 className="text-5xl md:text-7xl font-display font-bold mb-4">{f.title}</h3>
                  <p className="text-xl text-accent font-bold uppercase tracking-widest mb-8">{f.subtitle}</p>
                  <p className="text-xl text-white/40 leading-relaxed mb-10 font-light">
                    {f.desc}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {f.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 relative group">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative z-10 rounded-[60px] overflow-hidden aspect-video shadow-2xl"
                >
                  <img 
                    src={f.image} 
                    alt={f.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                </motion.div>
                <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NationalMapSection = () => {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs block mb-6">National Footprint</span>
        <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-20">
          SHIELDING <br />
          <span className="text-white/20 italic">THE BHARAT.</span>
        </h2>
        
        <div className="relative aspect-video glass rounded-[60px] border-white/5 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,99,33,0.05),transparent_70%)]" />
          
          {/* Abstract India Map SVG or Representation */}
          <svg className="w-3/4 h-3/4 opacity-20" viewBox="0 0 400 500">
            <path 
              d="M200,50 L250,100 L300,150 L320,250 L300,350 L250,450 L150,450 L100,350 L80,250 L100,150 L150,100 Z" 
              fill="none" 
              stroke="white" 
              strokeWidth="2"
              strokeDasharray="10 5"
            />
            {/* Animated Connection Lines */}
            {[1, 2, 3, 4, 5].map(i => (
              <motion.circle 
                key={i}
                cx={150 + Math.random() * 100}
                cy={150 + Math.random() * 200}
                r="4"
                fill="#FF6321"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "States Covered", val: "28" },
                { label: "Critical Nodes", val: "14.8K" },
                { label: "Daily Signals", val: "4.2B" },
                { label: "Orgs Protected", val: "12.4K" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-6xl font-display font-bold text-white mb-2">{stat.val}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-60 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,99,33,0.15),transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-16"
        >
          <h2 className="text-7xl md:text-[12rem] font-display font-bold tracking-tighter leading-[0.75]">
            JOIN THE <br />
            <span className="text-accent italic">RESISTANCE.</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-2xl md:text-4xl font-light text-white/60 leading-tight tracking-tight">
            The era of isolated security is over. <br />
            The era of <span className="text-white">Collective AI Defense</span> has begun.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <Link to="/portal/dashboard">
              <motion.button 
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.9 }}
                className="px-20 py-8 orange-gradient rounded-[32px] text-2xl font-bold shadow-[0_30px_100px_rgba(255,99,33,0.5)] group"
              >
                Register Your Node <ArrowRight className="inline-block ml-4 w-8 h-8 group-hover:translate-x-4 transition-transform" />
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="px-20 py-8 glass rounded-[32px] text-2xl font-bold border border-white/10"
            >
              Contact Command
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-1/2 bg-linear-to-b from-transparent via-accent to-transparent opacity-20" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-px h-1/2 bg-linear-to-b from-transparent via-blue-500 to-transparent opacity-20" />
    </section>
  );
};

const TechStack = () => {
  const techs = [
    { name: "Graph Neural Networks", desc: "Mapping multi-hop relationships between disparate threat actors.", icon: Network },
    { name: "Zero-Knowledge Proofs", desc: "Verifying evidence without exposing raw sensitive data.", icon: Lock },
    { name: "High-Speed Rail", desc: "Sub-millisecond propagation of threat signatures nationwide.", icon: Zap },
    { name: "Behavioral Biometrics", desc: "47 signals analyzed in real-time for session identity.", icon: Fingerprint },
    { name: "Adversarial AI", desc: "Self-mutating attacks to test and harden node robustness.", icon: FlaskConical },
    { name: "Distributed Ledger", desc: "Immutable audit trail for every ThreatKarma contribution.", icon: Database }
  ];

  return (
    <section className="py-40 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs block mb-6">Under the Hood</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none">
            THE <span className="text-white/20">ENGINE</span> <br />
            OF DEFENSE.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {techs.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-12 border border-white/5 hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/10 transition-colors" />
              <t.icon className="w-10 h-10 text-accent mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-4">{t.name}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black text-white selection:bg-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Hero />
      
      {/* Trust Bar */}
      <section className="py-24 border-y border-white/5 bg-zinc-950/50 backdrop-blur-md relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-32 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000">
            {['CERT-In', 'RBI', 'NPCI', 'SEBI', 'Ministry of Defense', 'ISRO'].map((name) => (
              <span key={name} className="text-3xl font-display font-bold tracking-tighter hover:text-accent transition-colors cursor-default">{name}</span>
            ))}
          </div>
        </div>
      </section>

      <ProblemSection />
      <RailSection />
      <TechStack />
      <FeatureDeepDive />
      <EditorialSection />
      <NationalMapSection />
      <FinalCTA />
      
      {/* Footer-like space */}
      <div className="py-20 bg-black border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-8 mb-8">
          <Shield className="w-8 h-8 text-accent" />
          <div className="h-4 w-px bg-white/10" />
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">CyberRakshak v2.5.0-Stable</span>
        </div>
        <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2026 National Cyber Defense Rail. All Rights Reserved.</p>
      </div>
    </div>
  );
}
