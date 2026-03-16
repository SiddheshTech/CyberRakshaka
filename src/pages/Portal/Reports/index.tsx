import { motion } from "motion/react";
import { 
  FileText, TrendingUp, Shield, AlertTriangle, Download, 
  Calendar, Clock, Filter, Search, ChevronRight, Plus,
  BarChart3, PieChart, Activity, Globe, Zap
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MOCK_REPORTS = [
  { id: 'REP-001', name: 'Weekly Threat Intelligence Summary', date: '2026-03-15', type: 'Threat Summary', status: 'Ready', size: '2.4 MB' },
  { id: 'REP-002', name: 'Monthly Compliance Audit (ISO 27001)', date: '2026-03-01', type: 'Compliance', status: 'Ready', size: '5.1 MB' },
  { id: 'REP-003', name: 'Behavioral Anomaly Detection - Q1', date: '2026-02-28', type: 'Behavioral', status: 'Archived', size: '12.8 MB' },
  { id: 'REP-004', name: 'Prompt Injection Vector Analysis', date: '2026-03-10', type: 'Specialized', status: 'Ready', size: '1.2 MB' },
  { id: 'REP-005', name: 'CyberPassport Integrity Report', date: '2026-03-12', type: 'Identity', status: 'Processing', size: '--' },
];

export default function ReportsOverview() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Intelligence Reports</h1>
          <p className="text-white/40 mt-1">Automated and custom security intelligence documentation.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/portal/reports/builder')}
            className="px-6 py-3 orange-gradient rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-accent/20 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Create Custom Report
          </button>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Reports', value: '128', icon: FileText, color: 'text-accent' },
          { label: 'Scheduled', value: '12', icon: Clock, color: 'text-blue-500' },
          { label: 'Compliance Score', value: '98.2%', icon: Shield, color: 'text-green-500' },
          { label: 'Threat Insights', value: '45', icon: Zap, color: 'text-orange-500' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-[32px] border-white/5 p-6 flex items-center gap-6"
          >
            <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] text-white/20 uppercase tracking-widest">{stat.label}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Reports List */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass rounded-[40px] border-white/5 overflow-hidden">
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight">Recent Reports</h3>
              <div className="flex items-center gap-2">
                {['All', 'Ready', 'Archived'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${filter === f ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="divide-y divide-white/5">
              {MOCK_REPORTS.map((report, i) => (
                <motion.div 
                  key={report.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 flex items-center justify-between hover:bg-white/[0.01] transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-accent transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-accent transition-colors">{report.name}</h4>
                      <div className="flex items-center gap-4 text-[10px] text-white/20 uppercase tracking-widest mt-1">
                        <span>{report.id}</span>
                        <span>•</span>
                        <span>{report.type}</span>
                        <span>•</span>
                        <span>{report.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className={`text-[10px] font-bold uppercase tracking-widest ${
                        report.status === 'Ready' ? 'text-green-500' : report.status === 'Processing' ? 'text-accent animate-pulse' : 'text-white/20'
                      }`}>
                        {report.status}
                      </div>
                      <div className="text-[10px] text-white/20">{report.size}</div>
                    </div>
                    <button className="p-3 glass rounded-xl text-white/20 hover:text-white transition-all">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-6 bg-white/[0.02] text-center">
              <button className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">View Full Archive</button>
            </div>
          </div>
        </div>

        {/* Sidebar: Templates & Scheduled */}
        <div className="space-y-8">
          <div className="glass rounded-[40px] border-white/5 p-8 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Report Templates</h3>
            <div className="space-y-3">
              {[
                { name: 'Threat Summary', icon: Activity },
                { name: 'Behavior Anomaly', icon: TrendingUp },
                { name: 'Compliance Audit', icon: Shield },
                { name: 'Executive Overview', icon: BarChart3 },
              ].map(template => (
                <button 
                  key={template.name}
                  onClick={() => navigate(`/portal/reports/${template.name.toLowerCase().replace(' ', '-')}`)}
                  className="w-full p-4 glass rounded-2xl border-white/5 hover:border-accent/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-accent transition-colors">
                      <template.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold">{template.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>

          <div className="glass rounded-[40px] border-white/5 p-8 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Scheduled Tasks</h3>
            <div className="space-y-4">
              {[
                { name: 'Daily Pulse', next: 'Tomorrow, 08:00', freq: 'Daily' },
                { name: 'Weekly Intel', next: 'Monday, 09:00', freq: 'Weekly' },
                { name: 'Monthly ISO', next: 'Apr 1, 00:00', freq: 'Monthly' },
              ].map(task => (
                <div key={task.name} className="flex items-center justify-between p-4 glass rounded-2xl border-white/5">
                  <div>
                    <div className="text-sm font-bold">{task.name}</div>
                    <div className="text-[10px] text-white/20 uppercase tracking-widest">{task.freq}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-white/40">Next Run</div>
                    <div className="text-[10px] font-bold text-accent">{task.next}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Manage Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
