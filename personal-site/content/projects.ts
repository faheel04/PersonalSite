export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  repo?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "personal-site",
    title: "This site",
    summary: "A music platform and blog with a custom admin, built from scratch.",
    stack: ["Next.js", "Postgres", "Drizzle", "Tailwind"],
  },
];