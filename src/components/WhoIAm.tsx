import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { approachChecklist } from "@/lib/content";

export function WhoIAm() {
  return (
    <section id="quien-soy" className="py-28 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionLabel index="02" label="Quién soy" />
            <h2 className="mt-6 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Ingeniería en Sistemas, especializado en AWS, IA y
              automatización.
            </h2>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted">
                Soy Bernardo Pérez, con base en Cochabamba, Bolivia. Trabajo
                con empresas que quieren dejar atrás los procesos manuales y
                construir una operación más eficiente con automatización,
                inteligencia artificial y arquitectura cloud sobre AWS.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Antes de proponer una solución técnica, identifico qué es lo
                que realmente está frenando a tu negocio. Mi enfoque parte de
                entender la operación, no de vender tecnología por vender.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 border-t border-line pt-8">
                <p className="text-sm font-medium uppercase tracking-wide text-muted-soft">
                  Mi enfoque
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {approachChecklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-muted"
                    >
                      <CircleCheck className="size-4 shrink-0 text-accent-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
