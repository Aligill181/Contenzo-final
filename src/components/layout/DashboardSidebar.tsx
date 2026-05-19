import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  MessageSquare, 
  Wallet, 
  Star, 
  Settings, 
  Globe, 
  LogOut,
  TrendingUp,
  Store
} from "lucide-react";
import { cn } from "../../lib/utils";

export default function DashboardSidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Orders", href: "/dashboard/orders", icon: ShoppingBag },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
    { name: "Wallet", href: "/dashboard/wallet", icon: Wallet },
    { name: "Reviews", href: "/dashboard/reviews", icon: Star },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const sellerItems = [
    { name: "Seller Mode", href: "/marketplace", icon: Store, accent: true },
    { name: "My Listings", href: "/dashboard/listings", icon: Globe },
    { name: "Earnings", href: "/dashboard/earnings", icon: TrendingUp },
  ];

  return (
    <aside className="w-64 bg-primary-light border-r border-border flex flex-col h-screen fixed left-0 top-0 pt-16">
      <div className="flex-1 overflow-y-auto py-8 px-4 space-y-8">
        {/* Buyer View */}
        <div>
          <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-4 mb-4">Buyer Menu</h3>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  location.pathname === item.href
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Seller View */}
        <div>
          <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-4 mb-4">Seller Menu</h3>
          <nav className="space-y-1">
            {sellerItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  location.pathname === item.href
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : item.accent 
                        ? "text-accent bg-accent/10 hover:bg-accent/20"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-border">
         <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-bold text-danger hover:bg-danger/10 transition-all">
            <LogOut className="w-5 h-5" />
            Sign Out
         </button>
      </div>
    </aside>
  );
}
