import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="py-28 sm:py-32">
      <Container>
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-soft/60 to-transparent" />
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              ¿Su empresa todavía depende de procesos manuales?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Descubramos juntos qué tareas pueden automatizarse y cómo la
              Inteligencia Artificial puede ayudar a mejorar la eficiencia de
              su operación.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href={siteConfig.links.email} external showArrow>
                Agendar una consultoría
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
