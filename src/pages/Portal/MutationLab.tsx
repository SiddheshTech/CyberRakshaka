import { motion, AnimatePresence } from "motion/react";
import { 
  FlaskConical, Zap, Play, History, BarChart3, 
  Settings, ChevronRight, Search, Filter, 
  AlertCircle, CheckCircle2, Shield, Bug, 
  Code, Copy, RefreshCw, Trash2, Info,
  ArrowRight, Layers, Cpu, Database, Share2
} from "lucide-react";
import { useState } from "react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar, Cell 
} from "recharts";

// --- Mock Data ---

const robustnessData = [
  { name: 'Jan', score: 65 },
  { name: 'Feb', score: 68 },
  { name: 'Mar', score: 72 },
  { name: 'Apr', score: 70 },
  { name: 'May', score: 75 },
  { name: 'Jun', score: 82 },
];

const techniqueData = [
  { name: 'Char Swap', success: 45, color: '#F27D26' },
  { name: 'Synonym', success: 30, color: '#F27D26' },
  { name: 'Noise', success: 60, color: '#F27D26' },
  { name: 'Encoding', success: 25, color: '#F27D26' },
];

// --- Sub-components for Mutation Lab ---

const LabHome = ({ setTab }: { setTab: (t: string) => void }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass rounded-[40px] p-10 border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -mr-20 -mt-20" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-20 h-20 rounded-3xl bg-accent/20 flex items-center justify-center text-accent shadow-2xl shadow-accent/20">
                <FlaskConical className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold">Mutation Lab</h2>
                <p className="text-xl text-white/40 mt-1">Adversarial robustness testing for your detection nodes.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 glass rounded-3xl border border-white/10 bg-black/40">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60">Node Robustness Score</span>
                </div>
                <div className="text-6xl font-display font-bold text-accent mb-2">82.4<span className="text-2xl text-white/20">/100</span></div>
                <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-widest">
                  <Zap className="w-3 h-3" /> +4.2% from last month
                </div>
              </div>

              <div className="p-8 glass rounded-3xl border border-white/10 bg-black/40 flex flex-col justify-center">
                <h4 className="text-sm font-bold mb-4">Ready for Testing?</h4>
                <p className="text-xs text-white/40 leading-relaxed mb-6">Mutate real-world attacks to find blind spots in your detection logic before attackers do.</p>
                <button onClick={() => setTab('builder')} className="w-full py-4 orange-gradient rounded-2xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                  <Play className="w-4 h-4" /> Start New Experiment
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "124", label: "Experiments Run", icon: FlaskConical },
                { title: "18", label: "Bypasses Found", icon: Bug },
                { title: "92%", label: "Detection Rate", icon: Shield },
              ].map((stat, i) => (
                <div key={i} className="p-6 glass rounded-2xl border-white/5 text-center">
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-1">{stat.title}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-[40px] p-8 border-white/5">
          <h3 className="text-xl font-bold mb-8">Robustness Trend</h3>
          <div className="h-64 mb-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={robustnessData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F27D26" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F27D26" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff20" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141414', border: '1px solid #ffffff10', borderRadius: '12px' }}
                  itemStyle={{ color: '#F27D26' }}
                />
                <Area type="monotone" dataKey="score" stroke="#F27D26" fillOpacity={1} fill="url(#colorScore)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <h3 className="text-xl font-bold mb-6">Top Bypass Techniques</h3>
          <div className="space-y-4">
            {techniqueData.map((t, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-white/60">{t.name}</span>
                  <span className="text-accent">{t.success}% Success</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${t.success}%` }}
                    className="h-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperimentBuilder = ({ onMutate }: { onMutate: (data: any) => void }) => {
  const [attack, setAttack] = useState('');
  const [technique, setTechnique] = useState('char_swap');

  const techniques = [
    { id: 'char_swap', name: 'Character Swapping', desc: 'Replaces chars with visually similar ones (o -> 0).', strength: 'Low' },
    { id: 'synonym', name: 'Synonym Injection', desc: 'Replaces keywords with synonyms to evade regex.', strength: 'Medium' },
    { id: 'noise', name: 'Noise Injection', desc: 'Adds random non-functional chars to break signatures.', strength: 'High' },
    { id: 'encoding', name: 'Multi-Encoding', desc: 'Wraps payload in multiple layers of Base64/Hex.', strength: 'Critical' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="glass rounded-[40px] p-10 border-white/5">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Code className="w-6 h-6 text-accent" /> Input Attack Payload
          </h3>
          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Raw Payload (JSON / Text / URL)</label>
              <textarea 
                value={attack}
                onChange={(e) => setAttack(e.target.value)}
                placeholder="Paste the attack you want to mutate..."
                className="w-full h-64 bg-white/5 border border-white/10 rounded-2xl p-6 font-mono text-sm focus:outline-none focus:border-accent/50 transition-all"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Load Sample</button>
                <button className="px-4 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Clear</button>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">{attack.length} characters</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="glass rounded-[40px] p-8 border-white/5">
          <h3 className="text-xl font-bold mb-6">Mutation Technique</h3>
          <div className="space-y-4">
            {techniques.map((t) => (
              <button 
                key={t.id}
                onClick={() => setTechnique(t.id)}
                className={`w-full p-4 rounded-2xl border text-left transition-all ${
                  technique === t.id 
                    ? "bg-accent/10 border-accent shadow-lg shadow-accent/10" 
                    : "glass border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm">{t.name}</span>
                  <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                    t.strength === 'Critical' ? 'bg-red-500/20 text-red-500' :
                    t.strength === 'High' ? 'bg-orange-500/20 text-orange-500' :
                    'bg-blue-500/20 text-blue-500'
                  }`}>
                    {t.strength}
                  </span>
                </div>
                <p className="text-[10px] text-white/40 leading-relaxed">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => onMutate({ attack, technique })}
          disabled={!attack}
          className="w-full py-6 orange-gradient rounded-[32px] text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-2xl shadow-accent/20 disabled:opacity-50"
        >
          <FlaskConical className="w-5 h-5" /> Mutate & Test Node
        </button>
      </div>
    </div>
  );
};

const ResultsView = ({ data, onReset }: { data: any, onReset: () => void }) => {
  const [testing, setTesting] = useState(true);

  useState(() => {
    setTimeout(() => setTesting(false), 3000);
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <button onClick={onReset} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
          <ChevronRight className="w-4 h-4 rotate-180" /> New Experiment
        </button>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 glass rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all">
            <Copy className="w-4 h-4" /> Copy Mutated
          </button>
          <button className="px-6 py-3 glass rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all">
            <History className="w-4 h-4" /> Save to History
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass rounded-[40px] p-10 border-white/5 relative">
          <div className="absolute top-6 right-10 text-[10px] font-bold uppercase tracking-widest text-white/20">Original Attack</div>
          <h3 className="text-xl font-bold mb-8">Baseline</h3>
          <pre className="bg-black/40 p-8 rounded-3xl border border-white/5 font-mono text-sm text-white/40 h-80 overflow-y-auto">
            {data.attack || "No attack provided."}
          </pre>
          <div className="mt-8 p-6 glass rounded-2xl border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-bold">Detected by Node</span>
            </div>
            <div className="text-xl font-display font-bold text-green-500">99.2%</div>
          </div>
        </div>

        <div className="glass rounded-[40px] p-10 border-white/5 relative">
          <div className="absolute top-6 right-10 text-[10px] font-bold uppercase tracking-widest text-accent">Mutated Attack</div>
          <h3 className="text-xl font-bold mb-8">Mutation Result</h3>
          <div className="relative">
            <pre className="bg-black/40 p-8 rounded-3xl border border-accent/20 font-mono text-sm text-accent h-80 overflow-y-auto">
              {testing ? "Mutating payload..." : `${data.attack.replace(/[aeiou]/gi, '0')} (Mutated with ${data.technique})`}
            </pre>
            {testing && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center gap-4">
                <RefreshCw className="w-10 h-10 text-accent animate-spin" />
                <div className="text-xs font-bold uppercase tracking-widest text-white/60">Running Adversarial Tests...</div>
              </div>
            )}
          </div>
          
          <AnimatePresence>
            {!testing && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 glass rounded-2xl border-red-500/20 bg-red-500/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-bold">Bypass Successful</span>
                </div>
                <div className="text-xl font-display font-bold text-red-500">12.4%</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {!testing && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-[40px] p-10 border-white/5"
        >
          <h3 className="text-2xl font-bold mb-10">Experiment Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">Robustness Impact</div>
              <div className="text-4xl font-display font-bold text-red-500">-2.4%</div>
              <p className="text-xs text-white/40 leading-relaxed">This mutation successfully bypassed the node's signature-based detection, lowering overall robustness.</p>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">Recommended Fix</div>
              <div className="p-4 glass rounded-xl border-white/5 text-xs font-mono text-white/60">
                Update regex to include case-insensitive matching and normalization of visually similar characters.
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">Next Steps</div>
              <button className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" /> Apply Patch to Node
              </button>
              <button className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" /> Share with Network
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const LabHistory = () => {
  const history = [
    { id: "EXP-882", attack: "SQL Injection", technique: "Char Swap", result: "Detected", date: "10m ago" },
    { id: "EXP-881", attack: "Phishing URL", technique: "Noise", result: "Bypassed", date: "1h ago" },
    { id: "EXP-880", attack: "Malware DLL", technique: "Encoding", result: "Detected", date: "3h ago" },
    { id: "EXP-879", attack: "XSS Payload", technique: "Synonym", result: "Bypassed", date: "1d ago" },
  ];

  return (
    <div className="glass rounded-[40px] p-10 border-white/5">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-xl font-bold">Experiment History</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input type="text" placeholder="Search experiments..." className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-accent/50 transition-all" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-[10px] font-bold uppercase tracking-widest text-white/20">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Attack Type</th>
              <th className="px-6 py-4">Technique</th>
              <th className="px-6 py-4">Result</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {history.map((h, i) => (
              <tr key={i} className="hover:bg-white/5 transition-all group">
                <td className="px-6 py-5 rounded-l-2xl font-mono text-xs text-accent">{h.id}</td>
                <td className="px-6 py-5 font-bold">{h.attack}</td>
                <td className="px-6 py-5 text-white/60">{h.technique}</td>
                <td className="px-6 py-5">
                  <span className={`px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest ${
                    h.result === 'Detected' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                  }`}>
                    {h.result}
                  </span>
                </td>
                <td className="px-6 py-5 text-white/40 text-xs">{h.date}</td>
                <td className="px-6 py-5 rounded-r-2xl text-right">
                  <button className="p-2 glass rounded-lg text-white/20 hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- Main Component ---

const MutationLabPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [experimentData, setExperimentData] = useState<any>(null);

  const tabs = [
    { id: 'home', name: 'Lab Home', icon: FlaskConical },
    { id: 'builder', name: 'Experiment Builder', icon: Play },
    { id: 'history', name: 'History', icon: History },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const handleMutate = (data: any) => {
    setExperimentData(data);
    setActiveTab('results');
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mutation Lab</h1>
          <p className="text-white/40 mt-1">Test and improve the adversarial robustness of your detection nodes.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl border-white/5">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Lab Engine Online</span>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="flex items-center gap-1 mb-10 overflow-x-auto pb-4 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setExperimentData(null);
            }}
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
          {activeTab === 'home' && <LabHome setTab={setActiveTab} />}
          {activeTab === 'builder' && <ExperimentBuilder onMutate={handleMutate} />}
          {activeTab === 'results' && experimentData && <ResultsView data={experimentData} onReset={() => setActiveTab('builder')} />}
          {activeTab === 'history' && <LabHistory />}
          {activeTab === 'analytics' && (
            <div className="glass rounded-[40px] p-10 border-white/5 h-96 flex items-center justify-center text-white/20">
              Analytics Dashboard Coming Soon
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="glass rounded-[40px] p-10 border-white/5 h-96 flex items-center justify-center text-white/20">
              Lab Settings Coming Soon
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MutationLabPage;
