import {
  Bath,
  BatteryCharging,
  Flame,
  Hammer,
  Home,
  Layers,
  Sun,
  Zap,
  type LucideIcon,
} from "lucide-react";

import svcSolar from "@/assets/svc-solar.jpg";
import svcBattery from "@/assets/svc-battery.jpg";
import svcHeatpump from "@/assets/svc-heatpump.jpg";
import svcFacade from "@/assets/svc-facade.jpg";
import svcRoof from "@/assets/svc-roof.jpg";
import svcBathroom from "@/assets/svc-bathroom.jpg";
import svcElectric from "@/assets/svc-electric.jpg";
import svcInterior from "@/assets/svc-interior.jpg";
import projSolarInstall from "@/assets/proj-solar-install.jpg";
import projFacade from "@/assets/proj-facade.jpg";
import projTechniek from "@/assets/proj-techniek.jpg";
import projBadkamer from "@/assets/proj-badkamer.jpg";

export const contact = {
  phone: "+32 470 00 00 00",
  phoneHref: "tel:+32470000000",
  email: "info@novantis.be",
  region: "Actief in heel Vlaanderen",
};

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  text: string;
  img: string;
  intro: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "zonnepanelen",
    icon: Sun,
    title: "Zonnepanelen",
    text: "Hoogrendementspanelen met optimale opbrengst, netjes geïnstalleerd en volledig gekeurd.",
    img: svcSolar,
    intro:
      "Wek uw eigen stroom op met hoogrendementspanelen. Wij berekenen het ideale aantal panelen voor uw dak en verbruik, plaatsen alles vakkundig en zorgen voor de keuring.",
    bullets: [
      "Gratis dakstudie en opbrengstberekening",
      "A-merken panelen en omvormers",
      "Plaatsing op pannendak, plat dak of bijgebouw",
      "Keuring en administratie volledig geregeld",
    ],
  },
  {
    slug: "thuisbatterijen",
    icon: BatteryCharging,
    title: "Thuisbatterijen",
    text: "Uw eigen stroom opslaan en 's avonds gebruiken. Maximale zelfconsumptie, lagere factuur.",
    img: svcBattery,
    intro:
      "Met een thuisbatterij gebruikt u 's avonds de stroom die u overdag opwekt. Zo verhoogt u uw zelfconsumptie sterk en verlaagt u uw energiefactuur verder.",
    bullets: [
      "Advies over de juiste capaciteit (5 tot 15 kWh)",
      "Combineerbaar met bestaande zonnepanelen",
      "Slimme sturing en monitoring via app",
      "Uitbreidbaar met laadpaal voor uw wagen",
    ],
  },
  {
    slug: "warmtepompen",
    icon: Flame,
    title: "Warmtepompen",
    text: "Lucht-water en lucht-lucht warmtepompen voor verwarming, koeling en sanitair warm water.",
    img: svcHeatpump,
    intro:
      "Verwarmen zonder gas of stookolie. Wij bekijken de isolatiegraad van uw woning en stellen de warmtepomp voor die bij uw verwarmingssysteem past.",
    bullets: [
      "Lucht-water, lucht-lucht en hybride oplossingen",
      "Ook warmtepompboiler voor sanitair warm water",
      "Verwarmen én koelen in één toestel",
      "Wij rekenen de premies voor u uit",
    ],
  },
  {
    slug: "gevelrenovaties",
    icon: Layers,
    title: "Gevelrenovaties",
    text: "Gevelisolatie, crepi, sierpleister en steenstrips. Beter isoleren met een nieuwe look.",
    img: svcFacade,
    intro:
      "Een nieuwe gevel doet meer dan mooi staan: met buitenisolatie bespaart u direct op uw verwarming en krijgt uw woning een volledig nieuwe uitstraling.",
    bullets: [
      "Buitenisolatie met crepi of sierpleister",
      "Steenstrips en gevelbekleding",
      "Gevelreiniging en herstel van voegwerk",
      "Inclusief werfinrichting en afvoer",
    ],
  },
  {
    slug: "dakrenovaties",
    icon: Home,
    title: "Dakrenovaties",
    text: "Volledige dakvernieuwing, dakisolatie en waterdichting. Duurzaam en winddicht.",
    img: svcRoof,
    intro:
      "Van een lekkend dak tot een volledige dakvernieuwing met isolatie: wij pakken hellende en platte daken aan, met aandacht voor detail en waterdichting.",
    bullets: [
      "Hellende daken: pannen, isolatie, onderdak",
      "Platte daken: EPDM en roofing",
      "Dakgoten, zink- en koperwerk",
      "Perfect afgestemd met plaatsing zonnepanelen",
    ],
  },
  {
    slug: "sanitair-badkamers",
    icon: Bath,
    title: "Sanitair & badkamers",
    text: "Volledige badkamerrenovatie: leidingwerk, tegelwerk en plaatsing, sleutel-op-de-deur.",
    img: svcBathroom,
    intro:
      "Uw badkamer volledig vernieuwd door één ploeg: afbraak, leidingwerk, tegelwerk, sanitair en afwerking. Sleutel-op-de-deur, met vaste prijs.",
    bullets: [
      "3D-ontwerp en materiaalkeuze samen met u",
      "Volledig nieuw leidingwerk en afvoer",
      "Tegelwerk, inloopdouche en meubels",
      "Ook toiletten en technische ruimtes",
    ],
  },
  {
    slug: "elektriciteit",
    icon: Zap,
    title: "Elektriciteit",
    text: "Nieuwe installaties, zekeringkasten, laadpalen en keuring conform AREI.",
    img: svcElectric,
    intro:
      "Van een nieuwe zekeringkast tot de volledige elektriciteit van uw woning. Alles wordt uitgevoerd en gekeurd conform AREI.",
    bullets: [
      "Volledige herbekabeling bij renovatie",
      "Nieuwe zekeringkast en differentiëlen",
      "Laadpalen voor elektrische wagens",
      "Keuring en attest inbegrepen",
    ],
  },
  {
    slug: "binnenafwerking",
    icon: Hammer,
    title: "Binnenafwerking",
    text: "Pleisterwerk, vloeren, gyproc, schilderwerk en maatwerk. Afgewerkt tot in detail.",
    img: svcInterior,
    intro:
      "De laatste — en meest zichtbare — fase van uw project. Onze afwerkingsploeg zorgt voor een strak resultaat tot in de details.",
    bullets: [
      "Pleisterwerk en gyprocwanden",
      "Vloeren: tegels, parket en laminaat",
      "Schilderwerk en decoratieve afwerking",
      "Maatwerk en binnendeuren",
    ],
  },
];

