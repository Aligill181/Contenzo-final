import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, TrendingUp, Search, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 gradient-mesh overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full -mr-64 opacity-50 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_10px_#10b981] animate-pulse"></div>
              <span className="text-[10px] font-black text-success uppercase tracking-[0.3em]">
                Marketplace Online (Live)
              </span>
            </div>
            <h1 className="text-hero leading-[1.1] text-white mb-8 tracking-tighter">
              The Smartest <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow">Backlink Engine.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 font-medium">
              Scale your SEO authority with 10,000+ verified publishers. 
              Real metrics, real domains, real organic power.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/marketplace"
                className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-xl text-lg font-black flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_10px_30px_rgba(99,102,241,0.3)]"
              >
                Launch Marketplace <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/register?role=seller"
                className="w-full sm:w-auto bg-primary-light/50 backdrop-blur-md border border-border px-10 py-4 rounded-xl text-lg font-black flex items-center justify-center transition-all hover:bg-primary-light"
              >
                Sell Your Links
              </Link>
            </div>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              { label: "Network Capacity", val: "12,000+", sub: "Verified Domains" },
              { label: "Active Publishers", val: "5.2k", sub: "Global Reach" },
              { label: "Orders Fulfilled", val: "50k+", sub: "99.2% Success" },
              { label: "System Uptime", val: "100%", sub: "Node: UK-WEST-1" },
            ].map((s) => (
              <div key={s.label} className="bg-primary/40 backdrop-blur-sm border border-border rounded-2xl p-8 text-left group hover:border-accent/40 transition-all">
                <div className="text-xs font-black text-text-muted uppercase tracking-widest mb-4 group-hover:text-accent transition-colors">{s.label}</div>
                <div className="text-4xl font-display font-black text-white mb-1 tracking-tight">{s.val}</div>
                <div className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-primary text-text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4 tracking-tight">Built for Professionals</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Everything you need to manage your SEO campaigns or sell website space in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-accent" />,
                title: "Granular Filtering",
                desc: "Filter by Domain Rating (DR), Monthly Traffic, Spam Score, Niche, and Country in seconds.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-accent" />,
                title: "Verified Publishers",
                desc: "Every website on Contenzo is manually reviewed and verified for authenticity and SEO value.",
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Fast Delivery",
                desc: "Most orders are delivered within 3-5 days. Track progress in real-time through your dashboard.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-surface border border-border p-8 rounded-2xl transition-all"
              >
                <div className="mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-text-secondary">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Niches */}
      <section className="py-24 bg-primary-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-h2 mb-6">Dominating Every Niche</h2>
              <p className="text-lg text-text-secondary mb-8">
                From high-tech SaaS blogs to established finance journals, 
                our marketplace covers 50+ niche categories across the globe.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  "Technology & SaaS", "Business & Finance", "Health & Wellness", 
                  "Travel & Lifestyle", "Marketing & SEO", "Real Estate", 
                  "Law & Legal", "Fashion & Beauty"
                ].map(n => (
                  <li key={n} className="flex items-center gap-2 text-text-primary font-medium">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    {n}
                  </li>
                ))}
              </ul>
              <Link
                to="/marketplace"
                className="mt-10 inline-flex items-center gap-2 font-bold text-accent hover:gap-3 transition-all"
              >
                Explore all niches <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-6 h-48 flex items-end">
                  <span className="font-display font-bold text-xl">Verified Media</span>
                </div>
                <div className="bg-accent/20 border border-accent/30 rounded-2xl p-6 h-64 flex items-end">
                   <TrendingUp className="text-accent w-12 h-12 absolute top-6 right-6 opacity-20" />
                   <span className="font-display font-bold text-xl">High Traffic</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-surface border border-border rounded-2xl p-6 h-64 flex items-end">
                   <span className="font-display font-bold text-xl">Premium Links</span>
                </div>
                <div className="glass-card rounded-2xl p-6 h-48 flex items-center justify-center">
                   <div className="text-center font-mono opacity-20 text-4xl font-black">CONTENZO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent rounded-[2rem] p-12 text-center text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-h2 mb-4 relative z-10">Start Growing Your Organic Rankings Today</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-10 relative z-10 text-lg">
              Join thousands of SEO agencies and businesses scaling their 
              link-building efforts through our smart marketplace.
            </p>
            <Link
              to="/register"
              className="relative z-10 bg-white text-accent px-10 py-5 rounded-xl text-xl font-black hover:bg-gray-100 transition-all inline-block shadow-2xl"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
