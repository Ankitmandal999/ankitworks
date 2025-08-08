import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = { title: string; summary: string; tags?: string[]; href?: string };

export default function ProjectCard({ title, summary, tags = [], href }: Props) {
  return (
    <Card className="h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{summary}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>
        )}
        {href && (
          <a href={href} target="_blank" rel="noreferrer">
            <Button size="sm" variant="secondary">View Source</Button>
          </a>
        )}
      </CardContent>
    </Card>
  );
}
