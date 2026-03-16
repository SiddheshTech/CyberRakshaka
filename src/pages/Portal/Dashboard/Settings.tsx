import { motion, AnimatePresence } from "motion/react";
import { 
  Settings as SettingsIcon, User, Shield, Bell, 
  Globe, Key, Zap, Lock, Eye, EyeOff, 
  ChevronRight, Save, Trash2, Plus, 
  CheckCircle2, AlertTriangle, Info,
  ExternalLink, Github, Slack, Mail,
  Database, Network, Fingerprint
} from "lucide-react";
import { useState } from "react";

type SettingsTab = 'Profile' | 'Security' | 'API' | 'Notifications' | 'Integrations' | 'ThreatKarma';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('Profile');
  const [showApiKey, setShowApiKey] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const tabs: { id: SettingsTab; icon: any; label: string }[] = [
    { id: 'Profile', icon: <User className="w-4 h-4" />, label: 'Org Profile' },
    { id: 'Security', icon: <Shield className="w-4 h-4" />, label: 'Security' },
    { id: 'API', icon: <Key className="w-4 h-4" />, label: 'API Keys' },
    { id: 'Notifications', icon: <Bell className="w-4 h-4" />, label: 'Notifications' },
    { id: 'Integrations', icon: <Zap className="w-4 h-4" />, label: 'Integrations' },
    { id: 'ThreatKarma', icon: <Network className="w-4 h-4" />, label: 'ThreatKarma' },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-screen bg-black text-white font-sans">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tight">Settings</h1>
          <p className="text-white/40 mt-1 font-light">Configure your organization's defense parameters and integrations.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="px-10 py-3 orange-gradient rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20 flex items-center gap-2 disabled:opacity-50"
        >
          {isSaving ? <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </header>

      <div className="grid grid-cols-12 gap-10">
        {/* Sidebar Navigation */}
        <div className="col-span-3 space-y-2">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all group ${activeTab === tab.id ? 'bg-accent/10 text-accent' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              <div className={`${activeTab === tab.id ? 'text-accent' : 'text-white/20 group-hover:text-white'} transition-colors`}>
                {tab.icon}
              </div>
              <span className="text-sm font-bold">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div layoutId="settings-active" className="ml-auto">
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="col-span-9">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass rounded-[40px] border-white/5 p-10 min-h-[600px]"
            >
              {activeTab === 'Profile' && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Organization Profile</h3>
                    <p className="text-white/40 text-sm">Basic information about your organization.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-1">Org Name</label>
                      <input type="text" defaultValue="Acme Cybersecurity" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-accent/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-1">Industry</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-accent/50">
                        <option>Banking & Finance</option>
                        <option>Healthcare</option>
                        <option>Government</option>
                        <option>Technology</option>
                      </select>
                    </div>
                    <div className="space-y-2 col-span-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-1">Org Domain</label>
                      <input type="text" defaultValue="acme-cyber.com" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-accent/50" />
                    </div>
                  </div>
                  <div className="p-6 glass rounded-3xl border-white/5 flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-2xl font-bold">AC</div>
                    <div className="flex-1">
                      <h4 className="font-bold">Organization Logo</h4>
                      <p className="text-xs text-white/40 mt-1">Used in reports and CyberPassports.</p>
                    </div>
                    <button className="px-6 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest">Change Logo</button>
                  </div>
                </div>
              )}

              {activeTab === 'Security' && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Security & Privacy</h3>
                    <p className="text-white/40 text-sm">Manage authentication and data protection settings.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-6 glass rounded-3xl border-white/5">
                      <div>
                        <h4 className="font-bold">Two-Factor Authentication</h4>
                        <p className="text-xs text-white/40 mt-1">Add an extra layer of security to your account.</p>
                      </div>
                      <div className="w-12 h-6 bg-accent rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-6 glass rounded-3xl border-white/5">
                      <div>
                        <h4 className="font-bold">Session Timeout</h4>
                        <p className="text-xs text-white/40 mt-1">Automatically log out after inactivity.</p>
                      </div>
                      <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none">
                        <option>30 Minutes</option>
                        <option>1 Hour</option>
                        <option>4 Hours</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between p-6 glass rounded-3xl border-white/5">
                      <div>
                        <h4 className="font-bold">Data Retention</h4>
                        <p className="text-xs text-white/40 mt-1">How long to store incident logs and evidence.</p>
                      </div>
                      <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none">
                        <option>90 Days</option>
                        <option>1 Year</option>
                        <option>Indefinite</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'API' && (
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">API Access</h3>
                      <p className="text-white/40 text-sm">Manage keys for integrating with your existing SOC/SIEM.</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 orange-gradient rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20">
                      <Plus className="w-4 h-4" /> Create New Key
                    </button>
                  </div>
                  <div className="space-y-6">
                    <div className="glass rounded-3xl border-white/5 overflow-hidden">
                      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                            <Key className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold">Production SIEM Key</h4>
                            <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">Created on Mar 12, 2026</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Active</span>
                          <button className="p-2 glass rounded-lg text-red-400 hover:bg-red-500/10 transition-all"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                      <div className="p-6 flex items-center gap-4">
                        <div className="flex-1 bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-xs flex items-center justify-between">
                          <span className="text-white/60">
                            {showApiKey ? 'tk_live_51N8jH2L9mQ4zR7vX9wP2kL5mN8jH2L9mQ4zR7vX' : '••••••••••••••••••••••••••••••••••••••••'}
                          </span>
                          <button onClick={() => setShowApiKey(!showApiKey)} className="text-accent hover:text-accent/80 transition-colors">
                            {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        <button className="px-6 py-4 glass rounded-xl text-[10px] font-bold uppercase tracking-widest">Copy</button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 glass rounded-3xl border-white/5 flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                      <Info className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Documentation</h4>
                      <p className="text-xs text-white/40 leading-relaxed mb-4">
                        Learn how to use our API to automate threat detection and remediation. 
                        Check out our SDKs for Python, Node.js, and Go.
                      </p>
                      <button className="text-[10px] font-bold text-blue-500 uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                        API Reference <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Notifications' && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Notification Preferences</h3>
                    <p className="text-white/40 text-sm">Control how and when you get alerted.</p>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-1">Alert Channels</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 glass rounded-3xl border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Mail className="w-5 h-5 text-accent" />
                            <span className="text-sm font-bold">Email Alerts</span>
                          </div>
                          <div className="w-10 h-5 bg-accent rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
                          </div>
                        </div>
                        <div className="p-6 glass rounded-3xl border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Slack className="w-5 h-5 text-blue-400" />
                            <span className="text-sm font-bold">Slack Webhook</span>
                          </div>
                          <div className="w-10 h-5 bg-white/10 rounded-full relative cursor-pointer">
                            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/40 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-1">Severity Thresholds</h4>
                      <div className="space-y-3">
                        {['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].map(sev => (
                          <div key={sev} className="flex items-center justify-between p-4 glass rounded-2xl border-white/5">
                            <span className="text-xs font-bold">{sev} Severity</span>
                            <div className="w-10 h-5 bg-accent rounded-full relative cursor-pointer">
                              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Integrations' && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Third-Party Integrations</h3>
                    <p className="text-white/40 text-sm">Connect your security stack for automated defense.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { name: 'GitHub', icon: <Github className="w-6 h-6" />, desc: 'Scan PRs for prompt injections.', status: 'Connected' },
                      { name: 'Slack', icon: <Slack className="w-6 h-6" />, desc: 'Real-time alerts in your channels.', status: 'Disconnected' },
                      { name: 'Splunk', icon: <Database className="w-6 h-6" />, desc: 'Export logs to your SIEM.', status: 'Connected' },
                      { name: 'CERT-In', icon: <Shield className="w-6 h-6" />, desc: 'Automated incident reporting.', status: 'Disconnected' },
                    ].map((item, i) => (
                      <div key={i} className="p-8 glass rounded-[32px] border-white/5 flex flex-col justify-between group hover:bg-white/[0.02] transition-all">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                            {item.icon}
                          </div>
                          <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded ${item.status === 'Connected' ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-white/20'}`}>
                            {item.status}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{item.name}</h4>
                          <p className="text-[10px] text-white/40 leading-relaxed mb-6">{item.desc}</p>
                          <button className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest">
                            {item.status === 'Connected' ? 'Configure' : 'Connect'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'ThreatKarma' && (
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">ThreatKarma Network</h3>
                      <p className="text-white/40 text-sm">Contribute and benefit from global threat intelligence.</p>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-xl">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Active Participant</span>
                    </div>
                  </div>
                  <div className="p-8 glass rounded-[32px] border-white/5 bg-accent/[0.02]">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center text-accent">
                        <Network className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Privacy-Preserving Intelligence</h4>
                        <p className="text-xs text-white/40 mt-1">Your data is anonymized using differential privacy before being shared.</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-6 glass rounded-2xl border-white/5">
                        <div className="flex items-center gap-4">
                          <Globe className="w-5 h-5 text-accent" />
                          <div>
                            <h5 className="text-sm font-bold">Share Anonymized Signatures</h5>
                            <p className="text-[10px] text-white/20 mt-0.5">Help others block threats you've already encountered.</p>
                          </div>
                        </div>
                        <div className="w-10 h-5 bg-accent rounded-full relative cursor-pointer">
                          <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-6 glass rounded-2xl border-white/5">
                        <div className="flex items-center gap-4">
                          <Fingerprint className="w-5 h-5 text-accent" />
                          <div>
                            <h5 className="text-sm font-bold">AttackDNA Contribution</h5>
                            <p className="text-[10px] text-white/20 mt-0.5">Contribute to global campaign mapping.</p>
                          </div>
                        </div>
                        <div className="w-10 h-5 bg-accent rounded-full relative cursor-pointer">
                          <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 glass rounded-3xl border-white/5">
                      <div className="text-[10px] text-white/20 uppercase mb-2">Network Reputation</div>
                      <div className="text-3xl font-bold text-accent">98.4</div>
                      <p className="text-[10px] text-white/40 mt-2">Top 5% of contributors globally.</p>
                    </div>
                    <div className="p-6 glass rounded-3xl border-white/5">
                      <div className="text-[10px] text-white/20 uppercase mb-2">Threats Blocked via Karma</div>
                      <div className="text-3xl font-bold text-white/80">1,242</div>
                      <p className="text-[10px] text-white/40 mt-2">Attacks prevented by shared intelligence.</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
