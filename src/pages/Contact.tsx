import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Get in Touch</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mt-6 mb-8 tracking-tighter leading-[0.9]">
              Let's Secure <br />
              <span className="text-white/30 italic">Together.</span>
            </h1>
            <p className="text-xl text-white/50 font-light leading-relaxed mb-12">
              Whether you're looking for a demo, have a technical inquiry, or want to join our national defense network, our team is ready to assist.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, label: "Email Us", value: "defense@cyberrakshak.in" },
                { icon: <Phone />, label: "Call Us", value: "+91 11 4050 9000" },
                { icon: <MapPin />, label: "Visit Us", value: "Cyber Hub, DLF Phase 3, Gurugram, India" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">{item.label}</div>
                    <div className="text-lg font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-[60px] p-8 md:p-16 border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Organization</label>
                <input 
                  type="text" 
                  placeholder="Enterprise Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <button className="w-full py-6 orange-gradient rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl shadow-accent/30 group">
                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold mb-20 tracking-tighter">Global Support.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { city: "Gurugram", region: "Headquarters", icon: <Globe /> },
              { city: "Bengaluru", region: "R&D Center", icon: <MessageSquare /> },
              { city: "Mumbai", region: "Operations Hub", icon: <ArrowRight /> }
            ].map((loc, i) => (
              <div key={i} className="glass p-10 rounded-[32px] border-white/5">
                <div className="text-accent mb-6 flex justify-center">{loc.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{loc.city}</h3>
                <p className="text-white/40 text-sm font-bold uppercase tracking-widest">{loc.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
