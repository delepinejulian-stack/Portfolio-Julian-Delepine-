"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";
import { categories, projects, type Category, type Project } from "@/content/site";
import { cn } from "@/lib/utils";

/* Rythme éditorial de la grille : une grande pièce, puis des paires décalées. */
const layout = [
  "md:col-span-12 aspect-[16/9]",
  "md:col-span-7 aspect-[4/3]",
  "md:col-span-5 aspect-[4/5] md:mt-24",
  "md:col-span-5 aspect-[4/5]",
  "md:col-span-7 aspect-[4/3] md:mt-24",
];

function hasVideo(p: Project) {
  return p.media && p.media.type !== "images";
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shape = layout[index % layout.length];
  const [col, ...frame] = shape.split(" ");

  return (
    <article className={cn("col-span-12", col, frame.filter((c) => c.startsWith("md:mt")))}>
      <button
        type="button"
        onClick={onOpen}
        onMouseEnter={() => videoRef.current?.play().catch(() => {})}
        onMouseLeave={() => videoRef.current?.pause()}
        className="group block w-full cursor-pointer text-left"
        aria-label={`Voir le projet ${project.title}, ${project.client}`}
      >
        <div
          className={cn(
            "relative w-full overflow-hidden bg-muted",
            frame.filter((c) => c.startsWith("aspect")),
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />
          {project.previewVideo && (
            <video
              ref={videoRef}
              src={project.previewVideo}
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          {hasVideo(project) && (
            <span className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-white text-black">
              <Play className="size-4 fill-current" />
            </span>
          )}
          {project.placeholder && (
            <span className="absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
              Visuel provisoire
            </span>
          )}
          <span className="absolute bottom-4 right-4 flex size-12 translate-y-3 items-center justify-center rounded-full bg-accent text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
            <ArrowUpRight className="size-5" />
          </span>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.client} · {project.role}
            </p>
          </div>
          <div className="shrink-0 text-right text-sm">
            <p className="font-medium">{project.category}</p>
            <p className="text-muted-foreground">{project.year}</p>
          </div>
        </div>
      </button>
    </article>
  );
}

function MediaView({ project }: { project: Project }) {
  const m = project.media;
  const frame = "aspect-video w-full bg-black";
  if (m?.type === "youtube")
    return (
      <iframe
        className={frame}
        src={`https://www.youtube-nocookie.com/embed/${m.id}?autoplay=1&rel=0`}
        title={project.title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    );
  if (m?.type === "vimeo")
    return (
      <iframe
        className={frame}
        src={`https://player.vimeo.com/video/${m.id}?autoplay=1`}
        title={project.title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  if (m?.type === "video")
    return <video className={frame} src={m.src} controls autoPlay playsInline />;
  if (m?.type === "images")
    return (
      <div className="grid gap-2 sm:grid-cols-2">
        {m.srcs.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt={`${project.title}, photo ${i + 1}`} className="w-full object-cover" />
        ))}
      </div>
    );
  return (
    <div className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={project.cover} alt="" className="aspect-video w-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/55 p-6 text-center text-white">
        <p className="max-w-sm text-sm">
          Les images de ce projet arrivent bientôt.
        </p>
      </div>
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) d.showModal();
    if (!project && d.open) d.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-[min(1100px,calc(100%-2rem))] max-w-none bg-background p-0 text-foreground backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      {project && (
        <div>
          <MediaView project={project} />
          <div className="flex flex-col gap-6 p-6 sm:flex-row sm:justify-between sm:p-10">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {project.category} · {project.year}
              </p>
              <h3 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                {project.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            <dl className="grid shrink-0 grid-cols-2 gap-x-8 gap-y-3 text-sm sm:block sm:space-y-3">
              <div>
                <dt className="text-muted-foreground">Client</dt>
                <dd className="font-medium">{project.client}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Rôle</dt>
                <dd className="font-medium">{project.role}</dd>
              </div>
            </dl>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex size-11 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow"
            aria-label="Fermer"
          >
            <X className="size-5" />
          </button>
        </div>
      )}
    </dialog>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Category | "Tout">("Tout");
  const [open, setOpen] = useState<Project | null>(null);
  const used = categories.filter((c) => projects.some((p) => p.category === c));
  const list = filter === "Tout" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="realisations" className="scroll-mt-20 px-5 py-24 sm:px-10 sm:py-32">
      <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-heading text-[14vw] font-bold leading-[0.9] tracking-[-0.04em] sm:text-[8vw]">
          Réalisations
          <sup className="ml-2 align-super text-[0.25em] font-medium tracking-normal text-accent">
            {projects.length}
          </sup>
        </h2>
        <div role="group" aria-label="Filtrer les projets" className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
          {(["Tout", ...used] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={cn(
                "h-11 cursor-pointer rounded-full border px-5 text-sm font-medium transition-colors",
                filter === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-16 md:gap-x-10">
        {list.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} onOpen={() => setOpen(p)} />
        ))}
      </div>

      <ProjectDialog project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
