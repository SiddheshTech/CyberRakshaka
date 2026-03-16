import { motion, AnimatePresence } from "motion/react";
import { 
  Bell, Shield, AlertTriangle, Info, Search, Filter, 
  MoreHorizontal, ChevronRight, CheckCircle2, Trash2, 
  Flag, Share2, Download, Eye, Pause, Play, Volume2,
  VolumeX, LayoutGrid, List, Clock, Zap, Globe
} from "lucide-react";
import { useState, useEffect } from "react";

interface Alert {
  id: string;
  type: 'Critical' | 'Warning' | 'Info';
  msg: string;
  time: string;
  category: string;
  status: 'Blocked' | 'Monitoring' | 'Alerted' | 'Success';
  source: string;
  read: boolean;
  campaignId?: string;
}

const MOCK_ALERTS: Alert[] = [
  { id: "AL-9281", type: "Critical", msg: "Prompt Injection attempt blocked from IN-DEL-02", time: "2m ago", category: "LLM Security", status: "Blocked", source: "Mumbai Node", read: false, campaignId: 'CAMP-001' },
  { id: "AL-9280", type: "Warning", msg: "Unusual traffic pattern detected in node IN-MUM-04", time: "15m ago", category: "Network", status: "Monitoring", source: "Delhi Node", read: false, campaignId: 'CAMP-001' },
  { id: "AL-9279", type: "Info", msg: "ThreatKarma rail synchronization complete", time: "1h ago", category: "System", status: "Success", source: "Global Feed", read: true },
  { id: "AL-9278", type: "Critical", msg: "Deepfake detected in real-time video stream", time: "3h ago", category: "Media Forensics", status: "Alerted", source: "Bangalore Node", read: false, campaignId: 'CAMP-004' },
  { id: "AL-9277", type: "Warning", msg: "DGA domain access attempt blocked", time: "5h ago", category: "URL Scanner", status: "Blocked", source: "Chennai Node", read: true, campaignId: 'CAMP-001' },
  { id: "AL-9276", type: "Info", msg: "New security policy deployed to all nodes", time: "8h ago", category: "Policy", status: "Success", source: "Admin Console", read: true },
];

