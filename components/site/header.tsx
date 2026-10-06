"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { identity } from "@/content/site";

const links = [
  { href: "#realisations", label: "Réalisations" },
  { href: "#expertises", label: "Expertises" },
  { href: "#journey", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 text-white mix-blend-difference sm:px-10">
        <a
          href="#top"
          className="font-heading text-lg font-bold tracking-tight"
          aria-label={`${identity.name}, retour en haut`}
        >
          Julian<span className="font-light">Delepine</span>
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden text-sm font-medium underline-offset-4 hover:underline sm:block"
          >
            Me contacter
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex size-11 cursor-pointer items-center justify-center"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-foreground text-background transition-[clip-path] duration-500 ease-[cubic-bezier(.7,0,.2,1)] motion-reduce:transition-none ${
          open
            ? "[clip-path:inset(0_0_0_0)]"
            : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        inert={!open}
      >
        <div className="flex items-center justify-between px-5 py-5 sm:px-10">
          <span className="font-heading text-lg font-bold">
            Julian<span className="font-light">Delepine</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex size-11 cursor-pointer items-center justify-center"
            aria-label="Fermer le menu"
          >
            <X className="size-6" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-5 sm:px-10">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 font-heading text-[13vw] font-bold leading-[0.95] tracking-tighter transition-colors hover:text-accent sm:text-[8vw]"
            >
              <span className="text-sm font-normal tracking-normal text-background/50">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap justify-between gap-4 px-5 py-6 text-sm text-background/60 sm:px-10">
          <a href={`mailto:${identity.email}`} className="hover:text-background">
            {identity.email}
          </a>
          <span>{identity.location}</span>
        </div>
      </div>
    </>
  );
}
