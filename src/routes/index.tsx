import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Bath,
  Check,
  CheckCircle2,
  Flame,
  Hammer,
  Home,
  Layers,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";

import logoDark from "@/assets/logo-dark.jpg.asset.json";
import logoLight from "@/assets/logo-light.jpg.asset.json";
import heroHome from "@/assets/hero-home.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import svcSolar from "@/assets/svc-solar.jpg";
import svcBattery from "@/assets/svc-battery.jpg";
import svcHeatpump from "@/assets/svc-heatpump.jpg";
import svcFacade from "@/assets/svc-facade.jpg";
import svcRoof from "@/assets/svc-roof.jpg";
import svcBathroom from "@/assets/svc-bathroom.jpg";
import svcElectric from "@/assets/svc-electric.jpg";
import svcInterior from "@/assets/svc-interior.jpg";
import teamPhoto from "@/assets/team-novantis.jpg.asset.json";
import bannerDiensten from "@/assets/banner-diensten.jpg.asset.json";
import bannerPartner from "@/assets/banner-partner.jpg.asset.json";
import projSolarInstall from "@/assets/proj-solar-install.jpg";
import projFacade from "@/assets/proj-facade.jpg";
import projTechniek from "@/assets/proj-techniek.jpg";
import projBadkamer from "@/assets/proj-badkamer.jpg";

const projects = [
  { img: projSolarInstall, title: "Zonnepanelen op pannendak", place: "Antwerpen" },
  { img: projFacade, title: "Gevelrenovatie & isolatie", place: "Mechelen" },
  { img: projTechniek, title: "Warmtepomp & thuisbatterij", place: "Lier" },
  { img: projBadkamer, title: "Badkamer volledig afgewerkt", place: "Brasschaat" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Novantis Bouwgroep | Zonnepanelen, warmtepompen & renovatie",
      },
      {
        name: "description",
        content:
          "Novantis Bouwgroep: zonnepanelen, thuisbatterijen, warmtepompen, dak- en gevelrenovatie, binnenafwerking, sanitair en elektriciteit. Alles bij één partner. Vraag uw gratis offerte aan.",
      },
      {
        property: "og:title",
        content: "Novantis Bouwgroep | Uw totaalpartner in bouwen & verduurzamen",
      },
      {
        property: "og:description",
        content:
          "Van zonnepanelen en warmtepompen tot renovatie en binnenafwerking. Eén aanspreekpunt, één planning, één verantwoordelijke. Gratis offerte binnen 48 uur.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Sun,
    title: "Zonnepanelen",
    text: "Hoogrendementspanelen met optimale opbrengst, netjes geïnstalleerd en volledig gekeurd.",
    img: svcSolar,
  },
  {
    icon: BatteryCharging,
    title: "Thuisbatterijen",
    text: "Uw eigen stroom opslaan en 's avonds gebruiken. Maximale zelfconsumptie, lagere factuur.",
    img: svcBattery,
  },
  {
    icon: Flame,
    title: "Warmtepompen",
    text: "Lucht-water en lucht-lucht warmtepompen voor verwarming, koeling en sanitair warm water.",
    img: svcHeatpump,
  },
  {
    icon: Layers,
    title: "Gevelrenovaties",
    text: "Gevelisolatie, crepi, sierpleister en steenstrips. Beter isoleren met een nieuwe look.",
    img: svcFacade,
  },
  {
    icon: Home,
    title: "Dakrenovaties",
    text: "Volledige dakvernieuwing, dakisolatie en waterdichting. Duurzaam en winddicht.",
    img: svcRoof,
  },
  {
    icon: Bath,
    title: "Sanitair & badkamers",
    text: "Volledige badkamerrenovatie: leidingwerk, tegelwerk en plaatsing, sleutel-op-de-deur.",
    img: svcBathroom,
  },
  {
    icon: Zap,
    title: "Elektriciteit",
    text: "Nieuwe installaties, zekeringkasten, laadpalen en keuring conform AREI.",
    img: svcElectric,
  },
  {
    icon: Hammer,
    title: "Binnenafwerking",
    text: "Pleisterwerk, vloeren, gyproc, schilderwerk en maatwerk. Afgewerkt tot in detail.",
    img: svcInterior,
  },
];

const steps = [
  {
    n: "01",
    title: "Gratis intake",
    text: "We bellen u binnen 24 uur en beluisteren uw plannen, budget en timing.",
  },
  {
    n: "02",
    title: "Advies & offerte",
    text: "Bezoek ter plaatse, duidelijk voorstel met prijzen, premies en subsidies.",
  },
  {
    n: "03",
    title: "Uitvoering",
    text: "Eén planning, eigen vakmensen en één werfleider als aanspreekpunt.",
  },
  {
    n: "04",
    title: "Oplevering & nazorg",
    text: "Keuring, garantie en service. Ook na de werken blijven we bereikbaar.",
  },
];

