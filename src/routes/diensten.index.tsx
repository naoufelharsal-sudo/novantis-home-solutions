import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services } from "@/data/site";

export const Route = createFileRoute("/diensten/")({
  head: () => ({
    meta: [
      { title: "Diensten — Zonnepanelen, renovatie & techniek | Novantis" },
      {
        name: "description",
        content:
          "Alle diensten van Novantis Bouwgroep: zonnepanelen, thuisbatterijen, warmtepompen, dak- en gevelrenovatie, sanitair, elektriciteit en binnenafwerking.",
      },
      { property: "og:title", content: "Diensten van Novantis Bouwgroep" },
      {
        property: "og:description",
        content: "Van zonnepanelen tot binnenafwerking: alles onder één dak.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DienstenPage,
});

function DienstenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-navy-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Onze diensten
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold uppercase leading-tight text-white lg:text-6xl">
            Alles voor uw woning, bij één partner
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Energie, renovatie en afwerking: u kiest zelf één dienst of een volledig
            traject. Eén planning, eigen vakmensen, één aanspreekpunt.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/diensten/$slug"
              params={{ slug: s.slug }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary"
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <s.icon className="size-5 text-primary" />
                  <h2 className="font-heading text-xl font-bold uppercase text-foreground">
                    {s.title}
                  </h2>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Meer info <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
