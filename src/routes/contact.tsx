import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { contact, faqs, services } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & gratis offerte | Novantis Bouwgroep" },
      {
        name: "description",
        content:
          "Vraag uw gratis offerte aan bij Novantis Bouwgroep. Wij bellen u binnen 24 uur voor zonnepanelen, warmtepompen, renovatie of afwerking.",
      },
      { property: "og:title", content: "Contact & gratis offerte — Novantis" },
      {
        property: "og:description",
        content: "Binnen 24 uur contact, duidelijke offerte, één aanspreekpunt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-navy-gradient py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Contact
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold uppercase leading-tight text-white lg:text-5xl">
              Gratis offerte aanvragen
            </h1>
            <p className="mt-5 text-white/75">
              Laat uw gegevens achter en we bellen u binnen 24 uur. Geen verplichtingen,
              wel duidelijk advies over premies en planning.
            </p>
            <ul className="mt-8 space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 text-primary" /> {contact.region}
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur">
            {sent ? (
              <div className="flex flex-col items-center gap-3 py-12 text-center text-white">
                <CheckCircle2 className="size-10 text-primary" />
                <h2 className="font-heading text-2xl font-bold uppercase">Bedankt!</h2>
                <p className="text-sm text-white/75">
                  Uw aanvraag is verstuurd. Wij nemen binnen 24 uur contact met u op.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  toast.success("Aanvraag verstuurd — we bellen u binnen 24 uur.");
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    name="naam"
                    placeholder="Naam"
                    className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    required
                    type="tel"
                    name="telefoon"
                    placeholder="Telefoon"
                    className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="E-mailadres"
                  className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  name="gemeente"
                  placeholder="Gemeente"
                  className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  name="dienst"
                  defaultValue=""
                  className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled className="text-black">
                    Kies een dienst
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug} className="text-black">
                      {s.title}
                    </option>
                  ))}
                  <option value="totaalproject" className="text-black">
                    Totaalproject
                  </option>
                </select>
                <textarea
                  name="bericht"
                  rows={4}
                  placeholder="Vertel kort over uw project"
                  className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow"
                >
                  Verstuur aanvraag
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase">Veelgestelde vragen</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
