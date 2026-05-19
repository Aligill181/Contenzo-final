import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Globe, Mail, Lock, User, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

export default function Register() {
  const [accountType, setAccountType] = useState<"BUYER" | "SELLER">("BUYER");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-primary font-sans">
      {/* Left Side: Content */}
      <div className="hidden lg:flex flex-col justify-center p-12 lg:p-32 bg-primary-light border-r border-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.08)_0,transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-xl">
          <Link to="/" className="inline-flex items-center gap-3 mb-16 group">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:scale-110 transition-all">
              <Globe className="text-white w-7 h-7" />
            </div>
            <span className="text-3xl font-display font-black tracking-tighter text-white uppercase">CONTENZO</span>
          </Link>
          
          <h1 className="text-5xl font-display font-bold text-white mb-10 leading-[1.1] tracking-tighter">
            Build authority. <br />
            <span className="text-accent underline decoration-accent/20 underline-offset-8">Quantifiable SEO.</span>
          </h1>
          
          <div className="space-y-8">
            {[
              "12,000+ Verified Publisher Nodes",
              "Real-time SEO Metric Validation",
              "Escrow-protected Transactions",
              "SaaS-grade Command Center",
              "24/7 Priority Operations Support"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                   <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                </div>
                <p className="text-text-secondary text-lg font-medium tracking-tight">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t border-border/50">
             <p className="text-text-muted italic text-lg leading-relaxed font-medium">"The most precise backlink marketplace we've ever deployed. Zero spam, pure authority."</p>
             <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700"></div>
                <div>
                   <div className="text-base font-bold text-white">Alex Rivera</div>
                   <div className="text-xs font-black text-text-muted uppercase tracking-[0.2em]">CTO, LinkScale Systems</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex flex-col justify-center p-8 lg:p-24 relative">
        <div className="max-w-md w-full mx-auto relative z-10">
          <div className="lg:hidden text-center mb-16">
             <Link to="/" className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                  <Globe className="text-white w-7 h-7" />
                </div>
                <span className="text-3xl font-display font-black tracking-tighter text-white">CONTENZO</span>
              </Link>
          </div>

          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-3xl font-display font-bold text-white tracking-tight">Create Profile</h1>
            <p className="text-text-secondary mt-2 font-medium">Start scaling your organic reach today.</p>
          </div>

          {/* Account Type Toggle */}
          <div className="flex p-1.5 bg-primary-light border border-border rounded-2xl mb-10 shadow-inner">
            <button
              onClick={() => setAccountType("BUYER")}
              className={cn(
                "flex-1 flex flex-col items-center gap-0.5 py-4 rounded-[0.9rem] text-sm font-black uppercase tracking-widest transition-all",
                accountType === "BUYER" ? "bg-accent text-white shadow-xl" : "text-text-muted hover:text-white"
              )}
            >
              <span>Buyer</span>
              <span className="text-[9px] font-medium opacity-60 normal-case tracking-normal">Acquire Links</span>
            </button>
            <button
              onClick={() => setAccountType("SELLER")}
              className={cn(
                "flex-1 flex flex-col items-center gap-0.5 py-4 rounded-[0.9rem] text-sm font-black uppercase tracking-widest transition-all",
                accountType === "SELLER" ? "bg-accent text-white shadow-xl" : "text-text-muted hover:text-white"
              )}
            >
              <span>Seller</span>
              <span className="text-[9px] font-medium opacity-60 normal-case tracking-normal">Sell Inventory</span>
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] ml-1">First Name</label>
                 <input 
                    type="text" 
                    required
                    className="w-full bg-primary-light border border-border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent/40 font-medium"
                  />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] ml-1">Last Name</label>
                 <input 
                    type="text" 
                    required
                    className="w-full bg-primary-light border border-border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent/40 font-medium"
                  />
               </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] ml-1">Work Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-accent transition-colors" />
                <input 
                  type="email" 
                  required
                  placeholder="name@work.com"
                  className="w-full bg-primary-light border border-border rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-accent/40 font-medium transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] ml-1">Global Passphrase</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-accent transition-colors" />
                <input 
                  type="password" 
                  required
                  placeholder="Min. 8 characters"
                  className="w-full bg-primary-light border border-border rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-accent/40 font-medium transition-all"
                />
              </div>
            </div>

            <div className="pt-6 space-y-6">
              <p className="text-[11px] text-text-muted text-center leading-relaxed">
                By clicking "Establish Account", you agree to our <Link to="/terms" className="text-accent hover:underline font-bold">Terms</Link> and <Link to="/privacy" className="text-accent hover:underline font-bold">Privacy</Link>.
              </p>
              <button
                type="submit"
                className="w-full bg-accent text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(99,102,241,0.2)]"
              >
                ESTABLISH ACCOUNT <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-text-secondary text-sm font-medium">
                Part of the network? <Link to="/login" className="text-accent font-black hover:underline tracking-tight">Access Session</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
