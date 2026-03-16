import { motion } from "motion/react";
import { 
  Target, Shield, AlertTriangle, Users, Globe, Link2, 
  ArrowLeft, Calendar, Activity, Zap, Info, ExternalLink,
  ChevronRight, Download, Share2, Search
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const MOCK_CAMPAIGN = {
  id: 'CAMP-001',
  name: 'Operation SilverFish',
  attacker: 'Lazarus Group (APT38)',
  threatType: 'Financial Phishing / SWIFT Injection',
  severity: 'CRITICAL',
  status: 'ACTIVE',
  firstSeen: '2026-02-10',
  lastSeen: '2026-03-16',
  description: 'A highly sophisticated campaign targeting Indian banking infrastructure using a combination of spear-phishing and custom-built SWIFT message interceptors. The campaign uses polymorphic payloads to evade signature-based detection.',
  objectives: ['Financial Theft', 'Infrastructure Mapping', 'Data Exfiltration'],
  methods: ['Spear Phishing', 'DLL Sideloading', 'Memory Injection', 'DGA Domains'],
  targets: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank'],
  incidents: [
    { id: 'INC-901', org: 'HDFC Bank', time: '2h ago', status: 'Blocked' },
    { id: 'INC-882', org: 'SBI', time: '1d ago', status: 'Quarantined' },
    { id: 'INC-850', org: 'ICICI Bank', time: '3d ago', status: 'Investigating' },
    { id: 'INC-812', org: 'Axis Bank', time: '1w ago', status: 'Blocked' },
  ]
};

export default function CampaignDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <button 
        onClick={() => navigate('/portal/attack-dna')}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Back to AttackDNA Graph</span>
      </button>

      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest">
              {MOCK_CAMPAIGN.severity} Severity
            </div>
            <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest">
              {MOCK_CAMPAIGN.status}
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tighter">{MOCK_CAMPAIGN.name}</h1>
          <div className="flex items-center gap-6 text-white/40">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium text-white/60">{MOCK_CAMPAIGN.attacker}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Started {MOCK_CAMPAIGN.firstSeen}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-6 py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Intel PDF
          </button>
          <button className="px-6 py-3 orange-gradient rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-accent/20 transition-all flex items-center gap-2">
            <Share2 className="w-4 h-4" /> Share with CERT-In
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details & Methods */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass rounded-[40px] border-white/5 p-10 space-y-8">
            <div className="flex gap-8 border-b border-white/5 pb-6">
              {['Overview', 'Timeline', 'Technical DNA', 'Target Map'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[10px] font-bold uppercase tracking-widest transition-all relative pb-2 ${activeTab === tab ? 'text-accent' : 'text-white/40 hover:text-white'}`}
                >
                  {tab}
                  {activeTab === tab && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white/60">
                {MOCK_CAMPAIGN.description}
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Campaign Objectives</h3>
                  <div className="flex flex-wrap gap-2">
                    {MOCK_CAMPAIGN.objectives.map(obj => (
                      <span key={obj} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-medium text-white/60">
                        {obj}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Attack Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {MOCK_CAMPAIGN.methods.map(method => (
                      <span key={method} className="px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-xs font-medium text-accent">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-[40px] border-white/5 p-10 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight">Linked Incidents</h3>
              <button className="text-[10px] font-bold uppercase tracking-widest text-accent hover:underline">View All 24 Incidents</button>
            </div>
            <div className="space-y-4">
              {MOCK_CAMPAIGN.incidents.map((inc, i) => (
                <motion.div 
                  key={inc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-6 glass rounded-3xl border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-accent transition-colors">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{inc.org}</h4>
                      <p className="text-xs text-white/40 uppercase tracking-widest font-mono">{inc.id} • {inc.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${
                      inc.status === 'Blocked' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {inc.status}
                    </span>
                    <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-white transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Attribution */}
        <div className="space-y-8">
          <div className="glass rounded-[40px] border-white/5 p-8 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Attacker Attribution</h3>
            <div className="p-6 bg-accent/5 rounded-3xl border border-accent/10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{MOCK_CAMPAIGN.attacker}</h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest">State-Sponsored Actor</p>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Known for high-stakes financial espionage and infrastructure disruption. Attribution confidence: <span className="text-accent font-bold">94%</span>
              </p>
              <button 
                onClick={() => navigate('/portal/attack-dna/attacker/lazarus')}
                className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                View Attacker Profile
              </button>
            </div>
          </div>

          <div className="glass rounded-[40px] border-white/5 p-8 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Targeted Sectors</h3>
            <div className="space-y-4">
              {[
                { label: 'Banking', value: 85, color: 'bg-accent' },
                { label: 'Government', value: 10, color: 'bg-white/20' },
                { label: 'Energy', value: 5, color: 'bg-white/10' },
              ].map(sector => (
                <div key={sector.label} className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">{sector.label}</span>
                    <span className="font-bold">{sector.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${sector.value}%` }}
                      className={`h-full ${sector.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[40px] border-white/5 p-8 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Threat Intelligence Feed</h3>
            <div className="space-y-4">
              {[
                { source: 'VirusTotal', msg: 'New hash detected linked to SilverFish', time: '10m ago' },
                { source: 'CyberRaksha AI', msg: 'DGA pattern shift detected in Mumbai node', time: '45m ago' },
                { source: 'CERT-In', msg: 'Advisory issued for SWIFT vulnerabilities', time: '2h ago' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1 h-10 bg-accent/20 rounded-full" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-accent">{item.source}</span>
                      <span className="text-[8px] text-white/20">{item.time}</span>
                    </div>
                    <p className="text-[10px] text-white/60 leading-tight">{item.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
