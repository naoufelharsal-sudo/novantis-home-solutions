import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useState } from "react";

import logoDark from "@/assets/logo-dark.jpg.asset.json";
import { contact } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/realisaties", label: "Realisaties" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-gradient">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center">
          <img
            src={logoDark.url}
            alt="Novantis Bouwgroep logo"
            className="h-10 w-auto lg:h-12"
            width={480}
            height={120}
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={contact.phoneHref}
            className="hidden items-center gap-2 rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:inline-flex"
          >
            <Phone className="size-4" /> Bel ons
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow"
          >
            Gratis offerte
          </Link>
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
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-sm font-medium text-white/85"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
