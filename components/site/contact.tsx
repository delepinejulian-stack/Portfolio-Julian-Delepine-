import { ArrowUpRight } from "lucide-react";
import { identity } from "@/content/site";

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="scroll-mt-20 bg-foreground px-5 pt-24 text-background sm:px-10 sm:pt-32">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-background/60">
        Un projet, une alternance ?
      </p>
      <a
        href={`mailto:${identity.email}`}
        className="group mt-6 flex items-end gap-4 font-heading text-[15vw] font-bold leading-[0.88] tracking-[-0.05em] transition-colors hover:text-accent sm:text-[10vw]"
      >
        Parlons-en
        <ArrowUpRight className="mb-[1.5vw] size-[9vw] shrink-0 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 sm:size-[6vw]" />
      </a>

      <div className="mt-16 grid gap-10 border-t border-background/20 py-10 sm:grid-cols-3">
        <div>
          <p className="text-sm text-background/60">Écrire</p>
          <a href={`mailto:${identity.email}`} className="mt-1 block text-lg font-medium underline-offset-4 hover:underline">
            {identity.email}
          </a>
        </div>
        <div>
          <p className="text-sm text-background/60">Disponibilité</p>
          <p className="mt-1 text-lg">{identity.availability}</p>
        </div>
        <div>
          <p className="text-sm text-background/60">Basé à</p>
          <p className="mt-1 text-lg">{identity.location}</p>
          {identity.socials.length > 0 && (
            <ul className="mt-4 flex gap-4">
              {identity.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-4 border-t border-background/20 py-6 text-xs text-background/50">
        <span>© {year} {identity.name}</span>
        <a href="#top" className="hover:text-background">Retour en haut ↑</a>
      </div>
    </footer>
  );
}
