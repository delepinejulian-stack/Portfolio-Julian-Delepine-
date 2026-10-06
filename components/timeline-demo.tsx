"use client";

import Timeline, { type JourneyItem } from "@/components/ui/timeline";
import { ArrowDown } from "lucide-react";

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

const settings = {
  textColor: "var(--color-foreground, #fafafa)",
  mutedTextColor: "var(--color-muted-foreground, #a1a1aa)",
  activeColor: "var(--color-accent, #ec4899)",
  backgroundColor: "var(--color-background, #09090b)",
  duration: 1.4,
};

export default function TimelineDemo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  return (
    <main className="bg-background text-foreground">
      {/* Intro : donne au timeline épinglé un espace pour arriver. */}
      <section className="flex h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Communication · Audiovisuel · Direction artistique
        </p>
        <h1 className="max-w-[18ch] text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Julian Delepine
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Créatif et polyvalent, entre production audiovisuelle, communication
          et vente. Faites défiler pour découvrir mon parcours.
        </p>
        <ArrowDown
          aria-hidden
          className="mt-2 size-5 animate-bounce text-accent"
        />
      </section>

      <Timeline
        title="Mon parcours"
        periodLabel="2024 — 2026"
        topItems={topItems}
        bottomItems={bottomItems}
        backgroundColor={s.backgroundColor}
        textColor={s.textColor}
        mutedTextColor={s.mutedTextColor}
        activeColor={s.activeColor}
        imageUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Caméra de tournage sur un plateau"
        duration={s.duration}
      />

      <section className="flex h-screen items-center justify-center px-6 text-center text-sm text-muted-foreground">
        Du terrain associatif aux plateaux de tournage : prochaine étape, une alternance en communication.
      </section>
    </main>
  );
}