const reasons = [
  {
    title: "Totaaloplossing van A tot Z",
    text: "Energie, renovatie en afwerking bij één bouwgroep. Geen coördinatie tussen 5 aannemers.",
  },
  {
    title: "Eigen vakmensen",
    text: "Vaste ploegen met jarenlange ervaring in energie- en renovatiewerken.",
  },
  {
    title: "Transparante prijzen",
    text: "Heldere offerte zonder verrassingen achteraf. U weet exact wat u krijgt.",
  },
  {
    title: "Premies & subsidies",
    text: "Wij rekenen uit waar u recht op hebt en helpen met de aanvraag.",
  },
];

const faqs = [
  {
    q: "Doen jullie ook een volledig project van ruwbouw tot afwerking?",
    a: "Ja. Novantis Bouwgroep begeleidt uw project van A tot Z: renovatie, energietechnieken, sanitair, elektriciteit en binnenafwerking. U heeft één contract en één aanspreekpunt.",
  },
  {
    q: "Hoe snel krijg ik een offerte?",
    a: "Na uw aanvraag nemen we binnen 24 uur contact op en plannen we een bezoek. De offerte volgt doorgaans binnen 48 uur na dat bezoek.",
  },
  {
    q: "Kan ik zonnepanelen en thuisbatterij combineren?",
    a: "Absoluut, dat is vaak de beste keuze. Met een batterij verhoogt u uw zelfconsumptie sterk en verlaagt u uw energiefactuur verder.",
  },
  {
    q: "Werken jullie met garantie en keuring?",
    a: "Alle installaties worden gekeurd volgens de geldende normen en u krijgt garantie op materiaal én plaatsing.",
  },
];

