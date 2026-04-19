import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  Phone, MessageCircle, ShieldCheck, Clock, IndianRupee, MapPin, Sparkles, FileCheck2,
  FileText, Building2, Landmark, Banknote, ScrollText, Home, Users, Award, CheckCircle2, ArrowRight, Star,
  Stamp, Globe, IdCard, Receipt,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Balaji Enterprises – Property Registration & Documentation in Bangalore" },
      { name: "description", content: "Fast, transparent property registration, sale deed, EC, khata transfer and legal documentation services in Bangalore. Call 98861 22903." },
      { property: "og:title", content: "Sri Balaji Enterprises – Bangalore's Trusted Documentation Consultancy" },
      { property: "og:description", content: "End-to-end property registration & legal documentation services in Bangalore." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: FileText, name: "Sale Deed Registration" },
  { icon: ScrollText, name: "Gift Deed" },
  { icon: ScrollText, name: "Partition Deed" },
  { icon: Banknote, name: "Bank Mortgage (MODT)" },
  { icon: Home, name: "Lease / Rental Agreements" },
  { icon: FileText, name: "Encumbrance Certificate (EC)" },
  { icon: ScrollText, name: "Mother Deed Certified Copy" },
  { icon: Landmark, name: "Trust Registration" },
  { icon: Building2, name: "Company Registration" },
  { icon: FileText, name: "Land Records (RTC / Mutation)" },
  { icon: Building2, name: "BBMP Documentation" },
  { icon: Banknote, name: "Loan Assistance" },
  { icon: ScrollText, name: "Income / Caste Certificates" },
  { icon: Users, name: "Family Tree Certificate" },
  { icon: Home, name: "E-Khata & Khata Services" },
];

const why = [
  { icon: Landmark, title: "Direct Sub-Registrar Coordination", text: "Direct working relationships with Sub-Registrar offices across Bangalore." },
  { icon: ShieldCheck, title: "End-to-End Guidance", text: "From document preparation to final registration — we handle it all." },
  { icon: Banknote, title: "Bank Loan Assistance", text: "Complete documentation support for home loans & mortgages." },
  { icon: IndianRupee, title: "Transparent Charges", text: "Clear, upfront pricing with no hidden fees." },
  { icon: MapPin, title: "Two Convenient Offices", text: "St. Thomas Town & Nagawara branches for easy access." },
  { icon: Clock, title: "Quick Turnaround", text: "Years of experience translate into faster, smoother processing." },
];

