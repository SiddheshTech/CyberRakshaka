import { motion } from "motion/react";
import { 
  Shield, CheckCircle2, AlertTriangle, ArrowLeft, 
  Download, Share2, Search, Filter, ChevronRight,
  Lock, FileCheck, Globe, Activity
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ComplianceReport() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <button 
            onClick={() => navigate('/portal/reports')}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to Reports</span>
          </button>
          <h1 className="text-3xl font-bold tracking-tight">Compliance Audit Report</h1>
          <p className="text-white/40 mt-1">ISO 27001 / CERT-In / GDPR regulatory compliance status.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 orange-gradient rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-accent/20 transition-all flex items-center gap-2">
            <FileCheck className="w-4 h-4" /> Generate Official Certificate
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Overall Compliance', value: '98.4%', icon: Shield, color: 'text-accent' },
          { label: 'Controls Passed', value: '112/114', icon: CheckCircle2, color: 'text-green-500' },
          { label: 'Open Findings', value: '2', icon: AlertTriangle, color: 'text-yellow-500' },
          { label: 'Last Audit', value: '2d ago', icon: Activity, color: 'text-blue-500' },
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

      <div className="space-y-8">
        <div className="glass rounded-[40px] border-white/5 p-10 space-y-8">
          <h3 className="text-xl font-bold tracking-tight">Regulatory Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'ISO 27001', status: 'Compliant', score: 100 },
              { name: 'CERT-In Guidelines', status: 'Compliant', score: 98 },
              { name: 'GDPR / DPDP', status: 'Minor Gap', score: 92 },
            ].map(framework => (
              <div key={framework.name} className="p-6 glass rounded-3xl border-white/5 space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">{framework.name}</h4>
                  <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    framework.status === 'Compliant' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {framework.status}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold">{framework.score}%</span>
                  <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: `${framework.score}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-[40px] border-white/5 p-10 space-y-8">
          <h3 className="text-xl font-bold tracking-tight">Open Compliance Findings</h3>
          <div className="space-y-4">
            {[
              { id: 'FIN-001', control: 'A.12.6.1', name: 'Technical Vulnerability Management', desc: 'Two legacy nodes in Bangalore cluster are running outdated firmware versions.', severity: 'MEDIUM' },
              { id: 'FIN-002', control: 'A.9.2.2', name: 'User Access Provisioning', desc: 'MFA not enforced for 3 administrative accounts in the Delhi node.', severity: 'HIGH' },
            ].map((finding, i) => (
              <div key={finding.id} className="p-6 glass rounded-3xl border-white/5 flex items-center justify-between group">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    finding.severity === 'HIGH' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{finding.control}</span>
                      <h4 className="font-bold text-lg">{finding.name}</h4>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">{finding.desc}</p>
                  </div>
                </div>
                <button className="px-6 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                  Remediate
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
