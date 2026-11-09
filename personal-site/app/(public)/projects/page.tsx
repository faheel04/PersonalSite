import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-serif text-3xl">Projects</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="rounded-xl border border-line bg-surface p-4"
          >
            <h2 className="font-serif text-lg">{p.title}</h2>
            <p className="mt-1 text-sm text-muted">{p.summary}</p>
            <p className="mt-3 text-xs text-violet">{p.stack.join(" · ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}