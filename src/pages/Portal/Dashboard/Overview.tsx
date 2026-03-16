import { motion } from "motion/react";
import { Shield, Zap, AlertTriangle, Activity, ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";

const DashboardOverview = () => {
  const stats = [
    { label: "Threats Blocked", value: "12,842", change: "+12%", trend: "up", icon: <Shield className="w-5 h-5" /> },
    { label: "Rail Propagation", value: "0.38ms", change: "-0.02ms", trend: "down", icon: <Zap className="w-5 h-5" /> },
    { label: "Active Incidents", value: "3", change: "-2", trend: "down", icon: <AlertTriangle className="w-5 h-5" /> },
    { label: "System Health", value: "99.9%", change: "Stable", trend: "neutral", icon: <Activity className="w-5 h-5" /> },
  ];

  return (
    <div className="p-8">
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
            <p className="text-white/40 mt-1">Real-time status of your national defense node.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 glass rounded-xl border-white/5 flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">Live Monitoring</span>
            </div>
            <button className="px-6 py-2 orange-gradient rounded-xl text-xs font-bold shadow-lg shadow-accent/20">
              Generate Report
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-[32px] border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.trend === 'up' ? 'text-green-500' : stat.trend === 'down' ? 'text-accent' : 'text-white/40'}`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : stat.trend === 'down' ? <ArrowDownRight className="w-3 h-3" /> : null}
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass rounded-[40px] p-8 border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Threat Activity</h3>
              <div className="flex gap-2">
                {['24h', '7d', '30d'].map(t => (
                  <button key={t} className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${t === '24h' ? 'bg-accent text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-64 flex items-end gap-2 px-2">
              {[40, 65, 45, 90, 55, 70, 85, 40, 60, 75, 50, 80, 95, 65, 45].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className="flex-1 bg-linear-to-t from-accent/10 to-accent rounded-t-sm relative group"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {h}%
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between mt-4 px-2 text-[10px] font-bold uppercase tracking-widest text-white/20">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:59</span>
            </div>
          </div>

          <div className="glass rounded-[40px] p-8 border-white/5">
            <h3 className="text-xl font-bold mb-8">Recent Alerts</h3>
            <div className="space-y-6">
              {[
                { type: 'Critical', msg: 'Prompt Injection attempt blocked', time: '2m ago', color: 'text-accent' },
                { type: 'Warning', msg: 'Unusual traffic from IN-DEL-02', time: '15m ago', color: 'text-yellow-500' },
                { type: 'Info', msg: 'ThreatKarma sync complete', time: '1h ago', color: 'text-blue-500' },
                { type: 'Critical', msg: 'Deepfake detected in video stream', time: '3h ago', color: 'text-accent' },
              ].map((alert, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className={`w-1 h-10 rounded-full ${alert.color.replace('text', 'bg')} opacity-40 group-hover:opacity-100 transition-opacity`} />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[8px] font-bold uppercase tracking-widest ${alert.color}`}>{alert.type}</span>
                      <span className="text-[8px] text-white/20">•</span>
                      <span className="text-[8px] text-white/20 font-bold uppercase tracking-widest">{alert.time}</span>
                    </div>
                    <div className="text-xs font-medium group-hover:text-accent transition-colors">{alert.msg}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              View All Alerts
            </button>
          </div>
        </div>
      </div>
  );
};

export default DashboardOverview;
