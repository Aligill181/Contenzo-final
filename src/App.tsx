import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardSidebar from "./components/layout/DashboardSidebar";
import Contact from "./pages/Contact";

import { cn } from "./lib/utils";

// Blog Placeholder Page
const Blog = () => (
  <div className="bg-primary min-h-screen pt-20 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h1 className="text-h1 mb-4 text-center">Contenzo Blog</h1>
       <p className="text-text-secondary text-center max-w-xl mx-auto mb-16 underline decoration-accent/30 decoration-2 underline-offset-4">
          Latest insights on SEO, link building, and organic growth strategies.
       </p>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "The State of Backlinks in 2026", cat: "SEO Trends", date: "May 15, 2026" },
            { title: "How to Scale Guest Posting", cat: "Link Building", date: "May 10, 2026" },
            { title: "Maximizing ROI on Niche Edits", cat: "Strategy", date: "May 05, 2026" },
          ].map((post, i) => (
            <div key={i} className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/40 transition-all cursor-pointer group">
               <div className="text-xs font-black text-accent uppercase tracking-widest mb-4">{post.cat}</div>
               <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{post.title}</h3>
               <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  Discover the latest strategies for dominating search results using smart link acquisition...
               </p>
               <div className="text-xs text-text-muted font-medium">{post.date} · 5 min read</div>
            </div>
          ))}
       </div>
    </div>
  </div>
);

// Dashboard Pages
const Overview = () => (
  <div className="p-10">
     <div className="flex items-center justify-between mb-10">
        <div>
           <h1 className="text-3xl font-display font-bold text-white tracking-tight">Market Overview</h1>
           <p className="text-text-secondary text-sm">Real-time performance metrics for your SEO campaigns.</p>
        </div>
        <div className="px-4 py-2 bg-success/10 border border-success/20 rounded-lg flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_#10b981]"></div>
           <span className="text-[10px] font-black text-success uppercase tracking-widest">Network Stabilized</span>
        </div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Campaigns", val: "12", sub: "3 pending review", color: "text-accent" },
          { label: "Acquisition Cost", val: "£1,240", sub: "-14% vs last month", color: "text-white" },
          { label: "Organic Reach", val: "840k", sub: "+22% growth", color: "text-success" },
        ].map(s => (
          <div key={s.label} className="bg-primary-light border border-border p-8 rounded-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-accent/10 transition-all"></div>
             <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-4">{s.label}</div>
             <div className={cn("text-4xl font-display font-black mb-2 tracking-tight", s.color)}>{s.val}</div>
             <div className="text-xs text-text-secondary font-medium tracking-wide">{s.sub}</div>
          </div>
        ))}
     </div>
  </div>
);

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navbar />}
      <div className="flex-grow flex">
        {isDashboard && <DashboardSidebar />}
        <div className={isDashboard ? "flex-grow pl-64 pt-20 bg-primary min-h-screen" : "flex-grow"}>
          {isDashboard && (
            <div className="h-20 bg-primary/80 backdrop-blur-md border-b border-border fixed top-0 right-0 left-64 z-40 flex items-center justify-between px-10">
               <div className="font-display font-black text-text-muted text-xs tracking-[0.3em] uppercase">Control Center</div>
               <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                     <p className="text-sm font-bold text-white">Alistudio User</p>
                     <p className="text-[10px] text-text-muted font-black uppercase tracking-widest leading-none mt-0.5">Administrator</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-accent-glow flex items-center justify-center text-white font-black shadow-lg shadow-accent/20">
                    AU
                  </div>
               </div>
            </div>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Overview />} />
            <Route path="/dashboard/orders" element={<div className="p-8">Orders Page</div>} />
            <Route path="/dashboard/wallet" element={<div className="p-8">Wallet Page</div>} />
            <Route path="/dashboard/messages" element={<div className="p-8">Messages Page</div>} />
            <Route path="/dashboard/listings" element={<div className="p-8">My Listings</div>} />
            <Route path="/dashboard/settings" element={<div className="p-8">Settings</div>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      {!isDashboard && <Footer />}
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
