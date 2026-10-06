"use client";

import { useRef, useState } from "react";
import { ArrowDown, Pause, Play } from "lucide-react";
import { hero, identity } from "@/content/site";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="top"
      className="relative flex h-svh min-h-[560px] w-full flex-col justify-end overflow-hidden bg-black text-white"
    >
      {hero.video ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={hero.video}
          poster={hero.poster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={hero.poster}
          alt=""
          className="hero-zoom absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

      <div className="relative z-10 px-5 pb-10 sm:px-10 sm:pb-14">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
          {hero.kicker}
        </p>
        <h1 className="font-heading text-[16vw] font-bold leading-[0.88] tracking-[-0.04em] sm:text-[11vw]">
          {hero.headline.map((line, i) => (
            <span key={line} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
              <span
                className="hero-line block"
                style={{ animationDelay: `${0.15 + i * 0.12}s` }}
              >
                {i === hero.headline.length - 1 ? (
                  <>
                    {line.replace(/\.$/, "")}
                    <span className="text-accent">.</span>
                  </>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-base leading-relaxed text-white/80">
            <strong className="font-semibold text-white">{identity.name}</strong>
            {" · "}
            {hero.intro}
          </p>
          <div className="flex items-center gap-3">
            {hero.video && (
              <button
                type="button"
                onClick={toggle}
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-black"
                aria-label={playing ? "Mettre la vidéo en pause" : "Lire la vidéo"}
              >
                {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
              </button>
            )}
            <a
              href="#realisations"
              className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent"
            >
              Voir mes réalisations
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {hero.placeholder && (
        <span className="absolute right-5 top-20 z-10 rounded-full bg-black/50 px-3 py-1 text-[11px] text-white/70 backdrop-blur sm:right-10">
          Visuel provisoire
        </span>
      )}
    </section>
  );
}
