import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Globe, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "../lib/AuthContext";
import { toast } from "sonner";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy login for password (we prefer Google for this demo)
    toast.info("Please use Google Login for the initial setup.");
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn();
      navigate("/dashboard");
      toast.success("Welcome to Contenzo!");
    } catch (error) {
      toast.error("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-primary px-4 py-12 relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1)_0,transparent_50%)]"></div>
      
      <div className="max-w-md w-full relative z-10 text-center">
        <Link to="/" className="inline-flex items-center gap-3 mb-10 group">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:scale-110 transition-all">
            <Globe className="text-white w-7 h-7" />
          </div>
          <span className="text-3xl font-display font-black tracking-tighter text-white">CONTENZO</span>
        </Link>
        
        <div className="bg-primary-light border border-border p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
          
          <div className="mb-10">
            <h1 className="text-3xl font-display font-bold text-white tracking-tight">Security Check</h1>
            <p className="text-text-secondary mt-2 font-medium">Verify your credentials to access the node.</p>
          </div>

          <form className="space-y-6 text-left" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] ml-1">Identity Profile</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-accent transition-colors" />
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  className="w-full bg-primary border border-border rounded-xl pl-12 pr-4 py-4 text-text-primary focus:outline-none focus:border-accent/40 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Credential Key</label>
                <Link to="/forgot-password" className="text-xs text-accent font-bold hover:underline">Forgot key?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-accent transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="••••••••"
                  className="w-full bg-primary border border-border rounded-xl pl-12 pr-12 py-4 text-text-primary focus:outline-none focus:border-accent/40 font-medium transition-all"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(99,102,241,0.2)]"
            >
              ESTABLISH SESSION <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-border flex flex-col gap-4">
            <button 
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-4 border border-border rounded-xl bg-primary hover:bg-slate-800 text-white font-bold transition-all group"
            >
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
              Sign in with Google Node
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-text-secondary font-medium">
          New to the network? <Link to="/register" className="text-accent font-black hover:underline tracking-tight">Create Identity</Link>
        </p>
      </div>
    </div>
  );
}
