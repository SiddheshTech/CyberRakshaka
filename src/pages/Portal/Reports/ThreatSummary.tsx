import { motion } from "motion/react";
import { 
  FileText, ArrowLeft, Download, Share2, Printer, 
  TrendingUp, TrendingDown, AlertTriangle, Shield,
  Activity, Globe, Zap, Target, Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell 
} from "recharts";

const MOCK_DATA = [
  { name: 'Mon', threats: 400 },
  { name: 'Tue', threats: 300 },
  { name: 'Wed', threats: 600 },
  { name: 'Thu', threats: 800 },
  { name: 'Fri', threats: 500 },
  { name: 'Sat', threats: 200 },
  { name: 'Sun', threats: 100 },
];

const SECTOR_DATA = [
  { name: 'Banking', value: 45 },
  { name: 'Gov', value: 25 },
  { name: 'Energy', value: 20 },
  { name: 'Retail', value: 10 },
];

const COLORS = ['#FF6321', '#3b82f6', '#10b981', '#f59e0b'];

export default function ThreatSummaryReport() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-[1200px] mx-auto bg-white text-black min-h-screen">
      {/* Report Header (Print Styles) */}
      <div className="flex items-center justify-between mb-12 no-print">
        <button 
          onClick={() => navigate('/portal/reports')}
          className="flex items-center gap-2 text-black/40 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Back to Reports</span>
        </button>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-black/10 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-black/5 transition-all flex items-center gap-2">
            <Printer className="w-4 h-4" /> Print
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-black/90 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>

      <div className="border-b-4 border-black pb-8 mb-12 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
              <Zap className="w-8 h-8" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">CyberRaksha™ Intelligence</span>
          </div>
          <h1 className="text-6xl font-black tracking-tighter uppercase leading-none">Weekly Threat<br />Summary Report</h1>
          <p className="text-sm font-medium text-black/40 mt-4 uppercase tracking-[0.2em]">Period: Mar 09 - Mar 15, 2026 • Ref: CR-INTEL-2026-11</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Classification</div>
          <div className="px-4 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-widest">Top Secret / Restricted</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-12 mb-16">
        <div className="col-span-2 space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2">01. Executive Summary</h2>
            <p className="text-lg leading-relaxed text-black/70">
              During the reporting period, CyberRaksha identified a significant surge in coordinated financial infrastructure attacks across the Mumbai and Delhi nodes. The primary vector remains <strong>Operation SilverFish</strong>, attributed to APT38 (Lazarus Group). Overall threat volume increased by <span className="text-red-600 font-bold">14.2%</span> compared to the previous week, with a notable shift towards polymorphic LLM injection techniques.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2">02. Threat Volume Trend</h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MOCK_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                  <Tooltip cursor={{ fill: '#f5f5f5' }} />
                  <Bar dataKey="threats" fill="#000" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-xl font-black uppercase tracking-tight border-b-2 border-black pb-2">Key Metrics</h2>
            <div className="space-y-4">
              {[
                { label: 'Total Incidents', value: '1,284', change: '+14%', up: true },
                { label: 'Critical Alerts', value: '42', change: '-5%', up: false },
                { label: 'Avg Response', value: '1.2m', change: '-10%', up: false },
                { label: 'Detections', value: '98.4%', change: '+0.2%', up: true },
              ].map(m => (
                <div key={m.label} className="flex justify-between items-center py-3 border-b border-black/5">
                  <span className="text-xs font-bold uppercase tracking-widest text-black/40">{m.label}</span>
                  <div className="text-right">
                    <div className="text-lg font-black">{m.value}</div>
                    <div className={`text-[10px] font-bold ${m.up ? 'text-red-600' : 'text-green-600'}`}>
                      {m.up ? <TrendingUp className="w-3 h-3 inline mr-1" /> : <TrendingDown className="w-3 h-3 inline mr-1" />}
                      {m.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-black uppercase tracking-tight border-b-2 border-black pb-2">Sector Impact</h2>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={SECTOR_DATA}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {SECTOR_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {SECTOR_DATA.map((s, i) => (
                <div key={s.name} className="flex items-center gap-2">
                  <div className="w-2 h-2" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">{s.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="space-y-8 mb-16">
        <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2">03. Top Active Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'Operation SilverFish', actor: 'APT38', severity: 'CRITICAL', desc: 'Financial infrastructure targeting via SWIFT message interceptors.' },
            { name: 'Deepfake Phish v4', actor: 'Unknown', severity: 'HIGH', desc: 'AI-generated voice cloning for corporate executive impersonation.' },
          ].map(camp => (
            <div key={camp.name} className="p-8 border-2 border-black space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-black uppercase tracking-tighter">{camp.name}</h3>
                <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">{camp.severity}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-black/40 uppercase tracking-widest">
                <Users className="w-4 h-4" /> {camp.actor}
              </div>
              <p className="text-sm text-black/60 leading-relaxed">{camp.desc}</p>
              <button className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-red-600 hover:border-red-600 transition-all">View Full Campaign DNA</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t-2 border-black pt-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-black/40">
        <div>© 2026 CyberRaksha Intelligence Systems</div>
        <div>Generated by CyberRaksha AI Core • 16 Mar 2026, 12:15 UTC</div>
        <div>Page 01 of 12</div>
      </footer>
    </div>
  );
}
