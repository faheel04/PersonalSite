"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-serif text-lg">
          Faheel
        </Link>
        <ul className="flex gap-5 text-sm text-muted">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "border-b border-violet pb-1 text-ink"
                      : "hover:text-ink"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}