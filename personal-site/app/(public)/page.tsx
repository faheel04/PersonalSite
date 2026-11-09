import { about } from "@/content/about";

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-serif text-3xl">{about.headline}</h1>
      <div className="mt-6 space-y-4 text-muted">
        {about.bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <ul className="mt-6 flex flex-wrap gap-2 text-xs">
        {about.skills.map((s) => (
          <li key={s} className="rounded-full border border-line px-3 py-1">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}