export const projects = [
  {
    img: projSolarInstall,
    title: "Zonnepanelen op pannendak",
    place: "Antwerpen",
    text: "18 panelen met omvormer en monitoring, geplaatst en gekeurd in één dag.",
  },
  {
    img: projFacade,
    title: "Gevelrenovatie & isolatie",
    place: "Mechelen",
    text: "Buitenisolatie met crepi, inclusief nieuwe dorpels en dakgoten.",
  },
  {
    img: projTechniek,
    title: "Warmtepomp & thuisbatterij",
    place: "Lier",
    text: "Lucht-waterwarmtepomp gecombineerd met een batterij van 10 kWh.",
  },
  {
    img: projBadkamer,
    title: "Badkamer volledig afgewerkt",
    place: "Brasschaat",
    text: "Sleutel-op-de-deur renovatie met inloopdouche en vloerverwarming.",
  },
];

export const steps = [
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

export const reasons = [
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

export const faqs = [
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

export const testimonials = [
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

export const team = [
  {
    name: "Tom Verheyen",
    role: "Energie-adviseur",
    focus: "Zonnepanelen, batterijen, warmtepompen & laadpalen",
  },
  {
    name: "Lotte De Smet",
    role: "Renovatie-adviseur",
    focus: "Dak-, gevelrenovaties en badkamers",
  },
  {
    name: "Jeroen Maes",
    role: "Technisch adviseur",
    focus: "Ventilatie, verwarming en sanitair",
  },
];
