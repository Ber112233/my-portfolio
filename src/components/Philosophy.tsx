import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section className="py-32 sm:py-40">
      <Container className="max-w-4xl text-center">
        <Reveal>
          <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-4xl">
            <span className="gradient-text">
              No vendo software. No vendo páginas web. No vendo inteligencia
              artificial.
            </span>
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Construyo soluciones tecnológicas que generan resultados
            medibles. La tecnología solamente es la herramienta. El
            verdadero producto es la optimización del negocio.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
