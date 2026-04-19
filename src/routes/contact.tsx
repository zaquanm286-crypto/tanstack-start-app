import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact – Sri Balaji Enterprises | Bangalore Documentation Consultancy" },
      { name: "description", content: "Visit our offices at Davis Road or Nagawara, Bengaluru. Call 98861 22903 / 90191 62841 / 86600 78017." },
      { property: "og:title", content: "Contact Sri Balaji Enterprises" },
      { property: "og:description", content: "Get in touch for property registration & documentation help in Bangalore." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  {
    name: "Office 1 — Davis Road",
    address: "#13, 15th Cross, Davis Road, Opposite Citizen School Office, Next to Nusrath Fathima School, Bangalore – 560084",
    map: "https://www.google.com/maps?q=Davis+Road+15th+Cross+Bangalore+560084&output=embed",
  },
  {
    name: "Office 2 — Nagawara",
    address: "#132/798, Below Sub-Register Office Complex, Philomena Hospital, JMJ Hospital Road, Nagawara A.C. Post, Bengaluru – 560045",
    map: "https://www.google.com/maps?q=Sub+Registrar+Office+Nagawara+Bangalore&output=embed",
  },
];

const phones = ["98861 22903", "90191 62841", "86600 78017"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Sri Balaji Enterprises"
        subtitle="Two convenient offices in Bangalore. Reach out by phone, WhatsApp, or visit us in person."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="mb-10 rounded-2xl border bg-card p-6 shadow-card md:p-8">
          <h3 className="font-display text-xl font-bold text-primary md:text-2xl">Business Hours</h3>
          <div className="mt-3 grid gap-2 text-sm text-foreground md:grid-cols-2">
            <p><span className="font-semibold text-primary">Monday – Saturday:</span> 8:00 AM – 10:30 PM</p>
            <p><span className="font-semibold text-primary">Sunday:</span> 10:30 AM – 3:00 PM</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {phones.map((p) => (
            <a
              key={p}
              href={`tel:+91${p.replace(/\s/g, "")}`}
              className="group flex items-center gap-4 rounded-xl border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-gold"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                <div className="font-display text-xl font-bold text-primary">+91 {p}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {offices.map((o) => (
            <div key={o.name} className="overflow-hidden rounded-2xl border bg-card shadow-card">
              <iframe
                src={o.map}
                title={o.name}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary">{o.name}</h3>
                <p className="mt-2 flex gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {o.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTACT FORM */}
        <div className="mt-16 rounded-2xl border bg-card p-6 shadow-card md:p-10">
          <div className="mb-6 text-center">
            <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">Request a Callback</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fill the form and our team will contact you shortly.</p>
          </div>

          {submitted ? (
            <div className="rounded-lg border border-gold/50 bg-gold/10 p-6 text-center">
              <p className="font-semibold text-primary">Thank you! We've received your request and will call you shortly.</p>
            </div>
          ) : (
            <form
              className="grid gap-4 md:grid-cols-2"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <Field label="Full Name" name="name" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Service Required</label>
                <select required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30">
                  <option value="">Select a service</option>
                  <option>Sale Deed Registration</option>
                  <option>Gift Deed</option>
                  <option>Partition Deed</option>
                  <option>Encumbrance Certificate (EC)</option>
                  <option>Khata Transfer / E-Khata</option>
                  <option>Bank Mortgage (MODT)</option>
                  <option>Trust / Company Registration</option>
                  <option>Loan Documentation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30" />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-royal px-6 py-3 font-semibold text-gold shadow-royal hover:opacity-95 md:w-auto">
                  <Send className="h-4 w-4" /> Request Callback
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-gold" /> Or call us directly at
            <a href="tel:+919886122903" className="font-semibold text-primary hover:underline">+91 98861 22903</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
