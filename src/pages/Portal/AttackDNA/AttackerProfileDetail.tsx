import { motion } from "motion/react";
import { 
  Users, Target, Shield, Globe, Activity, Zap, 
  ArrowLeft, ExternalLink, Info, AlertTriangle,
  ChevronRight, Download, Share2, MapPin, Flag
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const MOCK_ACTOR = {
  id: 'APT38',
  name: 'Lazarus Group',
  aliases: ['Hidden Cobra', 'Guardians of Peace', 'ZINC'],
  origin: 'North Korea (DPRK)',
  motivation: 'Financial Gain / Espionage',
  sophistication: 'ELITE',
  firstSeen: '2009',
  description: 'A state-sponsored cyber espionage and sabotage group. While initially focused on espionage, they have shifted significantly towards high-stakes financial theft, including the 2016 Bangladesh Bank heist and the 2017 WannaCry ransomware attack.',
  techniques: [
    { code: 'T1566', name: 'Phishing', description: 'Spearphishing attachment and link' },
    { code: 'T1059', name: 'Command and Scripting Interpreter', description: 'PowerShell and Python scripts' },
    { code: 'T1027', name: 'Obfuscated Files or Information', description: 'Custom packers and encryption' },
    { code: 'T1105', name: 'Ingress Tool Transfer', description: 'Custom backdoors like Bluenoroff' },
  ],
  campaigns: [
    { id: 'CAMP-001', name: 'Operation SilverFish', date: '2026-02', status: 'Active' },
    { id: 'CAMP-992', name: 'WannaCry 2.0 Variant', date: '2025-11', status: 'Dormant' },
    { id: 'CAMP-881', name: 'SwiftSteal', date: '2025-06', status: 'Completed' },
  ],
  sectors: [
    { name: 'Financial Services', percentage: 75 },
    { name: 'Government', percentage: 15 },
    { name: 'Cryptocurrency', percentage: 10 },
  ]
};

export default function AttackerProfileDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <button 
        onClick={() => navigate('/portal/attack-dna')}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Back to AttackDNA Graph</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Actor Info */}
        <div className="lg:col-span-2 space-y-8">
          <header className="glass rounded-[40px] border-white/5 p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                  <Users className="w-10 h-10" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-4xl font-bold tracking-tighter">{MOCK_ACTOR.name}</h1>
                    <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest">
                      {MOCK_ACTOR.sophistication}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white/40 text-xs font-medium">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {MOCK_ACTOR.origin}</span>
                    <span className="flex items-center gap-1"><Flag className="w-3 h-3" /> {MOCK_ACTOR.motivation}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {MOCK_ACTOR.aliases.map(alias => (
                  <span key={alias} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {alias}
                  </span>
                ))}
              </div>

              <p className="text-lg text-white/60 leading-relaxed max-w-3xl">
                {MOCK_ACTOR.description}
              </p>
            </div>
          </header>

          <div className="glass rounded-[40px] border-white/5 p-10 space-y-8">
            <h3 className="text-xl font-bold tracking-tight">MITRE ATT&CK Techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_ACTOR.techniques.map((tech, i) => (
                <motion.div 
                  key={tech.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 glass rounded-3xl border-white/5 hover:border-accent/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{tech.code}</span>
                    <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{tech.name}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[40px] border-white/5 p-10 space-y-8">
            <h3 className="text-xl font-bold tracking-tight">Historical Campaigns</h3>
            <div className="space-y-4">
              {MOCK_ACTOR.campaigns.map((camp, i) => (
                <div key={camp.id} className="flex items-center justify-between p-6 glass rounded-3xl border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-accent transition-colors">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{camp.name}</h4>
                      <p className="text-xs text-white/40 uppercase tracking-widest font-mono">{camp.id} • {camp.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${
                      camp.status === 'Active' ? 'bg-accent/10 text-accent' : 'bg-white/5 text-white/40'
                    }`}>
                      {camp.status}
                    </span>
                    <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-white transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Intelligence */}
        <div className="space-y-8">
          <div className="glass rounded-[40px] border-white/5 p-8 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Targeting Profile</h3>
            <div className="space-y-6">
              {MOCK_ACTOR.sectors.map(sector => (
                <div key={sector.name} className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">{sector.name}</span>
                    <span className="font-bold">{sector.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${sector.percentage}%` }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[40px] border-white/5 p-8 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Attribution Confidence</h3>
            <div className="flex flex-col items-center py-8">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                  <motion.circle 
                    cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="12" 
                    strokeDasharray="440"
                    initial={{ strokeDashoffset: 440 }}
                    animate={{ strokeDashoffset: 440 - (440 * 0.94) }}
                    className="text-accent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold tracking-tighter">94%</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Verified</span>
                </div>
              </div>
              <p className="text-[10px] text-white/40 text-center mt-6 leading-relaxed">
                Based on CyberRaksha's collective intelligence and cross-referenced with global threat feeds.
              </p>
            </div>
          </div>

          <div className="glass rounded-[40px] border-white/5 p-8 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Intelligence Actions</h3>
            <div className="space-y-3">
              <button className="w-full py-4 glass rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <Download className="w-4 h-4" /> Download Actor Dossier
              </button>
              <button className="w-full py-4 glass rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <Share2 className="w-4 h-4" /> Share with Intelligence Community
              </button>
              <button className="w-full py-4 orange-gradient rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-accent/20 transition-all flex items-center justify-center gap-3">
                <Zap className="w-4 h-4" /> Generate Defensive Rules
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
