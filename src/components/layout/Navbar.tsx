import { Link } from "react-router-dom";
import { Globe, Menu, X, User, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Browse Marketplace", href: "/marketplace" },
    { name: "Sell Links", href: "/register?role=seller" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all group-hover:scale-110">
              <Globe className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-display font-bold tracking-tight text-white block">
                CONTENZO
              </span>
              <span className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em] -mt-1 block">
                Marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-accent hover:bg-accent-glow text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-x-0 border-b shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center px-4 py-3 border border-border rounded-lg text-text-primary font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center px-4 py-3 bg-accent text-white rounded-lg font-bold"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
