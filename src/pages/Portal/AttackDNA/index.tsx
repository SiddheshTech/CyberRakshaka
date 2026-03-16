import { motion, AnimatePresence } from "motion/react";
import { 
  Fingerprint, Zap, Shield, Search, Activity, ChevronRight, Dna, 
  Maximize2, Minimize2, RefreshCw, Filter, Download, Info,
  AlertTriangle, Target, Globe, Link2, Eye, Share2, Clock
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { useNavigate } from "react-router-dom";

interface Node extends d3.SimulationNodeDatum {
  id: string;
  type: 'Phishing' | 'URL' | 'Injection' | 'Behavior' | 'Deepfake';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  campaignId: string;
  org: string;
  timestamp: string;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | Node;
  target: string | Node;
  value: number;
}

const MOCK_NODES: Node[] = [
  { id: 'node-1', type: 'Phishing', severity: 'CRITICAL', campaignId: 'CAMP-001', org: 'Banking Org #1', timestamp: '2026-03-16T10:00:00Z' },
  { id: 'node-2', type: 'Phishing', severity: 'HIGH', campaignId: 'CAMP-001', org: 'Banking Org #2', timestamp: '2026-03-16T10:05:00Z' },
  { id: 'node-3', type: 'URL', severity: 'CRITICAL', campaignId: 'CAMP-001', org: 'Banking Org #3', timestamp: '2026-03-16T10:10:00Z' },
  { id: 'node-4', type: 'Injection', severity: 'HIGH', campaignId: 'CAMP-002', org: 'Tech Corp #1', timestamp: '2026-03-16T11:00:00Z' },
  { id: 'node-5', type: 'Injection', severity: 'CRITICAL', campaignId: 'CAMP-002', org: 'Tech Corp #2', timestamp: '2026-03-16T11:15:00Z' },
  { id: 'node-6', type: 'Behavior', severity: 'MEDIUM', campaignId: 'CAMP-003', org: 'Retailer #1', timestamp: '2026-03-16T09:00:00Z' },
  { id: 'node-7', type: 'Behavior', severity: 'LOW', campaignId: 'CAMP-003', org: 'Retailer #2', timestamp: '2026-03-16T09:30:00Z' },
  { id: 'node-8', type: 'Deepfake', severity: 'HIGH', campaignId: 'CAMP-004', org: 'Gov Dept #1', timestamp: '2026-03-16T08:00:00Z' },
  { id: 'node-9', type: 'Phishing', severity: 'CRITICAL', campaignId: 'CAMP-001', org: 'Banking Org #4', timestamp: '2026-03-16T11:30:00Z' },
  { id: 'node-10', type: 'URL', severity: 'MEDIUM', campaignId: 'CAMP-005', org: 'Logistics #1', timestamp: '2026-03-16T12:00:00Z' },
];

const MOCK_LINKS: Link[] = [
  { source: 'node-1', target: 'node-2', value: 1 },
  { source: 'node-2', target: 'node-3', value: 1 },
  { source: 'node-1', target: 'node-3', value: 1 },
  { source: 'node-1', target: 'node-9', value: 1 },
  { source: 'node-4', target: 'node-5', value: 1 },
  { source: 'node-6', target: 'node-7', value: 1 },
];

export default function AttackDNAMain() {
  const navigate = useNavigate();
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [filterType, setFilterType] = useState<string>('All');
  const [filterSeverity, setFilterSeverity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const container = svg.append("g");

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        container.attr("transform", event.transform);
      });

    svg.call(zoom);

    const simulation = d3.forceSimulation<Node>(MOCK_NODES)
      .force("link", d3.forceLink<Node, Link>(MOCK_LINKS).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(40));

    const link = container.append("g")
      .attr("stroke", "rgba(255,255,255,0.1)")
      .attr("stroke-width", 1.5)
      .selectAll("line")
      .data(MOCK_LINKS)
      .join("line");

    const node = container.append("g")
      .selectAll<SVGGElement, Node>("g")
      .data(MOCK_NODES)
      .join("g")
      .attr("cursor", "pointer")
      .on("click", (event, d) => {
        setSelectedNode(d);
        event.stopPropagation();
      })
      .call(d3.drag<SVGGElement, Node>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended) as any);

    // Node circles
    node.append("circle")
      .attr("r", 12)
      .attr("fill", d => {
        switch (d.severity) {
          case 'CRITICAL': return '#ef4444';
          case 'HIGH': return '#f97316';
          case 'MEDIUM': return '#eab308';
          default: return '#3b82f6';
        }
      })
      .attr("stroke", "rgba(255,255,255,0.2)")
      .attr("stroke-width", 2);

    // Node icons (simplified as text for now)
    node.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", "white")
      .attr("font-size", "8px")
      .attr("font-weight", "bold")
      .text(d => d.type[0]);

    // Node labels
    node.append("text")
      .attr("dx", 16)
      .attr("dy", ".35em")
      .attr("fill", "rgba(255,255,255,0.4)")
      .attr("font-size", "10px")
      .text(d => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as Node).x!)
        .attr("y1", d => (d.source as Node).y!)
        .attr("x2", d => (d.target as Node).x!)
        .attr("y2", d => (d.target as Node).y!);

      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => simulation.stop();
  }, []);

  return (
    <div className="h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Top Bar */}
      <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-black/50 backdrop-blur-xl z-20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <Dna className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">AttackDNA™ Graph</h1>
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-white/20'}`} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                {isLive ? 'Live Intelligence Feed' : 'Feed Paused'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20" />
            <input 
              type="text" 
              placeholder="Search Fingerprint / IP / Domain..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-xs w-64 focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>
          <div className="h-8 w-px bg-white/5 mx-2" />
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <div className="flex flex-col items-center">
              <span className="text-white">{MOCK_NODES.length}</span>
              <span>Nodes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white">{MOCK_LINKS.length}</span>
              <span>Edges</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white">5</span>
              <span>Campaigns</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex relative">
        {/* Sidebar Filters */}
        <div className="w-72 border-r border-white/5 p-6 space-y-8 bg-black/30 backdrop-blur-sm z-10">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-4 flex items-center gap-2">
              <Filter className="w-3 h-3" /> Filter Intelligence
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase">Threat Type</label>
                <select 
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs outline-none"
                >
                  <option>All</option>
                  <option>Phishing</option>
                  <option>URL Scanner</option>
                  <option>Injection</option>
                  <option>Behavior</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase">Severity</label>
                <div className="grid grid-cols-2 gap-2">
                  {['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].map(s => (
                    <button 
                      key={s}
                      onClick={() => setFilterSeverity(s)}
                      className={`py-2 rounded-lg text-[8px] font-bold border transition-all ${filterSeverity === s ? 'bg-accent/20 border-accent text-accent' : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-4">Legend</h3>
            <div className="space-y-2">
              {[
                { label: 'Critical Phishing', color: 'bg-red-500' },
                { label: 'High Risk Injection', color: 'bg-orange-500' },
                { label: 'Medium Behavior', color: 'bg-yellow-500' },
                { label: 'Low Risk / Info', color: 'bg-blue-500' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-[10px] text-white/60">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <button className="w-full py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Download className="w-3 h-3" /> Export Graph PNG
            </button>
          </div>
        </div>

        {/* Graph Canvas */}
        <div className="flex-1 relative bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.05)_0%,transparent_70%)]">
          <svg ref={svgRef} className="w-full h-full" />
          
          {/* Graph Controls */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <button className="p-3 glass rounded-xl text-white/40 hover:text-white transition-all"><Maximize2 className="w-4 h-4" /></button>
            <button className="p-3 glass rounded-xl text-white/40 hover:text-white transition-all"><Minimize2 className="w-4 h-4" /></button>
            <button className="p-3 glass rounded-xl text-white/40 hover:text-white transition-all"><RefreshCw className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Node Detail Side Panel */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute top-0 right-0 bottom-0 w-96 glass-dark border-l border-white/10 p-8 z-30 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedNode(null)}
                className="absolute top-6 right-6 p-2 glass rounded-lg text-white/40 hover:text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedNode.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-500' : 
                    selectedNode.severity === 'HIGH' ? 'bg-orange-500/20 text-orange-500' : 
                    'bg-accent/20 text-accent'
                  }`}>
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{selectedNode.id}</h2>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{selectedNode.type} Incident</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 glass rounded-2xl border-white/5">
                    <div className="text-[10px] text-white/20 uppercase mb-1">Severity</div>
                    <div className={`text-sm font-bold ${
                      selectedNode.severity === 'CRITICAL' ? 'text-red-500' : 'text-orange-500'
                    }`}>{selectedNode.severity}</div>
                  </div>
                  <div className="p-4 glass rounded-2xl border-white/5">
                    <div className="text-[10px] text-white/20 uppercase mb-1">Confidence</div>
                    <div className="text-sm font-bold text-accent">98.4%</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Incident Context</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 glass rounded-xl border-white/5">
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-white/20" />
                        <span className="text-xs text-white/60">Source Org</span>
                      </div>
                      <span className="text-xs font-bold">{selectedNode.org}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 glass rounded-xl border-white/5">
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-white/20" />
                        <span className="text-xs text-white/60">Detected At</span>
                      </div>
                      <span className="text-xs font-bold">{new Date(selectedNode.timestamp).toLocaleTimeString()}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 glass rounded-xl border-white/5">
                      <div className="flex items-center gap-3">
                        <Link2 className="w-4 h-4 text-white/20" />
                        <span className="text-xs text-white/60">Campaign ID</span>
                      </div>
                      <button 
                        onClick={() => navigate(`/portal/attack-dna/campaign/${selectedNode.campaignId}`)}
                        className="text-xs font-bold text-accent hover:underline"
                      >
                        {selectedNode.campaignId}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20">AttackDNA Fingerprint</h3>
                  <div className="p-4 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] break-all leading-relaxed text-white/40">
                    f3a2c1b0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => navigate(`/portal/dashboard/incidents?id=${selectedNode.id}`)}
                    className="py-3 glass rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  >
                    <Eye className="w-3 h-3" /> View Incident
                  </button>
                  <button className="py-3 orange-gradient rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-accent/20 transition-all flex items-center justify-center gap-2">
                    <Share2 className="w-3 h-3" /> Share Intel
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
