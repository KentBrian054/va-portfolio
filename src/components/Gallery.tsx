"use client";

import { useState } from "react";
import { categories, projects } from "@/data/site";

export default function Gallery() {
  const [active, setActive] = useState<string>("all");
  const shown = projects.filter((p) => active === "all" || p.category === active);

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === c.id
                ? "border-ink bg-ink text-white"
                : "border-line bg-white hover:border-ink"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-lg">
            {p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.image} alt={p.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            ) : (
              <div className="grid aspect-[4/3] place-items-center font-semibold text-white" style={{ background: p.color }}>
                {p.label}
              </div>
            )}
            <div className="px-5 py-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-muted">{p.tool}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
