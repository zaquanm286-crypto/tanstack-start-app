import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ – Property Registration & Documentation | Sri Balaji Enterprises" },
      { name: "description", content: "Answers to common questions about sale deed registration, EC, khata transfer, charges and timelines in Bangalore." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Common questions about property registration in Bangalore." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "What documents are required for sale deed registration?",
    a: "Typically you need the original title deed (Mother Deed), latest Encumbrance Certificate, Khata certificate & extract, latest property tax receipts, identity & address proofs (Aadhaar, PAN) of buyer and seller, and 2 witnesses with ID proof. We provide a complete checklist based on your specific property type.",
  },
  {
    q: "How long does property registration take?",
    a: "Once all documents are ready and the appointment is booked at the Sub-Registrar Office, the registration itself is usually completed the same day. Document preparation, EC verification and stamp duty payment may take 3–7 working days depending on the case.",
  },
  {
    q: "Do you help with bank loan documentation?",
    a: "Yes. We assist with property document verification, drafting MODT (Memorandum of Deposit of Title Deeds), coordinating with the bank's legal team, and registering the mortgage at the Sub-Registrar Office.",
  },
  {
    q: "What is an Encumbrance Certificate (EC)?",
    a: "An Encumbrance Certificate is an official document that shows all registered transactions (sale, mortgage, lease) on a property over a given period. It is essential to verify that a property is free from monetary or legal liabilities before purchase.",
  },
  {
    q: "Do you assist with Khata transfer?",
    a: "Yes — we handle Khata Transfer, Khata Bifurcation, E-Khata applications and BBMP documentation end-to-end, including liaison with the local BBMP ward office.",
  },
  {
    q: "What are your service charges?",
    a: "Our service charges are transparent and depend on the service type and complexity of the case. Government fees (stamp duty, registration fees) are separate and paid directly to the government. Call us for a clear, upfront quote.",
  },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        subtitle="Quick answers to the most common questions about property registration & documentation."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-xl border bg-card shadow-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-primary md:text-lg">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t bg-secondary/30 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-royal p-8 text-center text-royal-foreground shadow-royal">
          <h3 className="font-display text-2xl font-bold">Still have questions?</h3>
          <p className="mt-2 text-white/85">Talk to our experts — we're happy to help.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="tel:+919886122903" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-2.5 font-semibold text-gold-foreground shadow-gold hover:scale-105">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href="https://wa.me/919886122903" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gold/60 bg-white/5 px-5 py-2.5 font-semibold hover:bg-white/10">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
