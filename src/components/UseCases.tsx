import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { flagshipCases } from "@/lib/content";

export function UseCases() {
  return (
    <section id="casos-de-uso" className="py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="04" label="Casos de uso" />
          <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Soluciones diseñadas para resolver problemas reales de negocio.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5">
          {flagshipCases.map((useCase, i) => (
            <Reveal key={useCase.title} delay={i * 0.06}>
              <div className="glass grid gap-8 rounded-3xl p-8 transition-all duration-300 hover:border-line-strong hover:bg-white/[0.05] sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <span className="font-mono text-sm text-accent-soft">
                    {useCase.number}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {useCase.summary}
                  </p>
                  <p className="mt-5 text-sm font-medium text-accent-cyan">
                    {useCase.benefit}
                  </p>
                </div>

                <div className="flex flex-col justify-center">
                  {"flow" in useCase ? (
                    <ol className="flex flex-col gap-3">
                      {useCase.flow.map((step, stepIndex) => (
                        <li
                          key={step}
                          className="flex items-start gap-3 rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-sm text-muted"
                        >
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[11px] font-medium text-accent-soft">
                            {stepIndex + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {useCase.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 text-sm text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 flex items-center gap-2 text-sm text-muted-soft">
            <ArrowRight className="size-4" />
            Cada caso se adapta al negocio: esto son patrones, no plantillas
            fijas.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