const testimonials = [
  { name: "Ravi Kumar", role: "Property Buyer", text: "Sri Balaji Enterprises made my flat registration completely stress-free. Honest, fast and affordable." },
  { name: "Priya Shetty", role: "Home Loan Customer", text: "They coordinated everything with my bank and the SRO. Saved me weeks of running around." },
  { name: "Mohammed Ilyas", role: "Business Owner", text: "Got my company registration and trust deed done smoothly. Highly professional team." },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-royal text-royal-foreground">
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: "radial-gradient(circle at 15% 25%, oklch(0.78 0.14 85 / 0.55), transparent 45%), radial-gradient(circle at 85% 75%, oklch(0.78 0.14 85 / 0.3), transparent 55%)"
        }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
              <Award className="h-3.5 w-3.5" /> Trusted in Bangalore
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Your Trusted Partner for <span className="text-gold">Property Registration</span> & Legal Documentation in Bangalore
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Fast. Transparent. Reliable. Complete assistance for all property & registration services.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+919886122903" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3 font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105">
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a href="https://wa.me/919886122903" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gold/60 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Transparent Process</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Quick Turnaround</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Affordable Charges</div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-sm" />
            <div className="relative grid grid-cols-2 gap-4 p-6">
              {[
                { k: "15+", v: "Years of Experience" },
                { k: "5,000+", v: "Documents Processed" },
                { k: "2", v: "Bangalore Offices" },
                { k: "100%", v: "Client Confidentiality" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-gold/30 bg-white/5 p-6 text-center">
                  <div className="font-display text-3xl font-bold text-gold">{s.k}</div>
                  <div className="mt-1 text-sm text-white/80">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">About Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">About Sri Balaji Enterprises</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Sri Balaji Enterprises is a trusted documentation and registration consultancy in Bangalore providing end-to-end support for property registration, sale deeds, encumbrance certificates, land records, and legal documentation services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              With years of field experience and direct coordination with Sub-Registrar offices, banks, and government departments, we ensure smooth, hassle-free processing for individuals, families, and businesses.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {["Transparent Process", "Quick Turnaround", "Affordable Service Charges", "Professional Guidance"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-gold" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {why.slice(0, 4).map((w) => (
              <div key={w.title} className="rounded-xl border bg-card p-5 shadow-card">
                <w.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-3 text-base font-semibold text-primary">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">Complete Documentation Solutions</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="group flex items-center gap-4 rounded-xl border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-gold">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-royal text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-foreground">{s.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* E-KHATA HIGHLIGHT */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Most Requested</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
            E-Khata Registration & Transfer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            E-Khata is now <strong className="text-primary">mandatory</strong> for all property transactions, loans & sale deeds in Bangalore. We handle BBMP coordination end-to-end.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-2xl border-2 border-gold bg-gradient-royal p-8 text-royal-foreground shadow-gold md:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-foreground">
                <Sparkles className="h-3.5 w-3.5" /> Mandatory in Bangalore
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
                <span className="text-gold">E-Khata</span> Made Simple
              </h3>
              <p className="mt-3 max-w-2xl text-base text-white/90 md:text-lg">
                Get your <strong className="text-gold">E-Khata processed quickly</strong> with full documentation support — applications, transfers and BBMP coordination handled by experts.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="tel:+919886122903" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 font-bold text-gold-foreground shadow-gold hover:scale-105">
                <Phone className="h-5 w-5" /> Apply for E-Khata
              </a>
              <a href="https://wa.me/919886122903?text=I%20need%20E-Khata%20assistance" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/60 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>


        <div className="mt-8 rounded-xl border border-gold/40 bg-gold/10 p-5 text-center text-sm text-foreground">
          Confused about your E-Khata status? <a href="tel:+919886122903" className="font-semibold text-primary underline-offset-2 hover:underline">Call 98861 22903</a> for a free eligibility check.
        </div>

        {/* DOCUMENTS REQUIRED — grouped with E-Khata */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Checklist</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">Documents Required</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Keep these documents ready to ensure smooth and hassle-free property registration, E-Khata & documentation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 shadow-card md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-gold">
                <FileCheck2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">Primary Documents</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "Registered Sale Deed",
                "Aadhaar Card (Buyer & Seller)",
                "Recent Property Tax Receipt",
                "Photograph of the Property",
                "A Khata / B Khata Certificate & Extract",
              ].map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-lg bg-secondary/50 p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-card md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-royal text-gold">
                <FileCheck2 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">Other Essential Documents</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "10-digit BESCOM Electricity Account Number",
                "Latest BESCOM Electricity Bill",
                "BWSSB Water Bill / Connection Details",
                "Encumbrance Certificate (EC)",
                "Occupancy Certificate (for apartments)",
                "Approved Building Plan (for apartments)",
              ].map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-lg bg-secondary/50 p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gold/40 bg-gold/10 p-5 text-center text-sm text-foreground">
          Not sure which documents apply to your case? <a href="tel:+919886122903" className="font-semibold text-primary underline-offset-2 hover:underline">Call 98861 22903</a> for a personalised checklist.
        </div>
      </section>

      {/* E-STAMPING HIGHLIGHT */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Now Available</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
            E-Stamping Services in Bangalore
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A secure, digital way to pay non-judicial stamp duty — managed via SHCIL & the Kaveri Online Services portal. We handle the entire process for you.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-2xl border-2 border-gold bg-gradient-royal p-8 text-royal-foreground shadow-gold md:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-foreground">
                <Stamp className="h-3.5 w-3.5" /> Secure & Digital
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
                <span className="text-gold">E-Stamp</span> Paper & Stamp Duty Payment
              </h3>
              <p className="mt-3 max-w-2xl text-base text-white/90 md:text-lg">
                Get <strong className="text-gold">e-stamped documents</strong> for sale deeds, rental agreements, affidavits, POA, mortgages and more — quickly and reliably.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="tel:+919886122903" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 font-bold text-gold-foreground shadow-gold hover:scale-105">
                <Phone className="h-5 w-5" /> Get E-Stamp Now
              </a>
              <a href="https://wa.me/919886122903?text=I%20need%20E-Stamping%20assistance" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/60 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-gold">
                <IdCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary">Core Requirements</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "Draft document (agreement, deed or affidavit)",
                "KYC: Aadhaar, PAN or Passport of all parties",
                "Full names, addresses & purpose of document",
                "Property address & market value (for deeds)",
              ].map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm text-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-royal text-gold">
                <Receipt className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary">Common Uses</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "Property deeds — Sale, Mortgage, Gift, Conveyance",
                "Rental / Lease agreements",
                "Partnership deeds",
                "Affidavits, Indemnity Bonds & Power of Attorney",
              ].map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm text-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-8 rounded-xl border border-gold/40 bg-gold/10 p-5 text-center text-sm text-foreground">
          Need an e-stamped document urgently? <a href="tel:+919886122903" className="font-semibold text-primary underline-offset-2 hover:underline">Call 98861 22903</a> — we deliver same-day in most cases.
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">Built on Trust & Experience</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {why.map((w) => (
            <div key={w.title} className="rounded-xl border bg-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold">
                <w.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">What Our Clients Say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border bg-card p-6 shadow-card">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</p>
                <div className="mt-5 border-t pt-4">
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-royal py-20 text-royal-foreground">
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, oklch(0.78 0.14 85 / 0.4), transparent 60%)"
        }} />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Need Help With Property Registration?</h2>
          <p className="mt-3 text-lg text-white/85">Call us today for expert guidance and smooth documentation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:+919886122903" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3 font-semibold text-gold-foreground shadow-gold hover:scale-105">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a href="https://wa.me/919886122903" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gold/60 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10">
              <MessageCircle className="h-5 w-5" /> WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
