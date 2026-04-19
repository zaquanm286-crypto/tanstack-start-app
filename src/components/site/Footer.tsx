import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-royal text-royal-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="font-display text-2xl font-bold text-gold">Sri Balaji Enterprises</div>
          <p className="mt-3 text-sm text-white/75">
            Trusted property registration & legal documentation consultancy serving Bangalore.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Sale Deed Registration</li>
            <li>Encumbrance Certificate</li>
            <li>Khata Transfer / E-Khata</li>
            <li>Bank Mortgage (MODT)</li>
            <li>Trust & Company Registration</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" />
              <span>
                <a href="tel:+919886122903" className="block hover:text-gold">98861 22903</a>
                <a href="tel:+919019162841" className="block hover:text-gold">90191 62841</a>
                <a href="tel:+918660078017" className="block hover:text-gold">86600 78017</a>
              </span>
            </li>
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>Davis Road & Nagawara, Bengaluru</span>
            </li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 text-gold" />
              <span>
                <span className="block">Mon – Sat: 8:00 AM – 10:30 PM</span>
                <span className="block">Sunday: 10:30 AM – 3:00 PM</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/70 md:flex-row md:px-8">
          <p>© 2026 Sri Balaji Enterprises – Proprietor: Srikanth G.S., B.Com (LLB) – All Rights Reserved</p>
          <p>Serving Bangalore with Trusted Registration & Documentation Services</p>
        </div>
      </div>
    </footer>
  );
}
