import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getMessages } from "@/i18n/messages";

export default function NotFound() {
  const m = getMessages().notFound;
  return (
    <section className="bg-surface-50 py-24">
      <Container className="flex flex-col items-center gap-4 text-center">
        <p className="text-5xl font-extrabold text-brand-blue-500" dir="ltr">404</p>
        <h1 className="text-3xl font-bold text-ink-900">{m.title}</h1>
        <p className="max-w-md text-ink-500">{m.text}</p>
        <Button href="/" className="mt-2">{m.home}</Button>
      </Container>
    </section>
  );
}
