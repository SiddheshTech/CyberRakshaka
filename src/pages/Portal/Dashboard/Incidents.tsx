import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldAlert, Search, Filter, Download, ChevronRight, 
  MoreHorizontal, Clock, User, Globe, Shield,
  CheckCircle2, XCircle, AlertTriangle, ArrowRight,
  Share2, FileText, Trash2, Eye, ExternalLink,
  MessageSquare, History, Lock, Unlock, Zap
} from "lucide-react";
import { useState } from "react";

interface Incident {
  id: string;
  title: string;
  type: 'Phishing' | 'URL' | 'Injection' | 'Behavior' | 'Deepfake';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'NEW' | 'ACKNOWLEDGED' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  assignee: string;
  timestamp: string;
  org: string;
  description: string;
}

const MOCK_INCIDENTS: Incident[] = [
  { id: 'INC-2026-001', title: 'Credential Harvesting Campaign', type: 'Phishing', severity: 'CRITICAL', status: 'IN_PROGRESS', assignee: 'John Doe', timestamp: '2026-03-16 10:45', org: 'Your Org', description: 'Large scale phishing campaign targeting the finance department using a spoofed SBI login page.' },
  { id: 'INC-2026-002', title: 'Prompt Injection: System Override', type: 'Injection', severity: 'HIGH', status: 'NEW', assignee: 'Unassigned', timestamp: '2026-03-16 11:12', org: 'Your Org', description: 'Attempt to override system instructions in the customer support chatbot to leak internal API keys.' },
  { id: 'INC-2026-003', title: 'Suspicious URL: HR Portal', type: 'URL', severity: 'MEDIUM', status: 'ACKNOWLEDGED', assignee: 'Sarah Smith', timestamp: '2026-03-16 09:30', org: 'Your Org', description: 'A homoglyph domain (hг-portal.com) was detected in an internal message.' },
  { id: 'INC-2026-004', title: 'Anomalous Login Pattern', type: 'Behavior', severity: 'HIGH', status: 'RESOLVED', assignee: 'Mike Ross', timestamp: '2026-03-15 22:15', org: 'Your Org', description: 'Multiple failed login attempts followed by a successful login from a high-risk IP range.' },
  { id: 'INC-2026-005', title: 'Synthetic Audio Detection', type: 'Deepfake', severity: 'HIGH', status: 'CLOSED', assignee: 'John Doe', timestamp: '2026-03-15 14:20', org: 'Your Org', description: 'Deepfake audio detected during an executive briefing call. Voice fingerprint mismatch.' },
];

