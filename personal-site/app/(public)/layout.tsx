import { SiteNav } from "@/components/site-nav";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-3xl px-5 py-10">{children}</main>
      
    </>
  );
}