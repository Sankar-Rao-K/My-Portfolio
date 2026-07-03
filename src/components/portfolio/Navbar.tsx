import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

type NavItem =
  | { type: "anchor"; hash: string; label: string }
  | { type: "route"; to: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { type: "anchor", hash: "#about", label: "About" },
  { type: "anchor", hash: "#skills", label: "Skills" },
  { type: "anchor", hash: "#projects", label: "Projects" },
  { type: "anchor", hash: "#experience", label: "Experience" },
  { type: "anchor", hash: "#certifications", label: "Certifications" },
  { type: "anchor", hash: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy only makes sense on the home page, where the sections live.
  useEffect(() => {
    if (!onHome) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    const anchors = NAV_ITEMS.filter((l): l is Extract<NavItem, { type: "anchor" }> => l.type === "anchor");
    anchors.forEach((l) => {
      const el = document.querySelector(l.hash);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [onHome]);

  // From another page, "#about" needs to become "/#about" so it routes home first.
  const anchorHref = (hash: string) => (onHome ? hash : `/${hash}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group inline-flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent/15 text-accent font-display font-bold">
            SK
          </span>
          <span className="hidden sm:inline font-display font-semibold tracking-tight">Sankar Rao</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((l) => {
            if (l.type === "route") {
              const isActive = pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-accent" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {isActive && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" />}
                </Link>
              );
            }
            const isActive = onHome && active === l.hash;
            return (
              <a
                key={l.hash}
                href={anchorHref(l.hash)}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  isActive ? "text-accent" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {l.label}
                {isActive && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" />}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-accent-foreground"
          >
            <FileText className="h-3.5 w-3.5" /> Resume
          </a>
          <ThemeToggle />
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-5 py-3 flex flex-col">
            {NAV_ITEMS.map((l) =>
              l.type === "route" ? (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm text-foreground/80 hover:text-accent"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.hash}
                  href={anchorHref(l.hash)}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm text-foreground/80 hover:text-accent"
                >
                  {l.label}
                </a>
              )
            )}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-sm font-medium text-accent w-fit"
            >
              <FileText className="h-3.5 w-3.5" /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
