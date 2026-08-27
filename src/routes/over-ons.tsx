import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { reasons, steps, team } from "@/data/site";
import teamPhoto from "@/assets/team-novantis.jpg.asset.json";
import bannerPartner from "@/assets/banner-partner.jpg.asset.json";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over Novantis Bouwgroep — Eén partner, alles onder één dak" },
      {
        name: "description",
        content:
          "Novantis Bouwgroep: eigen vakmensen, transparante prijzen en één aanspreekpunt voor energie, renovatie en afwerking in Vlaanderen.",
      },
      { property: "og:title", content: "Over Novantis Bouwgroep" },
      {
        property: "og:description",
        content: "Eigen vakmensen, transparante prijzen, één aanspreekpunt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OverOnsPage,
});

function OverOnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-navy-gradient py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Over ons
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold uppercase leading-tight text-white lg:text-5xl">
              Eén partner. Alles onder één dak.
            </h1>
            <p className="mt-5 text-white/75">
              Novantis Bouwgroep bundelt energietechnieken, renovatie en afwerking in
              één bedrijf. Zo hoeft u niet te jongleren met vijf aannemers: wij
              coördineren, plannen en voeren uit met eigen vakmensen.
            </p>
          </div>
          <img
            src={teamPhoto.url}
            alt="Het team van Novantis Bouwgroep"
            className="h-72 w-full rounded-xl object-cover lg:h-96"
          />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:px-8">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-xl border border-border bg-card p-6">
              <h2 className="flex items-center gap-2 font-heading text-lg font-bold uppercase">
                <Check className="size-5 text-primary" /> {r.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase">Uw persoonlijke adviseurs</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold uppercase">{m.name}</h3>
                <p className="text-sm font-semibold text-primary">{m.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase">Onze werkwijze</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-card p-6">
                <span className="font-heading text-3xl font-bold text-primary">{s.n}</span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <img
            src={bannerPartner.url}
            alt="Novantis Bouwgroep — een partner, alles onder één dak"
            loading="lazy"
            className="w-full rounded-xl border border-border"
          />
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow"
            >
              Neem contact op <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
