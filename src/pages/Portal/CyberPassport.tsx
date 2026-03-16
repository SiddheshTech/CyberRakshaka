import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, Lock, FileText, Share2, Download, Zap, 
  ChevronRight, Key, Search, Filter, CheckCircle2, 
  AlertCircle, Info, ExternalLink, Eye, History, 
  Shield, Database, Fingerprint, Code, Trash2, Activity, RefreshCw
} from "lucide-react";
import { useState } from "react";

// --- Sub-components for CyberPassport ---

const PassportHome = ({ setTab }: { setTab: (t: string) => void }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass rounded-[40px] p-10 border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -mr-20 -mt-20" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-20 h-20 rounded-3xl bg-accent/20 flex items-center justify-center text-accent shadow-2xl shadow-accent/20">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold">CyberPassport™</h2>
                <p className="text-xl text-white/40 mt-1">Privacy-preserving, tamper-proof incident evidence.</p>
              </div>
            </div>

            <div className="p-8 glass rounded-3xl border border-white/10 bg-black/40 mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Fingerprint className="w-5 h-5 text-accent" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60">Latest Issued Token</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">Signature Valid</span>
                </div>
              </div>
              <div className="font-mono text-lg break-all text-accent bg-accent/5 p-6 rounded-2xl border border-accent/20 mb-6">
                550e8400-e29b-41d4-a716-446655440000
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Threat Type</div>
                  <div className="font-bold">Phishing</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Severity</div>
                  <div className="font-bold text-orange-500">High</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Issued At</div>
                  <div className="font-bold">2m ago</div>
                </div>
                <div className="text-right">
                  <button onClick={() => setTab('gallery')} className="text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-1 ml-auto hover:gap-2 transition-all">
                    View Details <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Tamper Proof", desc: "Signed with RSA-2048 and hashed with SHA-256.", icon: Lock },
                { title: "Privacy First", desc: "Only shares hashes, never raw PII or logs.", icon: Shield },
                { title: "Network Ready", desc: "Instantly verifiable by any national agency.", icon: Zap },
              ].map((feature, i) => (
                <div key={i} className="p-6 glass rounded-2xl border-white/5">
                  <feature.icon className="w-6 h-6 text-accent mb-4" />
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass rounded-[40px] p-8 border-white/5">
            <h3 className="text-xl font-bold mb-6">Passport Metrics</h3>
            <div className="space-y-6">
              <div className="p-6 glass rounded-2xl border-white/5 text-center">
                <div className="text-4xl font-display font-bold text-accent">1,240</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Passports Issued</div>
              </div>
              <div className="p-6 glass rounded-2xl border-white/5 text-center">
                <div className="text-4xl font-display font-bold text-green-500">482</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Verified by Partners</div>
              </div>
              <div className="p-6 glass rounded-2xl border-white/5 text-center">
                <div className="text-4xl font-display font-bold text-white">0%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Data Leaks Reported</div>
              </div>
            </div>
          </div>
          
          <button onClick={() => setTab('verifier')} className="w-full py-4 orange-gradient rounded-2xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl shadow-accent/20">
            <ShieldCheck className="w-4 h-4" /> Verify External Passport
          </button>
        </div>
      </div>
    </div>
  );
};

