import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { projects, testimonials } from "@/data/site";
import bannerDiensten from "@/assets/banner-diensten.jpg.asset.json";

export const Route = createFileRoute("/realisaties")({
  head: () => ({
    meta: [
      { title: "Realisaties — Onze projecten in beeld | Novantis" },
      {
        name: "description",
        content:
          "Bekijk realisaties van Novantis Bouwgroep: zonnepanelen, warmtepompen, gevel- en dakrenovaties en volledig afgewerkte badkamers.",
      },
      { property: "og:title", content: "Realisaties van Novantis Bouwgroep" },
      {
        property: "og:description",
        content: "Projecten in beeld: energie, renovatie en afwerking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RealisatiesPage,
});

function RealisatiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-navy-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Realisaties
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold uppercase leading-tight text-white lg:text-6xl">
            Onze projecten in beeld
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Een selectie van recente werken bij particulieren in Vlaanderen.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:px-8">
          {projects.map((p) => (
            <figure
              key={p.title}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <figcaption className="p-6">
                <h2 className="font-heading text-xl font-bold uppercase">{p.title}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-primary">
                  <MapPin className="size-4" /> {p.place}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <img
            src={bannerDiensten.url}
            alt="Novantis Bouwgroep diensten"
            loading="lazy"
            className="w-full rounded-xl border border-border"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3 lg:px-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground"
            >
              <p>"{t.text}"</p>
              <footer className="mt-4 font-semibold text-foreground">
                {t.name} — {t.place}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow"
          >
            Vraag uw gratis offerte <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