const testimonials = [
  {
    name: "Familie Vermeiren",
    place: "Antwerpen",
    text: "Zonnepanelen, batterij en warmtepomp in één traject. Alles netjes op tijd en de communicatie was top.",
  },
  {
    name: "Kris D.",
    place: "Mechelen",
    text: "Volledige dak- en gevelrenovatie. Correcte prijs, duidelijke planning en een prachtig resultaat.",
  },
  {
    name: "Sofie & Tom",
    place: "Lier",
    text: "Onze badkamer en elektriciteit volledig vernieuwd. Eén aanspreekpunt maakte het echt zorgeloos.",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceStrip />
        <Services />
        <Gallery />
        <WhyUs />
        <Team />
        <Process />
        <Testimonials />
        <Faq />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#diensten", label: "Diensten" },
    { href: "#waarom", label: "Waarom Novantis" },
    { href: "#werkwijze", label: "Werkwijze" },
    { href: "#faq", label: "FAQ" },
    { href: "#offerte", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy-gradient border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <a href="#top" className="flex items-center">
          <img
            src={logoDark.url}
            alt="Novantis Bouwgroep logo"
            className="h-10 w-auto lg:h-12"
            width={480}
            height={120}
          />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:+32470000000"
            className="hidden items-center gap-2 rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:inline-flex"
          >
            <Phone className="size-4" /> Bel ons
          </a>
          <a
            href="#offerte"
            className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow"
          >
            Gratis offerte
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex flex-col gap-1 rounded-md border border-white/25 p-2 lg:hidden"
          >
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-navy px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-sm font-medium text-white/85"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-gradient">
      <video
        src={heroVideo.url}
        autoPlay
        muted
        loop
        playsInline
        poster={heroHome}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">

        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-gradient">
            BOUWEN. RENOVEREN. VERDUURZAMEN.
          </p>
          <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Uw volledige woning
            <br />
            bij <span className="text-brand-gradient">één partner</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/70 lg:text-lg">
            Zonnepanelen, thuisbatterijen en warmtepompen. Dak- en gevelrenovatie,
            binnenafwerking, sanitair en elektriciteit. Novantis Bouwgroep regelt uw project
            van A tot Z.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Eén aanspreekpunt voor al uw werken",
              "Eigen vakmensen, vaste planning",
              "Advies over premies en subsidies",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-white/85">
                <CheckCircle2 className="size-5 shrink-0 text-brand-green" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#offerte"
              className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow"
            >
              Gratis offerte aanvragen <ArrowRight className="size-4" />
            </a>
            <a
              href="#diensten"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Onze diensten
            </a>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              ["10+", "Jaar ervaring"],
              ["500+", "Tevreden klanten"],
              ["100%", "Eigen opvolging"],
            ].map(([big, small]) => (
              <div key={small}>
                <p className="font-display text-2xl font-bold text-brand-gradient lg:text-3xl">
                  {big}
                </p>
                <p className="mt-1 text-xs text-white/60">{small}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={heroHome}
            alt="Moderne woning met zonnepanelen bij avondlicht"
            width={1600}
            height={1104}
            className="w-full rounded-xl object-cover shadow-glow"
          />
          <div className="absolute -bottom-5 left-4 rounded-xl bg-card px-5 py-4 shadow-card sm:left-8">
            <p className="text-xs text-muted-foreground">Bespaar tot</p>
            <p className="font-display text-3xl font-bold text-brand-gradient">70%</p>
            <p className="text-xs text-muted-foreground">op uw energiefactuur</p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3">
            {[
              { src: projSolarInstall, alt: "Plaatsing van zonnepanelen op een dak" },
              { src: projTechniek, alt: "Warmtepomp en thuisbatterij in technische ruimte" },
              { src: projBadkamer, alt: "Afgewerkte moderne badkamer" },
            ].map((t) => (
              <img
                key={t.alt}
                src={t.src}
                alt={t.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="h-20 w-full rounded-lg object-cover ring-1 ring-white/15 sm:h-28"
              />
            ))}
          </div>
        </div>
      </div>
      <img
        src={bannerPartner.url}
        alt="Novantis Bouwgroep — één partner, alles onder één dak"
        loading="lazy"
        className="mx-auto block w-full max-w-7xl px-4 pb-10 lg:px-8"
      />
    </section>
  );
}

function Gallery() {
  return (
    <section id="realisaties" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <span className="block h-1 w-16 bg-brand-gradient" />
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Onze realisaties</h2>
          <p className="mt-3 text-muted-foreground">
            Een greep uit recente projecten in Antwerpen en omstreken.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <figure
              key={p.title}
              className="group overflow-hidden rounded-xl border border-border shadow-card"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="bg-background p-4">
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <img
          src={bannerDiensten.url}
          alt="Overzicht van de diensten van Novantis Bouwgroep"
          loading="lazy"
          className="mt-10 w-full rounded-xl border border-border shadow-card"
        />
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <img
          src={teamPhoto.url}
          alt="Het team van Novantis Bouwgroep"
          loading="lazy"
          className="w-full rounded-xl border border-border object-cover shadow-card"
        />
        <div>
          <span className="block h-1 w-16 bg-brand-gradient" />
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Uw persoonlijke adviseurs</h2>
          <p className="mt-3 text-muted-foreground">
            U krijgt één vast aanspreekpunt dat uw project van intake tot oplevering opvolgt.
          </p>
          <ul className="mt-6 space-y-4">
            {[
              ["Tom Verheyen", "Energie-adviseur", "Zonnepanelen, batterijen, warmtepompen & laadpalen"],
              ["Lotte De Smet", "Renovatie-adviseur", "Dak-, gevelrenovaties en badkamers"],
              ["Jeroen Maes", "Technisch adviseur", "Ventilatie, verwarming en sanitair"],
            ].map(([name, role, focus]) => (
              <li key={name} className="rounded-xl border border-border bg-card p-4 shadow-card">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-primary">{role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{focus}</p>
              </li>
            ))}
          </ul>
          <a
            href="#offerte"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow"
          >
            Vraag persoonlijk advies <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceStrip() {
  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 lg:grid-cols-8 lg:px-8">
        {services.map((s) => (
          <a
            key={s.title}
            href="#diensten"
            className="flex flex-col items-center gap-2 text-center transition-transform hover:-translate-y-0.5"
          >
            <s.icon className="size-6 text-primary" />
            <span className="text-xs font-semibold">{s.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="diensten" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <span className="block h-1 w-16 bg-brand-gradient" />
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Onze diensten</h2>
        <p className="mt-3 text-muted-foreground">
          Totaaloplossingen voor een energiezuinige, comfortabele en mooi afgewerkte woning.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article
            key={s.title}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-card"
          >
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={800}
              height={600}
              className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-5">
              <div className="flex items-center gap-2">
                <s.icon className="size-5 text-primary" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              <a
                href="#offerte"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Prijs aanvragen <ArrowRight className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="waarom" className="bg-navy-gradient py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="block h-1 w-16 bg-brand-gradient" />
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Waarom kiezen voor <span className="text-brand-gradient">Novantis?</span>
          </h2>
          <p className="mt-3 max-w-xl text-white/70">
            Eén bouwgroep die uw woning volledig onder handen neemt: van energietechnieken tot
            de laatste laag verf.
          </p>
          <div className="mt-8 space-y-5">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-white/10">
                  <ShieldCheck className="size-5 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{r.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["+500", "Tevreden klanten"],
            ["+1500", "Projecten uitgevoerd"],
            ["10+", "Jaar ervaring"],
            ["48u", "Offerte na bezoek"],
          ].map(([big, small]) => (
            <div
              key={small}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <p className="font-display text-4xl font-bold text-brand-gradient">{big}</p>
              <p className="mt-2 text-sm text-white/65">{small}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="werkwijze" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <span className="block h-1 w-16 bg-brand-gradient" />
      <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Zo werken wij</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <p className="font-display text-3xl font-bold text-brand-gradient">{s.n}</p>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <span className="block h-1 w-16 bg-brand-gradient" />
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Wat klanten zeggen</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl bg-card p-6 shadow-card">
              <Quote className="size-6 text-primary" />
              <blockquote className="mt-4 text-sm text-foreground/85">{t.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {t.name}
                <span className="font-normal text-muted-foreground"> — {t.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
      <span className="block h-1 w-16 bg-brand-gradient" />
      <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Veelgestelde vragen</h2>
      <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="cursor-pointer list-none text-base font-semibold">
              {f.q}
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function QuoteSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="offerte" className="bg-navy-gradient py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="block h-1 w-16 bg-brand-gradient" />
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Vandaag investeren, <span className="text-brand-gradient">morgen besparen</span>
          </h2>
          <p className="mt-3 max-w-lg text-white/70">
            Vul het formulier in en we contacteren u binnen 24 uur voor een gratis
            adviesgesprek en prijsvoorstel.
          </p>
          <div className="mt-8 space-y-4 text-sm text-white/80">
            <a href="tel:+32470000000" className="flex items-center gap-3">
              <Phone className="size-5 text-brand-green" /> +32 470 00 00 00
            </a>
            <a href="mailto:info@novantis.be" className="flex items-center gap-3">
              <Mail className="size-5 text-brand-green" /> info@novantis.be
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="size-5 text-brand-green" /> Actief in heel Vlaanderen
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
              <Check className="size-10 text-brand-green" />
              <h3 className="text-xl font-bold text-white">Bedankt voor uw aanvraag</h3>
              <p className="text-sm text-white/70">
                We nemen binnen 24 uur contact met u op. Dringend? Bel +32 470 00 00 00.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Naam" name="naam" placeholder="Uw naam" />
                <Field label="Telefoon" name="tel" type="tel" placeholder="04xx xx xx xx" />
              </div>
              <Field label="E-mail" name="email" type="email" placeholder="u@voorbeeld.be" />
              <Field label="Gemeente" name="gemeente" placeholder="Waar bevindt de woning zich?" />
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Welke werken?
                </span>
                <select
                  name="dienst"
                  className="mt-2 w-full rounded-md border border-white/15 bg-navy px-3 py-2.5 text-sm text-white outline-none focus:border-primary"
                >
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                  <option>Totaalproject (meerdere werken)</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Uw project
                </span>
                <textarea
                  name="bericht"
                  rows={4}
                  placeholder="Vertel kort wat u wenst te laten uitvoeren..."
                  className="mt-2 w-full rounded-md border border-white/15 bg-navy px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-primary"
                />
              </label>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-brand-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow"
              >
                Gratis offerte aanvragen <ArrowRight className="size-4" />
              </button>
              <p className="text-xs text-white/50">
                Geen verplichtingen. Uw gegevens worden enkel gebruikt om u te contacteren.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
        {label}
      </span>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-white/15 bg-navy px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-primary"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3 lg:px-8">
        <div>
          <img
            src={logoLight.url}
            alt="Novantis Bouwgroep"
            loading="lazy"
            width={480}
            height={120}
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Bouwen. Renoveren. Verduurzamen. Uw totaalpartner voor energie- en
            renovatiewerken.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Diensten</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#diensten">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="tel:+32470000000">+32 470 00 00 00</a>
            </li>
            <li>
              <a href="mailto:info@novantis.be">info@novantis.be</a>
            </li>
            <li>Actief in heel Vlaanderen</li>
          </ul>
          <a
            href="#offerte"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-gradient px-5 py-2.5 text-sm font-bold text-primary-foreground"
          >
            Gratis offerte
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Novantis Bouwgroep — Alle rechten voorbehouden
      </div>
    </footer>
  );
}
