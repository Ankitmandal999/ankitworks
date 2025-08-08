import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = { title: string; summary: string; tags?: string[] };

export default function ProjectCard({ title, summary, tags = [] }: Props) {
  return (
    <Card className="h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{summary}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
