import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Phone, Home, ScrollText, Building2, Banknote, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services – Property Registration & Documentation in Bangalore | Sri Balaji Enterprises" },
      { name: "description", content: "Sale Deed, Gift Deed, Partition, Mortgage, EC, Khata, Trust & Company Registration, Loan documentation in Bangalore." },
      { property: "og:title", content: "Complete Property & Registration Services in Bangalore" },
      { property: "og:description", content: "End-to-end documentation services across Bangalore Sub-Registrar offices." },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  {
    icon: Home,
    title: "Property Registration Services",
    items: [
      "Sale Deed Drafting & Registration",
      "Gift Deed Registration",
      "Partition Deed",
      "Bank Mortgage (MODT)",
      "Lease Agreement Registration",
    ],
  },
  {
    icon: ScrollText,
    title: "Legal Documentation Services",
    items: [
      "Mother Deed Certified Copy",
      "Encumbrance Certificate (EC)",
      "Land Records (RTC, Mutation Extract)",
      "BBMP Documentation",
      "Khata Transfer / E-Khata",
    ],
  },
  {
    icon: Building2,
    title: "Registration & Certification Services",
    items: [
      "Trust Registration",
      "Company Registration",
      "Income Certificate",
      "Caste Certificate",
      "Family Tree Certificate",
    ],
  },
  {
    icon: Banknote,
    title: "Loan & Bank Assistance",
    items: [
      "Loan Documentation Support",
      "Property Document Verification",
      "Mortgage Registration",
    ],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Services"
        title="Complete Property & Registration Services in Bangalore"
        subtitle="From sale deeds to khata transfers — handled end-to-end with expert coordination across Sub-Registrar offices."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-2xl border bg-card p-6 shadow-card md:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-royal text-gold">
                  <cat.icon className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">{cat.title}</h2>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {cat.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 rounded-lg bg-secondary/40 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="font-medium text-foreground">{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="tel:+919886122903" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-105">
                  <Phone className="h-4 w-4" /> Call Now for Consultation
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
