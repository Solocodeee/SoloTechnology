import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

/** `liveLabel` is passed in so the card has no dependency on the language store. */
export function ProjectCard({ project, liveLabel }: { project: Project; liveLabel: string }) {
  return (
    <Card padding="none" className="group flex h-full flex-col overflow-hidden hover:-translate-y-1">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-900">
        {/* Shown behind the screenshot while it loads (or if it can't load). */}
        <span className="absolute inset-0 flex items-center justify-center bg-navy-900 text-sm font-semibold text-ink-300" dir="ltr">{project.host}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <Badge variant="overlay" className="absolute top-4 start-4">{project.category}</Badge>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <CardTitle className="mb-2">{project.title}</CardTitle>
        <CardDescription className="mb-5 flex-1">{project.description}</CardDescription>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "primary", size: "sm" }), "self-start")}
        >
          {liveLabel}
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
}
