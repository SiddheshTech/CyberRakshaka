import { motion } from "motion/react";
import { 
  TrendingUp, Activity, Shield, AlertTriangle, 
  ArrowLeft, Download, Share2, Search, Filter,
  ChevronRight, Zap, Globe, Clock, Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BehaviorAnomalyReport() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <button 
            onClick={() => navigate('/portal/reports')}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to Reports</span>
          </button>
          <h1 className="text-3xl font-bold tracking-tight">Behavioral Anomaly Report</h1>
          <p className="text-white/40 mt-1">AI-driven analysis of non-signature based threat patterns.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Data
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="glass rounded-[32px] border-white/5 p-8 space-y-4">
          <div className="text-[10px] text-white/20 uppercase tracking-widest">Anomaly Score</div>
          <div className="text-5xl font-bold text-accent">84.2</div>
          <p className="text-xs text-white/40">Significant deviation from baseline behavior detected in 4 clusters.</p>
        </div>
        <div className="glass rounded-[32px] border-white/5 p-8 space-y-4">
          <div className="text-[10px] text-white/20 uppercase tracking-widest">Affected Nodes</div>
          <div className="text-5xl font-bold text-white">12</div>
          <p className="text-xs text-white/40">Primarily concentrated in Mumbai and Bangalore data centers.</p>
        </div>
        <div className="glass rounded-[32px] border-white/5 p-8 space-y-4">
          <div className="text-[10px] text-white/20 uppercase tracking-widest">Confidence</div>
          <div className="text-5xl font-bold text-green-500">92%</div>
          <p className="text-xs text-white/40">High correlation with known state-sponsored lateral movement patterns.</p>
        </div>
      </div>

      <div className="glass rounded-[40px] border-white/5 p-10 space-y-8">
        <h3 className="text-xl font-bold tracking-tight">Detected Anomaly Clusters</h3>
        <div className="space-y-4">
          {[
            { id: 'AN-901', name: 'Lateral Movement - Banking Core', severity: 'CRITICAL', desc: 'Unusual RPC calls between application server and database cluster.' },
            { id: 'AN-882', name: 'DGA Pattern Shift', severity: 'HIGH', desc: 'New domain generation algorithm detected in outbound traffic.' },
            { id: 'AN-850', name: 'Credential Stuffing Burst', severity: 'MEDIUM', desc: 'High-volume login attempts with non-standard user-agent strings.' },
          ].map((anomaly, i) => (
            <motion.div 
              key={anomaly.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 glass rounded-3xl border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    anomaly.severity === 'CRITICAL' ? 'bg-red-500/10 text-red-500' : 'bg-accent/10 text-accent'
                  }`}>
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg">{anomaly.name}</h4>
                </div>
                <span className="text-[10px] font-mono text-white/20">{anomaly.id}</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{anomaly.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
