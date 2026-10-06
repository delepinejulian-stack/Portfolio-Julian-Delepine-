import { photos } from "@/content/site";

/* Bande photo horizontale, défilable au doigt ou à la molette (shift). */
export default function PhotoStrip() {
  return (
    <section aria-label="Photographie" className="bg-foreground py-24 text-background sm:py-32">
      <div className="mb-10 flex items-end justify-between gap-6 px-5 sm:px-10">
        <h2 className="font-heading text-[12vw] font-bold leading-[0.9] tracking-[-0.04em] sm:text-[6vw]">
          En images
        </h2>
        <p className="max-w-xs text-sm text-background/60">
          Plateaux, coulisses, événements. Faites glisser pour parcourir.
          {photos.placeholder && " (Visuels provisoires.)"}
        </p>
      </div>
      <ul
        tabIndex={0}
        aria-label="Galerie photo, défilement horizontal"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:thin] sm:px-10"
      >
        {photos.items.map((p, i) => (
          <li
            key={p.src}
            className={`shrink-0 snap-start overflow-hidden ${
              i % 2 ? "h-[60vh] w-[70vw] sm:w-[45vw]" : "h-[60vh] w-[60vw] sm:w-[28vw]"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
