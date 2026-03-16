import { motion } from "motion/react";
import { ShieldCheck, Zap, Globe, Cpu, ArrowRight } from "lucide-react";

const PricingPage = () => {
  const plans = [
    { 
      name: "Startup", 
      price: "₹49,999", 
      period: "/month",
      desc: "Essential protection for growing teams and startups.",
      features: [
        "Up to 100 Endpoints", 
        "Standard ThreatKarma Access", 
        "Email Support (24h)", 
        "Basic Explainability Logs",
        "Weekly Threat Reports",
        "API Access (Limited)"
      ],
      cta: "Get Started"
    },
    { 
      name: "Enterprise", 
      price: "Custom", 
      period: "",
      desc: "Full-scale defense for large organizations with complex needs.",
      features: [
        "Unlimited Endpoints", 
        "Advanced ThreatKarma (Priority)", 
        "24/7 SOC Access", 
        "Full 5-Level Explainability", 
        "CERT-In Integration",
        "Custom Policy Engine",
        "Dedicated Account Manager"
      ],
      popular: true,
      cta: "Contact Sales"
    },
    { 
      name: "Government", 
      price: "Custom", 
      period: "",
      desc: "National infrastructure grade security for sovereign entities.",
      features: [
        "National Rail Node Deployment", 
        "On-Premise / Air-Gapped Options", 
        "Policy Integration (National)", 
        "Dedicated Forensic Team", 
        "Custom Threat Intelligence",
        "Sovereign Data Residency",
        "Priority Incident Response"
      ],
      cta: "Request Briefing"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Investment</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mt-6 mb-8 tracking-tighter">
            Scale Your <span className="text-white/30 italic">Protection.</span>
          </h1>
          <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
            Choose the plan that fits your organization's scale and security requirements. All plans include our core AI defense technology.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`glass rounded-[48px] p-12 flex flex-col relative overflow-hidden ${plan.popular ? "border-accent/50 ring-1 ring-accent/20" : "border-white/5"}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 px-8 py-3 orange-gradient rounded-bl-3xl text-[10px] font-bold uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}
            <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
            <p className="text-white/40 text-sm mb-10 leading-relaxed">{plan.desc}</p>
            
            <div className="flex items-baseline gap-2 mb-12">
              <span className="text-6xl font-display font-bold">{plan.price}</span>
              <span className="text-white/30 font-medium">{plan.period}</span>
            </div>
            
            <div className="space-y-6 mb-16 flex-grow">
              {plan.features.map((f, j) => (
                <div key={j} className="flex items-start gap-4 text-sm text-white/60">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-6 rounded-2xl font-bold text-xl transition-all ${plan.popular ? "orange-gradient shadow-xl shadow-accent/30" : "glass hover:bg-white/10"}`}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="py-32 mt-32 bg-black/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-20 tracking-tighter">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How does the ThreatKarma™ rail affect pricing?", a: "Access to the rail is included in all plans. However, Enterprise and Government plans receive priority propagation and deeper historical data access." },
              { q: "Can we upgrade our plan later?", a: "Yes, you can upgrade at any time. Our team will help you transition your endpoints and data seamlessly." },
              { q: "Do you offer a free trial?", a: "We offer a 14-day proof-of-concept for Enterprise customers. Contact our sales team to set up a demo environment." },
              { q: "Is CyberRakshak compliant with Indian regulations?", a: "Absolutely. We are designed from the ground up to be compliant with RBI, SEBI, and CERT-In guidelines for national cyber defense." }
            ].map((faq, i) => (
              <div key={i} className="glass p-8 rounded-3xl border-white/5">
                <h4 className="font-bold text-lg mb-4">{faq.q}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
