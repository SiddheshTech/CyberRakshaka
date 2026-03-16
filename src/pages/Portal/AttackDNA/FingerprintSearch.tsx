import { motion, AnimatePresence } from "motion/react";
import { 
  Fingerprint, Search, Upload, Shield, AlertTriangle, 
  Dna, Activity, Globe, Link2, ChevronRight, Info
} from "lucide-react";
import { useState } from "react";

export default function FingerprintSearch() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSearch = () => {
    if (!query) return;
    setIsSearching(true);
    setTimeout(() => {
      setResult({
        id: 'DNA-9281-X',
        match: '99.8%',
        actor: 'Lazarus Group',
        campaign: 'Operation SilverFish',
        severity: 'CRITICAL',
        type: 'Polymorphic Malware',
        detectedIn: ['Mumbai Node', 'Delhi Node', 'Bangalore Node'],
        firstSeen: '2026-03-10',
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="p-8 max-w-[1000px] mx-auto">
      <header className="mb-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
          <Fingerprint className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">AttackDNA™ Fingerprint Search</h1>
        <p className="text-white/40 max-w-xl mx-auto">
          Search our global intelligence database by malware hash, behavior fingerprint, or network signature to identify attribution and campaign links.
        </p>
      </header>

      <div className="space-y-8">
        <div className="glass rounded-[40px] border-white/5 p-10 space-y-8">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/20" />
            <input 
              type="text" 
              placeholder="Enter SHA-256, MD5, or CyberRaksha Fingerprint..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 pl-16 pr-8 text-xl focus:outline-none focus:border-accent/50 transition-all placeholder:text-white/10"
            />
            <button 
              onClick={handleSearch}
              disabled={isSearching || !query}
              className="absolute right-4 top-1/2 -translate-y-1/2 px-8 py-3 orange-gradient rounded-2xl text-sm font-bold uppercase tracking-widest shadow-xl shadow-accent/20 disabled:opacity-50 transition-all"
            >
              {isSearching ? 'Analyzing...' : 'Search DNA'}
            </button>
          </div>

          <div className="flex items-center justify-center gap-8">
            <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
              <Upload className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Upload Binary for Analysis</span>
            </button>
            <div className="w-px h-4 bg-white/10" />
            <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
              <Activity className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Search by Behavior Pattern</span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass rounded-[40px] border-white/5 p-10 space-y-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Match Found: {result.id}</h2>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Confidence: <span className="text-accent font-bold">{result.match}</span></p>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest">
                  {result.severity} Severity
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 glass rounded-3xl border-white/5 space-y-2">
                  <span className="text-[10px] text-white/20 uppercase">Attributed Actor</span>
                  <div className="text-lg font-bold text-accent">{result.actor}</div>
                </div>
                <div className="p-6 glass rounded-3xl border-white/5 space-y-2">
                  <span className="text-[10px] text-white/20 uppercase">Linked Campaign</span>
                  <div className="text-lg font-bold">{result.campaign}</div>
                </div>
                <div className="p-6 glass rounded-3xl border-white/5 space-y-2">
                  <span className="text-[10px] text-white/20 uppercase">Threat Type</span>
                  <div className="text-lg font-bold">{result.type}</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Geographic Spread</h3>
                <div className="flex flex-wrap gap-3">
                  {result.detectedIn.map((loc: string) => (
                    <div key={loc} className="flex items-center gap-2 px-4 py-2 glass rounded-xl border-white/5">
                      <Globe className="w-3 h-3 text-white/20" />
                      <span className="text-xs text-white/60">{loc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Info className="w-4 h-4" />
                  First seen in our network on {result.firstSeen}
                </div>
                <button className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest hover:underline">
                  View Full DNA Analysis <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!result && !isSearching && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-40 grayscale">
            <div className="p-8 glass rounded-[32px] border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Dna className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="font-bold">Recent DNA Matches</h3>
              <p className="text-xs text-white/40">View the latest malware fingerprints identified across the CyberRaksha network.</p>
            </div>
            <div className="p-8 glass rounded-[32px] border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="font-bold">Campaign Correlation</h3>
              <p className="text-xs text-white/40">See how individual incidents are being linked into larger coordinated campaigns.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
