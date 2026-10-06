"use client";

import Timeline, { type JourneyItem } from "@/components/ui/timeline";

/* Parcours de Julian, tiré de son CV. Les items alternent haut / bas
   dans l'ordre chronologique (4 en haut, 3 en bas). */
const topItems: JourneyItem[] = [
  {
    id: "2024-september",
    year: "2024",
    month: "September",
    label: "2024 — 2026",
    content:
      "Scouts EEUDF Nice : responsable bénévole et community manager",
  },
  {
    id: "2025-july",
    year: "2025",
    month: "July",
    label: "Juillet 2025",
    content: "JD Sport Cagnes-sur-Mer : shop-fit et vente polyvalente",
  },
  {
    id: "2025-november",
    year: "2025",
    month: "November",
    label: "Novembre 2025",
    content: "PG Production : réalisation d'un clip musical",
  },
  {
    id: "2026-september",
    year: "2026",
    month: "September",
    label: "Septembre 2026",
    content: "En recherche d'alternance en communication, 2 jours école / 3 jours entreprise",
  },
];

const bottomItems: JourneyItem[] = [
  {
    id: "2025-january",
    year: "2025",
    month: "January",
    label: "Janvier 2025",
    content: "Mairie de Cagnes-sur-Mer : stage communication et protocole",
  },
  {
    id: "2025-october",
    year: "2025",
    month: "October",
    label: "Octobre 2025",
    content: "Villa Cameline : organisation de vernissages et d'événements culturels",
  },
  {
    id: "2025-december",
    year: "2025",
    month: "December",
    label: "Décembre 2025",
    content: "PG Production : organisation d'une release party",
  },
];

/* Section « Parcours » de la page d'accueil, sur fond clair. */
export default function TimelineDemo() {
  return (
    <Timeline
      title="Mon parcours"
      periodLabel="2024 — 2026"
      topItems={topItems}
      bottomItems={bottomItems}
      backgroundColor="var(--color-background)"
      textColor="var(--color-foreground)"
      mutedTextColor="var(--color-muted-foreground)"
      activeColor="var(--color-accent)"
      imageUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80"
      imageAlt="Caméra de tournage sur un plateau"
      duration={1.4}
    />
  );
}
