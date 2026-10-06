import { stats } from "@/content/site";

export default function Stats() {
  return (
    <section aria-label="En chiffres" className="bg-accent px-5 py-20 text-black sm:px-10 sm:py-28">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse justify-end border-t border-black/30 pt-5">
            <dt className="mt-3 max-w-[16ch] text-sm font-medium sm:text-base">
              {s.label}
            </dt>
            <dd className="font-heading text-6xl font-bold tracking-[-0.04em] sm:text-8xl">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
