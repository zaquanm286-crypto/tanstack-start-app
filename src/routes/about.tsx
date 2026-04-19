import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Eye, Target, Sparkles, ShieldCheck, HandshakeIcon, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us – Sri Balaji Enterprises | Bangalore Documentation Consultancy" },
      { name: "description", content: "Learn about Sri Balaji Enterprises — Bangalore's trusted property registration and legal documentation consultancy." },
      { property: "og:title", content: "About Sri Balaji Enterprises" },
      { property: "og:description", content: "Established to simplify property registration and legal documentation in Bangalore." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Integrity" },
  { icon: Eye, title: "Transparency" },
  { icon: Sparkles, title: "Professionalism" },
  { icon: Users, title: "Client Satisfaction" },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Story"
        title="About Sri Balaji Enterprises"
        subtitle="Simplifying property registration and legal documentation procedures in Bangalore."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="prose-lg space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Sri Balaji Enterprises was established with the aim of simplifying property registration and legal documentation procedures in Bangalore.
          </p>
          <p>
            We understand that property transactions involve important financial decisions and legal complexities. Our mission is to provide clear guidance, accurate documentation, and smooth coordination with government offices.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-8 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-primary">Our Vision</h3>
            <p className="mt-2 text-muted-foreground">To be Bangalore's most trusted documentation consultancy.</p>
          </div>
          <div className="rounded-2xl border bg-card p-8 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-primary">Our Mission</h3>
            <p className="mt-2 text-muted-foreground">To provide reliable, fast, and transparent services to every client.</p>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-center font-display text-2xl font-bold text-primary md:text-3xl">Our Core Values</h3>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border bg-card p-6 text-center shadow-card">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-royal text-gold">
                  <v.icon className="h-6 w-6" />
                </div>
                <div className="mt-3 font-semibold text-primary">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
