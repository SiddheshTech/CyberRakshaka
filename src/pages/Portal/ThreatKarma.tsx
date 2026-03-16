import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, Globe, Server, Activity, Shield, RefreshCw, 
  ChevronRight, Trophy, User, History, Map, Award, 
  BookOpen, Layers, Lock, Search, Filter, ArrowUpRight,
  ArrowDownRight, CheckCircle2, AlertCircle, ExternalLink,
  Download, Info, Share2, Users, Signal
} from "lucide-react";
import { useState } from "react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell
} from "recharts";

// --- Sub-components for ThreatKarma ---

const KarmaHome = ({ setTab }: { setTab: (t: string) => void }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass rounded-[40px] p-10 border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -mr-20 -mt-20" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-accent/20 flex items-center justify-center text-accent shadow-2xl shadow-accent/20">
                  <Zap className="w-10 h-10" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-4xl font-display font-bold">12,840</h2>
                    <span className="px-3 py-1 bg-accent/20 text-accent text-[10px] font-bold rounded-full uppercase tracking-widest">Karma Score</span>
                  </div>
                  <p className="text-white/40 font-medium">Top 2% of National Contributors</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">National Rank</div>
                  <div className="text-3xl font-display font-bold text-white">#42</div>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
                  <span>Current Tier: Gold</span>
                  <span>Next: Platinum</span>
                </div>
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-linear-to-r from-accent to-orange-400 rounded-full shadow-lg shadow-accent/40"
                  />
                </div>
                <div className="text-[10px] text-white/20 text-right font-bold">2,160 pts to level up</div>
              </div>

              <div className="glass rounded-2xl p-4 border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold">14 Days</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-white/30">Contribution Streak</div>
                </div>
              </div>

              <div className="glass rounded-2xl p-4 border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-green-500">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold">1,240</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-white/30">Orgs Protected</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setTab('history')}
              className="w-full py-4 orange-gradient rounded-2xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl shadow-accent/20"
            >
              <Signal className="w-4 h-4" /> Quick Contribute Threat Signal
            </button>
          </div>
        </div>

        <div className="glass rounded-[40px] p-8 border-white/5 flex flex-col">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-accent" /> Network Pulse
          </h3>
          <div className="flex-1 flex flex-col items-center justify-center relative py-10">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-64 h-64 rounded-full border border-accent"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="w-64 h-64 rounded-full border border-accent"
              />
            </div>
            
            <div className="text-center relative z-10">
              <div className="text-5xl font-display font-bold text-white mb-2">4,821</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Active Network Nodes</div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 w-full">
              <div className="p-4 glass rounded-2xl border-white/5 text-center">
                <div className="text-xl font-bold text-accent">12.4k</div>
                <div className="text-[8px] font-bold uppercase tracking-widest text-white/20">Signals Today</div>
              </div>
              <div className="p-4 glass rounded-2xl border-white/5 text-center">
                <div className="text-xl font-bold text-green-500">99.9%</div>
                <div className="text-[8px] font-bold uppercase tracking-widest text-white/20">Network Health</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { id: 'leaderboard', name: 'Leaderboard', icon: Trophy, color: 'text-yellow-500' },
          { id: 'my-score', name: 'My Karma', icon: User, color: 'text-blue-500' },
          { id: 'map', name: 'Network Map', icon: Map, color: 'text-green-500' },
          { id: 'how-it-works', name: 'How it Works', icon: BookOpen, color: 'text-purple-500' },
        ].map(link => (
          <button 
            key={link.id}
            onClick={() => setTab(link.id)}
            className="p-6 glass rounded-3xl border-white/5 hover:border-accent/30 transition-all group text-left"
          >
            <link.icon className={`w-8 h-8 ${link.color} mb-4 group-hover:scale-110 transition-transform`} />
            <div className="font-bold text-lg">{link.name}</div>
            <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold mt-1">Explore Section</div>
          </button>
        ))}
      </div>
    </div>
  );
};

