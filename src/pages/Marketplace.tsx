import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, ArrowUpDown, Globe, TrendingUp, Zap, Star, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { handleFirestoreError, OperationType } from "../lib/AuthContext";

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Technology", "Business", "Health", "Finance", "Travel", "Fashion"];

  useEffect(() => {
    const path = "listings";
    const q = query(collection(db, path), where("isActive", "==", true));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setListings(docs);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredListings = listings.filter(l => 
    (searchQuery === "" || l.websiteName.toLowerCase().includes(searchQuery.toLowerCase()) || l.niche?.some((n: string) => n.toLowerCase().includes(searchQuery.toLowerCase()))) &&
    (activeTab === "All" || l.niche?.includes(activeTab))
  );

  return (
    <div className="bg-primary min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"></div>
             <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">Global Node: UK-OX1</span>
          </div>
          <h1 className="text-h1 tracking-tighter mb-4">Marketplace</h1>
          <p className="text-text-secondary text-lg font-medium">Verify. Filter. Scale. Access the premium backlink network.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search Bar */}
          <div className="relative flex-grow group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors w-5 h-5" />
            <input
              type="text"
              placeholder="Search by domain, niche or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-primary-light border border-border rounded-2xl pl-14 pr-6 py-5 text-text-primary focus:outline-none focus:border-accent/40 focus:ring-4 focus:ring-accent/5 transition-all shadow-inner font-medium"
            />
          </div>

          {/* Quick Stats Toggle etc */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-primary-light hover:bg-slate-800 border border-border px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest text-white transition-all">
              <SlidersHorizontal className="w-4 h-4 text-accent" /> Filters
            </button>
            <button className="flex items-center gap-2 bg-primary-light hover:bg-slate-800 border border-border px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest text-white transition-all">
              <ArrowUpDown className="w-4 h-4 text-accent" /> Newest
            </button>
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all border",
                activeTab === cat 
                  ? "bg-accent text-white border-accent shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
                  : "bg-primary-light text-text-secondary border-border hover:border-text-muted"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full py-32 flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-12 h-12 text-accent animate-spin" />
              <p className="text-text-muted font-bold font-display uppercase tracking-widest">Scanning Marketplace...</p>
            </div>
          ) : (
            filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))
          )}
          {!loading && filteredListings.length === 0 && (
            <div className="col-span-full py-32 text-center">
              <div className="text-text-muted mb-4 opacity-50">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">No results found</h3>
              <p className="text-text-secondary">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ListingCard({ listing }: { listing: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-primary-light border border-border rounded-2xl p-6 group hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all cursor-pointer relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary border border-border flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
             <Globe className="text-accent w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white leading-tight">
              {listing.websiteName || listing.siteName}
            </h3>
            <p className="text-xs text-text-muted font-mono tracking-tighter">{listing.websiteUrl || listing.url}</p>
          </div>
        </div>
        <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono font-black text-xs">
          DR {listing.dr}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-3 bg-primary/40 rounded-xl border border-border/50">
          <div className="flex items-center gap-1.5 text-text-muted text-[10px] uppercase font-black tracking-widest mb-1">
            <TrendingUp className="w-3 h-3" /> Traffic
          </div>
          <div className="text-white font-bold">{listing.monthlyTraffic || listing.traffic}+</div>
        </div>
        <div className="p-3 bg-primary/40 rounded-xl border border-border/50">
          <div className="flex items-center gap-1.5 text-text-muted text-[10px] uppercase font-black tracking-widest mb-1">
            <Zap className="w-3 h-3" /> Delivery
          </div>
          <div className="text-white font-bold">{listing.deliveryTime || listing.delivery} Days</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {(listing.niche || []).map((n: string) => (
          <span key={n} className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] font-black text-slate-400 uppercase tracking-tighter">
            {n}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-border">
        <div>
          <div className="text-2xl font-display font-black text-white tracking-tight">£{listing.price}</div>
          <div className="text-[10px] text-text-muted uppercase font-black tracking-[0.2em]">{listing.type?.replace('_', ' ')}</div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-sm font-bold text-white justify-end">
            <Star className="w-4 h-4 text-warning fill-warning" /> {listing.averageRating || 4.9}
          </div>
          <div className="text-[10px] text-text-muted uppercase font-black tracking-widest">{listing.reviewsCount || 12} Reviews</div>
        </div>
      </div>

      <button className="mt-6 w-full py-4 rounded-xl bg-accent text-white font-black transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(99,102,241,0.2)] group-hover:scale-[1.02] active:scale-95">
        ORDER NOW <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
