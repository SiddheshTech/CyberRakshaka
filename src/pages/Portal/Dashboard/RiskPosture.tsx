import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, TrendingUp, TrendingDown, AlertTriangle, 
  ChevronRight, Info, Download, Calendar, Filter,
  Target, Zap, Globe, ShieldAlert, Activity,
  BarChart2, PieChart, Network, Share2, Eye, ShieldCheck,
  ArrowUpRight, ArrowDownRight, Lock, Unlock
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, PieChart as RePieChart, Pie, Legend
} from "recharts";
import * as d3 from "d3";

const RISK_TREND_DATA = [
  { name: 'Mon', score: 42, threats: 12 },
  { name: 'Tue', score: 45, threats: 15 },
  { name: 'Wed', score: 38, threats: 8 },
  { name: 'Thu', score: 52, threats: 22 },
  { name: 'Fri', score: 48, threats: 18 },
  { name: 'Sat', score: 35, threats: 5 },
  { name: 'Sun', score: 32, threats: 4 },
];

const THREAT_DISTRIBUTION = [
  { name: 'Phishing', value: 45, color: '#F97316' },
  { name: 'Injection', value: 25, color: '#8B5CF6' },
  { name: 'Malicious URL', value: 20, color: '#3B82F6' },
  { name: 'Behavioral', value: 10, color: '#10B981' },
];

const ATTACK_DNA_NODES = [
  { id: 'root', label: 'Your Org', group: 1, size: 20 },
  { id: 'p1', label: 'Phishing Campaign #A7', group: 2, size: 15 },
  { id: 'p2', label: 'Credential Harvest', group: 2, size: 10 },
  { id: 'i1', label: 'Injection Attempt', group: 3, size: 12 },
  { id: 'i2', label: 'RAG Poisoning', group: 3, size: 8 },
  { id: 'u1', label: 'Suspicious URL', group: 4, size: 10 },
  { id: 'u2', label: 'Homoglyph Domain', group: 4, size: 8 },
  { id: 'e1', label: 'External Node #1', group: 5, size: 6 },
  { id: 'e2', label: 'External Node #2', group: 5, size: 6 },
];

const ATTACK_DNA_LINKS = [
  { source: 'root', target: 'p1' },
  { source: 'p1', target: 'p2' },
  { source: 'root', target: 'i1' },
  { source: 'i1', target: 'i2' },
  { source: 'root', target: 'u1' },
  { source: 'u1', target: 'u2' },
  { source: 'p2', target: 'e1' },
  { source: 'i2', target: 'e2' },
];

