import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logoDark from "@/assets/logo-dark.jpg.asset.json";
import { contact, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-gradient">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <img
            src={logoDark.url}
            alt="Novantis Bouwgroep logo"
            className="h-12 w-auto"
            width={480}
            height={120}
          />
          <p className="mt-4 max-w-md text-sm text-white/70">
            Bouwen. Renoveren. Verduurzamen. Eén partner voor uw volledige woning:
            van zonnepanelen en warmtepompen tot dak, gevel en binnenafwerking.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Diensten</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/diensten/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="size-4" />
              <a href={contact.phoneHref} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4" />
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4" /> {contact.region}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Novantis Bouwgroep — Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
