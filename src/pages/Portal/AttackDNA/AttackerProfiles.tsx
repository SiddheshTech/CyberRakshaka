import { motion } from "motion/react";
import { 
  Users, Search, Filter, ChevronRight, Globe, 
  Activity, Shield, AlertTriangle, ArrowRight
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MOCK_ACTORS = [
  { id: 'APT38', name: 'Lazarus Group', origin: 'North Korea', motivation: 'Financial', sophistication: 'ELITE', activeCampaigns: 2, risk: 'CRITICAL' },
  { id: 'APT28', name: 'Fancy Bear', origin: 'Russia', motivation: 'Espionage', sophistication: 'ELITE', activeCampaigns: 1, risk: 'HIGH' },
  { id: 'APT41', name: 'Double Dragon', origin: 'China', motivation: 'Dual (Espionage/Profit)', sophistication: 'ELITE', activeCampaigns: 3, risk: 'CRITICAL' },
  { id: 'APT33', name: 'Elfin', origin: 'Iran', motivation: 'Espionage', sophistication: 'HIGH', activeCampaigns: 0, risk: 'MEDIUM' },
  { id: 'FIN7', name: 'Carbanak', origin: 'Unknown', motivation: 'Financial', sophistication: 'HIGH', activeCampaigns: 1, risk: 'HIGH' },
];

export default function AttackerProfiles() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Threat Actor Profiles</h1>
          <p className="text-white/40 mt-1">Attribution and behavioral intelligence on known APT groups.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="Search actors, aliases, origin..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-6 text-sm w-80 focus:outline-none focus:border-accent/50 transition-all" 
            />
          </div>
          <button className="p-2.5 glass rounded-xl text-white/40 hover:text-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_ACTORS.map((actor, i) => (
          <motion.div 
            key={actor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => navigate(`/portal/attack-dna/attacker/${actor.id.toLowerCase()}`)}
            className="glass rounded-[32px] border-white/5 p-8 hover:border-accent/30 transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <Users className="w-6 h-6" />
                </div>
                <div className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest ${
                  actor.risk === 'CRITICAL' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-orange-500/10 text-orange-500 border border-orange-500/20'
                }`}>
                  {actor.risk} Risk
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{actor.name}</h3>
                <p className="text-xs text-white/40 font-mono uppercase tracking-widest mt-1">{actor.id}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-white/20 uppercase">Origin</span>
                  <div className="flex items-center gap-2 text-xs font-medium text-white/60">
                    <Globe className="w-3 h-3" /> {actor.origin}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-white/20 uppercase">Sophistication</span>
                  <div className="flex items-center gap-2 text-xs font-medium text-white/60">
                    <Shield className="w-3 h-3" /> {actor.sophistication}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {actor.activeCampaigns} Active Campaigns
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