export default function RiskPosture() {
  const [timeRange, setTimeRange] = useState('7D');
  const [activeTab, setActiveTab] = useState<'Overview' | 'AttackDNA' | 'Vulnerabilities'>('Overview');
  const d3Container = useRef<SVGSVGElement>(null);

  // D3 Force Graph
  useEffect(() => {
    if (activeTab === 'AttackDNA' && d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove();

      const width = d3Container.current.clientWidth;
      const height = d3Container.current.clientHeight;

      const simulation = d3.forceSimulation(ATTACK_DNA_NODES as any)
        .force("link", d3.forceLink(ATTACK_DNA_LINKS).id((d: any) => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2));

      const link = svg.append("g")
        .attr("stroke", "rgba(255,255,255,0.1)")
        .attr("stroke-width", 1.5)
        .selectAll("line")
        .data(ATTACK_DNA_LINKS)
        .join("line");

      const node = svg.append("g")
        .selectAll("g")
        .data(ATTACK_DNA_NODES)
        .join("g")
        .call(d3.drag<any, any>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
        );

      node.append("circle")
        .attr("r", (d: any) => d.size)
        .attr("fill", (d: any) => {
          if (d.id === 'root') return '#F97316';
          return `rgba(255,255,255,${0.1 + d.group * 0.15})`;
        })
        .attr("stroke", (d: any) => d.id === 'root' ? '#F97316' : 'rgba(255,255,255,0.2)')
        .attr("stroke-width", 2);

      node.append("text")
        .text((d: any) => d.label)
        .attr("x", 0)
        .attr("y", (d: any) => d.size + 15)
        .attr("text-anchor", "middle")
        .attr("fill", "rgba(255,255,255,0.6)")
        .attr("font-size", "10px")
        .attr("font-weight", "bold")
        .attr("text-transform", "uppercase")
        .attr("letter-spacing", "0.1em");

      simulation.on("tick", () => {
        link
          .attr("x1", (d: any) => d.source.x)
          .attr("y1", (d: any) => d.source.y)
          .attr("x2", (d: any) => d.target.x)
          .attr("y2", (d: any) => d.target.y);

        node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
      });

      return () => simulation.stop();
    }
  }, [activeTab]);

  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-screen bg-black text-white font-sans">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tight">Risk Posture</h1>
          <p className="text-white/40 mt-1 font-light">Comprehensive analysis of your organization's threat surface.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex glass rounded-xl p-1 border-white/5">
            {['24H', '7D', '30D', '90D'].map(range => (
              <button 
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${timeRange === range ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'}`}
              >
                {range}
              </button>
            ))}
          </div>
          <button className="p-3 glass rounded-xl text-white/40 hover:text-white transition-all">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="glass rounded-[32px] p-8 border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-red-400 text-xs font-bold">
                <TrendingUp className="w-3 h-3" /> +12%
              </div>
            </div>
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Org Risk Score</div>
            <div className="text-4xl font-display font-bold">42.8</div>
            <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '42.8%' }}
                className="h-full bg-accent"
              />
            </div>
          </div>
        </div>

        <div className="glass rounded-[32px] p-8 border-white/5 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Target className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-green-400 text-xs font-bold">
                <TrendingDown className="w-3 h-3" /> -5%
              </div>
            </div>
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Active Threats</div>
            <div className="text-4xl font-display font-bold">18</div>
            <div className="mt-4 flex gap-1">
              {[1, 1, 1, 1, 0, 0, 0, 0, 0, 0].map((v, i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full ${v ? 'bg-blue-500' : 'bg-white/5'}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-[32px] p-8 border-white/5 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-white/20 text-xs font-bold">Stable</div>
            </div>
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Defense Velocity</div>
            <div className="text-4xl font-display font-bold">0.8s</div>
            <div className="mt-4 text-[10px] text-white/40 font-medium">Avg. response time to injection</div>
          </div>
        </div>

        <div className="glass rounded-[32px] p-8 border-white/5 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Globe className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-accent text-xs font-bold">
                <Activity className="w-3 h-3" /> Live
              </div>
            </div>
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Network Karma</div>
            <div className="text-4xl font-display font-bold">982</div>
            <div className="mt-4 text-[10px] text-white/40 font-medium">Global nodes sharing intelligence</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex border-b border-white/5">
        {['Overview', 'AttackDNA', 'Vulnerabilities'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === tab ? 'text-accent' : 'text-white/40 hover:text-white'}`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div layoutId="active-risk-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'Overview' && (
          <motion.div 
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-12 gap-8"
          >
            {/* Risk Trend Chart */}
            <div className="col-span-8 glass rounded-[40px] border-white/5 p-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-xl font-bold">Risk Trend Analysis</h3>
                  <p className="text-white/40 text-xs mt-1">Correlation between risk score and detected threats.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Risk Score</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Threat Count</span>
                  </div>
                </div>
              </div>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={RISK_TREND_DATA}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="rgba(255,255,255,0.2)" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                      dy={10}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.2)" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                      dx={-10}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }}
                      itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="score" stroke="#F97316" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                    <Area type="monotone" dataKey="threats" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorThreats)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Threat Distribution */}
            <div className="col-span-4 glass rounded-[40px] border-white/5 p-10 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Threat Vector Mix</h3>
              <p className="text-white/40 text-xs mb-10">Distribution of attack types across all nodes.</p>
              
              <div className="flex-1 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                  <div className="text-4xl font-display font-bold">100%</div>
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Coverage</div>
                </div>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={THREAT_DISTRIBUTION}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={8}
                        dataKey="value"
                        stroke="none"
                      >
                        {THREAT_DISTRIBUTION.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }}
                      />
                    </RePieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                {THREAT_DISTRIBUTION.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-xs font-medium text-white/60">{item.name}</span>
                    </div>
                    <span className="text-xs font-bold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Insights */}
            <div className="col-span-12 grid grid-cols-3 gap-8">
              <div className="glass rounded-[32px] p-8 border-white/5 flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Critical Vulnerability</h4>
                  <p className="text-xs text-white/40 leading-relaxed mb-4">
                    Prompt injection pattern detected in HR chatbot. Recommended action: Update system prompt with sandwich defense.
                  </p>
                  <button className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    View Details <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="glass rounded-[32px] p-8 border-white/5 flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Defense Optimized</h4>
                  <p className="text-xs text-white/40 leading-relaxed mb-4">
                    New firewall rules deployed automatically to 4 edge nodes. Blocked 124 malicious requests in the last hour.
                  </p>
                  <button className="text-[10px] font-bold text-blue-500 uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    View Logs <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="glass rounded-[32px] p-8 border-white/5 flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Network Intelligence</h4>
                  <p className="text-xs text-white/40 leading-relaxed mb-4">
                    ThreatKarma network identified a new phishing campaign targeting the finance sector. Signatures updated.
                  </p>
                  <button className="text-[10px] font-bold text-green-500 uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    View Network <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'AttackDNA' && (
          <motion.div 
            key="attackdna"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="h-[700px] glass rounded-[40px] border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-10 left-10 z-10">
              <h3 className="text-2xl font-bold mb-2">AttackDNA Full Graph</h3>
              <p className="text-white/40 text-xs max-w-md">
                Force-directed visualization of threat actors, campaigns, and their relationships to your organization's assets.
              </p>
            </div>

            <div className="absolute top-10 right-10 z-10 flex flex-col gap-4">
              <div className="glass p-4 rounded-2xl border-white/5 space-y-3">
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-2">Legend</div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-[10px] text-white/60 uppercase">Your Org</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <span className="text-[10px] text-white/60 uppercase">Campaign</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <span className="text-[10px] text-white/60 uppercase">External Node</span>
                </div>
              </div>
              <div className="glass p-4 rounded-2xl border-white/5">
                <button className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest">
                  <Share2 className="w-4 h-4" /> Export Graph
                </button>
              </div>
            </div>

            <svg ref={d3Container} className="w-full h-full" />

            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end pointer-events-none">
              <div className="glass p-6 rounded-3xl border-white/5 max-w-sm pointer-events-auto">
                <h4 className="font-bold mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-accent" /> Graph Insights</h4>
                <p className="text-[10px] text-white/40 leading-relaxed">
                  The central node (Your Org) is currently connected to 3 distinct threat clusters. 
                  The Phishing cluster (Orange) shows the highest density of activity in the last 24 hours.
                </p>
              </div>
              <div className="flex gap-4 pointer-events-auto">
                <button className="p-4 glass rounded-2xl text-white/40 hover:text-white transition-all"><ArrowUpRight className="w-6 h-6" /></button>
                <button className="p-4 glass rounded-2xl text-white/40 hover:text-white transition-all"><ArrowDownRight className="w-6 h-6" /></button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'Vulnerabilities' && (
          <motion.div 
            key="vulnerabilities"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {[
              { id: 'V-102', title: 'Prompt Injection: Direct Override', severity: 'CRITICAL', asset: 'Customer Support Bot', status: 'OPEN', date: '2026-03-15' },
              { id: 'V-105', title: 'Weak API Authentication', severity: 'HIGH', asset: 'Internal HR Portal', status: 'IN PROGRESS', date: '2026-03-14' },
              { id: 'V-108', title: 'Unsanitized RAG Input', severity: 'MEDIUM', asset: 'Legal Document Analyzer', status: 'OPEN', date: '2026-03-12' },
              { id: 'V-110', title: 'Exposed Metadata in LLM Response', severity: 'LOW', asset: 'Public Knowledge Base', status: 'RESOLVED', date: '2026-03-10' },
            ].map((v, i) => (
              <div key={i} className="glass rounded-[32px] border-white/5 p-8 flex items-center justify-between group hover:bg-white/[0.02] transition-all">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex flex-col items-center justify-center">
                    <div className="text-[10px] font-bold text-white/20 uppercase">{v.id.split('-')[0]}</div>
                    <div className="text-xl font-bold">{v.id.split('-')[1]}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-lg font-bold">{v.title}</h4>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest ${
                        v.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-500' :
                        v.severity === 'HIGH' ? 'bg-orange-500/20 text-orange-500' :
                        v.severity === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-500' :
                        'bg-blue-500/20 text-blue-500'
                      }`}>
                        {v.severity}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span className="flex items-center gap-1.5"><Target className="w-3 h-3" /> {v.asset}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Detected: {v.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className={`text-[10px] font-bold uppercase tracking-widest ${v.status === 'RESOLVED' ? 'text-green-400' : 'text-accent'}`}>{v.status}</div>
                    <div className="text-[8px] text-white/20 mt-1">SLA: 24h remaining</div>
                  </div>
                  <button className="p-4 glass rounded-2xl text-white/20 group-hover:text-white transition-all">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="p-10 text-center">
              <button className="px-10 py-4 glass rounded-2xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">
                Load More Vulnerabilities
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
