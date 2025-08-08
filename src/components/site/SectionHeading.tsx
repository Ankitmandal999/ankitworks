import { ReactNode } from "react";

export default function SectionHeading({ kicker, title, intro }: { kicker?: string; title: string; intro?: ReactNode; }) {
  return (
    <header className="container max-w-4xl text-center mb-8">
      {kicker && (
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{kicker}</p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
        {title}
      </h2>
      {intro && (
        <p className="text-muted-foreground text-base md:text-lg">{intro}</p>
      )}
    </header>
  );
}
