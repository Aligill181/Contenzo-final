import { Link } from "react-router-dom";
import { Globe, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Marketplace",
      links: [
        { name: "Browse Domains", href: "/marketplace" },
        { name: "Guest Posts", href: "/marketplace?type=guest-post" },
        { name: "Link Insertions", href: "/marketplace?type=link-insertion" },
        { name: "Publisher Program", href: "/register?role=seller" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Success Stories", href: "/#testimonials" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/how-it-works" },
        { name: "Status", href: "/status" },
        { name: "API Docs", href: "/docs" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-slate-950/50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white uppercase">
                CONTENZO
              </span>
            </Link>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
              The smartest marketplace for quality backlinks. Connect with verified publishers 
              and scale your organic rankings with ease.
            </p>
            <div className="flex items-center gap-4 text-text-muted">
              <Twitter className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Github className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Nav Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-display font-bold uppercase tracking-widest text-text-primary mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <MapPin className="w-4 h-4 text-accent" />
            9 Kings Hall, Oldham, OL8 1DP, UK
          </div>
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <Phone className="w-4 h-4 text-accent" />
            +44 7716 719861
          </div>
          <div className="flex items-center gap-3 text-text-muted text-sm text-right justify-end md:justify-start lg:justify-end">
            <Mail className="w-4 h-4 text-accent" />
            Team@contenzo.co.uk
          </div>
        </div>

        <div className="mt-8 text-center text-text-muted text-xs">
          © {currentYear} Contenzo Platform. All rights reserved. Registered in England & Wales.
        </div>
      </div>
    </footer>
  );
}