const Leaderboard = () => {
  const [sector, setSector] = useState('All');
  const [time, setTime] = useState('Week');

  const rankings = [
    { rank: 1, name: "State Bank of India", sector: "Banking", score: 42850, change: "up", contributions: 1240, lastActive: "2m ago" },
    { rank: 2, name: "HDFC Bank", sector: "Banking", score: 38200, change: "down", contributions: 1105, lastActive: "5m ago" },
    { rank: 3, name: "Ministry of Finance", sector: "Govt", score: 35600, change: "up", contributions: 980, lastActive: "1m ago" },
    { rank: 4, name: "Reliance Industries", sector: "Enterprise", score: 31200, change: "stable", contributions: 850, lastActive: "12m ago" },
    { rank: 5, name: "ICICI Bank", sector: "Banking", score: 29800, change: "up", contributions: 790, lastActive: "8m ago" },
    { rank: 42, name: "Your Organization", sector: "Banking", score: 12840, change: "up", contributions: 420, lastActive: "Now", isUser: true },
  ];

  return (
    <div className="space-y-8">
      {/* Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end pt-10">
        <div className="order-2 md:order-1">
          <div className="glass rounded-[40px] p-8 border-white/5 text-center relative pt-16">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white/10 border-4 border-white/5 flex items-center justify-center text-2xl font-bold">2</div>
            <div className="text-xl font-bold mb-1">HDFC Bank</div>
            <div className="text-xs text-white/40 mb-4">Banking Sector</div>
            <div className="text-3xl font-display font-bold text-white">38,200</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-1">Karma Points</div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="glass rounded-[40px] p-10 border-accent/20 text-center relative pt-20 bg-accent/5">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-accent border-4 border-black flex items-center justify-center text-3xl font-bold shadow-2xl shadow-accent/40">1</div>
            <div className="text-2xl font-bold mb-1">State Bank of India</div>
            <div className="text-sm text-accent font-bold uppercase tracking-widest mb-4">National Champion</div>
            <div className="text-5xl font-display font-bold text-white">42,850</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-2">Karma Points</div>
          </div>
        </div>
        <div className="order-3">
          <div className="glass rounded-[40px] p-8 border-white/5 text-center relative pt-16">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white/10 border-4 border-white/5 flex items-center justify-center text-2xl font-bold">3</div>
            <div className="text-xl font-bold mb-1">Ministry of Finance</div>
            <div className="text-xs text-white/40 mb-4">Govt Sector</div>
            <div className="text-3xl font-display font-bold text-white">35,600</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-1">Karma Points</div>
          </div>
        </div>
      </div>

      {/* Filters & Table */}
      <div className="glass rounded-[40px] p-10 border-white/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-2 p-1 glass rounded-2xl border-white/5">
            {['All', 'Banking', 'Healthcare', 'Govt', 'Startup'].map(s => (
              <button 
                key={s}
                onClick={() => setSector(s)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${sector === s ? 'bg-accent text-white' : 'text-white/40 hover:text-white'}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="text" 
                placeholder="Search organization..." 
                className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs w-64 focus:outline-none focus:border-accent/50 transition-all"
              />
            </div>
            <select 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-xs focus:outline-none focus:border-accent/50 transition-all"
            >
              <option value="Week">This Week</option>
              <option value="Month">This Month</option>
              <option value="All">All Time</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">Organization</th>
                <th className="px-6 py-4">Sector</th>
                <th className="px-6 py-4">Karma Score</th>
                <th className="px-6 py-4">Contributions</th>
                <th className="px-6 py-4">Last Active</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((row, i) => (
                <tr 
                  key={i} 
                  className={`group transition-all ${row.isUser ? 'glass border-accent/20 bg-accent/5' : 'hover:bg-white/5'}`}
                >
                  <td className="px-6 py-5 rounded-l-2xl">
                    <div className="flex items-center gap-3">
                      <span className={`font-display font-bold ${row.rank <= 3 ? 'text-accent' : 'text-white/40'}`}>
                        #{row.rank}
                      </span>
                      {row.change === 'up' && <ArrowUpRight className="w-3 h-3 text-green-500" />}
                      {row.change === 'down' && <ArrowDownRight className="w-3 h-3 text-red-500" />}
                    </div>
                  </td>
                  <td className="px-6 py-5 font-bold">{row.name}</td>
                  <td className="px-6 py-5">
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-bold uppercase tracking-widest text-white/40">{row.sector}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-display font-bold text-white">{row.score.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-5 text-white/60">{row.contributions}</td>
                  <td className="px-6 py-5 text-white/40 text-xs">{row.lastActive}</td>
                  <td className="px-6 py-5 rounded-r-2xl text-right">
                    <button className="p-2 glass rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const MyScore = () => {
  const data = [
    { name: 'Jan', score: 4200 },
    { name: 'Feb', score: 5800 },
    { name: 'Mar', score: 8400 },
    { name: 'Apr', score: 9200 },
    { name: 'May', score: 11500 },
    { name: 'Jun', score: 12840 },
  ];

  const breakdown = [
    { type: 'Phishing Detections', points: 4200, color: '#FF6321' },
    { type: 'Malware Signatures', points: 3800, color: '#3B82F6' },
    { type: 'DDoS Patterns', points: 2400, color: '#10B981' },
    { type: 'Zero-Day Reports', points: 2440, color: '#8B5CF6' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass rounded-[40px] p-10 border-white/5">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-bold">Karma Growth (90 Days)</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-xs text-white/40">Your Score</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6321" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF6321" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#ffffff40', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#ffffff40', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #ffffff10', borderRadius: '12px' }}
                  itemStyle={{ color: '#FF6321' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#FF6321" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorScore)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass rounded-[40px] p-8 border-white/5">
            <h3 className="text-xl font-bold mb-6">Score Breakdown</h3>
            <div className="space-y-6">
              {breakdown.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">{item.type}</span>
                    <span className="font-bold">{item.points.toLocaleString()} pts</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ width: `${(item.points / 12840) * 100}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[40px] p-8 border-white/5 bg-accent/5 border-accent/20">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" /> Next Milestone
            </h3>
            <p className="text-sm text-white/60 mb-6">Reach 15,000 points to unlock Platinum Tier benefits and direct CERT-In escalation.</p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-display font-bold">2,160</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-accent">Points Remaining</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContributionHistory = () => {
  const history = [
    { date: "2026-03-15", type: "Phishing URL", severity: "High", karma: "+150", protected: 42, id: "CP-99281", status: "Verified" },
    { date: "2026-03-14", type: "Malware Hash", severity: "Critical", karma: "+450", protected: 128, id: "CP-99275", status: "Verified" },
    { date: "2026-03-14", type: "DGA Domain", severity: "Medium", karma: "+80", protected: 12, id: "CP-99270", status: "Verified" },
    { date: "2026-03-12", type: "SQL Injection", severity: "High", karma: "+200", protected: 85, id: "CP-99264", status: "Verified" },
    { date: "2026-03-10", type: "Botnet C2", severity: "Critical", karma: "+500", protected: 240, id: "CP-99258", status: "Verified" },
  ];

  return (
    <div className="glass rounded-[40px] p-10 border-white/5">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-xl font-bold">Contribution Ledger</h3>
        <button className="px-4 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-[10px] font-bold uppercase tracking-widest text-white/20">
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Threat Type</th>
              <th className="px-6 py-4">Severity</th>
              <th className="px-6 py-4">Karma Earned</th>
              <th className="px-6 py-4">Orgs Protected</th>
              <th className="px-6 py-4">Passport ID</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((row, i) => (
              <tr key={i} className="hover:bg-white/5 transition-all group">
                <td className="px-6 py-5 rounded-l-2xl text-white/40 text-xs">{row.date}</td>
                <td className="px-6 py-5 font-bold">{row.type}</td>
                <td className="px-6 py-5">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                    row.severity === 'Critical' ? 'bg-red-500/20 text-red-500' :
                    row.severity === 'High' ? 'bg-orange-500/20 text-orange-500' :
                    'bg-blue-500/20 text-blue-500'
                  }`}>
                    {row.severity}
                  </span>
                </td>
                <td className="px-6 py-5 font-display font-bold text-accent">{row.karma}</td>
                <td className="px-6 py-5 text-white/60">{row.protected}</td>
                <td className="px-6 py-5 font-mono text-[10px] text-white/20">{row.id}</td>
                <td className="px-6 py-5 rounded-r-2xl">
                  <div className="flex items-center gap-2 text-green-500 text-[10px] font-bold uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3" /> {row.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const NetworkMap = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 glass rounded-[40px] p-10 border-white/5 h-[600px] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <Globe className="w-full h-full text-accent" />
        </div>
        
        {/* Mock Bubble Map */}
        <div className="relative w-full h-full">
          {[
            { top: '20%', left: '30%', size: 60, color: 'bg-accent', label: 'SBI' },
            { top: '40%', left: '60%', size: 80, color: 'bg-blue-500', label: 'HDFC' },
            { top: '70%', left: '20%', size: 40, color: 'bg-green-500', label: 'ICICI' },
            { top: '15%', left: '75%', size: 50, color: 'bg-purple-500', label: 'MeitY' },
            { top: '55%', left: '45%', size: 100, color: 'bg-accent', label: 'YOU', pulse: true },
            { top: '80%', left: '80%', size: 30, color: 'bg-yellow-500', label: 'NPCI' },
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              style={{ top: node.top, left: node.left, width: node.size, height: node.size }}
              className={`absolute rounded-full ${node.color} flex items-center justify-center text-[10px] font-bold text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform`}
            >
              {node.pulse && (
                <motion.div 
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-accent"
                />
              )}
              <span className="relative z-10">{node.label}</span>
            </motion.div>
          ))}

          {/* Connection Lines (Mock) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <line x1="30%" y1="20%" x2="45%" y2="55%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="60%" y1="40%" x2="45%" y2="55%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="20%" y1="70%" x2="45%" y2="55%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="75%" y1="15%" x2="45%" y2="55%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
          </svg>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col gap-2">
          <button className="p-3 glass rounded-xl text-white/40 hover:text-white transition-colors">+</button>
          <button className="p-3 glass rounded-xl text-white/40 hover:text-white transition-colors">-</button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="glass rounded-[40px] p-8 border-white/5">
          <h3 className="text-xl font-bold mb-6">Network Stats</h3>
          <div className="space-y-6">
            <div className="p-6 glass rounded-2xl border-white/5">
              <div className="text-3xl font-display font-bold text-accent">4,821</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Total Organizations</div>
            </div>
            <div className="p-6 glass rounded-2xl border-white/5">
              <div className="text-3xl font-display font-bold text-green-500">12,482</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Signals Shared Today</div>
            </div>
            <div className="p-6 glass rounded-2xl border-white/5">
              <div className="text-xl font-bold">Banking</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Most Active Sector</div>
            </div>
          </div>
        </div>
        
        <button className="w-full py-4 glass rounded-2xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
          <Users className="w-4 h-4" /> Invite New Organization
        </button>
      </div>
    </div>
  );
};

const BadgeWall = () => {
  const badges = [
    { name: "First Detection", desc: "Contributed your first threat signal.", earned: true, icon: Zap, color: "text-accent" },
    { name: "100 Club", desc: "Shared 100 verified threat signals.", earned: true, icon: Shield, color: "text-blue-500" },
    { name: "Sector Leader", desc: "Ranked #1 in your sector for 7 days.", earned: false, icon: Trophy, color: "text-yellow-500", progress: 60 },
    { name: "CERT-In Verified", desc: "Signals verified by national agency.", earned: true, icon: CheckCircle2, color: "text-green-500" },
    { name: "Streak Champion", desc: "30-day contribution streak.", earned: false, icon: Activity, color: "text-red-500", progress: 45 },
    { name: "Network Protector", desc: "Protected 1,000+ organizations.", earned: true, icon: Users, color: "text-purple-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {badges.map((badge, i) => (
        <div key={i} className={`glass rounded-[40px] p-8 border-white/5 relative overflow-hidden ${!badge.earned && 'opacity-50'}`}>
          <div className="flex items-start justify-between mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${badge.color}`}>
              <badge.icon className="w-8 h-8" />
            </div>
            {badge.earned ? (
              <div className="px-3 py-1 bg-green-500/20 text-green-500 text-[8px] font-bold rounded-full uppercase tracking-widest">Earned</div>
            ) : (
              <div className="px-3 py-1 bg-white/10 text-white/40 text-[8px] font-bold rounded-full uppercase tracking-widest">Locked</div>
            )}
          </div>
          <h4 className="text-xl font-bold mb-2">{badge.name}</h4>
          <p className="text-sm text-white/40 mb-6">{badge.desc}</p>
          
          {!badge.earned && badge.progress && (
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/20">
                <span>Progress</span>
                <span>{badge.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-white/20 rounded-full" style={{ width: `${badge.progress}%` }} />
              </div>
            </div>
          )}

          {badge.earned && (
            <div className="flex gap-2">
              <button className="flex-1 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Share</button>
              <button className="flex-1 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Download</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-display font-bold">The Threat Intelligence Economy</h2>
        <p className="text-xl text-white/40">Sharing threats earns protection for everyone. Think of it as UPI for cybersecurity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { step: "01", title: "Detect", desc: "Your node identifies a local threat (phishing, malware, anomaly)." },
          { step: "02", title: "Anonymize", desc: "CyberRakshak strips all PII and sensitive data, creating a hash-based signal." },
          { step: "03", title: "Propagate", desc: "The signal is broadcasted across the national rail, earning you Karma points." },
        ].map((step, i) => (
          <div key={i} className="glass rounded-[40px] p-8 border-white/5 relative">
            <div className="text-6xl font-display font-bold text-white/5 absolute top-4 right-8">{step.step}</div>
            <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
            <p className="text-white/40 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-[40px] p-10 border-white/5">
        <h3 className="text-2xl font-bold mb-8">Earning Karma Points</h3>
        <div className="space-y-4">
          {[
            { action: "Share Phishing URL", points: "50-150 pts", frequency: "Per unique URL" },
            { action: "Share Malware Signature", points: "200-500 pts", frequency: "Per unique hash" },
            { action: "Verify Peer Signal", points: "20 pts", frequency: "Per verification" },
            { action: "Report Zero-Day", points: "5,000+ pts", frequency: "Subject to verification" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-6 glass rounded-2xl border-white/5">
              <div>
                <div className="font-bold">{item.action}</div>
                <div className="text-xs text-white/40">{item.frequency}</div>
              </div>
              <div className="text-xl font-display font-bold text-accent">{item.points}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TierBenefits = () => {
  const tiers = [
    { name: "Bronze", points: "0", speed: "Standard", depth: "Basic", access: "Dashboard Only" },
    { name: "Silver", points: "5,000", speed: "Priority", depth: "Detailed", access: "API Access" },
    { name: "Gold", points: "10,000", speed: "Instant", depth: "Full Forensic", access: "Mutation Lab" },
    { name: "Platinum", points: "25,000", speed: "Real-time Rail", depth: "National Intel", access: "CERT-In Direct" },
  ];

  return (
    <div className="space-y-8">
      <div className="glass rounded-[40px] p-10 border-white/5">
        <h3 className="text-2xl font-bold mb-10">Tier Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                <th className="px-6 py-4">Benefit</th>
                {tiers.map(t => <th key={t.name} className="px-6 py-4">{t.name}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-5 font-bold text-white/60">Points Required</td>
                {tiers.map(t => <td key={t.name} className="px-6 py-5 font-display font-bold">{t.points}</td>)}
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-white/60">Alert Speed</td>
                {tiers.map(t => <td key={t.name} className="px-6 py-5">{t.speed}</td>)}
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-white/60">Intel Depth</td>
                {tiers.map(t => <td key={t.name} className="px-6 py-5">{t.depth}</td>)}
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-white/60">Feature Access</td>
                {tiers.map(t => <td key={t.name} className="px-6 py-5">{t.access}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const PrivacyProof = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-10">
      <div className="glass rounded-[40px] p-10 border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full" />
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Lock className="w-6 h-6 text-green-500" /> Privacy Architecture
        </h3>
        <p className="text-white/60 leading-relaxed mb-10">ThreatKarma is built on a zero-knowledge architecture. We never see your raw logs, user data, or infrastructure details. We only process cryptographically signed threat hashes.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-green-500">What is Shared</h4>
            <ul className="space-y-3">
              {['SHA-256 Threat Hashes', 'Anonymized Sector ID', 'Timestamp of Detection', 'Confidence Score'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-500">What is NEVER Shared</h4>
            <ul className="space-y-3">
              {['User PII (Names, Emails)', 'Internal IP Addresses', 'Raw Log Files', 'Business Logic'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <AlertCircle className="w-4 h-4 text-red-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-8 py-4 glass rounded-2xl text-sm font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-white/10 transition-all">
          <Download className="w-5 h-5" /> Download Privacy Whitepaper
        </button>
      </div>
    </div>
  );
};

// --- Main Component ---

const ThreatKarmaPortal = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', name: 'Home', icon: Zap },
    { id: 'leaderboard', name: 'Leaderboard', icon: Trophy },
    { id: 'my-score', name: 'My Score', icon: User },
    { id: 'history', name: 'History', icon: History },
    { id: 'map', name: 'Network Map', icon: Map },
    { id: 'badges', name: 'Badge Wall', icon: Award },
    { id: 'how-it-works', name: 'How it Works', icon: BookOpen },
    { id: 'tier-benefits', name: 'Tier Benefits', icon: Layers },
    { id: 'privacy-proof', name: 'Privacy Proof', icon: Lock },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">ThreatKarma™ Intelligence Rail</h1>
          <p className="text-white/40 mt-1">National-scale collective intelligence economy.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 glass rounded-xl border-accent/20 flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Gold Tier Active</span>
          </div>
          <button className="p-3 glass rounded-xl text-white/40 hover:text-white transition-all">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="flex items-center gap-1 mb-10 overflow-x-auto pb-4 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === tab.id 
                ? "bg-accent text-white shadow-lg shadow-accent/20" 
                : "text-white/40 hover:text-white hover:bg-white/5"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'home' && <KarmaHome setTab={setActiveTab} />}
          {activeTab === 'leaderboard' && <Leaderboard />}
          {activeTab === 'my-score' && <MyScore />}
          {activeTab === 'history' && <ContributionHistory />}
          {activeTab === 'map' && <NetworkMap />}
          {activeTab === 'badges' && <BadgeWall />}
          {activeTab === 'how-it-works' && <HowItWorks />}
          {activeTab === 'tier-benefits' && <TierBenefits />}
          {activeTab === 'privacy-proof' && <PrivacyProof />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ThreatKarmaPortal;
