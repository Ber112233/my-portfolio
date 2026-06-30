import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="proceso" className="py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="06" label="Proceso de trabajo" />
          <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Así trabajo, paso a paso, para que el cambio no te vuelva loco.
          </h2>
        </Reveal>

        <div className="relative mt-16 max-w-2xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-line sm:left-6" />

          <div className="flex flex-col gap-10">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05}>
                <div className="relative flex gap-6 pl-0">
                  <div className="glass relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full font-mono text-sm text-accent-soft sm:size-12">
                    {step.number}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
