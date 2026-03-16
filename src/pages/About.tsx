import { motion } from "motion/react";
import { Shield, Users, Target, Award, Globe, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Our Mission</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mt-6 mb-8 tracking-tighter leading-[0.9]">
              Defending <br />
              <span className="text-accent italic">Digital India.</span>
            </h1>
            <p className="text-xl text-white/50 font-light leading-relaxed mb-10">
              CyberRakshak was founded with a single goal: to build a sovereign, collective intelligence platform that protects India's critical infrastructure and enterprises from the next generation of AI-powered threats.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">2024</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40">Founded</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">500+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40">Nodes Deployed</div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="aspect-square glass rounded-[60px] relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-blue-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-40 h-40 text-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Sovereignty", desc: "We believe in building indigenous technology that ensures national data residency and security.", icon: <Globe /> },
              { title: "Transparency", desc: "Our AI is explainable. We don't believe in black boxes when it comes to security.", icon: <Target /> },
              { title: "Collective Defense", desc: "We are stronger together. Our rail ensures that one node's detection is everyone's protection.", icon: <Users /> }
            ].map((item, i) => (
              <div key={i} className="glass p-12 rounded-[40px] border-white/5 hover:border-accent/30 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">The Leadership.</h2>
            <p className="text-white/40">A team of cyber security veterans, AI researchers, and national defense experts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Arjun Sharma", role: "CEO & Founder", img: "https://picsum.photos/seed/p1/400/400" },
              { name: "Priya Iyer", role: "Chief AI Architect", img: "https://picsum.photos/seed/p2/400/400" },
              { name: "Vikram Singh", role: "Head of Threat Intel", img: "https://picsum.photos/seed/p3/400/400" },
              { name: "Ananya Rao", role: "Director of Policy", img: "https://picsum.photos/seed/p4/400/400" }
            ].map((person, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square glass rounded-[40px] mb-6 overflow-hidden relative">
                  <img 
                    src={person.img} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-bold">{person.name}</h4>
                <p className="text-accent text-sm font-bold uppercase tracking-widest mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