export default function AlertsInbox() {
  const [alerts, setAlerts] = useState<Alert[]>(MOCK_ALERTS);
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([]);
  const [isLive, setIsLive] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  const filteredAlerts = alerts.filter(a => {
    const matchesFilter = filter === "All" || a.type === filter;
    const matchesSearch = a.msg.toLowerCase().includes(searchQuery.toLowerCase()) || a.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleSelect = (id: string) => {
    setSelectedAlerts(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const markAsRead = () => {
    setAlerts(prev => prev.map(a => selectedAlerts.includes(a.id) ? { ...a, read: true } : a));
    setSelectedAlerts([]);
  };

  return (
    <div className="h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-black/50 backdrop-blur-xl z-20">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Security Inbox</h1>
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-white/20'}`} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                {isLive ? 'Live Monitoring Active' : 'Feed Paused'}
              </span>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10" />

          <div className="flex items-center gap-2">
            {["All", "Critical", "Warning", "Info"].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${filter === f ? "bg-accent text-white" : "glass text-white/40 hover:text-white"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="Search alerts..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-6 text-sm w-64 focus:outline-none focus:border-accent/50 transition-all" 
            />
          </div>
          <div className="flex items-center glass rounded-xl p-1">
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-white/20 hover:text-white'}`}
            >
              <List className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-white/20 hover:text-white'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
          <button 
            onClick={() => setIsLive(!isLive)}
            className={`p-2.5 glass rounded-xl transition-all ${isLive ? 'text-accent' : 'text-white/20'}`}
          >
            {isLive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div className="flex-1 flex relative overflow-hidden">
        {/* Sidebar Filters */}
        <div className="w-64 border-r border-white/5 p-6 space-y-8 bg-black/30 backdrop-blur-sm z-10 overflow-y-auto">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-4">Categories</h3>
            <div className="space-y-1">
              {['LLM Security', 'Network', 'Endpoint', 'URL Scanner', 'Media Forensics'].map(cat => (
                <button key={cat} className="w-full text-left px-3 py-2 rounded-lg text-xs text-white/40 hover:bg-white/5 hover:text-white transition-all flex items-center justify-between">
                  {cat}
                  <span className="text-[8px] bg-white/5 px-1.5 py-0.5 rounded">12</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-4">Watchlists</h3>
            <div className="space-y-1">
              {['VIP Assets', 'Critical Infrastructure', 'External APIs'].map(w => (
                <button key={w} className="w-full text-left px-3 py-2 rounded-lg text-xs text-white/40 hover:bg-white/5 hover:text-white transition-all flex items-center gap-2">
                  <Shield className="w-3 h-3 text-accent" />
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <button className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Zap className="w-3 h-3 text-accent" /> Rules Builder
            </button>
          </div>
        </div>

        {/* Alert Feed */}
        <div className="flex-1 flex flex-col relative">
          {/* Bulk Actions Bar */}
          <AnimatePresence>
            {selectedAlerts.length > 0 && (
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="absolute top-4 left-1/2 -translate-x-1/2 glass-dark border border-white/10 rounded-2xl px-6 py-3 flex items-center gap-6 z-30 shadow-2xl"
              >
                <span className="text-xs font-bold text-accent">{selectedAlerts.length} Selected</span>
                <div className="h-4 w-px bg-white/10" />
                <div className="flex items-center gap-4">
                  <button onClick={markAsRead} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" /> Mark Read
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                    <Flag className="w-4 h-4" /> Flag
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-red-500/60 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1 overflow-y-auto p-8 space-y-4">
            {filteredAlerts.map((alert, i) => (
              <motion.div 
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedAlert(alert)}
                className={`group glass rounded-3xl border-white/5 p-6 flex items-center gap-6 hover:bg-white/[0.02] transition-all cursor-pointer relative overflow-hidden ${!alert.read ? 'border-l-4 border-l-accent' : ''}`}
              >
                <div className="flex items-center gap-4 z-10">
                  <input 
                    type="checkbox" 
                    checked={selectedAlerts.includes(alert.id)}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleSelect(alert.id);
                    }}
                    className="w-4 h-4 rounded border-white/10 bg-white/5 text-accent focus:ring-accent"
                  />
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    alert.type === 'Critical' ? 'bg-red-500/10 text-red-500' : 
                    alert.type === 'Warning' ? 'bg-yellow-500/10 text-yellow-500' : 
                    'bg-blue-500/10 text-blue-500'
                  }`}>
                    {alert.type === 'Critical' ? <AlertTriangle className="w-6 h-6" /> : alert.type === 'Warning' ? <Shield className="w-6 h-6" /> : <Info className="w-6 h-6" />}
                  </div>
                </div>

                <div className="flex-1 z-10">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-mono text-white/20">{alert.id}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{alert.category}</span>
                    {alert.campaignId && (
                      <span className="px-2 py-0.5 rounded bg-accent/10 text-accent text-[8px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <Zap className="w-2 h-2" /> Campaign: {alert.campaignId}
                      </span>
                    )}
                  </div>
                  <h3 className={`text-lg font-bold transition-colors ${!alert.read ? 'text-white' : 'text-white/60'} group-hover:text-accent`}>
                    {alert.msg}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-[10px] text-white/20 uppercase tracking-widest">
                    <span>Source: {alert.source}</span>
                    <span>•</span>
                    <span>{alert.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 z-10">
                  <div className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${
                    alert.status === 'Blocked' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {alert.status}
                  </div>
                  <button className="p-2 rounded-xl hover:bg-white/5 text-white/20 hover:text-white transition-all">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alert Detail Side Panel */}
        <AnimatePresence>
          {selectedAlert && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute top-0 right-0 bottom-0 w-[450px] glass-dark border-l border-white/10 p-10 z-40 shadow-2xl overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedAlert(null)}
                className="absolute top-8 right-8 p-2 glass rounded-xl text-white/40 hover:text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="space-y-10">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-3xl flex items-center justify-center ${
                    selectedAlert.type === 'Critical' ? 'bg-red-500/10 text-red-500' : 'bg-accent/10 text-accent'
                  }`}>
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">{selectedAlert.msg}</h2>
                    <p className="text-sm text-white/40 mt-2">Alert ID: <span className="font-mono text-accent">{selectedAlert.id}</span></p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 glass rounded-3xl border-white/5 space-y-1">
                    <div className="text-[10px] text-white/20 uppercase">Severity</div>
                    <div className={`text-lg font-bold ${selectedAlert.type === 'Critical' ? 'text-red-500' : 'text-accent'}`}>{selectedAlert.type}</div>
                  </div>
                  <div className="p-5 glass rounded-3xl border-white/5 space-y-1">
                    <div className="text-[10px] text-white/20 uppercase">Status</div>
                    <div className="text-lg font-bold text-white">{selectedAlert.status}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Technical Context</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Source Node', value: selectedAlert.source, icon: Globe },
                      { label: 'Category', value: selectedAlert.category, icon: Shield },
                      { label: 'Timestamp', value: selectedAlert.time, icon: Clock },
                      { label: 'Campaign Link', value: selectedAlert.campaignId || 'None', icon: Zap },
                    ].map(item => (
                      <div key={item.label} className="flex items-center justify-between p-4 glass rounded-2xl border-white/5">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4 text-white/20" />
                          <span className="text-xs text-white/60">{item.label}</span>
                        </div>
                        <span className="text-xs font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Recommended Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full py-4 orange-gradient rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-accent/20 transition-all flex items-center justify-center gap-3">
                      <Shield className="w-4 h-4" /> Quarantine Source Node
                    </button>
                    <button className="w-full py-4 glass rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                      <Share2 className="w-4 h-4" /> Escalate to SOC Manager
                    </button>
                    <button className="w-full py-4 glass rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                      <Download className="w-4 h-4" /> Export Evidence PDF
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
