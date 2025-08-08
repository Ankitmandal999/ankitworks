import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="font-display text-lg tracking-tight story-link">
          Ankit Mandal
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#projects" className="hidden sm:block">
            <Button size="sm" variant="secondary">View My Work</Button>
          </a>
          <a href="/ankit-mandal-resume.pdf" download className="hidden sm:block">
            <Button size="sm" variant="outline">Download Resume</Button>
          </a>
          <a href="#contact">
            <Button size="sm" variant="hero">Let's Connect</Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
