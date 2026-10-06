import { clients } from "@/content/site";

export default function Marquee() {
  const row = [...clients, ...clients];
  return (
    <section
      aria-label="Ils m'ont fait confiance"
      className="border-y border-border bg-background py-8"
    >
      <p className="mb-6 px-5 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground sm:px-10">
        Ils m&apos;ont fait confiance
      </p>
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        {[0, 1].map((k) => (
          <ul
            key={k}
            aria-hidden={k === 1}
            className="marquee flex shrink-0 items-center gap-16 pr-16"
          >
            {row.map((c, i) => (
              <li
                key={`${c}-${i}`}
                className="whitespace-nowrap font-heading text-3xl font-semibold tracking-tight text-foreground/80 sm:text-5xl"
              >
                {c}
                <span aria-hidden className="ml-16 text-accent">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
