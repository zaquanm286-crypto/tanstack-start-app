import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-royal text-gold shadow-royal">
            <span className="font-display text-xl font-bold">SB</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-primary">Sri Balaji Enterprises</div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Documentation • Registration
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+919886122903"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-gradient-gold px-4 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" /> 98861 22903
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+919886122903"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-4 py-3 font-semibold text-gold-foreground"
            >
              <Phone className="h-4 w-4" /> Call 98861 22903
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
