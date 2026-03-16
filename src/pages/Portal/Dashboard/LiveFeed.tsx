import { motion, AnimatePresence } from "motion/react";
import { 
  Activity, Search, Filter, Pause, Play, CheckCircle2, 
  Download, Bell, BellOff, Globe, Link2, ChevronRight, 
  AlertTriangle, ShieldAlert, Terminal, Fingerprint, X,
  ExternalLink, Clock, ShieldCheck, Share2, Eye, Info,
  BarChart2, PieChart, Network, Mail
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Alert {
  id: string;
  type: 'Phishing' | 'URL' | 'Injection' | 'Behavior' | 'Deepfake';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  description: string;
  timestamp: string;
  org: string;
  campaignId?: string;
  isRead: boolean;
  isNew?: boolean;
}

const MOCK_ALERTS: Alert[] = [
  { id: '1', type: 'Phishing', severity: 'CRITICAL', description: 'Phishing email detected — SBI impersonation, .ru domain', timestamp: '2 minutes ago', org: 'Your Org', campaignId: '#A7F2C9', isRead: false, isNew: true },
  { id: '2', type: 'URL', severity: 'HIGH', description: 'Suspicious URL detected in HR portal — homoglyph attack', timestamp: '5 minutes ago', org: 'Banking Org #3', isRead: false },
  { id: '3', type: 'Injection', severity: 'CRITICAL', description: 'Prompt injection attempt — Instruction Override detected', timestamp: '12 minutes ago', org: 'Your Org', isRead: true },
  { id: '4', type: 'Behavior', severity: 'MEDIUM', description: 'Anomalous login pattern from unknown IP range', timestamp: '45 minutes ago', org: 'Healthcare Org #1', isRead: true },
  { id: '5', type: 'Phishing', severity: 'HIGH', description: 'Credential harvesting campaign targeting finance team', timestamp: '1 hour ago', org: 'Your Org', campaignId: '#A7F2C9', isRead: true },
  { id: '6', type: 'Deepfake', severity: 'HIGH', description: 'Synthetic audio detected in executive voice call', timestamp: '2 hours ago', org: 'Government Dept #4', isRead: true },
];

export default function LiveFeed() {
  const [alerts, setAlerts] = useState<Alert[]>(MOCK_ALERTS);
  const [isPaused, setIsPaused] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [filterType, setFilterType] = useState('All');
  const [filterSeverity, setFilterSeverity] = useState('All');
  const [filterSource, setFilterSource] = useState('Both');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);

  const feedRef = useRef<HTMLDivElement>(null);

  // Simulate real-time updates
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const newAlert: Alert = {
        id: Math.random().toString(36).substr(2, 9),
        type: ['Phishing', 'URL', 'Injection', 'Behavior', 'Deepfake'][Math.floor(Math.random() * 5)] as any,
        severity: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'][Math.floor(Math.random() * 4)] as any,
        description: 'New threat detected on the network — analyzing AttackDNA...',
        timestamp: 'Just now',
        org: Math.random() > 0.7 ? 'Your Org' : `Org #${Math.floor(Math.random() * 100)}`,
        isRead: false,
        isNew: true
      };

      setAlerts(prev => [newAlert, ...prev].slice(0, 100));
      
      if (soundEnabled) {
        // Play subtle sound if needed
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [isPaused, soundEnabled]);

  const filteredAlerts = alerts.filter(alert => {
    if (filterType !== 'All' && alert.type !== filterType) return false;
    if (filterSeverity === 'HIGH+' && !['HIGH', 'CRITICAL'].includes(alert.severity)) return false;
    if (filterSeverity === 'CRITICAL' && alert.severity !== 'CRITICAL') return false;
    if (filterSource === 'My Org' && alert.org !== 'Your Org') return false;
    if (filterSource === 'Network' && alert.org === 'Your Org') return false;
    if (searchQuery && !alert.description.toLowerCase().includes(searchQuery.toLowerCase()) && !alert.type.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const campaigns = alerts.reduce((acc, alert) => {
    if (alert.campaignId) {
      if (!acc[alert.campaignId]) acc[alert.campaignId] = [];
      acc[alert.campaignId].push(alert);
    }
    return acc;
  }, {} as Record<string, Alert[]>);

  const markAllAsRead = () => {
    setAlerts(prev => prev.map(a => ({ ...a, isRead: true, isNew: false })));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'border-red-500 text-red-500';
      case 'HIGH': return 'border-orange-500 text-orange-500';
      case 'MEDIUM': return 'border-yellow-500 text-yellow-500';
      default: return 'border-blue-500 text-blue-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Phishing': return <Mail className="w-4 h-4" />;
      case 'URL': return <Globe className="w-4 h-4" />;
      case 'Injection': return <Terminal className="w-4 h-4" />;
      case 'Behavior': return <Activity className="w-4 h-4" />;
      case 'Deepfake': return <Fingerprint className="w-4 h-4" />;
      default: return <ShieldAlert className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-screen bg-black text-white font-sans">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tight">Live Alert Feed</h1>
          <p className="text-white/40 mt-1 font-light">Real-time WebSocket stream from the ThreatKarma network.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex glass rounded-xl p-1 border-white/5">
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${isPaused ? 'bg-orange-500 text-white' : 'text-white/40 hover:text-white'}`}
            >
              {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
              {isPaused ? 'Resume Feed' : 'Pause Feed'}
            </button>
            <button 
              onClick={markAllAsRead}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white"
            >
              <CheckCircle2 className="w-3 h-3" /> Mark All Read
            </button>
          </div>
          <div className="flex glass rounded-xl p-1 border-white/5">
            <button 
              onClick={() => setAutoScroll(!autoScroll)}
              className={`p-2 rounded-lg transition-all ${autoScroll ? 'text-accent' : 'text-white/20'}`}
              title="Auto-scroll"
            >
              <ChevronRight className={`w-4 h-4 rotate-90 transition-transform ${autoScroll ? 'translate-y-0.5' : ''}`} />
            </button>
            <button 
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-lg transition-all ${soundEnabled ? 'text-accent' : 'text-white/20'}`}
              title="Sound Notifications"
            >
              {soundEnabled ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
            </button>
            <button className="p-2 rounded-lg text-white/20 hover:text-white transition-all" title="Export CSV">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="Search by threat, keyword, or AttackDNA..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
          <div className="flex gap-2">
            {['All', 'Phishing', 'URL', 'Injection', 'Behavior', 'Deepfake'].map(type => (
              <button 
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${filterType === type ? 'bg-accent border-accent text-white' : 'glass border-white/5 text-white/40 hover:text-white'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
          <div className="flex items-center gap-3">
            <span>Severity:</span>
            {['All', 'HIGH+', 'CRITICAL'].map(sev => (
              <button 
                key={sev}
                onClick={() => setFilterSeverity(sev)}
                className={`hover:text-white transition-colors ${filterSeverity === sev ? 'text-accent' : ''}`}
              >
                {sev}
              </button>
            ))}
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-3">
            <span>Source:</span>
            {['All', 'My Org', 'Network'].map(src => (
              <button 
                key={src}
                onClick={() => setFilterSource(src)}
                className={`hover:text-white transition-colors ${filterSource === src ? 'text-accent' : ''}`}
              >
                {src}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-4" ref={feedRef}>
        <AnimatePresence initial={false}>
          {Object.entries(campaigns).map(([campaignId, campaignAlerts]: [string, Alert[]]) => {
            if (campaignAlerts.length < 3) return null;
            return (
              <motion.div 
                key={`campaign-${campaignId}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-3xl border-l-4 border-accent p-6 relative overflow-hidden group cursor-pointer"
                onClick={() => setSelectedCampaign(campaignId)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] rounded-full" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                      <Link2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Campaign Detected: {campaignId}</h3>
                      <p className="text-xs text-white/40 mt-1">
                        {campaignAlerts.length} alerts from {new Set(campaignAlerts.map((a: Alert) => a.org)).size} organizations in the last 2 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-accent uppercase tracking-widest">Active Campaign</div>
                      <div className="text-[8px] text-white/20 mt-1">AttackDNA Fingerprint Match</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {filteredAlerts.map((alert) => (
            <motion.div 
              key={alert.id}
              layout
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: 'auto' }}
              exit={{ opacity: 0, x: 20, height: 0 }}
              className={`glass rounded-2xl border-l-4 ${getSeverityColor(alert.severity)} p-5 flex items-center justify-between group cursor-pointer transition-all hover:bg-white/5 ${alert.isRead ? 'opacity-60' : 'bg-white/[0.02]'}`}
              onClick={() => setSelectedAlert(alert)}
            >
              <div className="flex items-center gap-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getSeverityColor(alert.severity).replace('border-', 'bg-').replace('text-', 'text-').replace('500', '500/10')}`}>
                  {getTypeIcon(alert.type)}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${getSeverityColor(alert.severity).split(' ')[1]}`}>{alert.type}</span>
                    <span className="text-[10px] text-white/20">•</span>
                    <span className="text-[10px] text-white/40">{alert.timestamp}</span>
                    {alert.isNew && (
                      <span className="px-1.5 py-0.5 bg-accent text-white text-[8px] font-bold rounded uppercase animate-pulse">New</span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{alert.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 glass rounded-lg border-white/5">
                      <Globe className="w-3 h-3 text-white/20" />
                      <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{alert.org}</span>
                    </div>
                    {alert.campaignId && (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-lg">
                        <Link2 className="w-3 h-3 text-accent" />
                        <span className="text-[9px] font-bold text-accent uppercase tracking-widest">{alert.campaignId}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-white transition-all group-hover:translate-x-1" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Alert Detail Modal */}
      <AnimatePresence>
        {selectedAlert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAlert(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl glass rounded-[40px] border-white/10 overflow-hidden shadow-2xl flex flex-col h-[85vh]"
            >
              <header className="p-8 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${getSeverityColor(selectedAlert.severity).replace('border-', 'bg-').replace('text-', 'text-').replace('500', '500/10')}`}>
                    {getTypeIcon(selectedAlert.type)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold">{selectedAlert.type} Alert</h2>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${getSeverityColor(selectedAlert.severity).split(' ')[1]} bg-white/5 border ${getSeverityColor(selectedAlert.severity).split(' ')[0]}`}>
                        {selectedAlert.severity}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-white/40 text-xs">
                      <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {selectedAlert.timestamp}</span>
                      <span className="flex items-center gap-2"><Globe className="w-3 h-3" /> {selectedAlert.org}</span>
                      {selectedAlert.campaignId && <span className="flex items-center gap-2 text-accent"><Link2 className="w-3 h-3" /> Campaign {selectedAlert.campaignId}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="p-3 glass rounded-2xl text-white/40 hover:text-white transition-all"><Share2 className="w-5 h-5" /></button>
                  <button onClick={() => setSelectedAlert(null)} className="p-3 glass rounded-2xl text-white/40 hover:text-white transition-all"><X className="w-5 h-5" /></button>
                </div>
              </header>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Left: Analysis */}
                  <div className="col-span-8 space-y-8">
                    <div className="glass rounded-3xl p-8 border-white/5">
                      <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Eye className="w-5 h-5 text-accent" /> Threat Summary</h3>
                      <p className="text-white/60 leading-relaxed mb-6">
                        {selectedAlert.description}. This threat was detected by our NLP engine with a confidence score of 0.94. 
                        The AttackDNA fingerprint matches a known campaign targeting the banking sector.
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 glass rounded-2xl border-white/5">
                          <div className="text-[10px] text-white/20 uppercase mb-1">Risk Score</div>
                          <div className="text-2xl font-bold text-red-400">0.94</div>
                        </div>
                        <div className="p-4 glass rounded-2xl border-white/5">
                          <div className="text-[10px] text-white/20 uppercase mb-1">Confidence</div>
                          <div className="text-2xl font-bold text-accent">94%</div>
                        </div>
                        <div className="p-4 glass rounded-2xl border-white/5">
                          <div className="text-[10px] text-white/20 uppercase mb-1">Engine</div>
                          <div className="text-2xl font-bold text-white/80">NLP-4</div>
                        </div>
                      </div>
                    </div>

                    <div className="glass rounded-3xl p-8 border-white/5">
                      <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-accent" /> Evidence Chain</h3>
                      <div className="space-y-6">
                        {[
                          { step: 'Input Received', status: 'SUCCESS', time: '12:04:10' },
                          { step: 'Edge Pre-check', status: 'FLAGGED', time: '12:04:11' },
                          { step: 'GNN Fusion Analysis', status: 'CRITICAL', time: '12:04:12' },
                          { step: 'CyberPassport Generated', status: 'SIGNED', time: '12:04:13' },
                          { step: 'ThreatKarma Broadcast', status: 'SENT', time: '12:04:14' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <div className="flex-1 flex items-center justify-between p-3 glass rounded-xl border-white/5">
                              <span className="text-xs font-bold">{item.step}</span>
                              <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.status}</span>
                                <span className="text-[10px] text-white/20">{item.time}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="col-span-4 space-y-6">
                    <div className="glass rounded-3xl p-6 border-white/5">
                      <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-white/40">Remediation</h4>
                      <div className="space-y-3">
                        <button className="w-full py-3 bg-red-500 rounded-xl text-[10px] font-bold uppercase tracking-widest">Quarantine Resource</button>
                        <button className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest">Block Domain</button>
                        <button className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest">Generate Report</button>
                      </div>
                    </div>

                    <div className="glass rounded-3xl p-6 border-white/5">
                      <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-white/40">Incident Management</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] text-white/20 uppercase mb-2 block">Status</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs focus:outline-none">
                            <option>New</option>
                            <option>Acknowledged</option>
                            <option>Resolved</option>
                            <option>Escalated</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] text-white/20 uppercase mb-2 block">Assign To</label>
                          <div className="flex items-center gap-3 p-3 glass rounded-xl border-white/5">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">JD</div>
                            <span className="text-xs">John Doe (Analyst)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="p-6 glass border-t border-white/5 flex justify-between items-center">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-white/40 hover:text-white transition-all text-xs">
                    <ChevronRight className="w-4 h-4 rotate-180" /> Previous Alert
                  </button>
                  <button className="flex items-center gap-2 text-white/40 hover:text-white transition-all text-xs">
                    Next Alert <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <button className="px-8 py-3 orange-gradient rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20">
                  Acknowledge & Close
                </button>
              </footer>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Campaign Detail Modal */}
      <AnimatePresence>
        {selectedCampaign && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCampaign(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass rounded-[40px] border-white/10 p-10 overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCampaign(null)}
                className="absolute top-8 right-8 p-3 glass rounded-2xl text-white/40 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center text-accent">
                  <Network className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Campaign {selectedCampaign}</h2>
                  <div className="flex items-center gap-4 text-white/40 text-xs">
                    <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> First seen: 2 days ago</span>
                    <span className="flex items-center gap-2"><Globe className="w-3 h-3" /> 12 affected organizations</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="p-6 glass rounded-3xl border-white/5">
                  <div className="text-[10px] text-white/20 uppercase mb-2">Total Incidents</div>
                  <div className="text-3xl font-bold text-accent">42</div>
                </div>
                <div className="p-6 glass rounded-3xl border-white/5">
                  <div className="text-[10px] text-white/20 uppercase mb-2">Primary Target</div>
                  <div className="text-3xl font-bold text-white/80">Banking</div>
                </div>
                <div className="p-6 glass rounded-3xl border-white/5">
                  <div className="text-[10px] text-white/20 uppercase mb-2">Threat Type</div>
                  <div className="text-3xl font-bold text-orange-400">Phishing</div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-bold flex items-center gap-2"><Activity className="w-5 h-5 text-accent" /> Campaign Timeline</h3>
                <div className="h-32 w-full glass rounded-2xl border-white/5 flex items-end p-4 gap-2">
                  {[4, 7, 12, 8, 15, 22, 18, 25, 30, 28, 35, 42].map((val, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-accent/20 rounded-t-lg transition-all hover:bg-accent cursor-help"
                      style={{ height: `${(val / 42) * 100}%` }}
                      title={`${val} incidents`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-white/20 uppercase tracking-widest px-2">
                  <span>48h ago</span>
                  <span>24h ago</span>
                  <span>Now</span>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <button className="flex-1 py-4 orange-gradient rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-accent/20">
                  View Full AttackDNA Graph
                </button>
                <button className="flex-1 py-4 glass rounded-2xl font-bold text-xs uppercase tracking-widest">
                  Export Campaign Intelligence
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
