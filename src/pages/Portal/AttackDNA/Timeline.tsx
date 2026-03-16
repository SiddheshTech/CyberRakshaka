import { motion } from "motion/react";
import { 
  Clock, Calendar, Activity, Zap, Shield, 
  AlertTriangle, ChevronRight, Filter, Search,
  ArrowLeft, Download
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MOCK_TIMELINE = [
  { id: 'EV-102', time: '12:15:00', date: '2026-03-16', event: 'New Fingerprint Detected', details: 'Polymorphic payload identified in Mumbai node. Linked to CAMP-001.', severity: 'CRITICAL', type: 'DNA' },
  { id: 'EV-101', time: '11:45:22', date: '2026-03-16', event: 'Campaign Shift', details: 'Operation SilverFish shifted infrastructure to DGA domains.', severity: 'HIGH', type: 'CAMPAIGN' },
  { id: 'EV-100', time: '10:30:05', date: '2026-03-16', event: 'Node Lockdown', details: 'IN-DEL-02 node entered emergency lockdown due to high injection volume.', severity: 'CRITICAL', type: 'SYSTEM' },
  { id: 'EV-099', time: '09:15:00', date: '2026-03-16', event: 'Attribution Update', details: 'Confidence in APT38 attribution for CAMP-001 increased to 94%.', severity: 'MEDIUM', type: 'INTEL' },
  { id: 'EV-098', time: '08:00:12', date: '2026-03-16', event: 'Global Sync', details: 'ThreatKarma synchronized with Interpol threat database.', severity: 'LOW', type: 'SYSTEM' },
  { id: 'EV-097', time: '23:45:00', date: '2026-03-15', event: 'New Campaign Identified', details: 'Operation DeepDive targeting energy sector identified.', severity: 'HIGH', type: 'CAMPAIGN' },
];

export default function Timeline() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Intelligence Timeline</h1>
          <p className="text-white/40 mt-1">Chronological feed of global threat intelligence and DNA matches.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Log
          </button>
          <div className="h-8 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-2">
            {['All', 'CRITICAL', 'HIGH', 'MEDIUM'].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${filter === f ? 'bg-accent text-white' : 'glass text-white/40 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-white/5" />

        <div className="space-y-12">
          {MOCK_TIMELINE.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-24 group"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-black z-10 transition-transform group-hover:scale-125 ${
                item.severity === 'CRITICAL' ? 'bg-red-500' : 
                item.severity === 'HIGH' ? 'bg-orange-500' : 
                'bg-accent'
              }`} />

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-32 pt-1">
                  <div className="text-xs font-bold text-white/60">{item.time}</div>
                  <div className="text-[10px] text-white/20 uppercase tracking-widest">{item.date}</div>
                </div>

                <div className="flex-1 glass rounded-[32px] border-white/5 p-8 hover:border-white/10 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest ${
                        item.type === 'DNA' ? 'bg-accent/10 text-accent' : 
                        item.type === 'CAMPAIGN' ? 'bg-orange-500/10 text-orange-500' : 
                        'bg-white/5 text-white/40'
                      }`}>
                        {item.type}
                      </span>
                      <h3 className="text-lg font-bold">{item.event}</h3>
                    </div>
                    <span className="text-[10px] font-mono text-white/20">{item.id}</span>
                  </div>
                  
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {item.details}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3 h-3 text-white/20" />
                        <span className="text-[10px] text-white/40 uppercase tracking-widest">Live Analysis</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-widest hover:underline">
                      Details <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="px-8 py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
          Load Historical Data
        </button>
      </div>
    </div>
  );
}