export default function Incidents() {
  const [incidents, setIncidents] = useState<Incident[]>(MOCK_INCIDENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filteredIncidents = incidents.filter(inc => {
    if (filterStatus !== 'All' && inc.status !== filterStatus) return false;
    if (searchQuery && !inc.title.toLowerCase().includes(searchQuery.toLowerCase()) && !inc.id.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleSelectAll = () => {
    setSelectedIds(selectedIds.length === filteredIncidents.length ? [] : filteredIncidents.map(i => i.id));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'HIGH': return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
      case 'MEDIUM': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      default: return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEW': return 'text-accent bg-accent/10 border-accent/20';
      case 'RESOLVED': return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'CLOSED': return 'text-white/20 bg-white/5 border-white/10';
      default: return 'text-white/60 bg-white/5 border-white/10';
    }
  };

  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-screen bg-black text-white font-sans">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tight">Incidents</h1>
          <p className="text-white/40 mt-1 font-light">Manage and investigate security events across your organization.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-all flex items-center gap-2">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button className="px-8 py-3 orange-gradient rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20">
            Create Incident
          </button>
        </div>
      </header>

      {/* Filters & Search */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="Search by incident ID, title, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
          <div className="flex gap-2">
            {['All', 'NEW', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'].map(status => (
              <button 
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${filterStatus === status ? 'bg-accent border-accent text-white' : 'glass border-white/5 text-white/40 hover:text-white'}`}
              >
                {status.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {selectedIds.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 glass rounded-2xl border-accent/20 bg-accent/5"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-accent">{selectedIds.length} incidents selected</span>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex gap-2">
                <button className="px-3 py-1.5 glass rounded-lg text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white">Assign</button>
                <button className="px-3 py-1.5 glass rounded-lg text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white">Update Status</button>
                <button className="px-3 py-1.5 glass rounded-lg text-[10px] font-bold uppercase tracking-widest text-red-400 hover:bg-red-500/10">Delete</button>
              </div>
            </div>
            <button onClick={() => setSelectedIds([])} className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white">Clear Selection</button>
          </motion.div>
        )}
      </div>

      {/* Table */}
      <div className="glass rounded-[32px] border-white/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="p-6 w-12">
                <input 
                  type="checkbox" 
                  checked={selectedIds.length === filteredIncidents.length && filteredIncidents.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded border-white/10 bg-white/5 text-accent focus:ring-accent"
                />
              </th>
              <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/20">Incident</th>
              <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/20">Severity</th>
              <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/20">Status</th>
              <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/20">Assignee</th>
              <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/20 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredIncidents.map((inc) => (
              <tr 
                key={inc.id}
                className={`group hover:bg-white/[0.01] transition-colors cursor-pointer ${selectedIds.includes(inc.id) ? 'bg-accent/5' : ''}`}
                onClick={() => setSelectedIncident(inc)}
              >
                <td className="p-6" onClick={(e) => e.stopPropagation()}>
                  <input 
                    type="checkbox" 
                    checked={selectedIds.includes(inc.id)}
                    onChange={() => toggleSelect(inc.id)}
                    className="w-4 h-4 rounded border-white/10 bg-white/5 text-accent focus:ring-accent"
                  />
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getSeverityColor(inc.severity).split(' ')[1]}`}>
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold group-hover:text-accent transition-colors">{inc.title}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-mono text-white/20">{inc.id}</span>
                        <span className="text-[10px] text-white/10">•</span>
                        <span className="text-[10px] text-white/40">{inc.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border ${getSeverityColor(inc.severity)}`}>
                    {inc.severity}
                  </span>
                </td>
                <td className="p-6">
                  <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border ${getStatusColor(inc.status)}`}>
                    {inc.status.replace('_', ' ')}
                  </span>
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/40">
                      {inc.assignee === 'Unassigned' ? '?' : inc.assignee.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-xs text-white/60">{inc.assignee}</span>
                  </div>
                </td>
                <td className="p-6 text-right">
                  <button className="p-2 glass rounded-lg text-white/20 hover:text-white transition-all">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredIncidents.length === 0 && (
          <div className="p-20 text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-white/20" />
            </div>
            <h3 className="text-lg font-bold mb-2">No incidents found</h3>
            <p className="text-white/40 text-sm">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      {/* Incident Detail Modal */}
      <AnimatePresence>
        {selectedIncident && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIncident(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl glass rounded-[40px] border-white/10 overflow-hidden shadow-2xl flex flex-col h-[90vh]"
            >
              <header className="p-8 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${getSeverityColor(selectedIncident.severity).split(' ')[1]}`}>
                    <ShieldAlert className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold">{selectedIncident.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getSeverityColor(selectedIncident.severity)}`}>
                        {selectedIncident.severity}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-white/40 text-xs">
                      <span className="font-mono">{selectedIncident.id}</span>
                      <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {selectedIncident.timestamp}</span>
                      <span className="flex items-center gap-2"><Globe className="w-3 h-3" /> {selectedIncident.org}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="p-3 glass rounded-2xl text-white/40 hover:text-white transition-all"><Share2 className="w-5 h-5" /></button>
                  <button onClick={() => setSelectedIncident(null)} className="p-3 glass rounded-2xl text-white/40 hover:text-white transition-all"><XCircle className="w-5 h-5" /></button>
                </div>
              </header>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Left: Investigation */}
                  <div className="col-span-8 space-y-8">
                    <div className="glass rounded-3xl p-8 border-white/5">
                      <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Eye className="w-5 h-5 text-accent" /> Incident Overview</h3>
                      <p className="text-white/60 leading-relaxed mb-8">
                        {selectedIncident.description}
                      </p>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="p-4 glass rounded-2xl border-white/5">
                          <div className="text-[10px] text-white/20 uppercase mb-2">Threat Vector</div>
                          <div className="text-lg font-bold">{selectedIncident.type}</div>
                        </div>
                        <div className="p-4 glass rounded-2xl border-white/5">
                          <div className="text-[10px] text-white/20 uppercase mb-2">Affected Assets</div>
                          <div className="text-lg font-bold">4 Nodes</div>
                        </div>
                        <div className="p-4 glass rounded-2xl border-white/5">
                          <div className="text-[10px] text-white/20 uppercase mb-2">AttackDNA</div>
                          <div className="text-lg font-bold text-accent">#A7F2C9</div>
                        </div>
                      </div>
                    </div>

                    <div className="glass rounded-3xl p-8 border-white/5">
                      <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><History className="w-5 h-5 text-accent" /> Evidence Chain</h3>
                      <div className="space-y-8 relative">
                        <div className="absolute left-4 top-2 bottom-2 w-px bg-white/5" />
                        {[
                          { time: '10:45:02', event: 'Initial Detection', desc: 'NLP engine flagged suspicious email headers.', status: 'FLAGGED' },
                          { time: '10:45:15', event: 'Automated Analysis', desc: 'URL hxxp://sbi-secure.ru analyzed and confirmed malicious.', status: 'CONFIRMED' },
                          { time: '10:46:00', event: 'Incident Created', desc: 'System automatically generated INC-2026-001.', status: 'NEW' },
                          { time: '11:00:00', event: 'Manual Review', desc: 'Analyst John Doe acknowledged the incident.', status: 'ACKNOWLEDGED' },
                          { time: '11:15:00', event: 'Remediation Started', desc: 'Domain blocked across all organization nodes.', status: 'IN_PROGRESS' },
                        ].map((item, i) => (
                          <div key={i} className="flex gap-8 relative z-10">
                            <div className="w-8 h-8 rounded-full bg-black border-2 border-accent flex items-center justify-center shrink-0">
                              <div className="w-2 h-2 rounded-full bg-accent" />
                            </div>
                            <div className="flex-1 p-5 glass rounded-2xl border-white/5 hover:border-white/10 transition-all">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold">{item.event}</h4>
                                <span className="text-[10px] text-white/20 font-mono">{item.time}</span>
                              </div>
                              <p className="text-xs text-white/40 mb-3">{item.desc}</p>
                              <span className="text-[8px] font-bold text-accent uppercase tracking-widest">{item.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Sidebar */}
                  <div className="col-span-4 space-y-6">
                    <div className="glass rounded-3xl p-6 border-white/5">
                      <h4 className="text-[10px] font-bold mb-4 uppercase tracking-widest text-white/20">Management</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] text-white/20 uppercase mb-2 block">Status</label>
                          <select 
                            value={selectedIncident.status}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs focus:outline-none focus:border-accent/50"
                          >
                            <option value="NEW">New</option>
                            <option value="ACKNOWLEDGED">Acknowledged</option>
                            <option value="IN_PROGRESS">In Progress</option>
                            <option value="RESOLVED">Resolved</option>
                            <option value="CLOSED">Closed</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] text-white/20 uppercase mb-2 block">Assignee</label>
                          <div className="flex items-center gap-3 p-3 glass rounded-xl border-white/5">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">JD</div>
                            <div className="flex-1">
                              <div className="text-xs font-bold">John Doe</div>
                              <div className="text-[10px] text-white/20">Senior Analyst</div>
                            </div>
                            <button className="text-[10px] font-bold text-accent uppercase tracking-widest">Change</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="glass rounded-3xl p-6 border-white/5">
                      <h4 className="text-[10px] font-bold mb-4 uppercase tracking-widest text-white/20">Quick Actions</h4>
                      <div className="space-y-3">
                        <button className="w-full py-3 bg-red-500 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                          <Lock className="w-3 h-3" /> Quarantine Assets
                        </button>
                        <button className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                          <Zap className="w-3 h-3 text-accent" /> Generate Filter
                        </button>
                        <button className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                          <FileText className="w-3 h-3" /> Export Evidence PDF
                        </button>
                      </div>
                    </div>

                    <div className="glass rounded-3xl p-6 border-white/5">
                      <h4 className="text-[10px] font-bold mb-4 uppercase tracking-widest text-white/20">Collaborators</h4>
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/40">
                            U{i}
                          </div>
                        ))}
                        <button className="w-8 h-8 rounded-full border-2 border-black bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="p-8 glass border-t border-white/5 flex justify-between items-center bg-white/[0.01]">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <MessageSquare className="w-4 h-4" /> 12 Comments
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <FileText className="w-4 h-4" /> 4 Attachments
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setSelectedIncident(null)} className="px-8 py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest">Cancel</button>
                  <button className="px-10 py-3 orange-gradient rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-accent/20">Save Changes</button>
                </div>
              </footer>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
