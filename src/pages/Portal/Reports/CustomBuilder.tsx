import { motion } from "motion/react";
import { 
  Plus, FileText, Settings, Layout, BarChart3, 
  PieChart, Activity, Globe, Zap, Save, Play,
  Download, Share2, Trash2, ChevronRight, ArrowLeft
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomReportBuilder() {
  const navigate = useNavigate();
  const [reportName, setReportName] = useState('Untitled Intelligence Report');
  const [selectedModules, setSelectedModules] = useState<string[]>(['Executive Summary', 'Threat Volume']);

  const modules = [
    { id: 'exec', name: 'Executive Summary', icon: FileText, desc: 'High-level overview of intelligence findings.' },
    { id: 'vol', name: 'Threat Volume', icon: BarChart3, desc: 'Bar charts showing incident counts over time.' },
    { id: 'dna', name: 'AttackDNA Analysis', icon: Activity, desc: 'Deep dive into malware fingerprints and campaign links.' },
    { id: 'geo', name: 'Geographic Spread', icon: Globe, desc: 'Heatmaps of attack sources and targets.' },
    { id: 'actor', name: 'Actor Attribution', icon: Zap, desc: 'Profiles of identified threat actors and APT groups.' },
    { id: 'comp', name: 'Compliance Status', icon: Layout, desc: 'ISO 27001 / GDPR / CERT-In compliance metrics.' },
  ];

  const toggleModule = (id: string) => {
    setSelectedModules(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);
  };

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <button 
        onClick={() => navigate('/portal/reports')}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Back to Reports</span>
      </button>

      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <input 
            type="text" 
            value={reportName}
            onChange={(e) => setReportName(e.target.value)}
            className="text-4xl font-bold tracking-tight bg-transparent border-none outline-none focus:ring-0 w-full p-0"
          />
          <p className="text-white/40 mt-1">Configure your custom intelligence report modules and data sources.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Template
          </button>
          <button className="px-6 py-3 orange-gradient rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-accent/20 transition-all flex items-center gap-2">
            <Play className="w-4 h-4" /> Generate Report
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Module Selection */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass rounded-[40px] border-white/5 p-10 space-y-8">
            <h3 className="text-xl font-bold tracking-tight">Available Intelligence Modules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map(module => (
                <button 
                  key={module.id}
                  onClick={() => toggleModule(module.name)}
                  className={`p-6 rounded-3xl border transition-all text-left flex gap-6 ${
                    selectedModules.includes(module.name) 
                    ? 'bg-accent/10 border-accent/50' 
                    : 'bg-white/5 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    selectedModules.includes(module.name) ? 'bg-accent text-white' : 'bg-white/5 text-white/20'
                  }`}>
                    <module.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{module.name}</h4>
                    <p className="text-xs text-white/40 leading-relaxed">{module.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="glass rounded-[40px] border-white/5 p-10 space-y-8">
            <h3 className="text-xl font-bold tracking-tight">Data Source Configuration</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Time Range</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm outline-none">
                  <option>Last 24 Hours</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Custom Range</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Node Selection</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm outline-none">
                  <option>All Global Nodes</option>
                  <option>Mumbai Cluster</option>
                  <option>Delhi Cluster</option>
                  <option>Bangalore Cluster</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Preview / Order */}
        <div className="space-y-8">
          <div className="glass rounded-[40px] border-white/5 p-8 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Report Structure</h3>
            <div className="space-y-3">
              {selectedModules.map((m, i) => (
                <div key={m} className="flex items-center justify-between p-4 glass rounded-2xl border-white/5 group">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-white/20">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-bold">{m}</span>
                  </div>
                  <button 
                    onClick={() => toggleModule(m)}
                    className="p-2 text-white/10 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {selectedModules.length === 0 && (
                <div className="py-12 text-center text-white/20 text-xs italic">
                  No modules selected.<br />Add modules from the left panel.
                </div>
              )}
            </div>
          </div>

          <div className="glass rounded-[40px] border-white/5 p-8 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Output Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">Include Technical DNA</span>
                <div className="w-10 h-5 bg-accent rounded-full relative">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">Anonymize Org Data</span>
                <div className="w-10 h-5 bg-white/10 rounded-full relative">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white/40 rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">High Resolution Assets</span>
                <div className="w-10 h-5 bg-accent rounded-full relative">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
