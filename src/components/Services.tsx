import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="soluciones" className="py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="03" label="Soluciones" />
          <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Cinco frentes, un mismo objetivo: una operación más eficiente.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <div className="glass group h-full rounded-2xl p-7 transition-all duration-300 hover:border-line-strong hover:bg-white/[0.05]">
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent/15">
                  <service.icon className="size-5 text-accent-soft" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 grid gap-2 border-t border-line pt-5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-soft"
                    >
                      <CircleCheck className="mt-0.5 size-3.5 shrink-0 text-accent-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
