import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import ProductOverview from "./pages/Product/Overview";
import ThreatKarmaPage from "./pages/Product/ThreatKarma";
import ExplainabilityPage from "./pages/Product/Explainability";
import SolutionsOverview from "./pages/Solutions/Overview";
import PricingPage from "./pages/Pricing";
import ResourcesOverview from "./pages/Resources/Overview";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import LoginPage from "./pages/Portal/Login";
import { PortalLayout } from "./components/Portal/PortalLayout";
import { DashboardLayout } from "./components/Portal/DashboardLayout";
import DashboardOverview from "./pages/Portal/Dashboard/Overview";
import LiveFeedPage from "./pages/Portal/Dashboard/LiveFeed";
import RiskPosturePage from "./pages/Portal/Dashboard/RiskPosture";
import IncidentsPage from "./pages/Portal/Dashboard/Incidents";
import SettingsPage from "./pages/Portal/Dashboard/Settings";
import ThreatScanner from "./pages/Portal/Scanner";
import AttackDNAPage from "./pages/Portal/AttackDNA/index";
import CampaignDetail from "./pages/Portal/AttackDNA/CampaignDetail";
import AttackerProfileDetail from "./pages/Portal/AttackDNA/AttackerProfileDetail";
import AttackerProfiles from "./pages/Portal/AttackDNA/AttackerProfiles";
import FingerprintSearch from "./pages/Portal/AttackDNA/FingerprintSearch";
import Timeline from "./pages/Portal/AttackDNA/Timeline";
import ThreatKarmaPortal from "./pages/Portal/ThreatKarma";
import AlertsPage from "./pages/Portal/Alerts/index";
import ReportsPage from "./pages/Portal/Reports/index";
import ThreatSummaryReport from "./pages/Portal/Reports/ThreatSummary";
import BehaviorAnomalyReport from "./pages/Portal/Reports/BehaviorAnomaly";
import ComplianceReport from "./pages/Portal/Reports/Compliance";
import CustomReportBuilder from "./pages/Portal/Reports/CustomBuilder";
import CyberAadhaarPage from "./pages/Portal/CyberAadhaar";
import CyberPassportPage from "./pages/Portal/CyberPassport";
import ExplainabilityPortal from "./pages/Portal/Explainability";
import MutationLabPage from "./pages/Portal/MutationLab";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<ProductOverview />} />
          <Route path="product/threat-karma" element={<ThreatKarmaPage />} />
          <Route path="product/explainability" element={<ExplainabilityPage />} />
          <Route path="solutions" element={<SolutionsOverview />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="resources" element={<ResourcesOverview />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="live" element={<LiveFeedPage />} />
            <Route path="risk" element={<RiskPosturePage />} />
            <Route path="incidents" element={<IncidentsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          
          <Route path="scanner" element={<ThreatScanner />} />
          <Route path="attack-dna">
            <Route index element={<AttackDNAPage />} />
            <Route path="campaign/:id" element={<CampaignDetail />} />
            <Route path="attacker/:id" element={<AttackerProfileDetail />} />
            <Route path="profiles" element={<AttackerProfiles />} />
            <Route path="search" element={<FingerprintSearch />} />
            <Route path="timeline" element={<Timeline />} />
          </Route>
          <Route path="threat-karma" element={<ThreatKarmaPortal />} />
          <Route path="cyber-aadhaar" element={<CyberAadhaarPage />} />
          <Route path="cyber-passport" element={<CyberPassportPage />} />
          <Route path="explainability" element={<ExplainabilityPortal />} />
          <Route path="mutation-lab" element={<MutationLabPage />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="reports">
            <Route index element={<ReportsPage />} />
            <Route path="threat-summary" element={<ThreatSummaryReport />} />
            <Route path="behavior-anomaly" element={<BehaviorAnomalyReport />} />
            <Route path="compliance-audit" element={<ComplianceReport />} />
            <Route path="builder" element={<CustomReportBuilder />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
