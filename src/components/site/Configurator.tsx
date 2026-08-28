import { useMemo, useState } from "react";
import { ArrowRight, BatteryCharging, Flame, Sun, Zap } from "lucide-react";

type Heating = "gas" | "stookolie" | "elektrisch";
type Epc = "A" | "B" | "C" | "D" | "E/F";

const heatingLabels: Record<Heating, string> = {
  gas: "Aardgas",
  stookolie: "Stookolie",
  elektrisch: "Elektrisch",
};

const epcLabels: Epc[] = ["A", "B", "C", "D", "E/F"];

const packageItems = [
  { icon: Sun, key: "solar", label: "Zonnepanelen (± 5 kWp)", price: 6500 },
  { icon: BatteryCharging, key: "battery", label: "Thuisbatterij (10 kWh)", price: 6900 },
  { icon: Flame, key: "heatpump", label: "Warmtepomp (lucht-water)", price: 12500 },
  { icon: Zap, key: "charger", label: "Laadpaal", price: 1800 },
] as const;

type ItemKey = (typeof packageItems)[number]["key"];

const eur = (n: number) =>
  new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

export function Configurator() {
  const [heating, setHeating] = useState<Heating>("gas");
  const [epc, setEpc] = useState<Epc>("D");
  const [heatCost, setHeatCost] = useState(140);
  const [elecCost, setElecCost] = useState(90);
  const [selected, setSelected] = useState<Record<ItemKey, boolean>>({
    solar: true,
    battery: true,
    heatpump: true,
    charger: false,
  });

  const result = useMemo(() => {
    const chosen = packageItems.filter((i) => selected[i.key]);
    const investment = chosen.reduce((sum, i) => sum + i.price, 0);

    // Premies (indicatief)
    let premies = 0;
    if (selected.battery) premies += 800;
    if (selected.heatpump) premies += heating === "elektrisch" ? 1800 : 2400;
    if (selected.charger) premies += 300;
    const epcBonus: Record<Epc, number> = { A: 0, B: 200, C: 500, D: 900, "E/F": 1400 };
    if (selected.heatpump || selected.battery) premies += epcBonus[epc];
    premies = Math.min(premies, investment * 0.35);

    const netto = Math.max(investment - premies, 0);

    // Besparing per maand (indicatief)
    const heatFactor = heating === "stookolie" ? 0.72 : heating === "gas" ? 0.65 : 0.5;
    const epcFactor: Record<Epc, number> = { A: 0.75, B: 0.8, C: 0.88, D: 1, "E/F": 1.1 };
    let saving = 0;
    if (selected.heatpump) saving += heatCost * heatFactor * epcFactor[epc];
    if (selected.solar) saving += elecCost * 0.45;
    if (selected.battery) saving += elecCost * 0.2;
    if (selected.charger) saving += 25;

    // Financiering: 120 maanden aan 4,5%
    const months = 120;
    const r = 0.045 / 12;
    const monthly = netto > 0 ? (netto * r) / (1 - Math.pow(1 + r, -months)) : 0;

    const payback = saving > 0 ? netto / (saving * 12) : 0;

    return { investment, premies, netto, saving, monthly, payback, count: chosen.length };
  }, [heating, epc, heatCost, elecCost, selected]);

  return (
    <section id="configurator" className="bg-navy-gradient py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Energieconfigurator
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight text-white lg:text-4xl">
            Bereken uw besparing in 1 minuut
          </h2>
          <p className="mt-4 text-white/70">
            Stel uw pakket samen en zie meteen wat u kan besparen, welke premies u kan
            krijgen en wat uw maandlast wordt.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Stap 1 */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur lg:p-8">
            <h3 className="font-heading text-xl font-bold uppercase text-white">
              1. Uw huidige situatie
            </h3>

            <div className="mt-6">
              <p className="text-sm font-semibold text-white/80">Hoe verwarmt u nu?</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(Object.keys(heatingLabels) as Heating[]).map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setHeating(h)}
                    className={
                      "rounded-md border px-3 py-2.5 text-sm font-semibold transition-colors " +
                      (heating === h
                        ? "border-transparent bg-brand-gradient text-primary-foreground"
                        : "border-white/20 text-white/75 hover:bg-white/10")
                    }
                  >
                    {heatingLabels[h]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-white/80">EPC-label van uw woning</p>
              <div className="mt-3 grid grid-cols-5 gap-2">
                {epcLabels.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setEpc(l)}
                    className={
                      "rounded-md border px-2 py-2.5 text-sm font-semibold transition-colors " +
                      (epc === l
                        ? "border-transparent bg-brand-gradient text-primary-foreground"
                        : "border-white/20 text-white/75 hover:bg-white/10")
                    }
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <label className="block">
                <span className="flex items-center justify-between text-sm font-semibold text-white/80">
                  Verwarmingskosten per maand
                  <span className="text-white">{eur(heatCost)}</span>
                </span>
                <input
                  type="range"
                  min={40}
                  max={400}
                  step={10}
                  value={heatCost}
                  onChange={(e) => setHeatCost(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--brand-purple)]"
                />
              </label>
              <label className="block">
                <span className="flex items-center justify-between text-sm font-semibold text-white/80">
                  Elektriciteit per maand
                  <span className="text-white">{eur(elecCost)}</span>
                </span>
                <input
                  type="range"
                  min={30}
                  max={300}
                  step={10}
                  value={elecCost}
                  onChange={(e) => setElecCost(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--brand-purple)]"
                />
              </label>
            </div>

            <div className="mt-8">
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                2. Kies uw pakket
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {packageItems.map((item) => {
                  const active = selected[item.key];
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setSelected((s) => ({ ...s, [item.key]: !s[item.key] }))
                      }
                      className={
                        "flex items-start gap-3 rounded-xl border p-4 text-left transition-colors " +
                        (active
                          ? "border-primary/70 bg-white/10"
                          : "border-white/15 hover:bg-white/5")
                      }
                    >
                      <span
                        className={
                          "grid size-9 shrink-0 place-items-center rounded-md " +
                          (active ? "bg-brand-gradient" : "bg-white/10")
                        }
                      >
                        <Icon className="size-4 text-white" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">
                          {item.label}
                        </span>
                        <span className="block text-xs text-white/60">
                          vanaf {eur(item.price)}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Resultaat */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur lg:p-8">
            <h3 className="font-heading text-xl font-bold uppercase text-white">
              Uw voorstel
            </h3>

            {result.count === 0 ? (
              <p className="mt-6 text-sm text-white/70">
                Kies minstens één techniek om uw berekening te zien.
              </p>
            ) : (
              <>
                <div className="mt-6 rounded-xl border border-white/15 bg-white/5 p-5">
                  <p className="text-sm text-white/70">Geschatte besparing</p>
                  <p className="mt-1 font-heading text-4xl font-bold text-brand-gradient">
                    {eur(result.saving)}
                    <span className="text-base text-white/60"> / maand</span>
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    ≈ {eur(result.saving * 12)} per jaar
                  </p>
                </div>

                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <dt className="text-white/70">Totaalpakket</dt>
                    <dd className="font-semibold text-white">{eur(result.investment)}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <dt className="text-white/70">Premies &amp; subsidies</dt>
                    <dd className="font-semibold text-accent">− {eur(result.premies)}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <dt className="text-white/70">Netto investering</dt>
                    <dd className="font-semibold text-white">{eur(result.netto)}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <dt className="text-white/70">Financiering (10 jaar)</dt>
                    <dd className="font-semibold text-white">
                      {eur(result.monthly)} / maand
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-white/70">Terugverdientijd</dt>
                    <dd className="font-semibold text-white">
                      ± {result.payback.toFixed(1)} jaar
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="#offerte"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow"
                  >
                    Krijg dit voorstel <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="#offerte"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Maak afspraak
                  </a>
                </div>
              </>
            )}

            <p className="mt-5 text-xs leading-relaxed text-white/50">
              Alle bedragen zijn indicatief en gebaseerd op gemiddelde verbruiken en
              actuele premiebedragen. Uw definitieve prijs en besparing bepalen we na een
              gratis opmeting ter plaatse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
