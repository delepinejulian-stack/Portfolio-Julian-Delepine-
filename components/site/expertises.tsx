"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { expertises } from "@/content/site";

/* Liste façon « services » : grands intitulés, une image suit le curseur au survol. */
export default function Expertises() {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 120}px)`;
  };

  return (
    <section
      id="expertises"
      className="scroll-mt-20 bg-background px-5 py-24 sm:px-10 sm:py-32"
      onMouseMove={onMove}
    >
      <div className="mb-12 grid gap-6 lg:grid-cols-12">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground lg:col-span-4">
          Ce que je fais
        </p>
        <p className="font-heading text-2xl font-semibold leading-snug tracking-tight sm:text-4xl lg:col-span-8">
          Du tournage au post, de l&apos;idée à l&apos;événement : un profil
          polyvalent, à l&apos;aise sur le terrain comme derrière l&apos;écran.
        </p>
      </div>

      <ul className="border-t border-foreground">
        {expertises.map((x, i) => (
          <li
            key={x.title}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="group grid grid-cols-12 items-center gap-4 border-b border-border py-6 transition-colors hover:border-foreground sm:py-8"
          >
            <span className="col-span-2 text-sm text-muted-foreground sm:col-span-1">
              0{i + 1}
            </span>
            <h3 className="col-span-10 font-heading text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 motion-reduce:transition-none sm:col-span-6 sm:text-5xl">
              {x.title}
            </h3>
            <p className="col-span-10 col-start-3 text-muted-foreground sm:col-span-4 sm:col-start-auto">
              {x.text}
            </p>
            <ArrowUpRight
              aria-hidden
              className="hidden size-6 justify-self-end text-accent opacity-0 transition-opacity group-hover:opacity-100 sm:col-span-1 sm:block"
            />
          </li>
        ))}
      </ul>

      <div
        ref={previewRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-60 w-48 overflow-hidden transition-opacity duration-200 lg:block"
        style={{ opacity: active === null ? 0 : 1 }}
      >
        {expertises.map((x, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={x.title}
            src={x.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200"
            style={{ opacity: active === i ? 1 : 0 }}
          />
        ))}
      </div>
    </section>
  );
}
