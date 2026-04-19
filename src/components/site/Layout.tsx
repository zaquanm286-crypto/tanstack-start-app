import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col temple-watermark">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-royal text-royal-foreground">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.78 0.14 85 / 0.4), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.78 0.14 85 / 0.25), transparent 55%)"
      }} />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
