import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { contact, services } from "@/data/site";

export const Route = createFileRoute("/diensten/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const service = services.find((s) => s.slug === loaderData?.slug);
    if (!service) {
      return {
        meta: [
          { title: "Dienst niet gevonden | Novantis" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${service.title} | Novantis Bouwgroep`;
    return {
      meta: [
        { title },
        { name: "description", content: service.text },
        { property: "og:title", content: title },
        { property: "og:description", content: service.text },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: DienstNotFound,
  component: DienstDetail,
});

function DienstNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-heading text-3xl font-bold uppercase">Dienst niet gevonden</h1>
        <Link to="/diensten" className="mt-6 inline-flex text-primary">
          Bekijk alle diensten
        </Link>
      </div>
      <Footer />
    </div>
  );
}

function DienstDetail() {
  const { slug } = Route.useLoaderData();
  const service = services.find((s) => s.slug === slug)!;
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-navy-gradient py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <Link to="/diensten" className="text-sm font-semibold text-white/60 hover:text-white">
              ← Alle diensten
            </Link>
            <h1 className="mt-4 font-heading text-4xl font-bold uppercase leading-tight text-white lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-white/75">{service.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-5 py-3 text-sm font-bold text-primary-foreground shadow-glow"
              >
                Gratis offerte <ArrowRight className="size-4" />
              </Link>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                <Phone className="size-4" /> {contact.phone}
              </a>
            </div>
          </div>
          <img
            src={service.img}
            alt={service.title}
            className="h-72 w-full rounded-xl object-cover lg:h-96"
          />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase text-foreground">
            Wat wij voor u doen
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase text-foreground">
            Ook interessant
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {others.map((s) => (
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
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold uppercase">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
