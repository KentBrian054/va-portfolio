import Gallery from "@/components/Gallery";
import { packages, services, site, testimonials, tools } from "@/data/site";

function Heading({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-extrabold">{title}</h2>
      <p className="text-muted">{sub}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-4">
        <nav className="flex items-center justify-between py-5">
          <a href="#" className="text-xl font-extrabold">
            {site.name.split(" ")[0]}
            <span className="text-accent">{site.name.split(" ").slice(1).join(" ")}</span>
          </a>
          <ul className="hidden gap-6 text-sm md:flex">
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Portfolio</a></li>
            <li><a href="#pricing">Packages</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <header className="grid items-center gap-10 py-14 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-accent">{site.role}</span>
            <h1 className="my-4 text-4xl font-extrabold leading-tight md:text-6xl">
              {site.headline}{" "}
              <em className="bg-gradient-to-r from-accent to-violet bg-clip-text not-italic text-transparent">{site.highlight}</em>
            </h1>
            <p className="max-w-md text-muted">{site.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.bookingUrl} className="rounded-full bg-ink px-6 py-3 font-semibold text-white">Book a discovery call</a>
              <a href="#work" className="rounded-full border-2 border-ink px-6 py-3 font-semibold">See my work</a>
            </div>
          </div>
          <div className="grid aspect-square place-items-center rounded-[2rem] bg-gradient-to-br from-accent to-violet font-semibold text-white">
            [ Your photo here ]
          </div>
        </header>

        <section id="services" className="py-14">
          <Heading title="What I can do for you" sub="Design tasks you can hand off today." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-line bg-white p-6">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mb-1 mt-2 font-semibold">{s.title}</h3>
                <p className="text-sm text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="py-14">
          <Heading title="Portfolio" sub="Selected projects. Replace these with your best Canva exports." />
          <Gallery />
        </section>

        <section className="py-14">
          <Heading title="How we'll work together" sub="Simple, clear and stress-free." />
          <ol className="grid gap-5 md:grid-cols-4">
            {[
              ["1. Brief", "Share your brand, goals and examples you like."],
              ["2. Draft", "First designs delivered in 24-48 hours."],
              ["3. Revise", "Feedback rounds until it feels right."],
              ["4. Deliver", "Final files plus editable Canva templates."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-semibold text-violet">{t}</h3>
                <p className="text-sm text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-14">
          <Heading title="Tools I use" sub="Comfortable working inside your accounts and workflow." />
          <div className="flex flex-wrap gap-3">
            {tools.map((t) => (
              <span key={t} className="rounded-xl border border-line bg-white px-5 py-2.5 font-semibold">{t}</span>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-14">
          <Heading title="Packages" sub="Simple, flexible options (adjust to your rates)." />
          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-semibold">{p.name}</h3>
                <div className="my-1 text-3xl font-extrabold text-violet">{p.price}</div>
                <p className="text-sm text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14">
          <Heading title="Kind words" sub="Add real client or practice-project feedback here." />
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl border border-line bg-white p-6">
                <blockquote className="italic text-muted">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 font-semibold">{t.name} <span className="font-normal text-muted">· {t.meta}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      <footer id="contact" className="bg-ink px-4 py-16 text-center text-white">
        <h2 className="mb-2 text-3xl font-extrabold">Let&apos;s make your brand look amazing</h2>
        <p className="opacity-75">
          {site.email} · {site.links.map((l) => l.label).join(" · ")}
        </p>
        <a href={`mailto:${site.email}`} className="mt-6 inline-block rounded-full bg-accent px-7 py-3 font-semibold">Hire me</a>
      </footer>
    </>
  );
}
