import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/ankit-profile.png";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
    ref.current.style.setProperty("--mx", `${x}px`);
    ref.current.style.setProperty("--my", `${y}px`);
  };

  return (
    <section id="home" className="pt-24 md:pt-28">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="relative overflow-hidden rounded-xl border bg-card"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), hsl(var(--brand)/0.18), transparent 40%)",
          }}
        />
        <div className="container relative grid md:grid-cols-[1.2fr_1fr] gap-10 items-center py-16 md:py-20">
          <div className="text-left animate-enter">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              Transforming Data into Strategic Business Insights
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
              Ankit Mandal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Data Analyst | Power BI Specialist
            </p>
            <div className="flex items-center gap-3">
              <a href="#projects"><Button variant="hero" size="lg">View My Work</Button></a>
              <a href="#contact"><Button variant="outline" size="lg">Let's Connect</Button></a>
              <a href="/ankit-mandal-resume.pdf" download>
                <Button variant="secondary" size="lg">Download Resume</Button>
              </a>
            </div>
          </div>
          <div className="flex md:justify-end">
            <img
              src={profileImg}
              alt="Professional profile photo placeholder for Ankit Mandal"
              className="size-44 md:size-56 rounded-full object-cover ring-4 ring-[hsl(var(--brand)/0.15)] shadow-[var(--shadow-elegant)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container mt-6 flex justify-center">
        <a href="#about" className="text-sm text-muted-foreground story-link">Scroll to learn more</a>
      </div>
    </section>
  );
}
