import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { getProjects } from "@/data/projects";
import { getLocale } from "@/i18n/request";
import { getMessages } from "@/i18n/messages";

export function FeaturedProjectsSection() {
  const featured = getProjects(getLocale()).filter((p) => p.featured);
  const m = getMessages();
  return (
    <section className="bg-surface-50 py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={m.home.projectsEyebrow} title={m.home.projectsTitle} align="left" className="items-center text-center sm:items-start sm:text-start" />
          <Button href="/projects" variant="link" className="hidden shrink-0 sm:inline-flex">{m.home.projectsLink}</Button>
        </div>
        <Reveal group className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => <ProjectCard key={project.slug} project={project} liveLabel={m.common.viewProjectShort} />)}
        </Reveal>
      </Container>
    </section>
  );
}
