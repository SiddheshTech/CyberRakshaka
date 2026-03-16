import { motion } from "motion/react";
import { ArrowRight, Search, FileText, Play, BookOpen } from "lucide-react";

const ResourcesOverview = () => {
  const categories = ["All", "Whitepapers", "Technical", "Policy", "Case Studies"];
  
  const resources = [
    { date: "Mar 12, 2026", title: "The Rise of Generative Phishing in BFSI", category: "Whitepapers", desc: "A deep dive into how LLMs are being used to create hyper-personalized phishing campaigns." },
    { date: "Mar 08, 2026", title: "ThreatKarma™: Achieving 0.4ms Propagation", category: "Technical", desc: "Exploring the gossip protocols and ZKP architecture behind our national defense rail." },
    { date: "Mar 01, 2026", title: "National Cyber Defense Strategy 2026", category: "Policy", desc: "A comprehensive look at the upcoming changes in India's cyber security landscape." },
    { date: "Feb 24, 2026", title: "Securing Critical Infrastructure: A Case Study", category: "Case Studies", desc: "How a major power grid used CyberRakshak to prevent a coordinated state-sponsored attack." },
    { date: "Feb 18, 2026", title: "Deepfake Detection in Real-time Video", category: "Technical", desc: "Technical breakdown of our multi-modal forensic analysis for synthetic media." },
    { date: "Feb 10, 2026", title: "The Future of Sovereign AI Defense", category: "Policy", desc: "Why national-scale collective intelligence is the only way to combat AI-driven threats." }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Intelligence Hub</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mt-6 mb-8 tracking-tighter">
            Knowledge <span className="text-white/30 italic">Base.</span>
          </h1>
          <p className="text-xl text-white/50 font-light leading-relaxed">
            Stay ahead of the curve with our latest threat reports, technical deep-dives, and policy whitepapers.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-wrap items-center justify-between gap-8 mb-12">
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {categories.map(cat => (
              <button key={cat} className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${cat === "All" ? "orange-gradient" : "glass hover:bg-white/10"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input 
              type="text" 
              placeholder="Search resources..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video glass rounded-[32px] mb-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-blue-600/20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80">
                  {res.category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full orange-gradient flex items-center justify-center shadow-2xl">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-white/30 uppercase mb-3 tracking-widest">{res.date}</div>
              <h3 className="text-2xl font-bold group-hover:text-accent transition-colors leading-tight mb-4">{res.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed line-clamp-2">{res.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-white/20 group-hover:text-white transition-colors">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[60px] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Featured Video</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mt-6 mb-8">The ThreatKarma™ <br /> Documentary.</h2>
              <p className="text-white/40 text-lg mb-10 leading-relaxed">
                Watch how we built India's first collective AI defense rail and the technology that powers it.
              </p>
              <button className="px-10 py-5 orange-gradient rounded-full font-bold flex items-center gap-3 shadow-xl shadow-accent/20">
                <Play className="w-5 h-5 fill-current" /> Watch Now
              </button>
            </div>
            <div className="aspect-video glass rounded-[40px] border-white/10 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/cyber/1200/800')] bg-cover bg-center grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center group-hover:scale-125 transition-transform">
                  <Play className="w-8 h-8 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesOverview;