const PassportGallery = ({ onSelect }: { onSelect: (id: string) => void }) => {
  const passports = [
    { id: "550e8400-e29b-41d4-a716-446655440000", type: "Phishing", severity: "High", date: "2m ago", status: "Verified" },
    { id: "721f9211-f12a-42d4-b116-556655440111", type: "Malware", severity: "Critical", date: "1h ago", status: "Verified" },
    { id: "832g0322-g23b-43d4-c216-666655440222", type: "DDoS", severity: "Medium", date: "3h ago", status: "Verified" },
    { id: "943h1433-h34c-44d4-d316-776655440333", type: "SQLi", severity: "High", date: "1d ago", status: "Verified" },
    { id: "054i2544-i45d-45d4-e416-886655440444", type: "Botnet", severity: "Critical", date: "2d ago", status: "Verified" },
    { id: "165j3655-j56e-46d4-f516-996655440555", type: "Ransomware", severity: "Critical", date: "3d ago", status: "Verified" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="Search by Passport ID..." 
              className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs w-80 focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
          <button className="p-2 glass rounded-xl text-white/40 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Grid</button>
          <button className="px-4 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">List</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {passports.map((p, i) => (
          <div key={i} className="glass rounded-[32px] p-6 border-white/5 hover:border-accent/30 transition-all group cursor-pointer" onClick={() => onSelect(p.id)}>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className={`px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest ${
                p.severity === 'Critical' ? 'bg-red-500/20 text-red-500' :
                p.severity === 'High' ? 'bg-orange-500/20 text-orange-500' :
                'bg-blue-500/20 text-blue-500'
              }`}>
                {p.severity}
              </span>
            </div>
            <div className="font-mono text-[10px] text-white/20 mb-2 truncate">{p.id}</div>
            <h4 className="text-lg font-bold mb-1">{p.type}</h4>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-white/40">{p.date}</span>
              <div className="flex items-center gap-1 text-green-500 text-[8px] font-bold uppercase tracking-widest">
                <CheckCircle2 className="w-3 h-3" /> {p.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PassportDetail = ({ id, onBack }: { id: string, onBack: () => void }) => {
  return (
    <div className="space-y-8">
      <button onClick={onBack} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
        <ChevronRight className="w-4 h-4 rotate-180" /> Back to Gallery
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass rounded-[40px] p-10 border-white/5">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Passport Details</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">Cryptographically Verified</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-3 glass rounded-xl text-white/40 hover:text-accent transition-colors"><Share2 className="w-4 h-4" /></button>
                <button className="p-3 glass rounded-xl text-white/40 hover:text-accent transition-colors"><Download className="w-4 h-4" /></button>
                <button className="p-3 glass rounded-xl text-white/40 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">Passport ID</div>
                  <div className="font-mono text-sm text-accent break-all bg-accent/5 p-4 rounded-xl border border-accent/20">{id}</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Threat Type</div>
                    <div className="font-bold text-lg">Phishing</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Severity</div>
                    <div className="font-bold text-lg text-orange-500">High</div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Issuing Organization</div>
                  <div className="font-bold">ORG-IND-MUM-42 (Anonymized)</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Evidence Commitment (SHA-256)</div>
                  <div className="font-mono text-[10px] text-white/60 break-all bg-white/5 p-4 rounded-xl">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">MITRE ATT&CK Tactics</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Initial Access', 'Credential Access', 'Phishing'].map(t => (
                      <span key={t} className="px-3 py-1 glass rounded-full text-[10px] font-bold text-white/60">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Confidence Score</div>
                    <div className="font-display font-bold text-2xl text-accent">98.4%</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Expiry</div>
                    <div className="font-bold text-white/60">Never</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
              <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
                <Code className="w-4 h-4 text-accent" /> Raw JSON-LD Token
              </h4>
              <pre className="bg-black/40 p-6 rounded-2xl border border-white/5 font-mono text-[10px] text-white/40 overflow-x-auto">
{`{
  "@context": "https://cyberrakshak.in/contexts/passport",
  "type": "CyberPassport",
  "id": "${id}",
  "issuer": "did:cyberrakshak:org:42",
  "issuanceDate": "2026-03-16T12:42:55Z",
  "credentialSubject": {
    "threatType": "Phishing",
    "severity": "High",
    "evidenceHash": "sha256:e3b0c442...",
    "mitreTactics": ["T1566"]
  },
  "proof": {
    "type": "RsaSignature2018",
    "created": "2026-03-16T12:42:56Z",
    "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsia..."
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass rounded-[40px] p-8 border-white/5">
            <h3 className="text-xl font-bold mb-6">Related Actions</h3>
            <div className="space-y-4">
              <button className="w-full p-4 glass rounded-2xl border-white/5 flex items-center justify-between hover:border-accent/30 transition-all group">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold">View Incident</span>
                </div>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white" />
              </button>
              <button className="w-full p-4 glass rounded-2xl border-white/5 flex items-center justify-between hover:border-accent/30 transition-all group">
                <div className="flex items-center gap-3">
                  <Fingerprint className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold">AttackDNA Graph</span>
                </div>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white" />
              </button>
              <button className="w-full p-4 glass rounded-2xl border-white/5 flex items-center justify-between hover:border-accent/30 transition-all group">
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold">Verify Externally</span>
                </div>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PassportVerifier = () => {
  const [id, setId] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [result, setResult] = useState<null | 'valid' | 'invalid'>(null);

  const handleVerify = () => {
    if (!id) return;
    setVerifying(true);
    setResult(null);
    setTimeout(() => {
      setVerifying(false);
      setResult('valid');
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12 py-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-display font-bold">Passport Verifier</h2>
        <p className="text-xl text-white/40">The trust layer of the national cyber defense system.</p>
      </div>

      <div className="glass rounded-[40px] p-10 border-white/5">
        <div className="space-y-6">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Passport ID or Raw JSON</label>
            <textarea 
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Paste UUID or JSON-LD token here..."
              className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-6 font-mono text-sm focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
          <button 
            onClick={handleVerify}
            disabled={verifying || !id}
            className="w-full py-4 orange-gradient rounded-2xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {verifying ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
            {verifying ? 'Verifying Signature...' : 'Verify Authenticity'}
          </button>
        </div>

        <AnimatePresence>
          {result === 'valid' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 p-8 glass rounded-3xl border-green-500/20 bg-green-500/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-green-500">Signature Valid</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-bold">This passport has not been tampered with</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Issuer</div>
                  <div className="font-bold">ORG-IND-MUM-42</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Issue Date</div>
                  <div className="font-bold">2026-03-16 12:42 UTC</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const InsidePassport = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-display font-bold">What's Inside a Passport?</h2>
        <p className="text-xl text-white/40">Anatomy of a tamper-proof evidence token.</p>
      </div>

      <div className="relative glass rounded-[40px] p-10 border-white/5 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { title: "Passport ID", desc: "A unique UUIDv4 that identifies this specific evidence token across the entire network." },
              { title: "Evidence Commitment", desc: "A SHA-256 hash of the raw logs. Proves you have the evidence without sharing it." },
              { title: "Digital Signature", desc: "An RSA-2048 signature that proves the token was issued by a verified CyberRakshak node." },
              { title: "MITRE Mapping", desc: "Standardized classification of the threat using the global MITRE ATT&CK framework." },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <h4 className="text-lg font-bold text-accent">{item.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-black/40 rounded-3xl border border-white/10 p-8 font-mono text-[10px] text-white/20 relative">
            <div className="absolute top-4 right-4 text-accent font-bold">ANNOTATED</div>
            <div className="space-y-2">
              <div className="text-accent">"id": "550e8400..." <span className="text-white/10 ml-2">// Unique Identifier</span></div>
              <div>"issuer": "did:cr:org:42" <span className="text-white/10 ml-2">// Cryptographic Identity</span></div>
              <div className="text-accent">"evidenceHash": "sha256:..." <span className="text-white/10 ml-2">// The Commitment</span></div>
              <div>"tactics": ["T1566"] <span className="text-white/10 ml-2">// MITRE Mapping</span></div>
              <div className="text-accent">"signature": "eyJhbGci..." <span className="text-white/10 ml-2">// The Proof</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyArchitecture = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-10">
      <div className="glass rounded-[40px] p-10 border-white/5">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Database className="w-6 h-6 text-accent" /> Data Flow Architecture
        </h3>
        <div className="relative h-64 glass rounded-3xl border-white/5 flex items-center justify-center mb-10 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-around px-10">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">Your Org</div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-white/20">Raw Logs</div>
            </div>
            <motion.div 
              animate={{ x: [0, 100], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 rounded-full bg-accent blur-sm"
            />
            <div className="text-center space-y-2">
              <div className="w-20 h-20 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">CyberPassport</div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-accent">Hash + Sign</div>
            </div>
            <motion.div 
              animate={{ x: [0, 100], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="w-4 h-4 rounded-full bg-white/20 blur-sm"
            />
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">Network</div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-white/20">Verifiable Proof</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 glass rounded-2xl border-white/5">
            <h4 className="font-bold mb-4">Compliance Alignment</h4>
            <ul className="space-y-3 text-xs text-white/40">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-500" /> GDPR Art. 32 (Security)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-500" /> IT Act 2000 Section 43A</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-500" /> CERT-In Incident Reporting Guidelines</li>
            </ul>
          </div>
          <div className="p-6 glass rounded-2xl border-white/5">
            <h4 className="font-bold mb-4">Security Audits</h4>
            <p className="text-xs text-white/40 leading-relaxed mb-4">Our architecture is audited by top national security firms to ensure zero data leakage.</p>
            <button className="text-accent text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
              Request Audit Report <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuditLog = () => {
  const logs = [
    { action: "Passport Created", id: "550e8400...", user: "Dr. Arjun Sharma", date: "2m ago", status: "Success" },
    { action: "Passport Verified", id: "721f9211...", user: "NPCI Node", date: "15m ago", status: "Success" },
    { action: "Passport Shared", id: "832g0322...", user: "Dr. Arjun Sharma", date: "1h ago", status: "Success" },
    { action: "Passport Revoked", id: "943h1433...", user: "Admin", date: "3h ago", status: "Success" },
  ];

  return (
    <div className="glass rounded-[40px] p-10 border-white/5">
      <h3 className="text-xl font-bold mb-8">Passport Audit Trail</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-[10px] font-bold uppercase tracking-widest text-white/20">
              <th className="px-6 py-4">Action</th>
              <th className="px-6 py-4">Passport ID</th>
              <th className="px-6 py-4">User / Node</th>
              <th className="px-6 py-4">Timestamp</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr key={i} className="hover:bg-white/5 transition-all group">
                <td className="px-6 py-5 rounded-l-2xl font-bold">{log.action}</td>
                <td className="px-6 py-5 font-mono text-[10px] text-white/20">{log.id}</td>
                <td className="px-6 py-5 text-white/60">{log.user}</td>
                <td className="px-6 py-5 text-white/40 text-xs">{log.date}</td>
                <td className="px-6 py-5 rounded-r-2xl">
                  <span className={`px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest ${
                    log.status === 'Success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                  }`}>
                    {log.status}
                  </span>
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

const CyberPassportPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const tabs = [
    { id: 'home', name: 'Home', icon: ShieldCheck },
    { id: 'gallery', name: 'Gallery', icon: FileText },
    { id: 'verifier', name: 'Verifier', icon: ShieldCheck },
    { id: 'inside', name: 'Inside', icon: Eye },
    { id: 'architecture', name: 'Architecture', icon: Database },
    { id: 'audit', name: 'Audit Log', icon: History },
  ];

  const handleSelectPassport = (id: string) => {
    setSelectedId(id);
    setActiveTab('detail');
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CyberPassport™ Evidence Tokens</h1>
          <p className="text-white/40 mt-1">Cryptographically signed, tamper-proof incident evidence.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 glass rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all">
            <Download className="w-4 h-4" /> Export All
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="flex items-center gap-1 mb-10 overflow-x-auto pb-4 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setSelectedId(null);
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
          key={activeTab + (selectedId || '')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'home' && <PassportHome setTab={setActiveTab} />}
          {activeTab === 'gallery' && <PassportGallery onSelect={handleSelectPassport} />}
          {activeTab === 'detail' && selectedId && <PassportDetail id={selectedId} onBack={() => setActiveTab('gallery')} />}
          {activeTab === 'verifier' && <PassportVerifier />}
          {activeTab === 'inside' && <InsidePassport />}
          {activeTab === 'architecture' && <PrivacyArchitecture />}
          {activeTab === 'audit' && <AuditLog />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CyberPassportPage;
