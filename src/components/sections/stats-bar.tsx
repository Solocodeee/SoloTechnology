import { Container } from "@/components/ui/container";
import { IconCircle } from "@/components/ui/icon-circle";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { getStats } from "@/data/process";
import { getLocale } from "@/i18n/request";

export function StatsBar() {
  const stats = getStats(getLocale());
  return (
    <section className="bg-surface-50 px-6 lg:px-8">
      <Container className="!px-0">
        <Reveal group className="grid grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-navy-950 px-8 py-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <IconCircle icon={stat.icon} variant="dark" shape="circle" size="lg" />
              <div>
                <p className="text-2xl font-bold text-white" dir="ltr"><CountUp value={stat.value} /></p>
                <p className="text-sm text-ink-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
