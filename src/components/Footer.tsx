import { Link } from "react-router-dom";
import { Anchor, Mail, FileText, Shield, Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Anchor className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-base font-bold text-foreground">Alaskan Boats</span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
              Alaska's premier boat marketplace connecting buyers and sellers across the Last Frontier.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-muted-foreground">Listings start at</span>
              <span className="text-sm font-semibold text-accent">$20</span>
              <span className="text-xs text-muted-foreground">for 60 days</span>
            </div>
          </div>

          {/* Boat Types */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Boat Types</h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/browse?category=fishing" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                  Fishing Boats
                </Link>
              </li>
              <li>
                <Link to="/browse?category=cabin-cruisers" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                  Cabin Cruisers
                </Link>
              </li>
              <li>
                <Link to="/browse?category=skiffs" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                  Skiffs & Jon Boats
                </Link>
              </li>
              <li>
                <Link to="/browse?category=jet-boats" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                  Jet Boats
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-primary hover:text-primary/80 transition-colors text-xs font-medium">
                  View All Boats →
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Regions</h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/browse?region=southcentral" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                  Southcentral Alaska
                </Link>
              </li>
              <li>
                <Link to="/browse?region=southeast" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                  Southeast Alaska
                </Link>
              </li>
              <li>
                <Link to="/browse?region=interior" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                  Interior Alaska
                </Link>
              </li>
              <li>
                <Link to="/browse?region=southwest" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                  Southwest Alaska
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2">
                  <FileText className="w-3 h-3" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2">
                  <Scale className="w-3 h-3" />
                  Disclaimer
                </Link>
              </li>
              <li>
                <a href="mailto:support@alaskanboats.com" className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2">
                  <Mail className="w-3 h-3" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-xs text-center md:text-left">
              © {new Date().getFullYear()} Alaskan Boats. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs text-center md:text-right max-w-md">
              Alaskan Boats is a listing service only. We do not participate in, endorse, or guarantee any transactions between users.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
